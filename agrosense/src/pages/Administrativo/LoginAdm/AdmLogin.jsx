import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import './AdmLoginResponsivo.css'



function AdmLogin(){

    // useState para fazer pequena validação de login da parte administrativa
    const [cpf,setCpf] = useState("")
    const [senha, setSenha] = useState("")

    const navigate = useNavigate()
    
    // Função simples para poder validar o login do agricultor 
    function ValidationAdm(){   
        if(cpf == 30023341194 && senha == 9009){
             navigate('./FirstPageAdm/FirstPageAdm')
        }else{
            alert('Não logado!')
        }
    
    }

    function Home(){
        navigate('/')
    }


    return(
        <>
             <section className="section-login">
                <div className='logo-title'>
                    <div className='image-logo-small'>
                        {/* imagem aqui */}
                    </div>
                    <h1 className='title-agrosense-small gradient-text secondary-font' onClick={Home}>AgroSense</h1>
                </div>
                <div className="password-user">
                     <input type="text" placeholder="CPF" onChange={(e) => setCpf(e.target.value)} />
                    <input type="password" placeholder="SENHA" onChange={(e) => setSenha(e.target.value)} />
                </div>
                <div className="button-acess">
                    <button onClick={ValidationAdm}>Acessar</button>
                    <p>
                        <span className="gradient-text">Cadastrar novo(a) administrador(a)!</span>
                    </p>
                </div>
            </section>
        
        </>
    )
}

export default AdmLogin;