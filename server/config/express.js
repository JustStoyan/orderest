
const express = require('express');

const expressSettings = (app) => {

    app.use(express.static('public'));
    app.use(express.json());
}



module.exports = expressSettings;