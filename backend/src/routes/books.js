const mongoose=require('mongoose')
const express=require('express')
const route=express.Router()
const bookSchema=require('../model')

route.post('/add',(req,res)=>{
    const model=new bookSchema(req.body)
    model.save()
        .then((doc)=>res.send('successfully added book'))
        .catch((err)=>res.json(err))
})

route.get('/get',(req,res)=>{
    bookSchema.find()
        .then((doc)=>res.json(doc))
        .catch((err)=>res.json(err))
})

module.exports=route