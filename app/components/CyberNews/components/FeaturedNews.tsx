
"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import sadavSatyaLogo from "@/Assests/images/collab/sadavsatyalogo101.png"
import { Noto_Sans_Devanagari, IBM_Plex_Mono, Nunito_Sans } from "next/font/google";
import {
    LayoutGrid,
    ShieldAlert,
    Landmark,
    Gavel,
    Bitcoin,
    GraduationCap,
    Eye,
    ShieldCheck,
    ArrowRight,
    RotateCw,
} from "lucide-react";
import { toSlug } from "@/lib/news-api";

const notoSansDevanagari = Noto_Sans_Devanagari({
    subsets: ["devanagari", "latin"],
    weight: ["400", "500", "600", "700", "800"],
    display: "swap",
});

const plexMono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    display: "swap",
});

// Clean, high-legibility sans reserved for English copy in this section
// (eyebrow line, credential line) — Devanagari text stays in Noto Sans
// Devanagari throughout, including inside the news cards, which this
// swap does not touch.
const nunitoSans = Nunito_Sans({
    subsets: ["latin"],
    weight: ["500", "600", "700", "800"],
    display: "swap",
});

const API_BASE_URL = "https://mapi.sadaivsatya.com";
const CATEGORY = "Cyber Duniya";
const PAGE_SIZE = 8;

// ---------- Types ----------

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
    dataType: string;
    updatedDate: string;
    catNameInHindi: string;
    subCatNameInHindi: string;
    viewCount: number;
};

type IconKey = "all" | "cyberCrime" | "fraud" | "arrest" | "crypto" | "workshop";

type CyberTab = {
    key: string; // used as React key + URL-safe id
    label: string; // Hindi label shown on the folder tab
    icon: IconKey;
    apiSubCategory: string | null; // null => "All" tab (fan-out across all subcats)
};

// ---------- Config ----------
// Category is fixed to "Cyber Duniya". Each tab maps to one confirmed
// subcategory. "All" has no dedicated endpoint from you yet, so it fetches
// all 5 subcategories in parallel and merges/sorts them client-side.
// If a single "getnews-bycategory/Cyber%20Duniya" (no subcat) endpoint
// exists on the backend, swap fetchAllTabNews() below to call that instead
// — it'll be faster than 5 parallel calls.
const CYBER_TABS: CyberTab[] = [
    { key: "all", label: "सभी फाइलें", icon: "all", apiSubCategory: null },
    { key: "cyber-crimes", label: "साइबर अपराध", icon: "cyberCrime", apiSubCategory: "Cyber Crimes" },
    { key: "online-fraud", label: "ऑनलाइन फ्रॉड", icon: "fraud", apiSubCategory: "Online Fraud" },
    { key: "digital-arrest", label: "डिजिटल अरेस्ट", icon: "arrest", apiSubCategory: "Digital Arrest" },
    { key: "crypto-gaming-scams", label: "क्रिप्टो व गेमिंग स्कैम", icon: "crypto", apiSubCategory: "Crypto and Gaming Scams" },
    { key: "awareness-workshop", label: "जागरूकता कार्यशाला", icon: "workshop", apiSubCategory: "Awareness Workshop" },
];

// ---------- Category color system ----------
// Every category reads as a distinct jewel tone in the dossier — the tab
// underline, the wax-stamp ring, the foil corner and the read-more link
// all inherit the same hue, so the color itself tells the reader what
// kind of case this is before they read a word. Tones are deepened from
// a museum/legal-archive palette (gold, oxblood, sapphire, amethyst,
// verdigris) rather than flat brand colors, to read as premium.
type CategoryStyle = {
    tabActive: string; // text/underline color on the active dossier tab
    tabIcon: string; // icon tint on an inactive tab
    stampRing: string; // border/ring color of the case-number stamp
    stampText: string;
    ribbon: string; // category ribbon on the evidence photo
    chipBg: string;
    chipText: string;
    linkText: string;
    accentBar: string; // thin top seam gradient
    photoMount: string; // tint behind the "evidence photo"
    foil: string; // foil corner-fold gradient on the card
};

const CATEGORY_STYLES: Record<string, CategoryStyle> = {
    all: {
        tabActive: "text-[#9C7A3D]",
        tabIcon: "text-[#9C7A3D]",
        stampRing: "border-[#8F7230]/60",
        stampText: "text-[#8F7230]",
        ribbon: "bg-[#8F7230]",
        chipBg: "bg-[#C9A24E]/12",
        chipText: "text-[#6B5323]",
        linkText: "text-[#6B5323] hover:text-[#4d3c18]",
        accentBar: "from-[#E4C170] via-[#C9A24E] to-[#8F7230]",
        photoMount: "from-[#C9A24E]/25 to-[#C9A24E]/5",
        foil: "from-[#E4C170] via-[#C9A24E] to-[#8F7230]",
    },
    "cyber-crimes": {
        tabActive: "text-[#8C2A3A]",
        tabIcon: "text-[#8C2A3A]",
        stampRing: "border-[#8C2A3A]/60",
        stampText: "text-[#8C2A3A]",
        ribbon: "bg-[#8C2A3A]",
        chipBg: "bg-[#8C2A3A]/12",
        chipText: "text-[#6B1F2A]",
        linkText: "text-[#8C2A3A] hover:text-[#6B1F2A]",
        accentBar: "from-[#B24450] via-[#8C2A3A] to-[#5C1B24]",
        photoMount: "from-[#8C2A3A]/25 to-[#8C2A3A]/5",
        foil: "from-[#B24450] via-[#8C2A3A] to-[#5C1B24]",
    },
    "online-fraud": {
        tabActive: "text-[#8f6a2e]",
        tabIcon: "text-[#8f6a2e]",
        stampRing: "border-[#B8863E]/60",
        stampText: "text-[#8f6a2e]",
        ribbon: "bg-[#B8863E]",
        chipBg: "bg-[#B8863E]/14",
        chipText: "text-[#8f6a2e]",
        linkText: "text-[#8f6a2e] hover:text-[#6e5223]",
        accentBar: "from-[#D5A557] via-[#B8863E] to-[#8f6a2e]",
        photoMount: "from-[#B8863E]/25 to-[#B8863E]/5",
        foil: "from-[#D5A557] via-[#B8863E] to-[#8f6a2e]",
    },
    "digital-arrest": {
        tabActive: "text-[#2E3A5C]",
        tabIcon: "text-[#2E3A5C]",
        stampRing: "border-[#2E3A5C]/60",
        stampText: "text-[#2E3A5C]",
        ribbon: "bg-[#2E3A5C]",
        chipBg: "bg-[#2E3A5C]/12",
        chipText: "text-[#20293F]",
        linkText: "text-[#2E3A5C] hover:text-[#20293F]",
        accentBar: "from-[#47588A] via-[#2E3A5C] to-[#1B2338]",
        photoMount: "from-[#2E3A5C]/25 to-[#2E3A5C]/5",
        foil: "from-[#47588A] via-[#2E3A5C] to-[#1B2338]",
    },
    "crypto-gaming-scams": {
        tabActive: "text-[#5B3B8C]",
        tabIcon: "text-[#5B3B8C]",
        stampRing: "border-[#5B3B8C]/60",
        stampText: "text-[#5B3B8C]",
        ribbon: "bg-[#5B3B8C]",
        chipBg: "bg-[#5B3B8C]/12",
        chipText: "text-[#412A65]",
        linkText: "text-[#5B3B8C] hover:text-[#412A65]",
        accentBar: "from-[#7C5FB0] via-[#5B3B8C] to-[#3B2764]",
        photoMount: "from-[#5B3B8C]/25 to-[#5B3B8C]/5",
        foil: "from-[#7C5FB0] via-[#5B3B8C] to-[#3B2764]",
    },
    "awareness-workshop": {
        tabActive: "text-[#1F5C4F]",
        tabIcon: "text-[#1F5C4F]",
        stampRing: "border-[#1F5C4F]/60",
        stampText: "text-[#1F5C4F]",
        ribbon: "bg-[#1F5C4F]",
        chipBg: "bg-[#1F5C4F]/12",
        chipText: "text-[#163F37]",
        linkText: "text-[#1F5C4F] hover:text-[#163F37]",
        accentBar: "from-[#3B8875] via-[#1F5C4F] to-[#123832]",
        photoMount: "from-[#1F5C4F]/25 to-[#1F5C4F]/5",
        foil: "from-[#3B8875] via-[#1F5C4F] to-[#123832]",
    },
};

const SUBCAT_TO_KEY: Record<string, string> = CYBER_TABS.reduce(
    (acc, tab) => {
        if (tab.apiSubCategory) acc[tab.apiSubCategory] = tab.key;
        return acc;
    },
    {} as Record<string, string>,
);

function styleForSubCategory(subCategory: string): CategoryStyle {
    const key = SUBCAT_TO_KEY[subCategory];
    return CATEGORY_STYLES[key] ?? CATEGORY_STYLES.all;
}

function iconForSubCategory(subCategory: string): IconKey {
    const key = SUBCAT_TO_KEY[subCategory];
    return CYBER_TABS.find((t) => t.key === key)?.icon ?? "cyberCrime";
}

// ---------- Fetch helpers ----------

function buildSubCategoryUrl(subCategory: string, page = 1, pageSize = PAGE_SIZE) {
    return `${API_BASE_URL}/api/AdminApi/getnews-bycategoryandsubcat/${encodeURIComponent(
        CATEGORY,
    )}/${encodeURIComponent(subCategory)}?page=${page}&pageSize=${pageSize}`;
}

// Normalizes whatever shape the API returns (raw array, { data: [...] },
// or { result: [...] }) into a plain NewsItem[].
function normalizeNewsResponse(json: unknown): NewsItem[] {
    if (Array.isArray(json)) return json as NewsItem[];
    if (json && typeof json === "object") {
        const obj = json as Record<string, unknown>;
        if (Array.isArray(obj.data)) return obj.data as NewsItem[];
        if (Array.isArray(obj.result)) return obj.result as NewsItem[];
    }
    return [];
}

async function fetchSubCategoryNews(subCategory: string): Promise<NewsItem[]> {
    const res = await fetch(buildSubCategoryUrl(subCategory));
    if (res.status === 404) {
        // The API 404s for subcategories with no published articles yet (confirmed for
        // "Crypto and Gaming Scams" / "Awareness Workshop" as of this build) — treat that
        // as "nothing here yet," not a hard failure, so the UI shows the friendly empty
        // state instead of an alarming error message.
        return [];
    }
    if (!res.ok) {
        throw new Error(`Failed to fetch "${subCategory}" news: ${res.status}`);
    }
    return normalizeNewsResponse(await res.json());
}

// Fan-out across all confirmed subcategories, merge, sort by newest,
// then trim to PAGE_SIZE so the "All" tab reads like a real feed.
async function fetchAllTabNews(): Promise<NewsItem[]> {
    const subCats = CYBER_TABS.filter((t) => t.apiSubCategory).map(
        (t) => t.apiSubCategory as string,
    );

    const results = await Promise.allSettled(subCats.map(fetchSubCategoryNews));

    const merged = results
        .filter((r): r is PromiseFulfilledResult<NewsItem[]> => r.status === "fulfilled")
        .flatMap((r) => r.value);

    // De-dupe in case an article is tagged into more than one subcategory
    const seen = new Set<number>();
    const deduped = merged.filter((item) => {
        if (seen.has(item.newsId)) return false;
        seen.add(item.newsId);
        return true;
    });

    deduped.sort(
        (a, b) => new Date(b.updatedDate).getTime() - new Date(a.updatedDate).getTime(),
    );

    return deduped.slice(0, PAGE_SIZE);
}

// ---------- Helpers ----------

function formatDate(dateStr: string) {
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

// Case-file style reference number, derived from the real news id so it's
// stable and unique, not decorative random digits.
function caseNumber(newsId: number) {
    const year = new Date().getFullYear();
    return `CASE #${year}-${String(newsId).padStart(4, "0")}`;
}

function articleHref(item: NewsItem) {
    const cleanSlug = item.newsSlug.replace(/\.html$/i, "");
    return `/news/${cleanSlug}`;
}

function subCategoryHref(tab: CyberTab) {
    if (!tab.apiSubCategory) return `/${toSlug(CATEGORY)}`;
    return `/${toSlug(CATEGORY)}/${toSlug(tab.apiSubCategory)}`;
}

// ---------- Icons ----------

function TabIcon({ icon, className }: { icon: IconKey; className?: string }) {
    const props = { className, strokeWidth: 1.8 };
    switch (icon) {
        case "all":
            return <LayoutGrid {...props} />;
        case "cyberCrime":
            return <ShieldAlert {...props} />;
        case "fraud":
            return <Landmark {...props} />;
        case "arrest":
            return <Gavel {...props} />;
        case "crypto":
            return <Bitcoin {...props} />;
        case "workshop":
            return <GraduationCap {...props} />;
        default:
            return null;
    }
}

// ---------- Main component ----------

export default function FeaturedCyberNews() {
    const [activeTab, setActiveTab] = useState(CYBER_TABS[0].key);
    const [newsByTab, setNewsByTab] = useState<Record<string, NewsItem[]>>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const tabsScrollRef = useRef<HTMLDivElement | null>(null);
    const [showLeftFade, setShowLeftFade] = useState(false);
    const [showRightFade, setShowRightFade] = useState(false);

    const activeConfig = CYBER_TABS.find((t) => t.key === activeTab) ?? CYBER_TABS[0];
    const activeStyle = CATEGORY_STYLES[activeTab] ?? CATEGORY_STYLES.all;

    const loadTab = useCallback(async (tab: CyberTab) => {
        setLoading(true);
        setError(false);
        try {
            const data = tab.apiSubCategory
                ? await fetchSubCategoryNews(tab.apiSubCategory)
                : await fetchAllTabNews();
            setNewsByTab((prev) => ({ ...prev, [tab.key]: data }));
        } catch (e) {
            console.error("Error loading cyber news tab:", tab.key, e);
            setError(true);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (!newsByTab[activeTab]) {
            loadTab(activeConfig);
        } else {
            setLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTab]);

    // Track horizontal scroll position of the folder-tab strip to fade the
    // edges in/out — signals "there's more, scroll me" on mobile.
    const updateFade = useCallback(() => {
        const el = tabsScrollRef.current;
        if (!el) return;
        setShowLeftFade(el.scrollLeft > 4);
        setShowRightFade(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    }, []);

    useEffect(() => {
        updateFade();
        const el = tabsScrollRef.current;
        if (!el) return;
        el.addEventListener("scroll", updateFade, { passive: true });
        window.addEventListener("resize", updateFade);
        return () => {
            el.removeEventListener("scroll", updateFade);
            window.removeEventListener("resize", updateFade);
        };
    }, [updateFade]);

    const activeNews = newsByTab[activeTab] || [];

    return (
        <section
            className={`${notoSansDevanagari.className} relative w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12`}
        >
            {/* ---------- Archive-room backdrop ---------- */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10"
                style={{ background: "#F1E9D2" }}
            />

            {/* ---------- Frame ---------- */}
            <div className="relative mx-auto max-w-[1400px]">
                <div className="relative rounded-[22px] overflow-hidden shadow-[0_36px_90px_-30px_rgba(120,96,50,0.35)] ring-1 ring-[#C9A24E]/25">
                    {/* ---------- Ivory masthead: the sealed letterhead, in a
                        light palette — cream ground, bronzed gold rule work,
                        espresso-ink type. Reads as fine stationery rather
                        than a screen. ---------- */}
                    <div
                        className="relative overflow-hidden px-5 sm:px-9 pt-9 pb-11"
                        style={{
                            background:
                                "radial-gradient(85% 120% at 88% -10%, #FBF0D8 0%, transparent 55%), radial-gradient(120% 140% at 8% 0%, #FFFDF8 0%, #F8F1DF 45%, #EFE3C4 100%)",
                        }}
                    >
                        {/* soft directional sheen — a single diagonal band of
                            light, the way a raking light catches embossed
                            stationery */}
                        <div
                            aria-hidden
                            className="pointer-events-none absolute inset-0 opacity-[0.55] mix-blend-overlay"
                            style={{
                                backgroundImage:
                                    "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.8) 46%, transparent 62%)",
                            }}
                        />

                        {/* fine engraved grid, receding toward the seal */}
                        <div
                            aria-hidden
                            className="pointer-events-none absolute inset-0 opacity-[0.1]"
                            style={{
                                backgroundImage:
                                    "linear-gradient(rgba(156,122,61,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(156,122,61,0.6) 1px, transparent 1px)",
                                backgroundSize: "34px 34px",
                                maskImage:
                                    "radial-gradient(ellipse 70% 65% at 18% 20%, black 15%, transparent 70%)",
                                WebkitMaskImage:
                                    "radial-gradient(ellipse 70% 65% at 18% 20%, black 15%, transparent 70%)",
                            }}
                        />

                        {/* guilloché halo — concentric security-print rings
                            radiating FROM the seal, so the ornament and the
                            medallion read as one engraved fixture instead of
                            two unrelated decorations */}
                        <div
                            aria-hidden
                            className="pointer-events-none absolute top-[-70px] right-[-70px] sm:right-[-40px] w-[360px] h-[360px] opacity-[0.55]"
                            style={{
                                backgroundImage:
                                    "repeating-radial-gradient(circle at center, rgba(156,122,61,0.7) 0px, rgba(156,122,61,0.7) 1px, transparent 1px, transparent 10px)",
                                maskImage:
                                    "radial-gradient(circle at center, black 38%, transparent 72%)",
                                WebkitMaskImage:
                                    "radial-gradient(circle at center, black 38%, transparent 72%)",
                            }}
                        />

                        {/* double gold seam — the letterhead's restrained luxury
                            signature, a hairline pair rather than a single rule */}
                        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#9C7A3D]/70 to-transparent" />
                        <div className="pointer-events-none absolute top-[3px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#9C7A3D]/25 to-transparent" />

                        {/* corner brackets — the notarised-certificate cue,
                            spent in exactly two places so it stays a mark
                            rather than a border */}
                        <div className="pointer-events-none absolute top-4 left-4 w-5 h-5 border-t-[1.5px] border-l-[1.5px] border-[#9C7A3D]/45 rounded-tl-[3px]" />
                        <div className="pointer-events-none absolute bottom-4 left-4 w-5 h-5 border-b-[1.5px] border-l-[1.5px] border-[#9C7A3D]/30 rounded-bl-[3px]" />

                        {/* rotated wax-seal medallion, haloed by its own
                            guilloché rings above, with a soft gold glow
                            underneath and a slow shimmer sweep across it */}
                        <div
                            aria-hidden
                            className="pointer-events-none absolute -top-2 right-4 sm:right-10 w-[124px] h-[124px] sm:w-[136px] sm:h-[136px] rounded-full blur-xl opacity-40"
                            style={{ background: "radial-gradient(circle, #D9AE63 0%, transparent 70%)" }}
                        />
                        <div
                            aria-hidden
                            className="seal-shimmer pointer-events-none absolute -top-2 right-4 sm:right-10 w-[120px] h-[120px] sm:w-[132px] sm:h-[132px] overflow-hidden rounded-full"
                        >
                            <div className="relative w-full h-full rounded-full border border-[#9C7A3D]/60 flex items-center justify-center shadow-[0_10px_24px_-8px_rgba(120,96,50,0.35)]">
                                <div className="absolute inset-[5px] rounded-full border border-dashed border-[#9C7A3D]/40" />
                                <div className="absolute inset-[11px] rounded-full border border-[#9C7A3D]/25" />
                                <div className="relative w-[70%] h-[70%] rounded-full overflow-hidden bg-gradient-to-b from-[#FFFDF8] to-[#EFE0BC] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),inset_0_-6px_10px_-6px_rgba(156,122,61,0.25)]">
                                    {/* TODO: point this at your actual logo file —
                                        e.g. put it in /public/images/ and use
                                        src="/images/sadaiv-satya-logo.png", or
                                        swap in the hosted URL you use elsewhere.
                                        object-cover fills the whole circle edge
                                        to edge, coin-face style, per your note. */}
                                    <Image
                                        src={sadavSatyaLogo}
                                        alt="Sadaiv Satya"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* eyebrow — a small ribbon badge rather than plain
                            caption text, with the live cue in a deeper red
                            so it reads as status, not decoration */}
                        <div className="relative inline-flex items-center gap-2 mb-6 rounded-full border border-[#9C7A3D]/30 bg-white/50 pl-2.5 pr-3.5 py-[5px] shadow-[0_1px_2px_rgba(120,96,50,0.08)]">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="motion-reduce:animate-none animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A63A38] opacity-50" />
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#A63A38]" />
                            </span>
                            <span className={`${nunitoSans.className} uppercase text-[10.5px] font-bold tracking-[0.15em] text-[#8A6A2E]`}>
                                Public Safety Advisory
                            </span>
                            <span className="w-px h-3 bg-[#9C7A3D]/30" />
                         <span
  className={`${nunitoSans.className} hidden md:block uppercase text-[10.5px] font-bold tracking-[0.15em] text-[#A63A38]`}
>
  Live Filing
</span>
                        </div>

                        <div className="relative max-w-lg">
                            <div className="flex items-start gap-3">
                                <span className="mt-3 h-2 w-2 flex-shrink-0 rotate-45 border border-[#9C7A3D]/60" />
                                <h2
                                    className="text-[29px] sm:text-[39px] font-extrabold text-[#241C10] tracking-tight leading-[1.15]"
                                    style={{ textShadow: "0 1px 0 rgba(255,255,255,0.6)" }}
                                >
                                    साइबर सुरक्षा डेस्क
                                </h2>
                            </div>
                            <div className="mt-3 ml-5 flex items-center gap-3">
                                <span className="h-px w-8 bg-gradient-to-r from-[#9C7A3D]/70 to-transparent" />
                                <p className="text-[13.5px] text-[#5B5340] font-medium leading-relaxed">
                                    हर मामले की फाइल, सत्यापित तथ्यों के साथ — अपराध से सुरक्षा तक
                                </p>
                            </div>
                        </div>

                        {/* letterhead credential line, set in Nunito Sans for the
                            same reason a certificate's fine print is set in a
                            different, quieter face than its headline */}
                        <div className="relative flex items-center gap-2.5 mt-7 pt-5 border-t border-[#9C7A3D]/20">
                            <ShieldCheck className="w-4 h-4 text-[#8A6A2E] flex-shrink-0" strokeWidth={1.8} />
                            <p className={`${nunitoSans.className} text-[12px] font-medium text-[#5B5340]/85 tracking-wide`}>
                                Sadaiv Satya Broadcasting Pvt. Ltd. द्वारा संचालित
                            </p>
                        </div>

                        <style jsx>{`
                            .seal-shimmer::after {
                                content: "";
                                position: absolute;
                                inset: -30%;
                                background: linear-gradient(
                                    102deg,
                                    transparent 42%,
                                    rgba(255, 255, 255, 0.65) 50%,
                                    transparent 58%
                                );
                                animation: sealShimmer 6s ease-in-out infinite;
                            }
                            @keyframes sealShimmer {
                                0% {
                                    transform: translateX(-140%);
                                }
                                45%,
                                100% {
                                    transform: translateX(140%);
                                }
                            }
                            @media (prefers-reduced-motion: reduce) {
                                .seal-shimmer::after {
                                    animation: none;
                                }
                            }
                        `}</style>
                    </div>

                    {/* ---------- Dossier tabs — a recessed ledger-tab groove,
                        each category its own soft-tinted chip rather than
                        plain text in a row ---------- */}
                    <div
                        className="relative bg-[#F3EACE] border-t border-[#9C7A3D]/20 shadow-[inset_0_4px_10px_-6px_rgba(120,96,50,0.2)]"
                    >
                        {showLeftFade && (
                            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-[#F3EACE] to-transparent z-10" />
                        )}
                        {showRightFade && (
                            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-[#F3EACE] to-transparent z-10" />
                        )}
                        <div
                            ref={tabsScrollRef}
                            className="flex items-center gap-2 overflow-x-auto px-4 sm:px-8 py-3"
                            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                        >
                            {CYBER_TABS.map((tab) => {
                                const isActive = activeTab === tab.key;
                                const tabStyle = CATEGORY_STYLES[tab.key] ?? CATEGORY_STYLES.all;
                                return (
                                    <button
                                        key={tab.key}
                                        onClick={() => setActiveTab(tab.key)}
                                        aria-pressed={isActive}
                                        className={`group relative flex items-center gap-2 whitespace-nowrap flex-shrink-0 rounded-full px-4 py-2.5 text-[12.5px] font-bold tracking-tight transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9C7A3D] ${
                                            isActive
                                                ? `${tabStyle.chipBg} ${tabStyle.tabActive} shadow-[0_2px_6px_-2px_rgba(120,96,50,0.25)] ring-1 ${tabStyle.stampRing}`
                                                : "text-[#8C8368] hover:bg-white/60 hover:text-[#241C10]"
                                        }`}
                                    >
                                        <TabIcon
                                            icon={tab.icon}
                                            className={`w-3.5 h-3.5 flex-shrink-0 transition-colors ${
                                                isActive ? tabStyle.tabActive : "text-[#B9AE8C] group-hover:text-[#8A6A2E]"
                                            }`}
                                        />
                                        {tab.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* ---------- Body — the parchment case-file leaf ---------- */}
                    <div
                        className="relative px-5 sm:px-8 py-8"
                        style={{ background: "#F2E9D4" }}
                    >
                        {/* faint fibrous paper texture */}
                        <div
                            aria-hidden
                            className="pointer-events-none absolute inset-0 opacity-[0.5]"
                            style={{
                                backgroundImage:
                                    "radial-gradient(rgba(107,83,35,0.10) 1px, transparent 1px)",
                                backgroundSize: "16px 16px",
                            }}
                        />

                        <div className="relative">
                            {loading && <NewsGridSkeleton />}

                            {!loading && error && (
                                <div className={`${plexMono.className} text-center py-12 text-[12.5px] text-[#6B5323]`}>
                                    फाइल लोड नहीं हो सकी — रिकॉर्ड तक पहुंच में समस्या।
                                    <button
                                        onClick={() => loadTab(activeConfig)}
                                        className="ml-2 inline-flex items-center gap-1 font-semibold underline text-[#8C2A3A] hover:text-[#6B1F2A]"
                                    >
                                        <RotateCw className="w-3 h-3" /> पुनः प्रयास करें
                                    </button>
                                </div>
                            )}

                            {!loading && !error && activeNews.length === 0 && (
                                <div className="flex flex-col items-center justify-center gap-3 py-14 text-center">
                                    <div className="w-11 h-11 rounded-full border border-dashed border-[#6B5323]/40 flex items-center justify-center">
                                        <TabIcon icon={activeConfig.icon} className="w-5 h-5 text-[#6B5323]/50" />
                                    </div>
                                    <p className="text-[13px] text-[#6B5323]/70 font-medium">
                                        इस श्रेणी की फाइल फिलहाल खाली है — जल्द अपडेट होगी।
                                    </p>
                                </div>
                            )}

                            {!loading && !error && activeNews.length > 0 && (
                                <>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 pt-3">
                                        {activeNews.map((item) => (
                                            <NewsCard key={item.newsId} item={item} />
                                        ))}
                                    </div>

                                    <div className="flex justify-end mt-8">
                                        <Link
                                            href={subCategoryHref(activeConfig)}
                                            className={`inline-flex items-center gap-1.5 text-xs font-bold tracking-tight transition-all hover:gap-2 ${activeStyle.linkText}`}
                                        >
                                            पूरी {activeConfig.label} फाइल देखें
                                            <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.2} />
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ---------- Sub-components ----------

function NewsCard({ item }: { item: NewsItem }) {
    const [imgFailed, setImgFailed] = useState(false);
    const hasThumbnail = Boolean(item.thumbnail && item.thumbnail.trim().length > 0);
    const imgSrc = hasThumbnail
        ? item.thumbnail.startsWith("http")
            ? item.thumbnail
            : `${API_BASE_URL}${item.thumbnail}`
        : "";
    const showImage = hasThumbnail && !imgFailed;
    const style = styleForSubCategory(item.newsSubCategory);
    const fallbackIcon = iconForSubCategory(item.newsSubCategory);

    return (
        <Link
            href={articleHref(item)}
            className="group relative block pt-4"
        >
            {/* This wrapper carries the same lift/shadow/color treatment the
                card previously only showed on hover — it's now the resting
                state, so every card in the grid reads as "open," not just
                the one under the cursor. */}
            <div className="relative -translate-y-1.5">
                {/* brass eyelets, straddling the top border — a binder detail
                    in metal rather than paper, reading as an archival dossier
                    page. Positioned at top:0 with a -50% translate so the
                    dot's center always sits exactly on the border line. */}
                <div className="pointer-events-none absolute top-0 left-0 right-0 flex justify-center gap-10 z-20">
                    <span className="w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#E4C170] to-[#8F7230] shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),0_1px_2px_rgba(0,0,0,0.3)]" />
                    <span className="w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#E4C170] to-[#8F7230] shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),0_1px_2px_rgba(0,0,0,0.3)]" />
                </div>

                <div className="relative flex h-full flex-col overflow-hidden rounded-[14px] bg-[#FBF8F1] shadow-[0_26px_50px_-18px_rgba(30,22,8,0.45)] ring-1 ring-[#C9A24E]/40">
                    {/* folded foil corner — the signature flourish that marks
                        every case file as individually sealed and catalogued */}
                    <div
                        className={`pointer-events-none absolute top-0 right-0 w-9 h-9 z-[2] bg-gradient-to-br ${style.foil} opacity-90`}
                        style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                    />
                    <div
                        className="pointer-events-none absolute top-[3px] right-[3px] w-[9px] h-[9px] z-[2] bg-black/10"
                        style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                    />

                    <div className={`h-[3px] w-full bg-gradient-to-r ${style.accentBar}`} />

                {/* evidence photo — mounted with a white polaroid border and a
                    slight candid tilt, desaturated until the case is "opened"
                    on hover */}
                <div className={`relative px-4 pt-4 pb-2 bg-gradient-to-b ${style.photoMount}`}>
                    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-md bg-[#e8e2d2] rotate-[-0.6deg] shadow-[0_5px_12px_-4px_rgba(0,0,0,0.28)] ring-4 ring-white">
                        {showImage ? (
                            <Image
                                src={imgSrc}
                                alt={item.newsHeading}
                                fill
                                unoptimized
                                sizes="(max-width: 768px) 50vw, 25vw"
                                className="object-cover contrast-[1.03] scale-[1.08]"
                                onError={() => setImgFailed(true)}
                            />
                        ) : (
                            <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${style.accentBar}`}>
                                <TabIcon icon={fallbackIcon} className="w-10 h-10 text-white/70" />
                            </div>
                        )}
                        {/* category ribbon tag pinned to the photo corner */}
                        <span
                            className={`absolute top-2 left-2 inline-flex items-center rounded-sm px-1.5 py-0.5 ${style.ribbon} shadow-sm`}
                        >
                            <span className={`${plexMono.className} text-[8.5px] font-semibold text-white uppercase tracking-wide`}>
                                {item.subCatNameInHindi || item.newsSubCategory}
                            </span>
                        </span>
                    </div>

                    {/* case-number stamp, tucked at the photo's edge like a
                        real archive reference tag */}
                    <div className="flex justify-end -mt-2.5 mr-1 relative z-[1]">
                        <span
                            className={`${plexMono.className} inline-block rotate-[-2deg] rounded-sm border bg-[#FBF8F1] px-1.5 py-0.5 text-[8.5px] font-medium tracking-wide ${style.stampRing} ${style.stampText}`}
                        >
                            {caseNumber(item.newsId)}
                        </span>
                    </div>
                </div>

                {/* case notes */}
                <div className="relative flex flex-1 flex-col px-4 pb-4 pt-1.5">
                    <h3 className="text-[15px] font-bold text-[#4a3f27] leading-[1.5] line-clamp-2">
                        {item.newsHeading}
                    </h3>
                    {item.newsHeadingTwo && (
                        <p className="text-xs text-[#6B5F49] mt-1.5 leading-relaxed line-clamp-1">
                            {item.newsHeadingTwo}
                        </p>
                    )}

                    <div className="flex-1" />

                    {/* brass tear-rule footer, like a ticket stub's foil edge */}
                    <div
                        className="flex items-center justify-between mt-4 pt-3"
                        style={{ borderTop: "1.5px dashed rgba(143,114,48,0.35)" }}
                    >
                        <span className={`${plexMono.className} flex items-center gap-1 text-[10px] text-[#6B5F49]/70 tracking-tight`}>
                            <Eye className="w-3 h-3" strokeWidth={1.8} />
                            {item.viewCount?.toLocaleString("hi-IN")}
                        </span>
                        <span className={`${plexMono.className} text-[9px] text-[#6B5F49]/60 tracking-wide`}>
                            {formatDate(item.updatedDate)}
                        </span>
                        <span
                            className={`flex items-center gap-1.5 text-[11px] font-bold ${style.linkText}`}
                        >
                            पढ़ें
                            <ArrowRight className="w-3 h-3 translate-x-0.5" strokeWidth={2.2} />
                        </span>
                    </div>
                </div>
                </div>
            </div>
        </Link>
    );
}

function NewsGridSkeleton() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 pt-3">
            {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="pt-4">
                    <div className="rounded-[14px] bg-[#FBF8F1] ring-1 ring-black/[0.05] overflow-hidden animate-pulse">
                        <div className="h-[3px] w-full bg-[#DED2AE]" />
                        <div className="px-4 pt-4 pb-2">
                            <div className="w-full aspect-[16/10] rounded-md bg-[#e5ddc7]" />
                        </div>
                        <div className="px-4 pb-4 pt-2 space-y-3">
                            <div className="space-y-1.5">
                                <div className="h-3 bg-[#e5ddc7] rounded w-5/6" />
                                <div className="h-3 bg-[#e5ddc7] rounded w-3/5" />
                            </div>
                            <div className="flex items-center justify-between pt-3" style={{ borderTop: "1.5px dashed rgba(143,114,48,0.2)" }}>
                                <div className="h-2 bg-[#e5ddc7] rounded w-10" />
                                <div className="h-2 bg-[#e5ddc7] rounded w-8" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}