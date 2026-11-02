# SEO and GEO setup

The static site emits self-referencing canonical URLs, reciprocal `en` and `zh-CN` alternates, localized XML sitemap entries, page descriptions, social metadata, and JSON-LD for visible page content. Search and not-found pages are marked `noindex`; the sitemap omits them.

The build deploys to the GitHub Pages project path `/interview-compass/`. `public/llms.txt` is served under that path and gives AI crawlers a short map of the main pages. It is a convenience file, not a ranking signal or a Google AI Search requirement. Google says its AI search features use the same indexing and SEO foundations as Search and do not require special AI files or schema.

## Hosting boundary

The project repository cannot publish `https://liyuk.github.io/robots.txt`, which belongs to the user-site root rather than this project's `/interview-compass/` directory. Robots policy for the whole `liyuk.github.io` host must be managed in the user-site repository. This project keeps indexable HTML crawlable and exposes its sitemap at `https://liyuk.github.io/interview-compass/sitemap-index.xml`.

## Validation

Build output can confirm generated tags, URLs, sitemap entries, JSON-LD, redirects, and the LLM index. Search Console and live crawler reports require access to the deployed property; this repository alone cannot confirm indexing, rankings, or citations in answer engines.

## References

- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features) — AI search uses the same indexing foundations as Search and does not require special AI files or markup.
- [Google: localized versions of your pages](https://developers.google.com/search/docs/specialty/international/localized-versions) — language alternates must be reciprocal and include each version.
- [Astro: sitemap integration](https://docs.astro.build/en/guides/integrations-guide/sitemap/) — localized sitemap alternate links.
