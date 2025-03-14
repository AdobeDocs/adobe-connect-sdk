/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  pathPrefix: process.env.PATH_PREFIX || '/adobe-connect-sdk/',
  siteMetadata: {
    versions: [
      {
        title: 'v11.0',
        selected: true
      }
    ],
    pages: [
      {
        title: 'Adobe Connect SDK',
        path: '/'
      },
      {
        title: 'Guides',
        path: '/guides/'
      },
      {
        title: 'SDK Reference',
        menu: [
          {
            title: 'SDK v11.0',
            description: 'SDK Reference v11',
            path: '/api/index.md'
          }
        ]
      },
      {
        title: 'Support',
        path: '/support/'
      }
    ],
    subPages: [
      {
        title: 'Getting Started',
        path: '/guides/',
        pages: [
          {
            title: 'Development Considerations',
            path: '/guides/development_considerations/'
          },
          {
            title: 'Custom Pod Structure',
            path: '/guides/custom_pod_structure/'
          },
          {
            title: 'Message Handling',
            path: '/guides/message_handling/'
          },
          {
            title: 'Code Samples',
            path: '/guides/code_samples/'
          }

        ]
      },
      {
        title: 'Cat Metrics API',
        path: '/guides/dummy_metrics_api/'
      },
      {
        title: 'Migrating',
        path: '/guides/migrating/'
      },
      {
        title: 'Overview',
        path: '/support/',
        header: true,
        pages: [
          {
            title: 'Help',
            path: '/support/'
          },
          {
            title: 'FAQ',
            path: '/support/FAQ/'
          },
          {
            title: 'How to contribute',
            path: '/support/contribute/'
          }
        ]
      },
      {
        title: 'Community',
        path: '/support/community/',
        header: true,
        pages: [
          {
            title: 'Information',
            path: '/support/community/'
          }
        ]
      }
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`]
};
