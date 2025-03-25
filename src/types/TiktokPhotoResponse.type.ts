interface TiktokPhotoResponse {
    extra: Extra;
    itemInfo: ItemInfo;
    log_pb: Logpb;
    shareMeta: ShareMeta;
    statusCode: number;
    status_code: number;
    status_msg: string;
}

interface ShareMeta {
    desc: string;
    title: string;
}

interface Logpb {
    impr_id: string;
}

interface ItemInfo {
    itemStruct: ItemStructPhoto;
}

interface ItemStructPhoto {
    AIGCDescription: string;
    CategoryType: number;
    author: Author;
    authorStats: AuthorStats;
    backendSourceEventTracking: string;
    challenges: Challenge[];
    collected: boolean;
    contents: Content[];
    createTime: number;
    desc: string;
    digged: boolean;
    duetDisplay: number;
    forFriend: boolean;
    id: string;
    imagePost: ImagePost;
    isAd: boolean;
    itemCommentStatus: number;
    item_control: Itemcontrol;
    music: Music;
    officalItem: boolean;
    originalItem: boolean;
    poi: Poi;
    privateItem: boolean;
    secret: boolean;
    shareEnabled: boolean;
    stats: Stats;
    statsV2: StatsV2;
    stitchDisplay: number;
    suggestedWords: string[];
    textExtra: TextExtra[];
    textLanguage: string;
    textTranslatable: boolean;
    titleLanguage: string;
    titleTranslatable: boolean;
    video: Video;
}

interface Video {
    cover: string;
    duration: number;
    height: number;
    id: string;
    originCover: string;
    ratio: string;
    volumeInfo: Tt2dsp;
    width: number;
}

interface StatsV2 {
    collectCount: string;
    commentCount: string;
    diggCount: string;
    playCount: string;
    repostCount: string;
    shareCount: string;
}

interface Stats {
    collectCount: number;
    commentCount: number;
    diggCount: number;
    playCount: number;
    shareCount: number;
}

interface Poi {
    address: string;
    category: string;
    city: string;
    cityCode: string;
    country: string;
    countryCode: string;
    fatherPoiId: string;
    fatherPoiName: string;
    id: string;
    name: string;
    province: string;
    ttTypeCode: string;
    ttTypeNameMedium: string;
    ttTypeNameSuper: string;
    ttTypeNameTiny: string;
    type: number;
    typeCode: string;
}

interface Music {
    authorName: string;
    coverLarge: string;
    coverMedium: string;
    coverThumb: string;
    duration: number;
    id: string;
    isCopyrighted: boolean;
    original: boolean;
    playUrl: string;
    private: boolean;
    title: string;
    tt2dsp: Tt2dsp;
}

interface Tt2dsp {}

interface Itemcontrol {
    can_repost: boolean;
}

interface ImagePost {
    cover: Cover;
    images: Cover[];
    shareCover: Cover;
    title: string;
}

interface Cover {
    imageHeight: number;
    imageURL: ImageURL;
    imageWidth: number;
}

interface ImageURL {
    urlList: string[];
}

interface Content {
    desc: string;
    textExtra?: TextExtra[];
}

interface TextExtra {
    awemeId: string;
    end: number;
    hashtagId: string;
    hashtagName: string;
    isCommerce: boolean;
    start: number;
    subType: number;
    type: number;
}

interface Challenge {
    coverLarger: string;
    coverMedium: string;
    coverThumb: string;
    desc: string;
    id: string;
    profileLarger: string;
    profileMedium: string;
    profileThumb: string;
    title: string;
}

interface AuthorStats {
    diggCount: number;
    followerCount: number;
    followingCount: number;
    friendCount: number;
    heart: number;
    heartCount: number;
    videoCount: number;
}

interface Author {
    avatarLarger: string;
    avatarMedium: string;
    avatarThumb: string;
    commentSetting: number;
    downloadSetting: number;
    duetSetting: number;
    ftc: boolean;
    id: string;
    isADVirtual: boolean;
    isEmbedBanned: boolean;
    nickname: string;
    openFavorite: boolean;
    privateAccount: boolean;
    relation: number;
    secUid: string;
    secret: boolean;
    signature: string;
    stitchSetting: number;
    uniqueId: string;
    verified: boolean;
}

interface Extra {
    fatal_item_ids: any[];
    logid: string;
    now: number;
}
