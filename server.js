const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/formdata')

  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB', err));

// Define Mongoose Schema and Model
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

const FormData = mongoose.model('FormData', formSchema);

// Endpoint to handle form data
app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;

  // Create a new instance of FormData
  const newForm = new FormData({
    name,
    email,
    message
  });

  // Save form data to the database
  newForm.save()
    .then(() => res.status(200).send('Form submitted and saved to MongoDB!'))
    .catch((err) => res.status(500).send('Error saving form data to MongoDB'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
