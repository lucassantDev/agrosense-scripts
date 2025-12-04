import {useNavigate} from 'react-router-dom'
import AgrosenseLogo from '../../assets/image/agrosense-logo.png'
import './Login.css'


function Login() {

  const navigate = useNavigate();

  function PageAgricultor(){
    alert('Para acessar a página principal do agricultor, coloque 1440097331 em CPF e 1210 em SENHA')
    navigate('/Agricultor');
  }

  function PageAdministrativo(){
    alert('Para acessar a página principal da parte administrativa, coloque 30023341194 em CPF e 9009 em SENHA')
    navigate('/Administrativo');
  }

  return (
    <>
      <section className='section-login'>

        <div className='logo-title'>
          <img src={AgrosenseLogo} className='logo-agrosense'/>
          <h1 className='title-agrosense gradient-text secondary-font'>AgroSense</h1>
        </div>

        <div className='button-choice'>
            <button className='button-login' onClick={PageAgricultor}>
                <p>Agricultor</p>
            </button>

            <button className='button-login' onClick={PageAdministrativo}>
                <p>IPA | Cooperaativa</p>
            </button>
        </div>
        
      </section>
    </>
  )
}

export default Login
