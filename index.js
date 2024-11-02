const app = require("./app");

require("dotenv").config({path:"./config.env"});

app.listen(process.env.PORT, function () {
  console.log(`Server is running on port ${process.env.PORT}`);
});
