const mongoose = require('mongoose')

mongoose
    .connect('mongodb://test_connection:test_connection1@ds243084.mlab.com:43084/heroku_02q9nlhn')
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db