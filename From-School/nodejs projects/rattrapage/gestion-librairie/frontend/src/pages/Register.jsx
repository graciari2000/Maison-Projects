import { useState } from "react";
import axios from "axios";

const Register = () => {
    const [user, setUser] = useState({ name: "", email: "", password: "" });

    const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5173/api/auth/register", user)
            .then(() => alert("Inscription réussie !"))
            .catch(() => alert("Erreur d'inscription."));
    };

    return (
        <div className="container mt-4">
            <h2>Inscription ✍️</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Nom" className="form-control" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" className="form-control mt-2" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Mot de passe" className="form-control mt-2" onChange={handleChange} required />
                <button type="submit" className="btn btn-primary mt-3">S'inscrire</button>
            </form>
        </div>
    );
};

export default Register;
