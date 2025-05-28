const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Marcel Mirror Bot is alive!');
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
