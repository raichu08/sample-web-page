const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/greet', (req, res) => {
  const name = req.body.name || "Guest";
  res.json({ message: `Hello, ${name}! Welcome to our dynamic site.` });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
