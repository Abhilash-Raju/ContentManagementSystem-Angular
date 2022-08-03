const mongoose = require ('mongoose');

// Define a Schema
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type:String, 
        unique: true, 
        required: true },
    email: {
        type:String, 
        required: true,
        unique: true, 
        match:/[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/},
    sub : {
        type:Boolean,
        required: true
    },
    password: {
        type:String, 
        required: true
        },
    confirmPassword: {
        type:String, 
        required: true
        },
    role:  {
        type:String, 
        required: true
}
});


const User = mongoose.model('user',userSchema);


module.exports = User