const http = require('http');

function rqListener(req, res) {
    console.log(req);
    // process.exit();
}

const server = http.createServer(rqListener);

// http.createServer(function(req, res) {
//    
//});

server.listen(3000);
