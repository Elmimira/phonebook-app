import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul className='nav'>
        <li>
          <Link to="/">Контакти</Link>
        </li>
        <li>
          <Link to="/form">Форма</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav