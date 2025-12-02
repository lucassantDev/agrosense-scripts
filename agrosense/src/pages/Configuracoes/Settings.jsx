import { useNavigate } from "react-router-dom";
import './Settings.css'

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
                <div>
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