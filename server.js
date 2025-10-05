const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Serve static files (HTML, CSS)
app.use(express.static('public'));

// Parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Handle POST request from form
app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  console.log(`Received: ${name}, ${email}`);
  res.send('Form submitted successfully!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
