/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();
const PORT = 1338;

app.use('/uploads', serveStatic(path.join(__dirname, 'uploads')));

console.log(__dirname, 'uploads');

app.get('/', (req, res) => {
  res.status(200).send('Welcome to root URL of Server');
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      'Server is Successfully Running, and App is listening on port ' + PORT,
    );
  else console.log("Error occurred, server can't start", error);
});
