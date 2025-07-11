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

router.get('/menus', [MenusController, 'index'])
router.post('/menus', [MenusController, 'store'])
router.delete('/menus/:id', [MenusController, 'destroy'])
router.put('/menus/:id', [MenusController, 'update'])
router.get('/categories', [MenusController, 'dropdown'])
router.post('/categories', [MenusController, 'categoryStore'])

router.get('/', async () => {
  return { message: 'API is running' }
})
