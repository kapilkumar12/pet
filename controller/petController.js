const Pet = require("../model/Pet");
class petController {
  static view = (req, res) => {
    try {
      return res.render("pet");
    } catch (error) {
      console.log(error);
    }

 
  };
}
module.exports = petController;