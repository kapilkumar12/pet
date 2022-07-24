const express = require("express");
// const app = express();
require("dotenv").config();




const AppRoutes = require("./app-routes");
require("./config/db");
const app = express(),
  {
    env: {
      DB_CONNECT,
      PORT
    },
  } = process;



// app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
;

app.use(express.json({}))

AppRoutes(app);
app.listen(PORT, (req, res) => {
  console.log(`server started on ${PORT}`);
});