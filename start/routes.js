'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.group( () => {
    Route.get('/login', 'Auth/LoginController.index').as('login.index')
    Route.post('/login', 'Auth/LoginController.store').as('login.store').validator('Login')
    Route.get('/register', 'Auth/RegisterController.index').as('register.index')
    Route.post('/register', 'Auth/RegisterController.store').as('register.store').validator('Registration')
}).middleware(['guest'])

Route.group( () => {
    Route.get('/logout', 'Auth/RegisterController.logout')
    Route.get('/dashboard', 'DashboardController.index')
    
}).middleware(['auth'])