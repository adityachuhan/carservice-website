const express = require('express');
const app = express();
const port = 80;
const path = require('path')
const pug = require('pug')
    // const mongoose = require('mongoose');
    // var bodyParser = require('body-parser');

// for pug 
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

// static files
app.use('/public', express.static('public'))

// endpoints


app.get('/home', (req, res) => {
    res.render('index')
})

app.get('/manitips', (req, res) => {
    res.render('manitips')
})

app.get('/faq', (req, res) => {
    res.render('faq')
})




app.listen(port,
    console.log(`listening on port ${port}`))