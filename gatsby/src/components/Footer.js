import React from 'react';
import { GiFlexibleStar } from 'react-icons/gi';

export default function Footer() {
    return (
        <footer>
            <div>
                <p>777 Basil Lane <GiFlexibleStar /> Salem, MA 01970</p>
                <p>(978) 555-5555</p>
            </div>
            <p><strong>&copy; EmPotions {new Date().getFullYear()}</strong></p>
        </footer>
    );
}