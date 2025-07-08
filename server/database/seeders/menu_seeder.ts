import Category from '#models/category'
import Menu from '#models/menu'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const starters = await Category.findByOrFail('categoryName', 'Starters')
    const mainCourse = await Category.findByOrFail('categoryName', 'Main Course')
    const beverages = await Category.findByOrFail('categoryName', 'Beverages')
    const desserts = await Category.findByOrFail('categoryName', 'Desserts')
    const combos = await Category.findByOrFail('categoryName', 'Combos')

    await Menu.createMany([
      { name: 'Spring Rolls', price: 99.99, categoryId: starters.id },
      { name: 'Chicken Tikka', price: 149.99, categoryId: starters.id },
      { name: 'Paneer Butter Masala', price: 199.5, categoryId: mainCourse.id },
      { name: 'Veg Biryani', price: 179.0, categoryId: mainCourse.id },
      { name: 'Coke', price: 49.99, categoryId: beverages.id },
      { name: 'Mango Lassi', price: 59.0, categoryId: beverages.id },
      { name: 'Chocolate Lava Cake', price: 89.0, categoryId: desserts.id },
      { name: 'Gulab Jamun', price: 45.0, categoryId: desserts.id },
      { name: 'Family Combo Meal', price: 499.0, categoryId: combos.id },
      { name: 'Lunch Box', price: 249.0, categoryId: combos.id },
    ])
  }
}
