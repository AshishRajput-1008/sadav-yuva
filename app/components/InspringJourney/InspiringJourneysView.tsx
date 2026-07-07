"use client";

import InspiringJourneysHero from "@/app/components/InspringJourney/Inspiringjourneyshero";
import InspiringJourneysClient from "@/app/components/InspringJourney/Inspiringjourneysclient";
import type { JourneyTabKey, NewsItem } from "@/lib/Types/types";
import { notoDevanagari, nunitoSans } from "@/lib/Fonts";

export default function InspiringJourneysView({
    tabData,
    tickerItems,
    loading,
}: {
    tabData: Partial<Record<JourneyTabKey, NewsItem[]>>;
    tickerItems: NewsItem[];
    loading: boolean;
}) {
    return (
        <main
            className={`${notoDevanagari.variable} ${nunitoSans.variable} font-[family-name:var(--font-devanagari)] bg-[#F5F7F2]`}
        >
            <InspiringJourneysHero tickerItems={tickerItems} />
            {loading ? (
                <div className="flex items-center justify-center py-24 text-sm text-[#6B756E]">
                    लोड हो रहा है...
                </div>
            ) : (
                <InspiringJourneysClient tabData={tabData} />
            )}
        </main>
    );
}