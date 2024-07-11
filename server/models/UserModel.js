const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


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
            values:['doctor','patient','nurse','admin','pharmacist','attender'],
        },
        required: true,

    },
    password:{
        type:String,
        required: [true, "Password is required!"],
        select:false,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }

});

userSchema.pre('save',async function(next) {
    this.password = await bcrypt.hash(this.password,10);
});

userSchema.methods.validatePassword = async function(password) {
    return await bcrypt.compare(password,this.password);
}

userSchema.methods.getJwtToken = function (){
    return jwt.sign({id: this.id}, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES_TIME
    });
}

let User = mongoose.model('User', userSchema);

module.exports = User;