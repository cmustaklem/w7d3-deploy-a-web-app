'use strict'

const Schema = use('Schema')

class PostsTableSchema extends Schema {

  up () {
    this.create('posts', (table) => {
      table.increments() //this creates the id field a .unique() add on would make it so this would be a unique field
      table.string('author')
      table.string('headline')
      table.text('body')
      table.string('image')
      table.timestamps()
    })
  }

  down () {
    this.drop('posts')
  }

}

module.exports = PostsTableSchema
