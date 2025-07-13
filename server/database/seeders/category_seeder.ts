import Category from '#models/category'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Category.createMany([
      { categoryName: 'Starters' },
      { categoryName: 'Main Course' },
      { categoryName: 'Beverages' },
      { categoryName: 'Desserts' },
      { categoryName: 'Combos' },
    ])
  }
}
