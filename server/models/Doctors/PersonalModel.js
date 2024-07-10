const mongoose = require('mongoose');

const PersonalDetails = new mongoose.Schema({
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
      image:{
        type:String
      }
});

let PersonalDetail = mongoose.model('PersonalDetails',PersonalDetails);
module.exports = {PersonalDetail};