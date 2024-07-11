const User = require("../models/UserModel");
const sendToken = require('../utils/jwt');

exports.registerUser = async (req,res,next) => {
    const {email} = req.body;
    const existUser = await User.findOne({email});
    if(existUser){
        return res.json({
            success:false,
            message:"User already registered"
        });
    }
    const user = await User.create(req.body);
    if(user) {
        console.log(user + "user registered successfully");
        return res.json({
            success:true,
            message:"User registered Successfully!"
        })
    }

}

exports.loginUser = async (req,res,next) => {
    console.log(req.body);
    const{email,password} = req.body;
    if(!email || ! password){
        return res.status(400).json({
            success:false,
            message:"Please enter email and password"
        });
    }

    const user = await User.findOne({email}).select("+password");
    if(!user){
        return res.status(400).json({
            success:false,
            message:"User not found",
        });
    }

    if(! await user.validatePassword(password)){
        return res.status(400).json({
            success:false,
            message:"Password incorrect!",
    });
    }
    return sendToken(user,201,res);
    // return res.status(201).json({
    //     success:true,
    //     message:"User Logged in successfully!",

    // });
}