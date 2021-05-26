const http=require('http');

const server=http.createServer((req,res)=>{
    res.end('hello world......this is node.....');

});

server.listen(8080,()=>{
    console.log('Server is running......');

});