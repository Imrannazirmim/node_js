

const http = require('http');
const port = 8000;
const hostname = '127.0.0.1'

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('<h1>hi, i am imran i get post data</h1>')
    res.end()
})

server.listen(port, hostname, ()=>{
    console.log(`server is running succesfully at http://${hostname}:${port}`)
})