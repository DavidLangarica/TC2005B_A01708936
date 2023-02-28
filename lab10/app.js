const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.end();
  }
});

server.listen(4000);
