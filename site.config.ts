import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://www.mnxyio.top/',
  lang: 'zh-CN',
  title: '梦念逍遥的笔记 - 个人主页',
  subtitle: '',
  author: {
    name: '梦念逍遥',
    email: 'email@mnxyio.top',
    link: 'https://www.mnxyio.top',
    avatar: 'https://cdn.jsdmirror.com/gh/MengNianxiaoyao/blogassets@main/favicon.svg',
  },
  description: '欢迎来到梦念逍遥の个人主页.',
  social: [
    {
      name: '博客',
      link: 'https://blog.mnxyio.top',
      icon: 'i-fa6-solid-blog',
      color: 'orange',
    },
    {
      name: 'QQ',
      link: 'https://qm.qq.com/cgi-bin/qm/qr?k=MDNKDAFS7DhxSrcTyKRbePMxF96zShPg&noverify=0',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/MengNianxiaoyao',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: 'Gitee',
      link: 'https://gitee.com/mengnianxiaoyao',
      icon: 'i-simple-icons-gitee',
      color: '#c71d23',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/381745966',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'E-Mail',
      link: 'mailto:email@mnxyio.top',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: '异次元之旅',
      link: 'https://travel.moe/go.html?travel=on',
      icon: 'i-ri-planet-line',
      color: '#e77c8e',
    },
    {
      name: '站点监测',
      link: 'https://status.mnxyio.top',
      icon: 'i-simple-icons-uptimekuma',
      color: '#3BD671',
    },
  ],

  search: {
    enable: false,
  },

  cdn: {
    prefix: 'https://cdn.cbd.int/',
  },

  sponsor: {
    enable: true,
    title: '我很可爱，请给我钱！',
    description: "我很可爱，请给我钱！I'm lovely, please give me money!",
    methods: [
      {
        name: '支付宝',
        url: 'https://article.biliimg.com/bfs/article/fb168a3d370aeeba1d128121b07a5c4e4db5822c.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://article.biliimg.com/bfs/article/5315a9f513668c5e051e617e9157359ef9393e2e.png',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://article.biliimg.com/bfs/article/9b85c677c7ce1bf63d35cae93e44651b4bb558d4.png',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})
