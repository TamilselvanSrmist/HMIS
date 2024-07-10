const {Doctor} = require('../../models/Doctors/InfoModel');
const User = require('../../models/UserModel');


exports.addDoctor = async(req,res,next) => {
   const {name,password,email,role,firstName,middleName,lastName,dob,gender,address,city,state,country,pinCode,degree,mobile,department,specialization} = req.body;
  try{
   const existUser = await User.findOne({email});
  
   if(existUser){
    return res.status(400).json({
        success:false,
        message:"User already registered!"
    });
   }
   const userCredentials = await User.create({
    name,
    email,
    role,
    password,
   });
   if(userCredentials){
    console.log("before  "+ userCredentials);
   
   }
   if(userCredentials._id){
    const userId = userCredentials._id;
    const info = new Doctor({
     firstName,
     middleName,
     lastName,
     dob,
     gender,
     address,
     city,
     state,
     country,
     pinCode,
     degree,
     mobile,
     department,
     specialization,
     userId

    });

    await info.save();

    if(info){
     
        res.status(201).json({
            success:true,
            message:"Doctor information added successfully"
        });
    }
    
   }
   console.log("after" + userCredentials);
}
catch (error){
    
        console.error('Error occurred:', error); // Log the error for debugging
      
}


}