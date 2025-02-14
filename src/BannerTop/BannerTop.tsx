import './CSS.css'
import banner from '../Images/BannerTop.png'
import Personagens from '../Images/Personagens.png'
import { Element } from 'react-scroll';

function BannerTop() {

  return (
    <Element name='Sesao0'>
      <div className="BannerMensagem">
        <div className="mensagem">
          <h1>Sua doação para uma boa causa!</h1>
          <p>Um lugar aonde doar para a venda de itens diversos por preços baixíssimos</p>
        </div>
        <img className="banner" src={banner} alt="Imagem de pessoa feliz ao doar" />
        <img className="Personagens" src={Personagens} alt="Imagem de pessoa feliz ao doar" />
      </div>
    </Element>

  )
}

export default BannerTop
