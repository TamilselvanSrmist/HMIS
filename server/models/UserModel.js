const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Please enter your name"],
        maxLengtth: [30, "Name cannot exceeds 30 characters"],
    },
    email:{
        type: String,
        required: [true,"Please enter your Email"],
        unique: true,
        validate: [validator.isEmail, 'Invalid Email'],
    },
    role:{
        type: String,
        enum: {
            values:['doctor','patient','nurse','admin','pharmacist'],
        },
        required: true,

    },
    password:{
        type:String,
        required: [true, "Password is required!"],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }

});

userSchema.pre('save',async function(next) {
    this.password = await bcrypt.hash(this.password,10);
});

let User = mongoose.model('User', userSchema);

module.exports = User;