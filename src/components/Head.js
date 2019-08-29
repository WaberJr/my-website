import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/style.css'

const Head = () => {
  return (
    <div>
      <h1 className='logo'>Waber Jr.</h1>
      <ul>
        <li className='navItem'>
          <NavLink to='/curriculo'>CURRÍCULO</NavLink>
        </li>
        <li className='navItem'>
          <NavLink to='/contato'>CONTATO</NavLink>
        </li>
        <li className='navItem'>
          <NavLink to='/'>HOME</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Head;