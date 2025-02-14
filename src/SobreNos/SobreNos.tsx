import './CSS.css'
import Logo from '../Images/SobreNos.png'
import { useRef } from 'react';
import { Element } from 'react-scroll';

function App() {
  const Sobre = useRef (null);
  return (
    <Element name="Sesao1">
      <div ref={Sobre} className='Sobre'>
      <div className='conteudo'>
      </div>
      <div className='retangulo'>
        <div className="Texto">
          <h1>Sobre Nós</h1>
          <p> Um lugar onde você doar para a venda de itens diversos por preços baixíssimos</p>
        </div>
        <img className="ImagemSobreNos" src={Logo} alt="Imagem de pessoa feliz em doação" />
      </div>
    </div>

    </Element>
    
  )
}

export default App