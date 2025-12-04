
// File: app.js

const { response } = require('express');
const express = require('express');
const app = express();
app.use(express.json());

const port = 8081;

let todoList = ["Complete Node Byte", "Play Cricket"];

app.get('/todos', (req, res) => {
    const reqPath = req.url;
    const reqMethod = req.method;
    console.log(reqPath, reqMethod);

    res.statusMessage = "Hey, I changed my location to this endpoint, /user/todos. You can catch me up there. Love, /todos";
    res.status(302);
    res.location('user/todos');
    res.send();
    // res.send(todoList);
})

app.get('/user/todos', (req, res) => {
    const reqPath = req.url;
    const reqMethod = req.method;
    console.log(reqPath, reqMethod);

    res.send(todoList);
})

app.post('/todos', (req, res) => {
    const data = req.body.name;
    todoList.push(data);
    console.log(todoList);
    res.json(todoList);
})

app.delete('/todos', (req, res) => {
    const val = req.body.name;

    for(let i=0; i<todoList.length; i++){
        if(todoList[i] === val){
            todoList.splice(i,1);
        }
    }
    console.log(todoList);
    res.json(todoList);
})

app.listen(port, () => {
    console.log("server is up at port 8081");
})


