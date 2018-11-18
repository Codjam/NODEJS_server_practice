const http = require('http');
const routes = require('./routs.js');


console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(7000);
