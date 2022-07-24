const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
  name: {
    type: String,
    min: 1,
    max: 20,
    required: true,
  },
  type: {
    type: String,
    min: 1,
    max: 20,
    required: true,
  },
  breed: {
    type: String,
    min: 1,
    max: 20,
    required: true,
  },
 
  age: {
    type: String,
    min: 1,
    max: 20,
    required: true,
  },
  
  created_at: {
    type: String,
    default: Date.now,
  },
  updated_at: {
    type: String,
    default: Date.now,
  }
});

module.exports = mongoose.model("Form", FormSchema);