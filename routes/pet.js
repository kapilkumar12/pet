const router = require("express").Router();
const PetController = require("../controller/petController");
// const Auth = ("../middleware/auth.js")

router.get("/", PetController.view);

module.exports = router;
