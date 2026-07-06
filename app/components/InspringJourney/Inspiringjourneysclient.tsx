"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { JOURNEY_TABS, type JourneyTabKey, type NewsItem } from "@/lib/Types/types";
import { articleHref, formatDate, imageSrc, isVideoContent, stripHtml, tabHref } from "@/utils/Utils";
import VideoGallery from "@/app/components/InspringJourney/VideoGallery";

type TabData = Partial<Record<JourneyTabKey, NewsItem[]>>;
type UiTabKey = "all" | JourneyTabKey;

// TODO: point this at your real "all news" listing route if it isn't /news.
const ALL_NEWS_HREF = "/news";

const IconAll = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-3.5 h-3.5">
        <rect x="3.5" y="3.5" width="7" height="7" rx="1" />
        <rect x="13.5" y="3.5" width="7" height="7" rx="1" />
        <rect x="3.5" y="13.5" width="7" height="7" rx="1" />
        <rect x="13.5" y="13.5" width="7" height="7" rx="1" />
    </svg>
);

const IconCalendar = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-3 h-3">
        <rect x="3.5" y="5" width="17" height="15" rx="2" />
        <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    </svg>
);

const IconEye = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-3 h-3">
        <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
        <circle cx="12" cy="12" r="2.6" />
    </svg>
);

const IconArrow = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
        <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
);

const TAB_ICONS: Record<JourneyTabKey, React.ReactNode> = {
    "success-stories": (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-3.5 h-3.5">
            <path d="M8 21h8M12 17v4" />
            <path d="M6 4h12v3a6 6 0 01-12 0V4z" />
            <path d="M6 6H4a3 3 0 003 3M18 6h2a3 3 0 01-3 3" />
        </svg>
    ),
    "career-motivation": (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-3.5 h-3.5">
            <rect x="3" y="7" width="18" height="13" rx="2" />
            <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
            <path d="M3 12h18" />
        </svg>
    ),
    "youth-motivation": (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-3.5 h-3.5">
            <path d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
            <circle cx="12" cy="12" r="3.2" />
        </svg>
    ),
    "community-impact": (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-3.5 h-3.5">
            <circle cx="9" cy="8" r="3" />
            <path d="M2.5 19c1-3.3 3.4-5 6.5-5s5.5 1.7 6.5 5" />
            <circle cx="17.5" cy="9" r="2.3" />
            <path d="M15.5 14.2c2.4.4 4 1.9 4.8 4.8" />
        </svg>
    ),
    "women-empowerment": (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-3.5 h-3.5">
            <circle cx="12" cy="8" r="4" />
            <path d="M12 12v8M9 17h6" />
        </svg>
    ),
};

const PlayBadge = () => (
    <span className="absolute top-2 right-2 inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#0A2E22]/75 text-[#EFE6CE] backdrop-blur-sm border border-[#C9A15A]/40">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5 translate-x-[1px]">
            <path d="M6 4l14 8-14 8V4z" />
        </svg>
    </span>
);

export default function InspiringJourneysClient({ tabData }: { tabData: TabData }) {
    const [activeTab, setActiveTab] = useState<UiTabKey>("all");
    const activeConfig = JOURNEY_TABS.find((t) => t.key === activeTab);

    const allItems = useMemo(() => {
        const merged = Object.values(tabData).flat().filter(Boolean) as NewsItem[];
        const deduped = Array.from(new Map(merged.map((i) => [i.newsId, i])).values());
        return deduped.sort(
            (a, b) => new Date(b.updatedDate).getTime() - new Date(a.updatedDate).getTime(),
        );
    }, [tabData]);

    const items = useMemo(
        () => (activeTab === "all" ? allItems : tabData[activeTab] ?? []),
        [activeTab, allItems, tabData],
    );

    const allVideoItems = useMemo(
        () => allItems.filter((i) => isVideoContent(i)),
        [allItems],
    );

    const [spotlight, ...rest] = items;

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#EFEFE6] via-[#F5F7F2] to-[#F5F7F2]">
            {/* hairline seam continuing the hero's jewel-case edge */}
            <div className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A15A]/40 to-transparent" />
            {/* fine gold foil dot texture, echoes the hero at a lighter touch */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage: "radial-gradient(circle, #0A2E22 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                    maskImage: "radial-gradient(ellipse 65% 45% at 50% 0%, black, transparent)",
                    opacity: 0.035,
                }}
            />
            {/* soft gold glow easing down from the hero's crown light */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(201,161,90,0.10),transparent_65%)]" />

            <div className="relative px-4 sm:px-6 lg:px-8 py-14 sm:py-18 max-w-6xl mx-auto">
            {/* Section eyebrow — editorial masthead treatment with a medallion divider, echoing the hero */}
            <div className="relative text-center mb-10">
                <p className="font-[family-name:var(--font-nunito)] text-[11px] sm:text-xs font-bold tracking-[0.32em] uppercase text-[#8A6531]">
                    Browse by Chapter
                </p>
                <div className="mt-4 flex items-center justify-center gap-3">
                    <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#0A2E22]/25" />
                    <span className="flex items-center justify-center w-7 h-7 rounded-full border border-[#C9A15A]/50 bg-white">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A15A]" />
                    </span>
                    <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#0A2E22]/25" />
                </div>
            </div>

            {/* Tabs (All first, then categories) + Video Gallery action */}
            <div className="relative flex flex-col items-center gap-7 mb-14">
                <div className="flex flex-wrap items-center justify-center gap-2 bg-gradient-to-b from-white to-[#FBF9F1] backdrop-blur-sm border border-[#C9A15A]/25 rounded-full p-2 shadow-[0_10px_30px_rgba(10,46,34,0.08)]">
                    <button
                        onClick={() => setActiveTab("all")}
                        aria-pressed={activeTab === "all"}
                        className={`inline-flex items-center gap-2 rounded-full px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 ${
                            activeTab === "all"
                                ? "bg-gradient-to-b from-[#0F4432] to-[#0A2E22] text-[#EFE6CE] shadow-[0_8px_20px_rgba(10,46,34,0.30)]"
                                : "text-[#3E463F] hover:text-[#0A2E22]"
                        }`}
                    >
                        <span className={activeTab === "all" ? "text-[#D8B872]" : "text-[#8A6531]"}>
                            {IconAll}
                        </span>
                        सभी
                    </button>
                    {JOURNEY_TABS.map((tab) => {
                        const isActive = tab.key === activeTab;
                        return (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                aria-pressed={isActive}
                                className={`inline-flex items-center gap-2 rounded-full px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 ${
                                    isActive
                                        ? "bg-gradient-to-b from-[#0F4432] to-[#0A2E22] text-[#EFE6CE] shadow-[0_8px_20px_rgba(10,46,34,0.30)]"
                                        : "text-[#3E463F] hover:text-[#0A2E22]"
                                }`}
                            >
                                <span className={isActive ? "text-[#D8B872]" : "text-[#8A6531]"}>
                                    {TAB_ICONS[tab.key]}
                                </span>
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                <VideoGallery items={allVideoItems} />
            </div>

            {items.length === 0 ? (
                <div className="relative flex flex-col items-center gap-3 text-center py-20 px-6 rounded-2xl border border-dashed border-[#C9A15A]/40 bg-white/60 backdrop-blur-sm shadow-[0_10px_30px_rgba(10,46,34,0.05)] max-w-md mx-auto">
                    <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#0A2E22]/[0.06] text-[#8A6531]">
                        {IconAll}
                    </span>
                    <p className="text-sm text-[#6B756E]">
                        इस श्रेणी में फिलहाल कोई कहानी उपलब्ध नहीं है।
                    </p>
                </div>
            ) : (
                <div className="relative space-y-7">
                    {/* Spotlight — the top story gets an editorial, magazine-style treatment */}
                    {spotlight && <SpotlightCard item={spotlight} />}

                    {/* Rest of the grid */}
                    {rest.length > 0 && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                            {rest.map((item, i) => (
                                <JourneyCard key={item.newsId} item={item} index={i + 2} />
                            ))}
                        </div>
                    )}

                    <div className="flex justify-center pt-1">
                        <Link
                            href={activeConfig ? tabHref(activeConfig) : ALL_NEWS_HREF}
                            className="inline-flex items-center gap-2 rounded-full border border-[#C9A15A]/40 text-[#0A2E22] bg-white hover:bg-[#0A2E22] hover:text-[#EFE6CE] hover:border-[#0A2E22] px-6 py-2.5 text-xs sm:text-sm font-semibold tracking-wide shadow-[0_4px_16px_rgba(10,46,34,0.06)] hover:shadow-[0_10px_28px_rgba(10,46,34,0.20)] transition-all duration-300"
                        >
                            सभी {activeConfig ? activeConfig.label : "न्यूज़"} देखें
                            <span aria-hidden>→</span>
                        </Link>
                    </div>
                </div>
            )}
            </div>
        </section>
    );
}

function SpotlightCard({ item }: { item: NewsItem }) {
    const src = imageSrc(item);
    return (
        <Link
            href={articleHref(item)}
            className="group relative grid grid-cols-[140px_1fr] sm:grid-cols-[280px_1fr] gap-0 bg-white rounded-2xl overflow-hidden border border-[#C9A15A]/25 shadow-[0_6px_28px_rgba(10,46,34,0.10)] hover:shadow-[0_18px_44px_rgba(10,46,34,0.18)] hover:border-[#C9A15A]/50 transition-all duration-500"
        >
            <div className="relative h-full min-h-[140px] sm:min-h-[190px] bg-gray-100 overflow-hidden">
                {src && (
                    <Image
                        src={src}
                        alt={item.newsHeading}
                        fill
                        unoptimized
                        sizes="(max-width: 640px) 140px, 280px"
                        priority
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                <span className="absolute bottom-2 right-2.5 font-serif italic text-xl text-white/70 drop-shadow-sm select-none">
                    01
                </span>
                {isVideoContent(item) && <PlayBadge />}
            </div>

            {/* gold spine on the seam between image and text — the card's one luxury signature */}
            <div className="relative flex flex-col justify-center p-4 sm:p-6 pl-5 sm:pl-7 border-l-2 border-[#C9A15A]/50">
                <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] text-[#8A6531] uppercase mb-1.5">
                    <span className="text-[#D8B872]">★</span> फीचर्ड स्टोरी
                    <span className="text-[#C9A15A]/50 mx-0.5">•</span>
                    {item.subCatNameInHindi || item.newsSubCategory}
                </span>
                <h3 className="text-base sm:text-xl font-semibold text-[#122E22] leading-snug line-clamp-2 group-hover:text-[#0A2E22] transition-colors">
                    {item.newsHeading}
                </h3>
                <p className="text-xs sm:text-sm text-[#454F49] mt-2 leading-relaxed line-clamp-2">
                    {stripHtml(item.newsDetails, 140)}
                </p>

                <div className="flex items-center justify-between mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-[#0A2E22]/10">
                    <div className="flex items-center gap-3 text-[10.5px] sm:text-[11px] tracking-wide text-[#8B948E]">
                        <span className="inline-flex items-center gap-1">
                            <span className="text-[#C9A15A]">{IconCalendar}</span>
                            {formatDate(item.updatedDate)}
                        </span>
                        <span className="inline-flex items-center gap-1">
                            <span className="text-[#C9A15A]">{IconEye}</span>
                            {item.viewCount?.toLocaleString("hi-IN")}
                        </span>
                    </div>
                    <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-[#0A2E22] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        पढ़ें {IconArrow}
                    </span>
                </div>
            </div>
        </Link>
    );
}

function JourneyCard({ item, index }: { item: NewsItem; index: number }) {
    const src = imageSrc(item);
    const num = String(index).padStart(2, "0");
    return (
        <Link
            href={articleHref(item)}
            className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-[#0A2E22]/10 shadow-[0_3px_16px_rgba(10,46,34,0.06)] hover:shadow-[0_20px_44px_rgba(10,46,34,0.16)] hover:-translate-y-1 hover:border-[#C9A15A]/55 transition-all duration-300 ease-out"
        >
            {/* gold spine — thin top rule that brightens on hover, quiet luxury cue */}
            <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C9A15A]/0 via-[#C9A15A]/60 to-[#C9A15A]/0 group-hover:via-[#C9A15A] transition-all duration-300 z-10" />

            <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                {src && (
                    <Image
                        src={src}
                        alt={item.newsHeading}
                        fill
                        unoptimized
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                <span className="absolute top-2 left-2 inline-flex items-center gap-1 bg-white/85 backdrop-blur-sm text-[#0A2E22] border border-[#C9A15A]/40 text-[9.5px] font-semibold tracking-wide px-2 py-0.5 rounded-full max-w-[85%] truncate">
                    {item.subCatNameInHindi || item.newsSubCategory}
                </span>
                <span className="absolute bottom-1.5 right-2.5 font-serif italic text-lg text-white/70 drop-shadow-sm select-none">
                    {num}
                </span>
                {isVideoContent(item) && <PlayBadge />}
            </div>
            <div className="p-3 sm:p-3.5 flex flex-col flex-1">
                {item.newsTag && (
                    <p className="text-[10px] font-medium text-[#8A6531] mb-1 line-clamp-1">
                        {item.newsTag}
                    </p>
                )}
                <h3 className="text-[13px] sm:text-sm font-semibold text-[#122E22] leading-snug line-clamp-2 group-hover:text-[#0A2E22] transition-colors">
                    {item.newsHeading}
                </h3>
                <div className="flex items-center justify-between mt-auto pt-2.5 border-t border-[#0A2E22]/8">
                    <div className="flex items-center gap-2.5 text-[10px] text-[#8B948E]">
                        <span className="inline-flex items-center gap-1">
                            <span className="text-[#C9A15A]">{IconCalendar}</span>
                            {formatDate(item.updatedDate)}
                        </span>
                        <span className="inline-flex items-center gap-1">
                            <span className="text-[#C9A15A]">{IconEye}</span>
                            {item.viewCount?.toLocaleString("hi-IN")}
                        </span>
                    </div>
                    <span className="text-[#0A2E22] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        {IconArrow}
                    </span>
                </div>
            </div>
        </Link>
    );
}