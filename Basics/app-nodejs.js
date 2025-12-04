// Server using nodeJS

const http = require('http');

const port = 8081;

let todoList = ["Complete Node Byte", "Play Cricket"];



http.createServer((request, response) => {

    // Set response status code and response headers
   

    // req path and type
    const reqPath = request.url;
    const reqMethod = request.method;
    console.log(reqPath, reqMethod);

    if(reqPath === '/todos' && reqMethod === 'GET'){
        // Set response body i.e, data to be sent
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write('<h1>TODO list</h1>');
        response.write(JSON.stringify(todoList));
        // Tell the server the response is complete and to close the connection
        response.end();

    }
    // else if(reqMethod !== 'GET'){
    //     response.writeHead(501,'Not Implemented' , { 'Content-Type': 'text/plain' });
    //     // Tell the server the response is complete and to close the connection
    //     response.end();

    // }
    // else if(reqPath !== '/todos'){
    //     response.writeHead(404, 'Not Found', { 'Content-Type': 'text/plain' });
    //     // Tell the server the response is complete and to close the connection
    //     response.end();

    // }
    else if(reqPath === '/todos' && reqMethod === 'POST'){

        let body = '';

        request.on('error', (err) => {
            console.error(err);
        }).on('data', (part) => {
            body+=part;
        }).on('end', () => {
            body = JSON.parse(body);
            todoList.push(body.name);
            console.log(todoList);
            response.writeHead(201);
            response.end();
        })

        
        
    }
    else if (reqPath === '/todos' && reqMethod === 'DELETE'){

        let body='';

        request.on('error', (err) => console.error(err)).on('data', (data) => {
            body+= data;
        }).on('end', () => {
            body = JSON.parse(body);
            const val = body.name;

            for(let i=0; i<todoList.length; i++){
                if(todoList[i] === val){
                    todoList.splice(i, 1);
                }
            }

            console.log(todoList);
            response.writeHead(204);
            response.end();
        })
    }


    


}).listen(port, () => {

    // Log text to the terminal once the server starts

    console.log(`Nodejs server started on port ${port}`)

});
