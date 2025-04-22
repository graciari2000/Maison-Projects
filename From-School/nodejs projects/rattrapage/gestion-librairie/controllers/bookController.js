const Book = require('../models/Book');

// ✅ Get all books
exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur.' });
    }
};

// ✅ Get a single book by ID
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Livre non trouvé.' });
        }
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur.' });
    }
};

// ✅ Add a new book
exports.addBook = async (req, res) => {
    try {
        const newBook = new Book(req.body);
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur.' });
    }
};

// ✅ Update a book
exports.updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedBook);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur.' });
    }
};

// ✅ Delete a book
exports.deleteBook = async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.json({ message: 'Livre supprimé.' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur.' });
    }
};