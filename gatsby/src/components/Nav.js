import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from '../../static/logo.svg';

const NavStyles = styled.nav`
    margin-bottom: 3rem;
    ul {
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: 1fr 1fr auto 1fr 1fr;
        align-items: center;
        gap: 2rem;
        text-align: center;
        list-style: none;
        margin-top: -3rem;
    }
    a {
        text-decoration: none;
        &:hover {
            color: red;
        }
    }

    img {
        max-width: 300px;
        width: 100%;
        height: auto;
    }

    .logo {
        transform: translateY(-25%);
        border: 2px solid black;
    }
`;

export default function Nav() {
    return (
        <NavStyles>
            <ul>
                <li>
                    <Link to="/potions">Shop</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li className="logo">
                    <Link to="/"><img src={Logo} alt="logo" /></Link>
                </li>
                    <button className="header__checkout snipcart-checkout">
                        Cart <span className="snipcart-items-count">0</span>
                    </button>
                <li>
                    <button class="snipcart-customer-signin">My account</button>
                </li>
            </ul>
        </NavStyles>
    );
};