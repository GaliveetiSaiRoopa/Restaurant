import Category from '#models/category'
import Menu from '#models/menu'
import type { HttpContext } from '@adonisjs/core/http'

export default class MenusController {
  public async index({ request, response }: HttpContext) {
    const category = request.qs().category
    const query = Menu.query()
    if (category) {
      const Cat = await Category.findByOrFail('categoryName', category)
      query.where('categoryId', Cat.id)
    }

    const menus = await query.preload('category').exec()
    return response.ok(menus)
  }

  public async dropdown() {
    const categories = await Category.query()
    return categories
  }

  public async store({ request, response }: HttpContext) {
    const data = request.only(['categoryName', 'itemslist'])
    const category = await Category.findByOrFail('categoryName', data.categoryName)
    const createMenus = await Menu.createMany(
      data.itemslist.map((it: any) => ({ name: it.item, price: it.price, categoryId: category.id }))
    )
    console.log(createMenus, 'CreatedMenus')
    return response.created({ message: 'Menu Item Created', data: createMenus })
  }

  public async update({ request, response, params }: HttpContext) {
    const data = request.only(['item', 'price', 'category'])

    const cat = await Category.findBy('categoryName', data.category)

    const menu = await Menu.findByOrFail(params?.id)

    if (data?.item) {
      menu.name = data?.item
    }
    if (data?.price) {
      menu.price = data?.price
    }
    if (cat) {
      menu.categoryId = cat.id
    }

    await menu.save()
    return response.ok({
      message: 'Menu updated successfully',
      data: menu,
    })
  }

  public async destroy({ params, response }: HttpContext) {
    console.log('DELETE called for ID:', params.id)
    const data = await Menu.find(params.id)

    if (!data) {
      return response.status(404).json({ message: 'Menu Not found' })
    }

    await data.delete()
    return response.ok({ message: 'Menu Deleted Successfully' })
  }

  public async categoryStore({ request, response }: HttpContext) {
    const data = request.only(['category_name', 'itemslist'])
    const CheckCategory = await Category.findBy('categoryName', data.category_name)
    if (CheckCategory) {
      return response.ok({ message: 'Category is already present' })
    }
    const category = await Category.create({ categoryName: data.category_name })

    if (data.itemslist && Array.isArray(data.itemslist)) {
      await category
        .related('menus')
        .createMany(data.itemslist.map((it: any) => ({ name: it.item, price: it.price })))
    }

    await category.load('menus')
    return response.created({ message: 'Category created successfully', data: category })
  }
}
