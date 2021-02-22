const http = require('http');

function rqListener(req, res) {
    console.log(req);
}

const server = http.createServer(rqListener);

// http.createServer(function(req, res) {
//    
//});

server.listen(3000);
