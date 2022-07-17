const mongoose = require ('mongoose');

// Define a Schema
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type:String, 
        required: true },
    email: {
        type:String, 
        required: true,
        index: {
            unique: true, 
        },
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


module.exports = mongoose.model('user',userSchema,'user')
