var http = require('http');
var app = require('./config/express')();
const url = 'mongodb+srv://dbUser_Application:*****@cluster.azvt4.azure.mongodb.net/ifsp?retryWrites=true&w=majority';

require('./config/database.js')(url);

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express Server escutando na porta ' + app.get('port'));
});