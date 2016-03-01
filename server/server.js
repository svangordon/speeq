// =====START GLOBAL VAR DECLARATION=====
var express = require('express'),
  app = express(),
  path = require('path'),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  apiRoutes = require('./api_routes.js'),
  cors = require('cors');
// =======================================
// CONNECT TO LOCAL MONGO DB OR MONGOLABS
mongoose.connect('mongodb://localhost:27017/speeqerboxx', function (err) {
  if (err) console.log(err)
  console.log('Connected to MongoDB')
})
// =======================================
// SETUP MIDDLEWARE FOR API
app.set('port', process.env.PORT || 3000)
app.use(logger('dev'))
app.use(bodyParser.urlencoded({
  extended: true
}))

// Initialize routes to use
app.use('/api', apiRoutes)
// =======================================
// SET THE PORT TO RUN
app.use(express.static(path.join(__dirname, '../client')))
// =======================================
// Initialize routes to use
app.use('/', apiRoutes)
// =======================================
// SET THE PORT TO RUN
app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'))
})