const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express()
const PORT = process.env.PORT || 3030;

//Middleware
app.use(bodyParser.json());
app.use(CORS());

app.use(express.static(path.join(__dirname, '/public')));

app.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('^/$|/page2(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'page2.html'));
});

app.get('^/$|/page3(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'page3.html'));
});

app.get('/*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}...`);
});