import app from '@adonisjs/core/services/app'
import { defineConfig } from '@adonisjs/vite'

const viteBackendConfig = defineConfig({
  /**
   * The output of vite will be written inside this
   * directory. The path should be relative from
   * the application root.
   */
  buildDirectory: app.inProduction ? 'build/public/assets' : 'public/assets',

  /**
   * The path to the manifest file generated by the
   * "vite build" command.
   */
  manifestFile: app.inProduction ? 'build/public/assets/.vite/manifest.json' : 'public/assets/.vite/manifest.json',

  /**
   * Feel free to change the value of the "assetsUrl" to
   * point to a CDN in production.
   */
  assetsUrl: '/assets',

  scriptAttributes: {
    defer: true,
  },
})

export default viteBackendConfig
