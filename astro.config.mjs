// @ts-check
import { defineConfig } from 'astro/config';

// Site statique — build en cloud par Cloudflare Pages.
// Sortie dans dist/ (répertoire de build attendu par Pages).
export default defineConfig({
  output: 'static',
});
