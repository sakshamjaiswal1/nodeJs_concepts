const express =require('express')
const app =express()
const port = 8000;

app.get('/',(req,res)=>{
    res.send('welcome to our home page')
})

app.get('/about',(req,res)=>{
    res.write('<p>welcome to our about page</p>')
    res.write('<p>welcome to  ccccc our about  ccc page</p>')
    res.send()
})
app.get('/contact',(req,res)=>{
    res.send('welcome to our contact page')
})

app.get('/temp',(req,res)=>{
    res.send({
        id:1,
        name:'Saksham Jaiswal'    
    })
})

app.listen(port,()=>{
    console.log(`listening to port no ${port}`)
})