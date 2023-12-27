var http = require('http');
var data = require('./test')
var url = require('url');
// require('dotenv').config();
const dotenv = require('dotenv');
dotenv.config();

http.createServer(function(req,res){
    // res.writeHead(200,{'Content-Type': 'application/json'});
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write("<h1>RAIT</h1>" + data.testModule())
    res.write("<br>")
    var query = url.parse(req.url,true).query;
    // res.write(query)
    console.log(query)
    res.end('<h3>welcome to rait...</h3>')
    console.log(process.env.PORT)
}).listen(process.env.PORT || 5000);

// hp-v22ow-64-gb-pen-drive/p/itmffqq2ehgega7a?pid=ACCG4SERD4X9STAF&lid=LSTACCG4SERD4X9STAFTPORHY&marketplace=FLIPKART&store=6bo%2Fjdy&srno=b_1_1&otracker=browse&fm=organic&iid=en_7N9rEIYW-dA14KbAA_omKGWPIe5FL-rho_dwxO2IUzYHp0XhZlSYw0h4sMCO2aI3C1qOm0NaML1ZsnRKDimLzA%3D%3D&ppt=browse&ppn=browse&ssid=ekgl7y720w0000001703571379275