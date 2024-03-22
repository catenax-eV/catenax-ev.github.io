// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Catena-X - Documentation Platform",
  tagline: "Providing Catena-X Documentation",
  url: "https://catena-x.net/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "catenax-eV", // Usually your GitHub org/user name.
  projectName: "catenax-ev.github.io", // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/catenax-eV/catenax-ev.github.io/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Catena-X",
        logo: {
          alt: "Catena-X Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "sidebar_standards",
            position: "left",
            label: "Standards",
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
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: "https://github.com/catenax-eV/catenax-ev.github.io",
            label: "GitHub",
            position: "right",
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
                label: "Get Started",
                to: "/docs/operating-model/overview",
              },
              {
                label: "Get Started",
                to: "/docs/operating-model/overview",
              },
              {
                label: "Get Started",
                to: "/docs/operating-model/overview",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "MS Teams - Support channel",
                href: "https://teams.microsoft.com/l/channel/19%3a9a3c4a05a3514d07b973c13e7b468709%40thread.tacv2/CX%2520-%2520CoP%2520DevSecOps?groupId=17b1a2dc-67fb-4a49-a2ed-dd1344321439&tenantId=1ad22c6d-2f08-4f05-a0ba-e17f6ce88380",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Catena-X Automotive Network",
                href: "https://catena-x.net/",
              },
              {
                label: "Icons used from svgrepo with CC0 License",
                href: "https://www.svgrepo.com/",
              },
              {
                label: "GitHub",
                href: "https://github.com/catenax-eV",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Catena-X - funded by BMWK, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
