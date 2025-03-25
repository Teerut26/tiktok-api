export interface TiktokVideoResponse {
    itemInfo: ItemInfo;
    shareMeta: ShareMeta;
    statusCode: number;
    statusMsg: string;
}

export interface ItemInfo {
    itemStruct: ItemStructVideo;
}

export interface ItemStructVideo {
    id: string;
    desc: string;
    createTime: string;
    scheduleTime: number;
    video: Video;
    author: Author;
    music: Music;
    challenges: Challenge[];
    stats: Stats;
    statsV2: StatsV2;
    warnInfo: any[];
    originalItem: boolean;
    officalItem: boolean;
    textExtra: TextExtra[];
    secret: boolean;
    forFriend: boolean;
    digged: boolean;
    itemCommentStatus: number;
    takeDown: number;
    effectStickers: any[];
    authorStats: AuthorStats;
    privateItem: boolean;
    duetEnabled: boolean;
    stitchEnabled: boolean;
    stickersOnItem: any[];
    isAd: boolean;
    shareEnabled: boolean;
    comments: any[];
    duetDisplay: number;
    stitchDisplay: number;
    indexEnabled: boolean;
    diversificationLabels: string[];
    locationCreated: string;
    contentLocation: ContentLocation;
    poi: Poi;
    suggestedWords: string[];
    contents: Content[];
    playlistId: string;
    diversificationId: number;
    collected: boolean;
    channelTags: any[];
    item_control: ItemControl;
    IsAigc: boolean;
    AIGCDescription: string;
    backendSourceEventTracking: string;
    CategoryType: number;
    textLanguage: string;
    textTranslatable: boolean;
}

export interface Video {
    id: string;
    height: number;
    width: number;
    duration: number;
    ratio: string;
    cover: string;
    originCover: string;
    dynamicCover: string;
    playAddr: string;
    downloadAddr: string;
    shareCover: string[];
    reflowCover: string;
    bitrate: number;
    encodedType: string;
    format: string;
    videoQuality: string;
    encodeUserTag: string;
    codecType: string;
    definition: string;
    subtitleInfos: SubtitleInfo[];
    zoomCover: ZoomCover;
    volumeInfo: VolumeInfo;
    bitrateInfo: BitrateInfo[];
    size: string;
    VQScore: string;
    claInfo: ClaInfo;
    videoID: string;
}

export interface SubtitleInfo {
    UrlExpire: string;
    Size: string;
    LanguageID: string;
    LanguageCodeName: string;
    Url: string;
    Format: string;
    Version: string;
    Source: string;
}

export interface ZoomCover {
    "240": string;
    "480": string;
    "720": string;
    "960": string;
}

export interface VolumeInfo {
    Loudness: number;
    Peak: number;
}

export interface BitrateInfo {
    Bitrate: number;
    QualityType: number;
    GearName: string;
    PlayAddr: PlayAddr;
    CodecType: string;
    MVMAF: string;
}

export interface PlayAddr {
    DataSize: string;
    Width: number;
    Height: number;
    Uri: string;
    UrlList: string[];
    UrlKey: string;
    FileHash: string;
    FileCs: string;
}

export interface ClaInfo {
    hasOriginalAudio: boolean;
    enableAutoCaption: boolean;
    originalLanguageInfo: OriginalLanguageInfo;
    captionInfos: CaptionInfo[];
    captionsType: string;
    noCaptionReason: any;
}

export interface OriginalLanguageInfo {
    language: string;
    languageID: string;
    languageCode: string;
    canTranslateRealTimeNoCheck: boolean;
}

export interface CaptionInfo {
    language: string;
    languageID: string;
    url: string;
    expire: string;
    captionFormat: string;
    isAutoGen: boolean;
    subID: string;
    claSubtitleID: string;
    languageCode: string;
    isOriginalCaption: boolean;
    urlList: string[];
    variant: string;
    subtitleType: string;
    translationType: string;
}

export interface Author {
    id: string;
    shortId: string;
    uniqueId: string;
    nickname: string;
    avatarLarger: string;
    avatarMedium: string;
    avatarThumb: string;
    signature: string;
    createTime: number;
    verified: boolean;
    secUid: string;
    ftc: boolean;
    relation: number;
    openFavorite: boolean;
    commentSetting: number;
    duetSetting: number;
    stitchSetting: number;
    privateAccount: boolean;
    secret: boolean;
    isADVirtual: boolean;
    roomId: string;
    uniqueIdModifyTime: number;
    ttSeller: boolean;
    downloadSetting: number;
    recommendReason: string;
    nowInvitationCardUrl: string;
    nickNameModifyTime: number;
    isEmbedBanned: boolean;
    canExpPlaylist: boolean;
    suggestAccountBind: boolean;
}

export interface Music {
    id: string;
    title: string;
    playUrl: string;
    coverLarge: string;
    coverMedium: string;
    coverThumb: string;
    authorName: string;
    original: boolean;
    private: boolean;
    duration: number;
    scheduleSearchTime: number;
    collected: boolean;
    preciseDuration: PreciseDuration;
    isCopyrighted: boolean;
    tt2dsp: Tt2dsp;
}

export interface PreciseDuration {
    preciseDuration: number;
    preciseShootDuration: number;
    preciseAuditionDuration: number;
    preciseVideoDuration: number;
}

export interface Tt2dsp {
    tt_to_dsp_song_infos: any[];
}

export interface Challenge {
    id: string;
    title: string;
    desc: string;
    profileLarger: string;
    profileMedium: string;
    profileThumb: string;
    coverLarger: string;
    coverMedium: string;
    coverThumb: string;
}

export interface Stats {
    diggCount: number;
    shareCount: number;
    commentCount: number;
    playCount: number;
    collectCount: string;
}

export interface StatsV2 {
    diggCount: string;
    shareCount: string;
    commentCount: string;
    playCount: string;
    collectCount: string;
    repostCount: string;
}

export interface TextExtra {
    awemeId: string;
    start: number;
    end: number;
    hashtagId: string;
    hashtagName: string;
    type: number;
    subType: number;
    isCommerce: boolean;
}

export interface AuthorStats {
    followerCount: number;
    followingCount: number;
    heart: number;
    heartCount: number;
    videoCount: number;
    diggCount: number;
    friendCount: number;
}

export interface ContentLocation {
    address: Address;
}

export interface Address {
    addressCountry: string;
    addressLocality: string;
    addressRegion: string;
    streetAddress: string;
}

export interface Poi {
    name: string;
    address: string;
    city: string;
    province: string;
    country: string;
    id: string;
    fatherPoiId: string;
    fatherPoiName: string;
    type: number;
    category: string;
    cityCode: string;
    countryCode: string;
    ttTypeCode: string;
    typeCode: string;
    ttTypeNameTiny: string;
    ttTypeNameMedium: string;
    ttTypeNameSuper: string;
}

export interface Content {
    desc: string;
    textExtra: TextExtra2[];
}

export interface TextExtra2 {
    awemeId: string;
    start: number;
    end: number;
    hashtagId: string;
    hashtagName: string;
    type: number;
    subType: number;
    isCommerce: boolean;
}

export interface ItemControl {
    can_repost: boolean;
}

export interface ShareMeta {
    title: string;
    desc: string;
}
