const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
    title: {
    type: String
    },
    author: {
    type: String
    },
    content: {
    type: String
    },
    date: {
    type: Date
    }
})

module.exports = mongoose.model('post', postsSchema)
