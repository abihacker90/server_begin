const http = require('http');
const url = require('url');
console.log("Ez azonnal indítás után lefut")

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  /* console.log("Ez az url: ", url) */
 /*  console.log(url.parse); */
  /* console.log(req.url); */
   if (req.url === "/") {
    console.log("Home meglátogatva");
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("<html> <head>server Response</head><body><h1> This page was render directly from the server <p>Hello there welcome to my website</p></h1></body></html>");
  } 
    else if (req.url === "/movies") {
    console.log("Movies meglátogatva");
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(`
    {
      "movies": [
        {
          "title": "Jurassic Park",
          "year": "1993"
        },
        {
          "title": "The Lord of the Rings",
          "year": "2001"
        }
      ]
    }
  `);
  }
    else {
      console.log("A következő oldal meglátogatva: ", req.url);
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end(`
        404: Not Found
      `)
  }
  /*  console.log("Ez a request: ", req); */
  /* console.log("Ez a response ", res) */
  console.log("A böngésző lekérése közben fut le!")

}).listen(8080);