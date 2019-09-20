export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d84dcd4f1d93a41a1a03e15',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-seb916sx',
                  apiId: '7c83e307-4896-4f16-9d02-492fb74fd536'
                },
                {
                  buildHookId: '5d84dcd4fa23b8d6163a6bb3',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-ys8ui2uf',
                  apiId: '9a20fc98-4659-4526-a811-3d4eada1c9c3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shishak/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-ys8ui2uf.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
