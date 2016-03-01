// =====START GLOBAL VAR DECLARATION=====
var ctrls = require('./controllers.js'),
  apiRouter = require('express').Router(),
  config = require('./config'),
  secret = 'studentRefactorU',
  db = require('./models')

// ======================================
// API routes
// Restaurants
apiRouter.route('api/restaurants')
	.post(ctrls.restaurant.create)
	.get(ctrls.restaurant.all)

apiRouter.route('api/restaurants/:_id')
	.get(ctrls.restaurant.get)
	.post(ctrls.restaurant.update)
	.delete(ctrls.restaurant.delete)

