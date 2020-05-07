const mongoose=require('mongoose')
const Schema=mongoose.Schema

const bookSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        default:""
    },
    link:{
        type:String,
        required:true
    },
    preview:{
        type:String,
        default:""
    }
})

module.exports=mongoose.model('reacts',bookSchema)