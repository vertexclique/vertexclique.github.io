import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts', (post) => post.data.draft !== true);
  const site = context.site!;

  return rss({
    title: 'Vertexclique - Blog',
    description: 'Ideas, thoughts and all the engineering management.',
    site: site,
    items: posts
      .sort((a, b) => b.data.createdAt.getTime() - a.data.createdAt.getTime())
      .map((post) => {
        const imageUrl = new URL(post.data.image.src, site).href;
        return {
          title: post.data.title,
          pubDate: post.data.createdAt,
          description: post.data.description,
          link: `/blog/${post.id}/`,
          enclosure: {
            url: imageUrl,
            length: 0,
            type: post.data.image.format === 'svg' ? 'image/svg+xml' : `image/${post.data.image.format}`,
          },
        };
      }),
  });
}
