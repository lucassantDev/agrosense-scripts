import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function AdministrativoLogin(){

    const navigate = useNavigate()
    
    function FirstPage(){
        navigate('/')
    }
    

    return(
        <>
             <section className="section-login">
                <div className='logo-title'>
                    <div className='image-logo-small'>
                        {/* imagem aqui */}
                    </div>
                    <h1 className='title-agrosense-small gradient-text' onClick={FirstPage}>AgroSense</h1>
                </div>
                <div className="password-user">
                    <input type="text" placeholder="CPF ou CNPJ" />
                    <input type="password" placeholder="SENHA" />
                </div>
                <div className="button-acess">
                    <button>Acessar</button>
                    <p>
                        <span className="gradient-text">Cadastrar novo(a) administrador(a)!</span>
                    </p>
                </div>
            </section>
        
        </>
    )
}

export default AdministrativoLogin;