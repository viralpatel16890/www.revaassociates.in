import { RenderMode, ServerRoute } from '@angular/ssr';

/**
 * Every real page is prerendered to static HTML at build time (outputMode: "static"),
 * so search engines and link previews see full content without running JavaScript.
 * `404` is prerendered too and copied to /404.html by scripts/postbuild.mjs, which
 * Vercel serves (with a 404 status) for any unknown URL.
 */
export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'about', renderMode: RenderMode.Prerender },
  { path: 'services', renderMode: RenderMode.Prerender },
  { path: 'testimonials', renderMode: RenderMode.Prerender },
  { path: 'contact', renderMode: RenderMode.Prerender },
  { path: '404', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Client },
];
