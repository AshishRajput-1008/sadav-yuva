"use client";

import { useEffect, useState } from "react";
import { getSubCategoryArticles } from "@/lib/news-api";
import InspiringJourneysView from "@/app/components/InspringJourney/InspiringJourneysView";
import { JOURNEY_TABS, type JourneyTabKey, type NewsItem } from "@/lib/Types/types";

export default function InspiringJourneysPage() {
    const [tabData, setTabData] = useState<Partial<Record<JourneyTabKey, NewsItem[]>>>({});
    const [tickerItems, setTickerItems] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cancelled = false;

        async function loadArticles() {
            setLoading(true);

            const results = await Promise.allSettled(
                JOURNEY_TABS.map((tab) =>
                    getSubCategoryArticles(tab.apiCategory, tab.apiSubCategory, 1, 12),
                ),
            );

            if (cancelled) return;

            const nextTabData: Partial<Record<JourneyTabKey, NewsItem[]>> = {};
            JOURNEY_TABS.forEach((tab, i) => {
                const result = results[i];
                nextTabData[tab.key] =
                    result.status === "fulfilled" ? ((result.value as NewsItem[]) || []) : [];
            });

            const nextTicker = Object.values(nextTabData)
                .flat()
                .filter(Boolean)
                .sort(
                    (a, b) =>
                        new Date((b as NewsItem).updatedDate).getTime() -
                        new Date((a as NewsItem).updatedDate).getTime(),
                )
                .slice(0, 8) as NewsItem[];

            setTabData(nextTabData);
            setTickerItems(nextTicker);
            setLoading(false);
        }

        loadArticles();

        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <InspiringJourneysView
            tabData={tabData}
            tickerItems={tickerItems}
            loading={loading}
        />
    );
}