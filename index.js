const express = require('express');
const app = express();
const PORT = 5000;

// Simple Hello World API
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
