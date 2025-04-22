const authors = require("../models/authorModel");
const generateId = require("../utils/uuid");

exports.getAuthors = (req, res) => {
    res.json(authors);
};

exports.createAuthor = (req, res) => {
    const newAuthor = { id: generateId(), ...req.body };
    authors.push(newAuthor);
    res.status(201).json(newAuthor);
};