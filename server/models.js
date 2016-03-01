var  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  // Restaurant Model
  restaurantSchema = new Schema({
    name: {type: String},
    cuisine: {type: String},
    price: {type: Number},
    reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}],
    address: {type: String},
    rating: Number
  }),
  // User Model
  userSchema = new Schema({
    displayName: {type: String, required: true},
    pic: {type: String, required: true},
    preferences: [{type: String}]
  }),
  // Review Model
  reviewSchema = new Schema({
    restaurant: {type: Schema.Types.ObjectId, ref: 'Restaurant'},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    rating: Number,
    content: String
  })

module.exports = {
  Restaurant: mongoose.model('Restaurant', restaurantSchema),
  User: mongoose.model('User', userSchema),
  Review: mongoose.model('Review', reviewSchema)
}