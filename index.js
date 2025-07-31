const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/chat', (req, res) => {
  const userMessage = req.body.message;
  const botReply = `🪞 Echo: ${userMessage}`;
  res.json({ reply: botReply });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
