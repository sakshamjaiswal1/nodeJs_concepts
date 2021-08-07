 const fs =require('fs')
 const http =require('http')

const server=http.createServer((req,res)=>{
 const data= fs.readFileSync('../userApi/userApi.json',"utf-8")
    if (req.url=='/'){res.end('Welcome to home')}
   else if (req.url=='/about'){res.end('About Us')}
   else if (req.url=='/userapi'){
    res.writeHead(404,{"Content-type":'applicationh/json'})
    
    res.end(data)
   }

   else{
       res.writeHead(404,{"Content-type":'text/html'})
       res.end('<h1>page does not exist</h1>')
   }
    
})

server.listen(8000,'127.0.0.1',()=>{
    console.log(' listening to port 8000')
})