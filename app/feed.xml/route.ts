import { getJobPosts, getSchemePosts } from "@/lib/content";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/constants";

export async function GET() {
  const jobs = await getJobPosts();
  const schemes = await getSchemePosts();

  const allPosts = [
    ...jobs.map((j) => ({
      title: j.title,
      link: `${SITE_URL}/sarkari-naukri/${j.slug}`,
      description: j.description,
      pubDate: new Date(j.publishedAt).toUTCString(),
      category: `Jobs - ${j.category}`,
    })),
    ...schemes.map((s) => ({
      title: s.title,
      link: `${SITE_URL}/sarkari-yojana/${s.slug}`,
      description: s.description,
      pubDate: new Date(s.publishedAt).toUTCString(),
      category: `Schemes - ${s.category}`,
    })),
  ].sort(
    (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
  );

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_NAME}</title>
    <link>${SITE_URL}</link>
    <description>${SITE_DESCRIPTION}</description>
    <language>en-in</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <generator>${SITE_NAME}</generator>
    <docs>https://www.rssboard.org/rss-specification</docs>
    <ttl>60</ttl>
${allPosts
  .slice(0, 50)
  .map(
    (post) => `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${post.link}</link>
      <guid isPermaLink="true">${post.link}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${post.pubDate}</pubDate>
      <category>${post.category}</category>
    </item>`
  )
  .join("\n")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
