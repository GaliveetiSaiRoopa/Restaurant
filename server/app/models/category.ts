import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Menu from './menu.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({ columnName: 'category_name' })
  declare categoryName: string

  @hasMany(() => Menu)
  declare menus: HasMany<typeof Menu>

  // @column.dateTime({ autoCreate: true })
  // declare createdAt: DateTime

  // @column.dateTime({ autoCreate: true, autoUpdate: true })
  // declare updatedAt: DateTime
}
