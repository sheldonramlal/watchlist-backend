const mongoose = require('mongoose')

const bookSchema =  mongoose.Schema({
   
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Books', bookSchema)
