const mongoose = require ('mongoose');

// Define a Schema
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    category:{
        type:String, 
        required:true,
        unique:true },
    about:  {
        type:String, 
        required: true
        }
});


const CategoryData = mongoose.model('category',categorySchema);


module.exports = CategoryData