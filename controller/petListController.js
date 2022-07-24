
const datatablesQuery = require("datatables-query");

const Pet = require("../model/Pet");





class PetListController {
  static view = async (req, res) => {
    try {

      const pet = await Pet.find();
      console.log(pet);
      return res.render("../views/petList", {
        pet,
      });
    } catch (error) {
      console.log(error);
    }
  };

  static datatableData = async (req, res) => {
    try {
      const params = req.body;
      const query = datatablesQuery(Pet);
      const raw = await query.run(params);

      return res.send(raw);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .send("Something went wrong please try again later");
    }
  };

  // pet list
  static petList = async (req, res) => {
    return res.send("pet/petList");
  };

  // pet add
  static addPet = async (req, res) => {
    
    try {
      
        const pet = Pet({
          name: req.body.name,
          type: req.body.type,
          breed: req.body.breed,
          
          age: req.body.age,
          
        });
     
      const data = await pet.save();
      return res.send(data);
     
  }catch (error) {
      console.log(error);
    }
    // else {
    //     if (err.name == 'ValidationError') {
    //         handleValidationError(err, req.body);
    //         res.render("form", {
    //             viewTitle: "Create User",
    //             form: req.body
    //         });
    //     }
    //     else
    //         console.log('Error during record create : ' + err);
    // };
  };

  // pet update

  static updatePet = async (req, res) => {
    try {
      let pet_id = req.query.id;
      const pet = await Pet.findById({
        _id: pet_id
      });
      return res.render("editPet", {
        pet
      });
    } catch (error) {
      console.log(error);
    }
  }

  static editPet = async (req, res) => {
    try {
      const petid = req.body.editid

      const pet = await Pet.findByIdAndUpdate(petid, {
        name: req.body.name,
        type: req.body.type,
        breed: req.body.breed,
        
        age: req.body.age,
      });
      return res.send("Pet successfully updated");
    } catch (err) {
      console.log(err);
    }
  };


  //pet id

  static id = (req, res) => {
    Pet.findById(req.body.id, (err, doc) => {
      if (!err) {
        res.render("pet", {
          viewTitle: "Pet Update",
          pet: doc,
        });
      }
    });
  };

  //pet delete

  static petdelete = async (req, res) => {
    try {
      await Pet.findOneAndRemove({
        _id: req.body.id
      });
      return res.send("success");
    } catch (error) {
      console.log(error);
      return res.status(500).send("Someting broken...");
    }
  };
}
module.exports = PetListController;