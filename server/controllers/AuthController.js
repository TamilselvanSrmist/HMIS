const User = require("../models/UserModel");

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