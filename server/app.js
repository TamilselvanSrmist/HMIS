const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}));


module.exports = app;