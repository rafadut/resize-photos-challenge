var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/imageListModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/Imagedb'); 
mongoose.connect('mongodb://rafadut:imagelist@ds143907.mlab.com:43907/imagedb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/imageListRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('image list RESTful API server started on: ' + port);
