// =====START GLOBAL VAR DECLARATION=====
var ctrls = require('./controllers.js'),
  apiRouter = require('express').Router(),
  db = require('./models');

// ======================================
// API routes
// Restaurants
apiRouter.route('api/restaurants')
	.post(ctrls.restaurant.upsert)
	.get(ctrls.restaurant.all)

apiRouter.route('api/restaurants/:_id')
	.get(ctrls.restaurant.get)
	.post(ctrls.restaurant.upsert)
	// .delete(ctrls.restaurant.delete)

// Users
apiRouter.route('api/users')
	.get(ctrls.user.all)
	.post(ctrls.user.upsert)

apiRouter.route('api/user/:_id')
	.get(ctrls.user.get)

// Reviews
apiRouter.route('api/review/_id')
	.get(ctrls.review.get)
	// .delete(ctrls.review.delete)

apiRouter.route('api/reviews/')
	.post(ctrls.review.upsert)

module.exports = apiRouter