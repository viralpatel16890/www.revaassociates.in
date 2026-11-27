// Copies the prerendered 404 page to /404.html, which Vercel serves with a
// 404 status for any URL that doesn't match a prerendered page or static file.
import { copyFileSync, existsSync } from 'node:fs';

const out = 'dist/reva-associates/browser';
const src = `${out}/404/index.html`;
if (!existsSync(src)) {
  console.error(`postbuild: ${src} not found - was the 404 route prerendered?`);
  process.exit(1);
}
copyFileSync(src, `${out}/404.html`);
console.log('postbuild: wrote 404.html');
