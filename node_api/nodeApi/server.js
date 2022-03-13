const express = require("express")
const dotenv = require("dotenv")
const bodyParser=require('body-parser')
dotenv.config({
  path:'./config/config.env',
});




const app = express();
//处理静态资源
app.use(express.static('public'))
//处理参数
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
const PORT = process.env.PORT || 3000;


app.listen(PORT,console.log(`Server rnning in ${process.env.NODE_ENV} mode on port ${PORT}`))

// 移动过来的

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods',
        'PUT,GET,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers",
        "X-Requested-With");
    res.header('Access-Control-Allow-Headers',
        'Content-Type');
    next();
});

// http://localhost:5000/
app.get("/",(req,res)=>{
  // res.send("<h1>Hello World</h1>") 发送HTML
  // res.send({mag:"Hello World"}) 发送json格式数据
  // res.json({success:true}) 发送json格式数据
  // res.sendStatus(400) 发送状态码
  res.status(200).json({success:true,msg:"Hello World"}) //发送状态码和json数据
})

app.get("/delay1",(req,res)=>{
  // res.send("<h1>Hello World</h1>") 发送HTML
  // res.send({mag:"Hello World"}) 发送json格式数据
  // res.json({success:true}) 发送json格式数据
  // res.sendStatus(400) 发送状态码

	    setTimeout(function() {
            res.send('hello 1')
        }, 1000)
})

app.get("/delay2",(req,res)=>{
  // res.send("<h1>Hello World</h1>") 发送HTML
  // res.send({mag:"Hello World"}) 发送json格式数据
  // res.json({success:true}) 发送json格式数据
  // res.sendStatus(400) 发送状态码

	   setTimeout(function() {
            res.send('hello 2')
        }, 2000)
})

app.get("/delay3",(req,res)=>{
  // res.send("<h1>Hello World</h1>") 发送HTML
  // res.send({mag:"Hello World"}) 发送json格式数据
  // res.json({success:true}) 发送json格式数据
  // res.sendStatus(400) 发送状态码

	   setTimeout(function() {
            res.send('hello 3')
        }, 3000)
})



app.get("/json",(req,res)=>{
  res.json({
	  name:'lisa',
	  age:14,
	  gender:'nan'
  })
})

app.get("/books",(req,res)=>{
  // res.send("<h1>Hello World</h1>") 发送HTML
  // res.send({mag:"Hello World"}) 发送json格式数据
  // res.json({success:true}) 发送json格式数据
  // res.sendStatus(400) 发送状态码
  res.send('传统url传递参数！'+req.query.id)
})

app.get("/books/:id",(req,res)=>{
  // res.send("<h1>Hello World</h1>") 发送HTML
  // res.send({mag:"Hello World"}) 发送json格式数据
  // res.json({success:true}) 发送json格式数据
  // res.sendStatus(400) 发送状态码
  res.send('Restful传递参数！'+req.params.id)
})

app.get("/tom",(req,res)=>{
  // res.send("<h1>Hello World</h1>") 发送HTML
  // res.send({mag:"Hello World"}) 发送json格式数据
  // res.json({success:true}) 发送json格式数据
  // res.sendStatus(400) 发送状态码
  res.status(200).json({success:true,msg:"Hello tom"}) //发送状态码和json数据
})

app.get("/cc",(req,res)=>{
  // res.send("<h1>Hello World</h1>") 发送HTML
  // res.send({mag:"Hello World"}) 发送json格式数据
  // res.json({success:true}) 发送json格式数据
  // res.sendStatus(400) 发送状态码
  res.status(200).json({success:true,msg:"Hello cc"}) //发送状态码和json数据
})


app.get("/data",(req,res)=>{
  // res.send("<h1>Hello World</h1>") 发送HTML
  // res.send({mag:"Hello World"}) 发送json格式数据
  // res.json({success:true}) 发送json格式数据
  // res.sendStatus(400) 发送状态码
  res.status(200).json({success:true,msg:"Hello World"}) //发送状态码和json数据
})


app.post('/books',(req,res) =>{
	res.send(`post传递参数`+req.body.name+' '+req.body.pwd)
})


app.put('/books/:id',(req,res) =>{
	res.send(`put传递参数`+req.params.id+'--'+req.body.name+' '+req.body.pwd)
})



// http://localhost:5000/api:id
app.get("/api/:id",(req,res)=>{
  res.status(200).json({success:true,msg:`根据${req.params.id}获取单个数据`})
})
// http://localhost:5000/api
app.post("/api",(req,res)=>{
  res.status(200).json({success:true,msg:`创建新的数据`})
  
  //res.send(`123`)
})
// http://localhost:5000/api:id
app.put("/api/:id",(req,res)=>{
  res.status(200).json({success:true,msg:`根据${req.params.id}更新数据`})
})
// http://localhost:5000/api:id
app.delete("/api/:id",(req,res)=>{
  res.status(200).json({success:true,msg:`根据${req.params.id}删除数据`})
})