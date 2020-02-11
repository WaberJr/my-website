import React from 'react';
import { NavLink } from 'react-router-dom';
import Head from './Head';

const Home = () => {
  
  const rolarSite = () => {
    window.scroll({
      top: 1000, // Captura a distancia do topo onde deseja ser rolado
      behavior: 'smooth' // Aqui eh onde vem toda a magica, ele suporta duas opcoes, o `smooth` e o `normal`
    })
  };

  const calcularIdade = () => {
    var ano = new Date().getFullYear();
    return ano - 2000;
  }

  return (
    <div>
      <Head/>
      <p className='titulo'>Estudante, Desenvolvedor.</p>
      <div className='divButton'>
        <button className='btn' onClick={rolarSite}>Saiba mais</button>
      </div>  

      <div className='divBio'>
        <h1 className='hi'>Olá,</h1>
        <p className='bio'>
          Meu nome é Waber Júnior, tenho 20 anos e sou apaixonado por tecnologia. No momento estou cursando Ciência
          da Computação na Universidade Paulista UNIP e buscando uma constante evolução com o decorrer do tempo.
        </p>
        <NavLink to='/contato' ><button className='btn'>Contato</button></NavLink>
      </div>
    </div>
  )
}

export default Home;