const express = require("express");
const router = require("./src/routes/blogRoutes");
const app = new express();

// version control for better maintainability, debugging, updating
app.use("/api/v1", router);

// undefined routes handling
app.use('*', (req, res)=> {
    res.status(404).json({ message: `Page not found please try again correct path`});
})

module.exports = app;
