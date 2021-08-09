
// "api.openweathermap.org/data/2.5/weather?q=delhi&appid=f6834e45ab9e82214e39fe23d9729ba0"

 const http =require('http')
 const fs=require('fs')
 const requests=require('requests')


 const homeFile =fs.readFileSync('home.html','utf-8')

 const replaceVal=(tempVal,orgVal)=>{
let temperature=tempVal.replace("{%tempval%}",orgVal.main.temp)
temperature=temperature.replace("{%tempmin%}",orgVal.main.temp_min)
temperature=temperature.replace("{%tempmax%}",orgVal.main.temp_max)
temperature=temperature.replace("{%location%}",orgVal.name)
temperature=temperature.replace("{%country%}",orgVal.sys.country)
temperature=temperature.replace("{%temperature%}",orgVal.weather[0].main)

return temperature
 }

 const server =http.createServer((req,res)=>{
     if(req.url=='/'){
    requests("http://api.openweathermap.org/data/2.5/weather?q=london&appid=f6834e45ab9e82214e39fe23d9729ba0") 
    .on('data',(chunk)=>{
        const objData=JSON.parse(chunk)
        const arrData=[objData]
        // console.log(arrData[0].main.temp)
       const realTimeData =  arrData.map((val)=>replaceVal(homeFile,val)).join('')
       res.write(realTimeData)
    // console.log(realTimeData)
    })
    .on('end',(err)=>{
         if(err) return console.log('connection closed due to errors ',err)
         console.log('end')
    })
    
    }
    else{
        res.end('File Not Found')
    }
 })

 server.listen(8000,"127.0.0.1")