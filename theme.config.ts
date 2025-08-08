import { defineThemeConfig } from 'valaxy-theme-gitlink'

export default defineThemeConfig({
    nav: [
        {
            text: '项目',
            link: '/projects',
        },
        {
            text: '关于',
            link: '/about',
        },
    ],

    footer: {
        since: 2022,
        icon: {
            name: 'i-ri-github-line',
            animated: true,
            color: 'aqua',
            url: 'https://github.com/MengNianxiaoyao',
            title: '梦念逍遥のGitHub',
        },
        powered: true,
        beian: {
            enable: true,
            icp: '赣ICP备2025069243号-1',
        },
    },
})