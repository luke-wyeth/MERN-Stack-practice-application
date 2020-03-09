const mongoose = require('mongoose')
const mongoDB = require('mongodb')


console.log(process.env.MONGODB_URI);

mongoose
    .connect((process.env.MONGODB_URI || 'mongodb://test_connection:test_connection1@ds039717.mlab.com:39717/heroku_41tpdz17'))
    .catch(e => {
        console.log(process.env.MONGODB_URI)
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db

//process.env.MONGODB_URI || process.env.MONGOLAB_URI || 