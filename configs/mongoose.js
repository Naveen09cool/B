const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/beU_db')

const db = mongoose.connection

db.on('error', console.error.bind(console, 'Error in connecting DB'));

db.once('open', function(){
    console.log('successfully connected to DB');
})

module.exports = db;