// Post-build prerender: writes dist/<slug>/index.html per blog post with
// post-specific title/description/og/twitter tags so social crawlers
// (LinkedIn, Twitter/X, Slack — none of which execute JS) see real previews.
import { readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const SITE = "https://namitamalik.github.io";

const postMeta = JSON.parse(
  readFileSync(join(root, "src/lib/postMeta.json"), "utf8")
);

const template = readFileSync(join(dist, "index.html"), "utf8");

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function setMeta(html, attr, key, value) {
  const re = new RegExp(
    `<meta ${attr}="${key}" content="[^"]*"\\s*/?>`,
    "i"
  );
  const tag = `<meta ${attr}="${key}" content="${esc(value)}" />`;
  return re.test(html) ? html.replace(re, tag) : html.replace("</head>", `    ${tag}\n  </head>`);
}

let count = 0;
for (const [slug, meta] of Object.entries(postMeta)) {
  const url = `${SITE}/${slug}/`;
  const fullTitle = meta.title.includes("Namita Malik")
    ? meta.title
    : `${meta.title} | Namita Malik`;

  let html = template;
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(fullTitle)}</title>`);
  html = setMeta(html, "name", "description", meta.description);
  html = setMeta(html, "property", "og:title", fullTitle);
  html = setMeta(html, "property", "og:description", meta.description);
  html = setMeta(html, "property", "og:type", "article");
  html = setMeta(html, "property", "og:url", url);
  html = setMeta(html, "name", "twitter:title", fullTitle);
  html = setMeta(html, "name", "twitter:description", meta.description);
  if (meta.image) {
    html = setMeta(html, "property", "og:image", meta.image);
    html = setMeta(html, "name", "twitter:image", meta.image);
  }

  const dir = join(dist, slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html);
  count++;
}

// Ensure share images referenced by absolute URL exist as stable public files.
const assetCopies = [
  ["src/assets/ai-spaghetti-code.png", "public/ai-spaghetti-code.png"],
];
for (const [src, dest] of assetCopies) {
  if (existsSync(join(root, src)) && !existsSync(join(dist, dest.replace("public/", "")))) {
    copyFileSync(join(root, src), join(dist, dest.replace("public/", "")));
  }
}

console.log(`Prerendered ${count} post pages with per-post meta tags.`);
