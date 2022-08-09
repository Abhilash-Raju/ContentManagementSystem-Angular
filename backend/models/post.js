const mongoose = require ('mongoose');

// Define a Schema
const Schema = mongoose.Schema;

const postSchema = new Schema({
    head:{
        type:String, 
        required: true,
        unique:true 
    },
    subhead: {
        type:String, 
        unique:true ,
        required: true
    }, 
    body: {
        type:String, 
        unique:true ,
        required: true
    },
    date: {
        type: String,
        required:true
    },
    authorname: {
        type: String,
        required:true
        },
    category :{
        type:String,
        required:true
    }
});

const PostData = mongoose.model('post',postSchema);


module.exports = PostData
