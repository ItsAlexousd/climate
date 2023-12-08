import { getInsight } from '$lib/insights';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
    const insight = getInsight(params.id);

    if (!insight) {
        return { status: 404 };
    }

    return {
        category: insight.category,
        title: insight.title,
        description: insight.description,
        longDescription: insight.longDescription,
    };
}) satisfies PageLoad;
