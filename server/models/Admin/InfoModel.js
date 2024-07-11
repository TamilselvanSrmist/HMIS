const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required!"],
    maxLength: [30, "First Name does not exceeds 30 characters"],
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required!"],
    maxLength: [30, "Last Name does not exceeds 30 characters"],
  },
  dob: {
    type: Date,
    required: [true, "Date of Birth is required"],
  },
  gender: {
    type: String,
    enum: {
      values: ["Male", "Female", "Others"],
    },
  },
  address: {
    type: String,
    required: [true, "Address is required"],
    maxLength: [200, "address cannot exceeds 300 characters"],
  },
  city: {
    type: String,
    required: [true, "City is required!"],
    maxLength: [30, "It cannot exceeds 30 characters"],
  },
  state: {
    type: String,
    required: [true, "State is required!"],
  },
  country: {
    type: String,
    required: [true, "Country is required!"],
  },
  pinCode: {
    type: String,
    required: [true, "Zip code is required!"],
    maxLength: [6, "Zip code must be exactly 6 characters"],
    minLength: [6, "Zip code must be exaclty 6 characters"],
  },
  degree: {
    type: String,
    required: [true, "Degree is required"],
  },
  mobile: {
    type: String,
    required: [true, "Mobile Number is required!"],
    maxLength: [10, "Mobile Number must be exaclty 10 numbers"],
    minLength: [10, "Mobile Number must be exaclty 10 numbers"],
  },
//   department: {
//     type: String,
//     required: [true, "Department is required!"],
//     enum: {
//       values: [
//         "General Physician",
//         "Hand Tools",
//         "Indoor Tools",
//         "Outdoor Tools",
//         "Power Tools",
//         "Psicologia",
//       ],
//     },
//   },
//  specialization:{
//   type:String,
//   required:[true,"Specialization is required!"]
//  },
  userId : {
    type:mongoose.Schema.Types.ObjectId, ref: 'User'
  },
  createdAt: {
    type:Date,
    default:Date.now(),
  }
});


let Admin = mongoose.model('Admin',AdminSchema);
module.exports = {Admin};





