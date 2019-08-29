import React from 'react';
import '../styles/style.css';

const Imagem = ({site, logo}) => {
  return (
    <a href={site} target='_blank' rel='noopener noreferrer'>
      <img className='imagem' alt='' src={logo}/>
    </a>
  )
}

export default Imagem;