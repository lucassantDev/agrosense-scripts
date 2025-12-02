import { useNavigate } from "react-router-dom";
import './Settings.css'

import Logo from '../../../src/assets/image/agrosense-logo.png';


function Settings(){

    const navigate = useNavigate();

    function Back(){
        navigate(-1)
    }

    function Logout(){
        navigate('/')
    }

    return (
        <>
            
            <section className="settings-section">
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    flexDirection: 'column',
                    height: '20%'
                }}>
                    <div className="logo-title-settings">
                        <img src={Logo} alt="logo agrosense" />
                        <h3 className="gradient-text secondary-font">AgroSense</h3>
                    </div>
                    <h1 className="gradient-text">
                        Configurações
                    </h1>
                </div>
                <div className="buttons-settings">
                    <button className="button-settings-style">Perfil</button>
                    <button className="button-settings-style">Fale Conosco</button>
                    <button className="button-settings-style">Termos</button>
                    <button className="button-settings-style" onClick={Logout}>Sair</button>
                    <button className="button-settings-style" onClick={Back} >Voltar</button>
                </div>
            </section>
        
        </>
    )
}

export default Settings;