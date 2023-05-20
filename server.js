'use strict';

const express = require('express');

// Constants
const PORT = 9000;
//const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Anas Assil and Rayyan');
});

app.listen(PORT, () => {
  console.log('Running on http');
});