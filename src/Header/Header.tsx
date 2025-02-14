import './CSS.css'
import Logo from '../Images/Logo Branca.png'
import {useState} from 'react'
import { Link } from 'react-scroll';

function App() {
    const [color,setColor] = useState(false)
    const changeColor = () =>{
        if(window.scrollY >=90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

  return (
        <div className={color ? 'header header-bg' : 'header'}>
            <div className="InsideHeader">
                <Link  to="Sesao0" smooth={true} duration={500}>
                    <img className="LogoFeira" src={Logo} alt="Logo da Feira da Pechincha " />
                </Link>
                <div>
                    <Link  to="Sesao1" offset={-200} smooth={true} duration={500} className='OpcaoHeader'> Sobre Nós </Link>
                    <Link  to="Sesao2" offset={-200} smooth={true} duration={500} className='OpcaoHeader'> Doadores </Link>
                    <Link  to="Sesao3" offset={-200} smooth={true} duration={500} className='OpcaoHeader'> Contato </Link>
                </div>
            </div>
            
        </div>
    )
}


export default App