module.exports = migration => {
  const author = migration.createContentType('author', {
    name: 'Author',
    description: 'Who wrote this?',
  })

  author.createField('name', {
    name: 'Name',
    type: 'Symbol',
    required: true,
  })

  author.createField('url', {
    name: 'Twitter',
    type: 'Symbol',
    required: false,
  })
}
