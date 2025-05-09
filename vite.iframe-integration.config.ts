import { dirname, resolve } from 'node:path'

import { IFRAME_SCRIPT_VERSION } from '#config/iframe_integration'
import { defineConfig } from 'vite'

const dir = dirname(import.meta.url).replace('file://', '')

export default defineConfig({
  build: {
    copyPublicDir: false,
    outDir: resolve(dir, 'public/assets'),
    rollupOptions: {
      input: {
        iframeIntegration: resolve(dir, 'src/assets/iframe-integration.js'),
      },
      output: {
        entryFileNames: `iframe-integration@${IFRAME_SCRIPT_VERSION}.js`,
        chunkFileNames: `iframe-integration@${IFRAME_SCRIPT_VERSION}.js`,
        assetFileNames: `iframe-integration@${IFRAME_SCRIPT_VERSION}.js`,
      },
    },
    minify: true,
    emptyOutDir: false,
  },
})
