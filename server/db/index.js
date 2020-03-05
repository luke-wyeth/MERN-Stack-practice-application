const mongoose = require('mongoose')
const mongoDB = require('mongodb')

mongoose
    .connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI || 'mongodb://test_connection:test_connection1@ds243084.mlab.com:43084/heroku_02q9nlhn', {useNewUrlParser: true})
    .catch(e => {
        console.log(process.env.MONGODB_URI)
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db

