const {Doctor,specializationEnum} = require('../../models/Doctors/InfoModel');
const User = require('../../models/UserModel');


exports.addDoctor = async(req,res,next) => {
   const {name,password,email,role,firstName,middleName,lastName,dob,gender,address,city,state,country,pinCode,degree,mobile,department,specialization} = req.body;
  try{
   const existUser = await User.findOne({email});
   console.log(req.body);
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
    // res.json({
    //     success:true,
    //     message:"User Registered Successfully",
    //     userCredentials
    // });
   }

   if(userCredentials._id){
    const userId = userCredentials._id;
    const info = await Doctor.create({
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
    if (!res.headersSent) {
        res.status(500).json({
          success: false,
          message: "Internal Server Error"
        });
      } else {
        console.error('Error occurred:', error); // Log the error for debugging
      }
}


}