/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const MenusController = () => import('../app/controllers/menus_controller.js')
router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('/menus', [MenusController, 'index'])
