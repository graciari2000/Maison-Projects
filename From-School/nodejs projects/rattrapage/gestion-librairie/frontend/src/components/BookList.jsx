import { useEffect, useState } from "react";
import axios from "axios";

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5173/api/books")
            .then((res) => setBooks(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="container mt-4">
            <h2>Liste des livres 📚</h2>
            <ul className="list-group">
                {books.map((book) => (
                    <li key={book._id} className="list-group-item d-flex justify-content-between">
                        {book.title} - {book.author}
                        <span>{book.price} €</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
