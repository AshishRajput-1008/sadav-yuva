export type NewsItem = {
    newsId: number;
    newsTag: string;
    newsHeading: string;
    newsHeadingTwo: string;
    newsDetails: string;
    newsCategory: string;
    newsSubCategory: string;
    newsSlug: string;
    thumbnail: string;
    // "text" | "image" | "video" | "gif" — drives the play-icon overlay and
    // whether an item shows up in the Video Gallery. If your API uses
    // different values, adjust isVideoContent() in utils/Utils.ts.
    dataType: string;
    // URL of the actual playable video file (mp4/hls) or the animated gif.
    // If your API returns this under a different key (e.g. `mediaUrl`,
    // `videoLink`), rename it here and in imageSrc/videoSrc in Utils.ts.
    videoUrl?: string;
    updatedDate: string;
    catNameInHindi: string;
    subCatNameInHindi: string;
    viewCount: number;
};

export type JourneyTabKey =
    | "success-stories"
    | "career-motivation"
    | "youth-motivation"
    | "community-impact"
    | "women-empowerment";

export type JourneyTabConfig = {
    key: JourneyTabKey;
    label: string;
    labelEn: string;
    apiCategory: string;
    apiSubCategory: string;
};

// Exact category/subcategory strings your API expects (confirmed from your
// curl calls). The last two entries are PLACEHOLDERS — you mentioned 5
// categories total but only gave me 3 confirmed apiCategory/apiSubCategory
// pairs, so I could not know the real strings for the other two. Swap the
// apiCategory/apiSubCategory values below for the real ones and the page
// wires up automatically — everything else (tabs, grid, video gallery)
// already loops over this array.
export const JOURNEY_TABS: JourneyTabConfig[] = [
        {
        key: "career-motivation",
        label: "करियर मोटिवेशन",
        labelEn: "Career Motivation",
        apiCategory: "Motivational Effort",
        apiSubCategory: "Career Motivation",
    },
    {
        key: "success-stories",
        label: "सफलता की कहानियां",
        labelEn: "Success Stories",
        apiCategory: "Motivational Effort",
        apiSubCategory: "Success Stories",
    },

    {
        key: "youth-motivation",
        label: "यूथ मोटिवेशन",
        labelEn: "Youth Motivation",
        apiCategory: "Motivational Effort",
        apiSubCategory: "Youth Motivation",
    },
    {
        key: "community-impact",
        label: "समाज सेवा",
        labelEn: "Community Impact",
        apiCategory: "Motivational Effort", // TODO: confirm real apiCategory
        apiSubCategory: "Community Impact", // TODO: confirm real apiSubCategory
    },
    {
        key: "women-empowerment",
        label: "महिला सशक्तिकरण",
        labelEn: "Women Empowerment",
        apiCategory: "Motivational Effort", // TODO: confirm real apiCategory
        apiSubCategory: "Women Empowerment", // TODO: confirm real apiSubCategory
    },
];