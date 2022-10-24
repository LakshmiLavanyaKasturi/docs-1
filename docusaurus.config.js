const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Hiro Docs',
  tagline: 'Developer tools for Stacks',
  url: 'https://docs.hiro.so',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'hirosystems', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  trailingSlash: false,

  plugins: [
    require.resolve('@cmfcmf/docusaurus-search-local'),
    require.resolve('docusaurus-plugin-segment'),
    ['./src/_plugins/google-tag-manager', { id: 'GTM-59XXGSG' }],
    ["docusaurus-plugin-remote-content",
            {
                // options here
                name: "remote-docs-clarinet", // used by CLI, must be path safe
                sourceBaseUrl: "https://raw.githubusercontent.com/LakshmiLavanyaKasturi/test-clarinet/master/clarinet/", // the base url for the markdown (gets prepended to all of the documents when fetching)
                outDir: "docs/remote-docs/clarinet", // the base directory to output to.
                documents: ["faq.md", "getting-started.md","introduction.md", "troubleshooting.md","feature-guides/analyze-with-check-checker.md",
                "feature-guides/extend-clarinet.md",
                "how-to-guides/how-to-check-contract.md",
                "how-to-guides/how-to-create-new-project.md",
                "how-to-guides/how-to-debug-contract.md",
                "how-to-guides/how-to-deploy-contracts.md",
                "how-to-guides/how-to-deploy-with-subnets.md",
                "how-to-guides/how-to-run-integration-environment.md",
                "how-to-guides/how-to-set-up-local-development-environment.md",
                "how-to-guides/how-to-test-contract.md",
                "how-to-guides/how-to-add-contract.md",
                 ], // the file names to download
                // in the plugin's options:
                //noRuntimeDownloads: "true"
                
            }],["docusaurus-plugin-remote-content",
            {
                // options here
                name: "remote-docs-clarinet-images", // used by CLI, must be path safe
                sourceBaseUrl: "https://raw.githubusercontent.com/LakshmiLavanyaKasturi/test-clarinet/master/clarinet/", // the base url for the markdown (gets prepended to all of the documents when fetching)
                outDir: "docs/remote-docs/clarinet", // the base directory to output to.
                documents: [
                 "images/breakpoint.png",      "images/clarinet-faq-2.png",  "images/clarinet.png",
                 "images/debug-toolbar.png",   "images/run-and-debug.png",
                 "images/clarinet-banner.bmp", "images/clarinet-faq-3.png",  "images/clarinet101.png", "images/demo.gif",
                 "images/sidebar.png",  "images/clarinet-dialog.bmp", "images/clarinet-faq-4.png",
                 "images/costs.gif",  "images/deno-error.png",      "images/trace.png",
                 "images/clarinet-faq-1.png",  "images/clarinet.ico",  "images/debug-console.png",   "images/lcov.png", "images/watchpoint.png"], // the file names to download
                // in the plugin's options:
                //noRuntimeDownloads: "true",
                responseType: 'arraybuffer',
                
                headers: {
                  'accept': 'image*',
                  'Content-Type': 'image/jpeg',
                }
                }
                
            ],       
],    

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/hirosystems/docs/edit/main/',
          routeBasePath: '/',
          breadcrumbs: false, // todo: enable at some point (breadcrumbs need a design overhaul first)
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            route: '/api/',
            spec: 'https://raw.githubusercontent.com/hirosystems/stacks-blockchain-api/gh-pages/openapi.resolved.yaml',
          },
        ],
        theme: {
          primaryColor: '#5546FF',
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Hiro developers',
          src: 'img/hiro-docs-logo.svg',
          srcDark: 'img/hiro-docs-logo-dark.svg',
          target: '_self',
        },
        items: [
          {
            type: 'doc',
            label: 'Documentation',
            docId: 'intro',
            position: 'left',
          },
          {
            to: '/api',
            label: 'Stacks Blockchain API',
            position: 'left',
          },
          {
            type: 'dropdown',
            label: 'Learn & Build',
            position: 'left',
            items: [
              {
                type: 'doc',
                label: 'Tutorials',
                docId: 'tutorials',
              },
              {
                type: 'doc',
                label: 'Example Apps',
                docId: 'example-apps',
              },
              {
                type: 'doc',
                label: 'Stacks.js Starters',
                docId: 'stacksjs-starters',
              },
            ],
          },

          {
            type: 'doc',
            docId: 'roadmap',
            label: 'Roadmap',
            position: 'left',
          },
          {
            href: 'https://github.com/hirosystems/docs',
            position: 'right',
            className: 'header-github-link',
            title: 'GitHub Repository',
            'aria-label': 'GitHub Repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'Hiro developers',
          src: 'img/hiro-docs-footer.svg',
        },
        links: [
          {
            title: 'Hiro Developers',
            items: [
              {
                label: 'Documentation',
                to: '/intro',
              },
              {
                label: 'Stacks API',
                to: '/api',
              },
              {
                label: 'Tutorials',
                to: '/tutorials',
              },
              {
                label: 'Example Apps',
                to: '/example-apps',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                className: 'footer__link-item custom-footer-external',
                to: 'https://github.com/hirosystems/docs',
              },
              {
                label: 'Stacks Docs',
                className: 'footer__link-item custom-footer-external',
                to: 'https://docs.stacks.co',
              },
              {
                label: 'Blog',
                className: 'footer__link-item custom-footer-external',
                to: 'https://www.hiro.so/blog',
              },
              {
                label: 'Twitter',
                className: 'footer__link-item custom-footer-external',
                to: 'https://twitter.com/hirosystems',
              },
              {
                label: 'Youtube',
                className: 'footer__link-item custom-footer-external',
                to: 'https://www.youtube.com/channel/UC3xNLj2Mu7fW-BCq-vC9xKQ',
              },
              {
                label: 'Newsletter',
                className: 'footer__link-item custom-footer-external',
                to: 'https://hiro.so/updates-docs',
              },
            ],
          },
          {
            title: 'Stacks Community',
            items: [
              {
                label: 'Discord',
                className: 'footer__link-item custom-footer-external',
                to: 'https://stacks.chat',
              },
              {
                label: 'Stacks Forum',
                className: 'footer__link-item custom-footer-external',
                to: 'https://forum.stacks.org',
              },
              {
                label: 'Reddit',
                className: 'footer__link-item custom-footer-external',
                to: 'https://www.reddit.com/r/stacks',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hiro Systems, PBC.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['toml', 'lisp'],
      },
      segment: {
        apiKey: 'qabJfWPhi2L9CeMk22A1XlYmabsNtgKy',
      },
    }),
};
