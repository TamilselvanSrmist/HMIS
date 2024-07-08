const User = require("../models/UserModel");

exports.registerUser = async (req,res,next) => {
    const {email} = req.body;
    if(email){
        return res.json({
            success:false,
            message:"Email already registered!"
        })
    }
    const user = await User.create(req.body);
    if(user) {
        return res.json({
            success:true,
            message:"User registered Successfully!"
        })
    }

}