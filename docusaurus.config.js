// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'po/iw',
  tagline: '~ hackerspace & dev community',
  url: 'https://poiw.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'poiw-org', // Usually your GitHub org/user name.
  projectName: 'poiw.website', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'po/iw',
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Σχετικά με',
          },
          {
            type: 'doc',
            docId: 'take-part/register',
            position: 'left',
            label: 'Συμμετοχή',
          },
          {
            type: 'doc',
            docId: 'portfolio/saffron',
            position: 'left',
            label: 'Έργα',
          },
          {
            type: 'doc',
            docId: 'wifi',
            position: 'left',
            label: 'Wi-Fi',
          },
          {
            type: 'doc',
            docId: 'equipment',
            position: 'left',
            label: 'Εξοπλισμός',
          },
          {to: 'https://blog.poiw.org', label: 'Blog', position: 'left'},
          {to: 'https://poiw.eu.auth0.com/samlp/QaQQ0JqXFg7DCLbTvrMlYO9JPryOK45r', label: 'Δημιουργία po/iw ID', position: 'right'},
          {
            href: 'https://github.com/poiw-org',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Το περιεχόμενο σε αυτή τη σελίδα διανέμεται ελεύθερα. Τα εικονίδια είναι από το Freepik.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
