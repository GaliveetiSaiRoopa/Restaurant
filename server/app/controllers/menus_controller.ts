import Category from '#models/category'
import Menu from '#models/menu'
import type { HttpContext } from '@adonisjs/core/http'

export default class MenusController {
  public async index({ request }: HttpContext) {
    const menus = await Menu.query().preload('category')
    return menus
  }

  public async dropdown({ request }: HttpContext) {
    const categories = await Category.query()
    return categories
  }

  public async store({ request, response }: HttpContext) {
    const data = request.only(['categoryName', 'itemslist'])
    const category = await Category.findByOrFail('categoryName', data.categoryName)
    const createMenus = await Menu.createMany(
      data.itemslist.map((it: any) => ({ name: it.item, price: it.price, categoryId: category.id }))
    )

    return response.created({ message: 'Menu Item Created', data: createMenus })
  }
}
