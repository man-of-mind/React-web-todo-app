import React from "react";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
        <nav>
          <ul className='nav-container'>
            <li className='nav-child'>
                <Link className='nav-link' to='/'>Home</Link>
            </li>
            <li className='nav-child'>
                <Link className='nav-link' to='/add'>Add an item</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Header;