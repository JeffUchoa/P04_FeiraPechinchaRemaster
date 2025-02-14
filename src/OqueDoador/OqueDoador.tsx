import './CSS.css'
import OqueDoador from '../Images/OqueDoador.png'
import { Element } from 'react-scroll';

function App() {

  return (
    <Element name="Sesao2">
      <div className='OqueDoador'>
        <div className='conteudo2'>
          <div className='retangulo2'>
            <img className="ImagemSobreNos2" src={OqueDoador} alt="Imagem de pessoa feliz em doação" />
          </div>
          <div className="Texto2">
            <h1>O que é ser um doador?</h1>
            <p> Ser um doador ou voluntário é contribuir com itens ou serviços para ajudar projetos sociais ou a sociedade em geral. Isso proporciona experiências gratificantes, aumenta a satisfação, melhora o humor, reduz o estresse e dá senso de propósito. Ajudar os outros também reduz a fixação nos próprios problemas. Junte-se a nós na Feira da Pechincha!
            </p>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default App