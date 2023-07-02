// const mongoose = require('mongoose');

// const userSchema = mongoose.Schema({
//     name: {type: String , require} , 
//     email: {type: String , require} , 
//     password: {type: String , require}, 
//     isAdmin: {type: Boolean , require, default: false},
// },
//     {
//         timestamps: true,
//     }

// })



const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
},
{
    timestamps: true,
});

// Rest of the code...
module.exports =mongoose.model('users', userSchema);
