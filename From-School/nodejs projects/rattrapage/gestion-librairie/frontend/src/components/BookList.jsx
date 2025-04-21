import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5001/api/books")
            .then((res) => setBooks(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="container mt-4">
            <h2>Liste des livres 📚</h2>
                <div className="book-list">
                  {books.map((book) => (
                    <div key={book._id} className="book-card">
                      <img src={book.image} alt={book.title} />
                      <h3>{book.title}</h3>
                      <p>{book.author}</p>
                      <p>{book.price} €</p>
                    </div>
                  ))}
                </div>
        </div>
    );
};

export default BookList;
