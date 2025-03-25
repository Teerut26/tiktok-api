import swagger from "@elysiajs/swagger";
import { chromium } from "playwright-core";
import { Elysia, t } from "elysia";
import * as cheerio from "cheerio";
import z from "zod";
import { fetch } from "bun";
import { ItemStructVideo } from "./types/TiktokVideoResponse.type";

const app = new Elysia();

app.use(
    swagger({
        path: "/swagger",
    })
);

app.get("/", async ({ query }) => {

    if (!query.url) {
        return "Please provide a url";
    }

    const responseBody = z.object({
        type: z.string(),
        id: z.string(),
        photo_list: z.array(z.string().url()),
        cover: z.string().url(),
        description: z.string(),
        link: z.string().url(),
        author: z.object({
            id: z.string(),
            username: z.string(),
            nickname: z.string(),
            avatar: z.string(),
        }),
    });

    const url = query.url as string;

    if (url.includes("video")) {
        const res = await fetch(url);
        const $ = cheerio.load(await res.text());
        const data: ItemStructVideo = JSON.parse(
            $('script[id="__UNIVERSAL_DATA_FOR_REHYDRATION__"]').text()
        )["__DEFAULT_SCOPE__"]["webapp.video-detail"]["itemInfo"]["itemStruct"];

        const body = responseBody.parse({
            type: "video",
            id: data.id,
            photo_list: [],
            cover: data.video.cover,
            description: data.desc,
            link: url,
            author: {
                id: data.author.id,
                username: data.author.uniqueId,
                nickname: data.author.nickname,
                avatar: data.author.avatarLarger,
            },
        });

        return body;
    }

    const browser = await chromium.launch({
        args: ["--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage"],
        executablePath:
            process.platform === "win32"
                ? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
                : process.platform === "linux"
                ? "/usr/bin/chromium"
                : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        headless: true,
    });

    const page = await browser.newPage();

    await page.goto(url);

    const dataPromise: Promise<ItemStructPhoto> = new Promise(
        (resolve, reject) => {
            page.on("response", async (response) => {
                if (response.url().includes("item/detail")) {
                    const data: TiktokPhotoResponse = await response.json();
                    resolve(data.itemInfo.itemStruct);
                }
            });
        }
    );

    const data = await dataPromise;

    const body = responseBody.parse({
        type: "photo",
        id: data.id,
        photo_list: data.imagePost.images.map(
            (image) => image.imageURL.urlList[0]
        ),
        cover: data.video.cover,
        description: data.desc,
        link: url,
        author: {
            id: data.author.id,
            username: data.author.uniqueId,
            nickname: data.author.nickname,
            avatar: data.author.avatarLarger,
        },
    });

    await page.close();
    await browser.close();

    return body;
});

app.listen(3000);

console.log(
    `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
