import React from 'react';
import curriculo from '../images/curriculo.jpg';
import CvWaber from '../images/CVWaber.PDF';
import '../styles/style.css';

import Head from './Head';

const Curriculo = () => {
  return (
    <div>
      <Head/>
      <img className='curriculo' src={curriculo}/>
      <button className='btn-cv'>
        <a href={CvWaber} download>Baixar CV</a>
      </button>
    </div>
  )
}

export default Curriculo;