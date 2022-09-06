const http = require('http')

//send text as response
const server1 = http.createServer((req,res)=>{
    res.setHeader('content-type','text/plain');
    res.write("hello world!");
    res.end();
})


//send html as response
const server = http.createServer((req,res)=>{
    res.setHeader('content-type','text/html');
    res.write("<h1>hello world</h1>");
    res.end();
})

server.listen(3004,'localhost',()=>{
    console.log('server started');
})
