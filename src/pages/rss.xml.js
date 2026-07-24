import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import siteConfig from '../data/site-config';
import { sortPostsByDateDesc } from '../utils/post-utils';

export async function GET(context) {
    const posts = (await getCollection('blog')).sort(sortPostsByDateDesc);
    return rss({
        title: siteConfig.title,
        description: siteConfig.description,
        site: context.site,
        items: posts.map((item) => ({
            title: item.data.title,
            description: item.data.excerpt,
            link: `${import.meta.env.BASE_URL}/blog/${item.id}/`, // BASE_URL 반영
            pubDate: item.data.publishDate.setUTCHours(0)
        }))
    });
}