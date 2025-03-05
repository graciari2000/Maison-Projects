import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" to="/">📚 Ma Librairie</Link>
                <div>
                    <Link className="btn btn-light mx-2" to="/login">Connexion</Link>
                    <Link className="btn btn-light" to="/register">Inscription</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
