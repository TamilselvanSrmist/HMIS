const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const users = require('./routes/user');
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}));

app.use('/api/workshop',users);


module.exports = app;