const mongoose = require('mongoose');

// Define the schema
const formDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true }
});

// Create the model
const FormData = mongoose.model('FormData', formDataSchema);

module.exports = FormData;
