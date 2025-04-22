const loans = require("../models/loanModel");
const books = require("../models/bookModel");
const generateId = require("../utils/uuid");

exports.getLoans = (req, res) => {
    res.json(loans);
};

exports.createLoan = (req, res) => {
    const book = books.find(b => b.id === req.body.bookId);
    if (!book) return res.status(404).json({ message: "Livre non trouvé" });
    if (book.stock <= 0) return res.status(400).json({ message: "Pas en stock" });

    book.stock -= 1;
    const loan = {
        id: generateId(),
        bookId: book.id,
        user: req.body.user,
        dateLoaned: new Date(),
        returned: false,
    };
    loans.push(loan);
    res.status(201).json(loan);
};

exports.returnBook = (req, res) => {
    const loan = loans.find(l => l.id === req.params.id);
    if (!loan) return res.status(404).json({ message: "Emprunt non trouvé" });
    if (loan.returned) return res.status(400).json({ message: "Déjà retourné" });

    loan.returned = true;
    const book = books.find(b => b.id === loan.bookId);
    if (book) book.stock += 1;

    res.json({ message: "Livre retourné" });
};