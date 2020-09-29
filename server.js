'use strict';

// Packages
const express = require('express');
require('dotenv').config();

// Global Variables
const app = express();


// Routes
app.get('/', handleHome);


// Route Callbacks

function handleHome(req, res){
  res.status(200).send('home');
}


app.listen(PORT, () => console.log(`up on ${PORT} : woo!`));
