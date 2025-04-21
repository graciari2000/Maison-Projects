import { useState } from "react";
import axios from "axios";

const BookForm = () => {
    const [book, setBook] = useState({ title: "", author: "", genre: "", price: "" });

    const handleChange = (e) => setBook({ ...book, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5173/api/books", book)
            .then(() => alert("Livre ajouté !"))
            .catch((err) => console.error(err));
    };

    return (
        <div className="container mt-4">
            <h2>Ajouter un livre 📖</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Titre" className="form-control" onChange={handleChange} required />
                <input type="text" name="author" placeholder="Auteur" className="form-control mt-2" onChange={handleChange} required />
                <input type="text" name="genre" placeholder="Genre" className="form-control mt-2" onChange={handleChange} required />
                <input type="number" name="price" placeholder="Prix (€)" className="form-control mt-2" onChange={handleChange} required />
                <button type="submit" className="btn btn-success mt-3">Ajouter</button>
            </form>
        </div>
    );
};

export default BookForm;
