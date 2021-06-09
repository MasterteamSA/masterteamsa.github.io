/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Masterteam Guideline',
  tagline: 'Work and Code guidelines.',
  url: 'https://masterteamsa.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'MasterteamSA', // Usually your GitHub org/user name.
  projectName: 'guideline-web', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'MT Guideline',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'workflow/intro',
          position: 'left',
          label: 'Workflow',
        },
        {
          type: 'doc',
          docId: 'components/intro',
          position: 'left',
          label: 'Component Library',
        },
        {
          href: 'https://github.com/MasterteamSA/guideline-web',
          label: 'Github',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Workflow',
              to: '/docs/workflow/intro',
            },
          ],
        },
//      {
//        title: 'Community',
//        items: [
//          {
//            label: 'Stack Overflow',
//            href: 'https://stackoverflow.com/questions/tagged/docusaurus',
//          },
//          {
//            label: 'Discord',
//            href: 'https://discordapp.com/invite/docusaurus',
//          },
//          {
//            label: 'Twitter',
//            href: 'https://twitter.com/docusaurus',
//          },
//        ],
//      },
        {
          title: 'More',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/MasterteamSA/guideline-web',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Masterteam, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/MasterteamSA/guideline-web/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
