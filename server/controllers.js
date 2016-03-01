var db = require('./models'),
  request = require('request'),


module.exports = {
  // ==========================================
  // User Controller Object
  // ==========================================
  user: {
    upsert: function(req,res) {
      console.log('creating user')
      var user = new db.User(req.body)
      var options = {upsert: true, new: true}
      db.Users.findOneAndUpdate({_id : user._id}, user, options, function (err, doc) {
        if (err) throw err
        console.log('doc updated')
        res.json(doc)
      })
    },
    all: function(req,res) {
      console.log('Getting all users')
      db.User.find({}, function (err, users) {
        if (err) throw err
        res.json(users)
      })
    },
  },
  restaurant: {
    all: function(req,res) {
      console.log('Getting all restaurants')
      db.Restaurant.find({}, function (err, restaurants) {
        if (err) throw err
        res.json(restaurants)
      })
    }
    upsert: function(req,res) {
      console.log('creating restaurant')
      var user = new db.User(req.body)
      var options = {upsert: true, new: true}
      db.User.findOneAndUpdate({_id : user._id}, user, options, function (err, doc) {
        if (err) throw err
        console.log('doc updated')
        res.json(doc)
      })
    },
    get: function(req,res) {
      var restaurantId = req.params._id;
      db.Restaurant.find({_id: restaurantId}, function(err, restaurant) {
        if (err) throw err
          res.json(restaurant)
      })
    }
},
  review: {
    upsert: function(req,res) {
      console.log('creating review')
      var review = new db.Review(req.body)
      var options = {upsert: true, new: true}
      db.Review.findOneAndUpdate({_id : user._id}, user, options, function (err, doc) {
        if (err) throw err
        console.log('doc updated')
        res.json(doc)
      })
    },
    // delete: function(req,res) {},
    get: function(req,res) {
      var reviewId = req.params._id
      db.Review.find({_id: reviewId}, function(err, review) {
        if (err) throw err
        console.log('doc updated')
        res.json(doc)
      })
    },
  }
  
    
}
