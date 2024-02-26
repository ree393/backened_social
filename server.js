const dotenv = require('dotenv');
const express = require('express');
const cookieParser = require("cookie-parser");

const cors = require('cors');
const connectDB = require('./config/db');
dotenv.config();
connectDB()
const app = express();
app.use(cors());



//using middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cookieParser());
//importing routes
const post = require("./routes/post");
const user = require("./routes/user");

//using routes
app.use("/api/v1",post);
app.use("/api/v1",user);





















const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Node server is running in ${process.env.DEV_MODE} ModeON port ${process.env.PORT}`);
})