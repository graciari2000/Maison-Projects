import { useState } from "react";
import axios from "axios";

const Login = () => {
    const [user, setUser] = useState({ email: "", password: "" });

    const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5173/api/auth/login", user)
            .then((res) => {
                localStorage.setItem("token", res.data.token);
                alert("Connexion réussie !");
            })
            .catch(() => alert("Erreur de connexion."));
    };

    return (
        <div className="container mt-4">
            <h2>Connexion 🔐</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" className="form-control" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Mot de passe" className="form-control mt-2" onChange={handleChange} required />
                <button type="submit" className="btn btn-primary mt-3">Se connecter</button>
            </form>
        </div>
    );
};

export default Login;
