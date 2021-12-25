
const express = require('express');

const expressSettings = (app) => {

    app.use(express.static('public'));
    app.use(express.json());
    app.use(express.urlencoded({
        extended: true
    }));
}



module.exports = expressSettings;