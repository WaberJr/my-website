import React from 'react';
import '../styles/style.css';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import twitter from '../images/twitter.png';
import github from '../images/github.png'

import Head from './Head';
import Imagem from './Imagem';

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
      <div className='email'>
        <p>Email: waberjunior@hotmail.com</p>
      </div>
      <div className='containerImg'>
        <Imagem site='https://www.facebook.com/waber.junior' logo={facebook}/>
        <Imagem site='https://www.instagram.com/waber_jr/' logo={instagram}/>
        <Imagem site='https://www.linkedin.com/in/waberjr/' logo={linkedin}/>
        <Imagem site='https://twitter.com/waber_jr' logo={twitter}/>
        <Imagem site='https://github.com/WaberJr' logo={github}/>
      </div>
    </div>
  )
}

export default Contato;