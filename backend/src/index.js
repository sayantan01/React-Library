const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const path=require('path')
app.use((req,res,next)=>{
    //res.header('Access-Control-Allow-Origin','*')
    res.header()
    next()
})
app.use(bodyParser.json())


const uri=process.env.MONGODB_URI || "mongodb+srv://sayantan:mydatabase0@cluster0-ve4hp.gcp.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(uri,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex: true, useFindAndModify: false})
mongoose.connection.once('open',()=>console.log('successfully connected to db'))

app.use(express.static(path.join(__dirname+'../../../client/build')))


const bookRoute=require('./routes/books')
app.use('/books',bookRoute)

app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname+'../../../client/build/index.html'))
})
app.get('/Add',(req,res)=>{
	res.sendFile(path.join(__dirname+'../../../client/build/index.html'))
})
app.get('/Library',(req,res)=>{
	res.sendFile(path.join(__dirname+'../../../client/build/index.html'))
})

const PORT=process.env.PORT || 4000
app.listen(4000,()=>console.log(`server up on port ${PORT}`))