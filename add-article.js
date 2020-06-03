module.exports = migration => {
  const article = migration.createContentType('article', {
    name: 'Article',
    description: 'Longer reads and thoughts',
  })

  article.createField('title', {
    name: 'title',
    type: 'Symbol',
    required: true,
  })

  article.createField('prose', {
    name: 'Prose',
    type: 'RichText',
    required: false,
  })

  article.createField('author', {
    name: 'Author',
    type: 'Link',
    linkType: 'Entry',
    required: false,
  })
}
