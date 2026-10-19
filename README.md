# Alex Rochlitz

Personal website at https://www.alexrochlitz.com/.

The production source is the static HTML, CSS and images in `public/`. Vercel serves that directory directly; no dependency installation, JavaScript runtime or build step is required. Edit the HTML files and shared `public/assets/style.css` to update the site.

## Preview locally

Run `python3 -m http.server 4319 --bind 127.0.0.1 --directory public` and open http://127.0.0.1:4319/. Production redirects are configured in `vercel.json`.

## Pages and search

- `/`, `/about/`, `/writing/`, `/contact/` are indexable and listed in the sitemap.
- Original essays remain at `/blog/how-to-be-happy/` and `/blog/axis-of-burnout/`, with `noindex, follow` metadata.
- `/blog` redirects to `/writing/`.
- Original image URLs and the burnout calculator download are preserved.
- Each page includes its canonical URL, title, description and social metadata. Update those alongside the visible copy.
- `public/404.html` is the custom missing-page response.

Deploy this repository to the existing Vercel project `scale-x/alexrochlitz-blog-fg9q`. The public domain redirects from the apex domain to `www.alexrochlitz.com`. Local notes and review files are outside this repository.
