const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI,{
        // useNewUrlParser:true,
        // useUnifiedTopology:true
    }).then(con => {
        console.log("connected successfully");

    }).catch(err => {
        console.log("mongodb error",err);
    })
}

module.exports = connectDatabase;