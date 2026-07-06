import { toSlug } from "@/lib/news-api";
import type { JourneyTabConfig, NewsItem } from "@/lib/Types/types";

export const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || "https://mapi.sadaivsatya.com";

export function formatDate(dateStr: string) {
    try {
        return new Date(dateStr).toLocaleDateString("hi-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
    } catch {
        return "";
    }
}

export function stripHtml(html: string, maxLen = 150) {
    const text = html
        .replace(/<[^>]*>/g, " ")
        .replace(/&nbsp;/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    return text.length > maxLen ? text.slice(0, maxLen).trim() + "…" : text;
}

export function imageSrc(item: NewsItem) {
    if (!item.thumbnail) return "";
    return item.thumbnail.startsWith("http")
        ? item.thumbnail
        : `${API_BASE_URL}${item.thumbnail}`;
}

// Resolves the actual playable file for a video/gif item. Falls back to the
// thumbnail for animated gifs, since those are self-playing images.
export function videoSrc(item: NewsItem) {
    if (item.videoUrl) {
        return item.videoUrl.startsWith("http")
            ? item.videoUrl
            : `${API_BASE_URL}${item.videoUrl}`;
    }
    if (isGif(item)) return imageSrc(item);
    return "";
}

export function isGif(item: NewsItem) {
    return (
        item.dataType?.toLowerCase() === "gif" ||
        item.thumbnail?.toLowerCase().endsWith(".gif")
    );
}

export function isVideoContent(item: NewsItem) {
    return item.dataType?.toLowerCase() === "video" || isGif(item);
}

// NOTE: adjust once you confirm your actual article detail route.
// newsSlug already looks like "some-title-10160104.html".
export function articleHref(item: NewsItem) {
    const cleanSlug = item.newsSlug.replace(/\.html$/i, "");
    return `/news/${cleanSlug}`;
}

export function tabHref(tab: JourneyTabConfig) {
    return `/${toSlug(tab.apiCategory)}/${toSlug(tab.apiSubCategory)}`;
}