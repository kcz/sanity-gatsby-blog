export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '602e6e3edcfe561b3da36322',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ko1i5kf3',
                  apiId: 'c3bda9f6-f330-4c89-917f-c3891c9fc7b6'
                },
                {
                  buildHookId: '602e6e3ea90c39fb950faf4e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ue3o35ui',
                  apiId: '38bca686-79c6-42ce-91aa-a253a6323b40'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kcz/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ue3o35ui.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
