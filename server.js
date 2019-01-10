var app = require('./router/app');
var port = process.env.PORT || 4447;

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});