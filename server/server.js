require('./config/config');
const path = require('path');
const publicPath = path.join(__dirname, '../public');
const express = require('express');

var app = express();
const prot = process.env.PORT;

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.render('index.html');
});

app.listen(prot, () => {
    console.log(`Server started on port ${prot}`);
});

module.exports = {app};

