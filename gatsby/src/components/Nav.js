import React from 'react';
import { Link } from 'gatsby';

export default function Nav() {
    return (
        <nav>
            <ul>
                
                <li>
                    <Link to="/potions">Shop</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/">LOGO</Link>
                </li>
                <li>
                    <Link to="/cart">Cart</Link>
                </li>
                <li>
                    <Link to="/">Sign In</Link>
                </li>
            </ul>
        </nav>
    );
};