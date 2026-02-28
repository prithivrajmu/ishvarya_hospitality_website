import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    // Tell Vite this is a multi-page app (no SPA fallback)
    appType: 'mpa',

    server: {
        // Mimic Vercel's cleanUrls in dev:
        // Requests like /about → served as /about.html
        middlewareMode: false,
    },

    plugins: [
        {
            name: 'clean-urls-dev',
            configureServer(server) {
                server.middlewares.use((req, _res, next) => {
                    const url = req.url;
                    // Skip requests that already have an extension, query, or hash
                    if (url && !url.includes('.') && !url.includes('?') && url !== '/') {
                        // Strip trailing slash if present
                        const clean = url.replace(/\/$/, '');
                        req.url = clean + '.html';
                    }
                    next();
                });
            },
        },
    ],

    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                products: resolve(__dirname, 'products.html'),
                clients: resolve(__dirname, 'clients.html'),
                contact: resolve(__dirname, 'contact.html'),
                quote: resolve(__dirname, 'quote.html'),
            },
        },
    },
});
