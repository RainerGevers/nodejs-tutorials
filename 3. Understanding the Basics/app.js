const http = require('http');

function rqListener(req, res) {
    // console.log(req.url, req.method, req.headers);
    // process.exit();
    res.setHeader('Content-Type', 'application/json');
    res.write('{text: "hello"}');
    res.end();
}

const server = http.createServer(rqListener);

// http.createServer(function(req, res) {
//    
//});

server.listen(3000);
