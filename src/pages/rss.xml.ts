import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts', (post) => post.data.draft !== true);

  return rss({
    title: 'Vertexclique - Blog',
    description: 'Ideas, thoughts and all the engineering management.',
    site: context.site!,
    items: posts
      .sort((a, b) => b.data.createdAt.getTime() - a.data.createdAt.getTime())
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.createdAt,
        description: post.data.description,
        link: `/blog/${post.id}/`,
      })),
  });
}
