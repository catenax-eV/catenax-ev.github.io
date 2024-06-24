import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Catena-X - Library',
  tagline: 'Providing Catena-X Documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://catena-x.net/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'catenax-eV', // Usually your GitHub org/user name.
  projectName: 'catenax-ev.github.io.new', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [require.resolve("docusaurus-plugin-image-zoom")],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          versions: {
            current: {
              label: 'Jupiter (preview)',
            },
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
  ],

  themeConfig: {
    zoom: {
      selector: '.markdown :not(em) > img',
      config: {
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        }
      }
    },
    navbar: {
      title: "Catena-X",
      logo: {
        alt: "Catena-X Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "sidebar_working_model",
          position: "left",
          label: "Working Model",
        },
        {
          type: "docSidebar",
          sidebarId: "sidebar_standards",
          position: "left",
          label: "Standards",
        },
        {
          type: "docSidebar",
          sidebarId: "sidebar_regulatory_framework",
          position: "left",
          label: "Regulatory Framework",
        },
        {
          type: "docSidebar",
          sidebarId: "sidebar_op_model",
          position: "left",
          label: "Operating Model",
        },
        {
          type: 'dropdown',
          label: 'Releases',
          position: 'left',
          items: [
            {
              to: '/release-management',
              label: 'Release Management',
            },
            {
              to: '/CHANGELOG',
              label: 'Changelog',
            },
          ],
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          to: 'https://catena-x.net/en/',
          'aria-label':'Catena-X Automotive Network e.V.',
          position: 'right',
          target: '_blank',
          className: 'header-catena-link',
        },
        {
          to: 'https://eclipse-tractusx.github.io/',
          'aria-label':'Eclipse Tractus-X',
          position: 'right',
          target: '_blank',
          className: 'header-tractus-link',
        },
        {
          to: 'https://github.com/catenax-eV/catenax-ev.github.io',
          position: 'right',
          className: 'header-github-link',
          target: '_blank',
          'aria-label':'GitHub',
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Markdown Guidelines",
              href: "/markdown-guidelines",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Tractus-X Page",
              href: "https://eclipse-tractusx.github.io/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Catena-X Automotive Network e.V.",
              href: "https://catena-x.net/",
            },
            {
              label: "Icons used from svgrepo with CC0 License",
              href: "https://www.svgrepo.com/",
            },
            {
              label: "Legal Notice",
              href: "/copyright",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Catena-X Automotive Network e.V. (<a href="https://catena-x.net/de/tractus-x/impressum">Impressum</a>)`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
