var express = require('express');
var app = express();
var cors = require('cors')
var bodyParser = require('body-parser');
app.use(bodyParser.json())
 
app.use(cors())
const db = require('./app/config/db.config.js');
const setting = db.settings;

// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
  setting.create({history:true})
});

require('./app/route/keyword.route.js')(app);
require('./app/route/site.route.js')(app);
require('./app/route/setting.route.js')(app);
 
// Create a Server
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})