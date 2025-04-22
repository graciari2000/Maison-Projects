const books = require("../models/bookModel");
const generateId = require("../utils/uuid");

exports.getBooks = (req, res) => {
    res.json(books);
};

exports.getBookById = (req, res) => {
    const book = books.find(b => b.id === req.params.id);
    if (!book) return res.status(404).json({ message: "Livre introuvable" });
    res.json(book);
};

exports.createBook = (req, res) => {
    const newBook = { id: generateId(), ...req.body };
    books.push(newBook);
    res.status(201).json(newBook);
};

exports.updateBook = (req, res) => {
    const index = books.findIndex(b => b.id === req.params.id);
    if (index === -1) return res.status(404).json({ message: "Livre introuvable" });
    books[index] = { ...books[index], ...req.body };
    res.json(books[index]);
};

exports.deleteBook = (req, res) => {
    const index = books.findIndex(b => b.id === req.params.id);
    if (index === -1) return res.status(404).json({ message: "Livre introuvable" });
    books.splice(index, 1);
    res.json({ message: "Livre supprimé" });
};