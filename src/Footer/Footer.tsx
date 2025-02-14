import './CSS.css';
import Logo from '../Images/Logo Branca.png';
import Zap from '../Images/Zap2.png';
import Insta from '../Images/Insta2.png';
import Telegram from '../Images/Telegram2.png';
 
function App() {

  return (
    <div className='Footer'>
         <img className="Logo" src={Logo} alt="Imagem de pessoa feliz em doação" />
         <div className='FooterIcones'>
            <img className="FooterIconne" onClick={() => window.open("https://api.whatsapp.com/message/4MKQVEVR3BD2L1?autoload=1&app_absent=0")} src={Zap} alt="Imagem de pessoa feliz em doação" />
            <img className="FooterIconne" onClick={() => window.open("https://www.instagram.com/casadacaridadequixada/")} src={Insta} alt="Imagem de pessoa feliz em doação" />
            <img className="FooterIconne" onClick={() => window.open("https://t.me/JeffUchoaDesign")} src={Telegram} alt="Imagem de pessoa feliz em doação" />
         </div>
    </div>

  )
}

export default App