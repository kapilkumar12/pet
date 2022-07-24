const pet = require("./routes/pet");
const petList = require('./routes/petList');
const AppRoutes = (app) => {
  app.use("/pet", pet)
  app.use("/petList", petList)
};

module.exports = AppRoutes;