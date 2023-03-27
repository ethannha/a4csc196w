'use strict';
const express = require('express');
const app = express();


// define all endpoints here
app.get('/math/circle/:r', function (req, res) {
    res.type('text');
    res.send('Hello World!');
});
  

app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT);
