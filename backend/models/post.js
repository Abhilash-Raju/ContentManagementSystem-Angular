const mongoose = require ('mongoose');

// Define a Schema
const Schema = mongoose.Schema;

const postSchema = new Schema({
    head:{
        type:String, 
        required: true 
        },
    subhead: {
        type:String, 
        required: true
        }, 
    body: {
        type:String, 
        required: true
        }, 
    postImagePath: {
        type:String
       },
    date: {
        type: String,
        required:true
        }
//     ,
//     authorname: {
//     type: String,
//     required: true
// }
});

const PostData = mongoose.model('post',postSchema);


module.exports = PostData
