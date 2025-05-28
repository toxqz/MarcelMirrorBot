const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Marcel Mirror is alive 🚀');
});

app.listen(port, () => {
  console.log(`Marcel Mirror running on port ${port}`);
});
