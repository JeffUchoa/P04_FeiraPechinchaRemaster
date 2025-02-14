import './CSS.css';
import Contato from '../Images/Contato.png';
import Zap from '../Images/Zap.png';
import Insta from '../Images/Insta.png';
import Telegram from '../Images/Telegram.png';
import Zap2 from '../Images/Zap2.png';
import Insta2 from '../Images/Insta2.png';
import Telegram2 from '../Images/Telegram2.png';
import { useState } from 'react';
import { Element } from 'react-scroll';

function App() {
    const [Image, setImage] = useState(Zap)
    const [Image2, setImage2] = useState(Insta)
    const [Image3, setImage3] = useState(Telegram)

    return (
        <Element name="Sesao3">
            <div className='Contato'>
                <div className="ContatoConteudo">
                    <img className="ImagemContato" src={Contato} alt="Imagem de pessoa feliz em doação" />
                    <div className="FormasContato">
                        <div className="ContatoTexto" >
                            <h1>Entre em contato com a gente!</h1>
                            <p>Para começar transformando vidas e se tornar um novo doador do nosso projeto apenas entrar em contato por meio dos canais de comunicação a baixo!</p>
                        </div>
                        <div className="ContatosContatos">
                            <button onClick={() => window.open("https://api.whatsapp.com/message/4MKQVEVR3BD2L1?autoload=1&app_absent=0")} className="BotaoContato" onMouseOver={() => setImage(Zap2)} onMouseLeave={() => setImage(Zap)}>
                                <img className="ContatoMidia" src={Image} alt="Imagem de pessoa feliz em doação" />
                                <h3 className='TextoBotaoContato'>Comunicação via WhatsApp</h3>
                            </button>
                            <button onClick={() => window.open("https://www.instagram.com/casadacaridadequixada/")} className="BotaoContato" onMouseOver={() => setImage2(Insta2)} onMouseLeave={() => setImage2(Insta)}>
                                <img className="ContatoMidia" src={Image2} alt="Imagem de pessoa feliz em doação" />
                                <h3 className='TextoBotaoContato'>Comunicação via Instagram</h3>

                            </button>
                            <button onClick={() => window.open("https://t.me/JeffUchoaDesign")} className="BotaoContato" onMouseOver={() => setImage3(Telegram2)} onMouseLeave={() => setImage3(Telegram)}>
                                <img className="ContatoMidia" src={Image3} alt="Imagem de pessoa feliz em doação" />
                                <h3 className='TextoBotaoContato'>Comunicação via Telegram</h3>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default App