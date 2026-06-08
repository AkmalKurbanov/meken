import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  // Делаем все пути относительными
  base: "./",
  root: "src",

  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@use "/sass/settings/variables" as *\n`,
      },
    },
  },

  // Заставляем Vite в скомпилированном CSS использовать только относительные пути к ассетам
  experimental: {
    renderBuiltUrl(filename, { type }) {
      if (type === "asset") {
        return { relative: true };
      }
    },
  },

  build: {
    outDir: "../dist",
    emptyOutDir: true,
    modulePreload: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        newsdetail: resolve(__dirname, "src/news.html"),
        privacypolicy: resolve(__dirname, "src/privacy-policy.html"),
      },
      output: {
        // 1. Скрипты летят в assets/js/
        entryFileNames: "assets/js/[name].js",
        chunkFileNames: "assets/js/[name].js",

        assetFileNames: (assetInfo) => {
          // 2. Стили летят в assets/css/
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "assets/css/[name].[ext]";
          }

          // 3. Шрифты летят в assets/fonts/
          if (
            assetInfo.name &&
            /\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)
          ) {
            return "assets/fonts/[name].[ext]";
          }

          // 4. Картинки летят в assets/images/
          if (
            assetInfo.name &&
            /\.(png|jpe?g|gif|svg|webp|ico)$/i.test(assetInfo.name)
          ) {
            return "assets/images/[name].[ext]";
          }

          // Дефолтный путь для остальных файлов
          return "assets/[name].[ext]";
        },

        manualChunks: (id, { getModuleInfo }) => {
          if (
            id.endsWith(".css") ||
            id.endsWith(".scss") ||
            id.endsWith(".sass")
          ) {
            return null;
          }

          const moduleInfo = getModuleInfo(id);
          if (moduleInfo && moduleInfo.importers.length > 1) {
            return "core";
          }
        },
      },
    },
  },
});
