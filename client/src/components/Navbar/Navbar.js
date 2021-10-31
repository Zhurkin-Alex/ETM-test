import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <ul className="navbar__nav">
                <li className="navbar__item">
                    <Link className="navbar__link" to="/">
                    Список
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link"  exact="true"  to="/basket">
                        Корзина
                    </Link>
                </li>         
            </ul>
        </div>
    );
}

export default Navbar;