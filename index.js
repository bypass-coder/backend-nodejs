var http = require('http');
var data = require('./test')

http.createServer(function(req,res){
    // res.writeHead(200,{'Content-Type': 'application/json'});
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write("<h1>RAIT</h1>" + data.testModule())
    res.end('<h3>welcome to rait...</h3>')
}).listen(8787);


