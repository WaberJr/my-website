import React from 'react';
import '../styles/style.css';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import twitter from '../images/twitter.png';
import github from '../images/github.png'

import Head from './Head';

const Contato = () => {
  return (
    <div>
      <Head/>
      <p className='titulo'>Contato</p>
      <div className='divContato'>
        Você pode me encontrar em várias redes sociais. Sinta-se livre para entrar em contato 
        comigo em qualquer uma das plataformas. Por favor use o E-mail apenas para trabalhos
        profissionais, ou outros assuntos importantes.
      </div>
      <div className='containerImg'>
        <a href='https://www.facebook.com/waber.junior' target='_blank' rel='noopener noreferrer'><img className='imagem' alt='' src={facebook}/></a>
        <a href='https://www.instagram.com/waber_jr/' target='_blank' rel='noopener noreferrer'><img className='imagem' alt='' src={instagram}/></a>
        <a href='https://www.linkedin.com/in/waberjr/' target='_blank' rel='noopener noreferrer'><img className='imagem' alt='' src={linkedin}/></a>
        <a href='https://twitter.com/waber_jr' target='_blank' rel='noopener noreferrer'><img className='imagem' alt='' src={twitter}/></a>
        <a href='https://github.com/WaberJr' target='_blank' rel='noopener noreferrer'><img className='imagem' alt='' src={github}/></a>
      </div>
    </div>
  )
}

export default Contato;