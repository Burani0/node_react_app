const FormData = require('../models/FormData'); // Import the model

exports.submitForm = (req, res) => {
  const { name, email, message } = req.body;

  const newForm = new FormData({
    name,
    email,
    message
  });

  newForm.save()
    .then(() => res.status(200).send('Form submitted and saved to MongoDB!'))
    .catch((err) => res.status(500).send('Error saving form data to MongoDB'));
};
