// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DASH Docs',
  tagline: 'Create blazing fast dashboards for ESP32 & ESP8266 microcontrollers',
  url: 'https://docs.espdash.pro',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/dash-mini-logo.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ayushsharma82', // Usually your GitHub org/user name.
  projectName: 'ESP-DASH', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: true,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-H1X62VMQNV',
          anonymizeIP: true,
        },
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "",
        logo: {
          src: 'img/dash-splash.png',
          alt: 'ESP-DASH',
          width: 84
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Docs',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
          },
          {
            href: "https://github.com/ayushsharma82/ESP-DASH/",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get Started',
                to: '/docs/get-started',
              },
              {
                label: 'Concept of DASH',
                to: '/docs/concept',
              },
              {
                label: 'Cards',
                to: '/docs/cards',
              },
              {
                label: 'Charts',
                to: '/docs/charts',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/ayushsharma82/ESP-DASH/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/asrocks5',
              },
              {
                label: 'Buy me a Coffee (BMC)',
                href: 'https://www.buymeacoffee.com/6QGVpSj',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Create an Issue (Repo)',
                href: 'https://github.com/ayushsharma82/ESP-DASH/issues',
              },
              {
                label: 'Contact me',
                href: 'https://www.espdash.pro/support',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SOFTT. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
