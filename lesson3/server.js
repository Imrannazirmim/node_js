
//server create

const http = require('http');
const port = 8000;
const hostname = '127.0.0.1'

const server = http.createServer((req, res)=>{
    res.end('hi, i am new server')
});

server.listen(port, hostname, ()=> {
    console.log(`server is running succesfully at http://${hostname}:${port}`)
})