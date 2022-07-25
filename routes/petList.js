const router = require('express').Router();
const PetListController = require("../controller/petListController")
const validation = require("../config/validation")
router.get("/", PetListController.view)

router.post("/addPet", PetListController.addPet);
router.post("/datatableData", PetListController.datatableData)


router.post("/editPet",PetListController.editPet);

router.get("/id", PetListController.id);
router.post("/petdelete", PetListController.petdelete);


router.get("/updatePet", PetListController.updatePet);


module.exports = router;