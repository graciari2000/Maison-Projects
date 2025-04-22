import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
                        <Link to={`/cart/${book._id}`}>
                            <p style={{ color: 'blue', cursor: 'pointer' }}>
                              {book.price} €
                            </p>
                          </Link>
                    </div>
                  ))}
                </div>
        </div>
    );
};

export default BookList;
