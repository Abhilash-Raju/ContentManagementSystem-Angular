const mongoose = require ('mongoose');

// Define a Schema
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    categoryName:{
        type:String, 
        required: true },
    about:  {
        type:String, 
        required: true
        }
});


const CategoryData = mongoose.model('category',categorySchema);


module.exports = CategoryData