import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',

  css: {
    preprocessorOptions: {
      sass: { 
        additionalData: `@use "/sass/settings/variables" as *\n`
      }
    }
  },

  build: {
    outDir: '../dist',
    emptyOutDir: true,
    modulePreload: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        newsdetail: resolve(__dirname, 'src/news.html'),
      },
      output: {
        entryFileNames: 'js/[name].js',
        chunkFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'anchor' || chunkInfo.isEntry) {
            return 'js/[name].js';
          }
          return 'js/[name].js';
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'css/[name].[ext]';
          }
          return 'assets/[name].[ext]';
        },
        manualChunks: (id) => {
          if (id.includes('src/js/news.js') || id.includes('news')) {
            return 'newsdetail';
          }
        },
        experimentalMinChunkSize: 500000
      }
    }
  }
});