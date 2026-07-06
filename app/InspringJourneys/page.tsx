import type { Metadata } from "next";
import { getSubCategoryArticles } from "@/lib/news-api";
import InspiringJourneysHero from "@/app/components/InspringJourney/Inspiringjourneyshero";
import InspiringJourneysClient from "@/app/components/InspringJourney/Inspiringjourneysclient";
import { JOURNEY_TABS, type JourneyTabKey, type NewsItem } from "@/lib/Types/types";
import { notoDevanagari, nunitoSans } from "@/lib/Fonts";

export const metadata: Metadata = {
    title: "Inspiring Journeys | Sadaiv Yuva Foundation",
    description:
        "Real success stories, career motivation and youth leadership journeys curated by Sadaiv Yuva Foundation.",
};

// Revalidate periodically instead of on every request — cheap for 5 API
// calls, and keeps the page fast (SSG/ISR-style) while staying fresh.
export const revalidate = 300;

export default async function InspiringJourneysPage() {
    const results = await Promise.allSettled(
        JOURNEY_TABS.map((tab) =>
            getSubCategoryArticles(tab.apiCategory, tab.apiSubCategory, 1, 12),
        ),
    );

    const tabData: Partial<Record<JourneyTabKey, NewsItem[]>> = {};
    JOURNEY_TABS.forEach((tab, i) => {
        const result = results[i];
        // A 404 / no-articles-yet response for a category should render as an
        // empty state in the UI, not take down the whole page.
        tabData[tab.key] = result.status === "fulfilled" ? (result.value as NewsItem[]) || [] : [];
    });

    const tickerItems = Object.values(tabData)
        .flat()
        .filter(Boolean)
        .sort(
            (a, b) =>
                new Date((b as NewsItem).updatedDate).getTime() -
                new Date((a as NewsItem).updatedDate).getTime(),
        )
        .slice(0, 8) as NewsItem[];

    return (
        <main
            className={`${notoDevanagari.variable} ${nunitoSans.variable} font-[family-name:var(--font-devanagari)] bg-[#F5F7F2]`}
        >
            <InspiringJourneysHero tickerItems={tickerItems} />
            <InspiringJourneysClient tabData={tabData} />
        </main>
    );
}