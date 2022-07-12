const http = require("http");

http
    .createServer((request, response) => {
        response.writeHead(200, {"Content-Type": "application/json" });

        if(request.url === '/product') {
            response.end(
                JSON.stringify({
                message: "Router of product"
            }));
        }

        if (request.url === '/users') {
            response.end(
                JSON.stringify({
                message: "Router of users"
            }));
        }
        
        response.end(JSON.stringify({
            message: "Any Router"
        }));
    })
    .listen(4001, () => console.log("Servidor está rodando na porta 4001"));

