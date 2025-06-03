import type { UserThemeConfig } from 'valaxy-theme-gitlink'
import { defineValaxyConfig } from 'valaxy'

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts
  // theme config see theme.config.ts

  theme: 'gitlink',

  modules: {
    rss: {
      enable: false,
    },
  },
})
