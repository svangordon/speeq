var db = require('./models'),
	mongoose = require('mongoose'),
	restaurants = require('./data/restaurants.json');

// =======================================
// CONNECT TO LOCAL MONGO DB OR MONGOLABS
mongoose.connect('mongodb://localhost:27017/speeqerboxx', function (err) {
  if (err) console.log(err)
  console.log('Connected to MongoDB')
})

restaurants.forEach(function(cur, i) {
	var newRestaurant = new db.Restaurant(cur);
	console.log('item', i, newRestaurant)
	newRestaurant.save(function(err,doc) {
		if (err) {console.log(err);throw err}
		console.log('saved')
	})
})