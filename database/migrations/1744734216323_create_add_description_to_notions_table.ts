import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'notions'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.text('description').nullable()
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('description')
    })
  }
}
