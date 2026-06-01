import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Корень проекта для Vite — папка src. 
  // Все пути к ассетам, скриптам и стилям внутри проекта теперь отсчитываются ОТ НЕЁ.
  root: 'src',

  css: {
    preprocessorOptions: {
      sass: { 
        // Исправлено: так как root — это src, путь пишется прямо от неё: "/sass/...".
        // Имя файла variables пишется без нижнего подчеркивания, в конце строго перенос строки \n
        additionalData: `@use "/sass/settings/variables" as *\n`
      }
    }
  },

  build: {
    // Выходим на уровень выше из src, чтобы создать папку dist в корне проекта
    outDir: '../dist',
    emptyOutDir: true,
    modulePreload: false,
    rollupOptions: {
      input: {
        // Исправлено: resolve должен строить абсолютный путь до index.html.
        // __dirname — это корень проекта (где лежит этот конфиг), дальше заходим в src/index.html
        main: resolve(__dirname, 'src/index.html'),
        newsdetail: resolve(__dirname, 'src/news.html'),
        // Если будут еще страницы, добавляй так:
        // about: resolve(__dirname, 'src/about.html'),
      },
      output: {
        // Файлы будут красиво падать в dist/js/main.js и dist/css/style.css
        entryFileNames: 'js/[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'css/style.[ext]';
          }
          return 'assets/[name].[ext]';
        }
      }
    }
  }
});