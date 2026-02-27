import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
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
