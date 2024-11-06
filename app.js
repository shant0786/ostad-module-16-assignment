const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
const cors = require("cors");
const hpp = require("hpp");
const helmet = require("helmet")
const cookieParser = require("cookie-parser")
// const fileUpload=require("express-fileupload")
const xss = require("xss-clean")
const router = require("./src/routes/blogRoutes");

const app = new express();


// Middlewares 
app.use(cors());
app.use(hpp())
app.use(helmet())
app.use(cookieParser())
app.use(xss())


// version control for better maintainability, debugging, updating
app.use("/api/v1", router);

// undefined routes handling
app.use('*', (req, res)=> {
    res.status(404).json({ message: `Page not found please try again correct path`});
})

module.exports = app;
