const mongoose = require('mongoose');
const { DB_URI } = require('./index');


const db_connect = () => {
    mongoose.connect(DB_URI);


    const db = mongoose.connection;

    db.once('open', () => console.log('DB Connected'));
    db.on('error', () => console.log('Connection error'));
}

module.exports = db_connect;