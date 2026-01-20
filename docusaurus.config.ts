import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const glossaryPlugin = require('docusaurus-plugin-glossary');

const config: Config = {
  title: 'Catena-X - Library',
  tagline: 'If you are interested in joining the Catena-X ecosystem, you need to prove compliance. Right here you will find the complete normative documentation for everything you need for doing so.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://catena-x.net/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'catenax-eV', // Usually your GitHub org/user name.
  projectName: 'catenax-ev.github.io', // Usually your repo name.

  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    require.resolve("docusaurus-plugin-image-zoom"),
    [
      require.resolve('@docusaurus/plugin-client-redirects'),
      {
        redirects: [
          {
            to: '/blog-releasenotes',
            from: ['/release-notes'],
          },
        ],
      },
    ],
    // glossary plugin: serves glossary content from /glossary at site route /glossary
    [
      require.resolve('docusaurus-plugin-glossary'),
      {
        glossaryPath: 'glossary/glossary.json',
        routePath: '/glossary',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          // Add the remark plugin to enable auto-linking in pages
          remarkPlugins: [
            glossaryPlugin.getRemarkPlugin(
                {
                  glossaryPath: 'glossary/glossary.json',
                  routePath: '/glossary',
                },
                { siteDir: __dirname }
            ),
          ],
          sidebarPath: './sidebars.ts',
          versions: {
            current: {
              label: 'CX-Titan (Preview)',
            },
            'Saturn': {
              label: 'CX-Saturn (Current)'
            },
            'Io': {
              label: 'CX-Io',
              banner: 'unmaintained'
            },
            'Jupiter': {
              label: 'CX-Jupiter',
              banner: 'unmaintained'
            }
          },
        },
        blog: {
          path: './blog-releasenotes',
          routeBasePath: 'blog-releasenotes',
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'Release Notes',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ]
  ],
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
      onBrokenMarkdownImages: 'throw',
    },
  },
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
    '@docusaurus/theme-mermaid'
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
          type: "dropdown",
          sidebarId: "sidebar_standards",
          label: 'Standards',
          position: 'left',
          items: [
            {
              to: '/glossary/',
              label: 'Glossary',
            },
            {
              to: '/docs/standards/overview/',
              label: 'Standards',
            },
            {
              to: '/docs/non-functional/overview/',
              label: 'Non-functional requirements',
            },
            {
              type: 'html',
              value: '<hr style="margin: 0.5rem 0;">',
            },
            {
              to: '/docs/next/architecture-guardrails/overview/',
              label: '🔧 Architecture Guardrails',
            },
            {
              to: '/docs/next/cx-bok/overview/',
              label: '📚 CX Body of Knowledge',
            },
          ],
        },
        /* {
           type: "docSidebar",
           sidebarId: "sidebar_certification",
           position: "left",
           label: "Conformity Assessment",
         },
         */
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
          type: "docSidebar",
          sidebarId: "sidebar_working_model",
          position: "left",
          label: "Working Model",
        },
        {
          type: 'dropdown',
          label: 'Releases',
          position: 'left',
          items: [
            {
              label: 'Notes',
              to: '/blog-releasenotes'
            },
            {
              to: '/release-management',
              label: 'Management',
            },
            {
              to: '/timelines',
              label: 'Timelines',
            },
          ],
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          to: 'https://catena-x.net',
          'aria-label': 'Catena-X Automotive Network e.V.',
          position: 'right',
          target: '_blank',
          className: 'header-catena-link',
        },
        {
          to: 'https://eclipse-tractusx.github.io/',
          'aria-label': 'Eclipse Tractus-X',
          position: 'right',
          target: '_blank',
          className: 'header-tractus-link',
        },
        {
          to: 'https://github.com/catenax-eV/catenax-ev.github.io',
          position: 'right',
          className: 'header-github-link',
          target: '_blank',
          'aria-label': 'GitHub',
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
            {
              label: "Modeling Governance",
              href: "/modeling-governance",
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
      copyright: `Copyright © ${new Date().getFullYear()} Catena-X Automotive Network e.V. (<a href="https://catena-x.net/imprint/">Imprint</a>)`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
