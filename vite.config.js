import { defineConfig } from 'vite';
import { resolve } from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/meken/',
  root: 'src',

  css: {
    preprocessorOptions: {
      sass: { 
        additionalData: `@use "/sass/settings/variables" as *\n`
      }
    }
  },

  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'images/docs/*',
          dest: 'images/docs'
        }
      ]
    })
  ],

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
        chunkFileNames: 'js/[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'css/[name].[ext]';
          }
          return 'assets/[name].[ext]';
        },
        
        manualChunks: (id, { getModuleInfo }) => {
          if (id.endsWith('.css') || id.endsWith('.scss') || id.endsWith('.sass')) {
            return null;
          }

          const moduleInfo = getModuleInfo(id);
          if (moduleInfo && moduleInfo.importers.length > 1) {
            return 'core';
          }
        }
      }
    }
  }
});