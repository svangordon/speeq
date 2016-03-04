// =====START GLOBAL VAR DECLARATION=====
var express = require('express'),
  app = express(),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  apiRoutes = require('./api_routes.js');
// =======================================
// CONNECT TO LOCAL MONGO DB OR MONGOLABS
mongoose.connect('mongodb://localhost/speeqerboxx', function (err) {
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
app.use(bodyParser.json())

// Set static
app.use(express.static(__dirname + '/../public'))
// =======================================

// Initialize routes to use
app.use('/api', apiRoutes)
// =======================================
// Initialize routes to use
// app.use('/', apiRoutes)
// =======================================

// home route
app.get('/', function (req, res) {
  res.sendFile('index.html', {root: 'public'})
})

// SET THE PORT TO RUN
app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'))
})