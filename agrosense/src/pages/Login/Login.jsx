import {useNavigate} from 'react-router-dom'
import AgrosenseLogo from '../../assets/image/agrosense-logo.png'
import './Login.css'


function Login() {

  const navigate = useNavigate();

  function PageAgricultor(){
    navigate('/Agricultor');
  }

  function PageAdministrativo(){
    navigate('/Administrativo');
  }

  return (
    <>
      <section className='section-login'>

        <div className='logo-title'>
          <img src={AgrosenseLogo} className='logo-agrosense'/>
          <h1 className='title-agrosense'>AgroSense</h1>
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
