const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    stock: { type: Number, default: 10 },
    image: { type: String } // URL de l’image
});

module.exports = mongoose.model('Book', bookSchema);