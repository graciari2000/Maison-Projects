const express = require('express');
const {
    getBooks,
    getBookById, // <- ADD THIS
    addBook,
    updateBook,
    deleteBook
} = require('../controllers/bookController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', getBooks);
router.get('/:id', getBookById); // <- ADD THIS LINE
router.post('/', authMiddleware, addBook);
router.put('/:id', authMiddleware, updateBook);
router.delete('/:id', authMiddleware, deleteBook);

module.exports = router;