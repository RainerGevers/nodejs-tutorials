const http = require("http");
const routes = require("./routes");

function rqListener(req, res) {
  // console.log(req.url, req.method, req.headers);
  // process.exit();
}

const server = http.createServer(routes.handler);

// http.createServer(function(req, res) {
//
//});

server.listen(4100, "0.0.0.0");
