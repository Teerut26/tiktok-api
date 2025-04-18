FROM oven/bun

WORKDIR /app

COPY package.json .
COPY bun.lock .

RUN apt-get update
RUN apt-get install -y fonts-freefont-ttf chromium
RUN bun install --production

COPY src src
COPY tsconfig.json .

ENV NODE_ENV production
CMD ["bun", "src/index.ts"]

EXPOSE 3000