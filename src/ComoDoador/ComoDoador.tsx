import './CSS.css'
import ComoDoador from '../Images/ComoDoador.png'

function App() {

  return (
    <div className='ComoDoador'>
        <img className="ImagemDoador" src={ComoDoador} alt="Imagem de pessoa feliz em doação" />
        <div className='Texto3'>
          <h1> Como ser um Doador?</h1>
          <p> Para se tornar um doador ou um voluntário do  nosso projeto apenas entre em contato com a gente por meio das nossas  redes sociais a baixo ou converse diretamente conosco na Casa de  Caridade!</p>
        </div>
    </div>
  )
}

export default App