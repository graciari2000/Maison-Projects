import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import "../App.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" to="/">📚 Ma Librairie</Link>

                <div className="d-flex align-items-center ms-auto gap-3">
                    <Link className="btn btn-light" to="/login">Connexion</Link>
                    <Link className="btn btn-light" to="/register">Inscription</Link>
                    <Link className="btn btn-light" to="/cart">
                        <FaShoppingCart size={20} />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;