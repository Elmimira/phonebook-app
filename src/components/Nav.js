import React from 'react'
import { Link } from 'react-router-dom';

const Nav = ({setContact, setForm}) => {

  return (
    <nav>
      <ul className='nav'>
        <li onClick={setContact}>Контакти</li>
        <li onClick={setForm}>Форма</li>
      </ul>
    </nav>
  )
}

export default Nav