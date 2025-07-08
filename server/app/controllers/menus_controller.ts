import Menu from '#models/menu'
import type { HttpContext } from '@adonisjs/core/http'

export default class MenusController {
  public async index({ request }: HttpContext) {
    const menus = await Menu.query().preload('category')

    return menus
  }
}
