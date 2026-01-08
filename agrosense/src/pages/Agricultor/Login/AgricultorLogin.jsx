import { Navigate, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";


function AgricultorLogin(){


    // useState para fazer pequena validação de login do Agricultor
    const [cpf, setCpf] = useState("")
    const [senha, setSenha] = useState("")

    const navigate = useNavigate()
    function Home(){
        navigate('/')
    }

    // Função simples para poder validar o login do agricultor
    function ValidationAgricultor(){
        if(cpf == 1440097331 && senha == 1210){
            navigate('/Agricultor/FirstPage/UserPage')
        }else{
            alert('Não logado!')
        }
    
    }

    return (
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
                    <button onClick={ValidationAgricultor}>Acessar</button>
                    <p>
                        Criar conta? <span className="gradient-text">Clique Aqui!</span>
                    </p>
                </div>
            </section>
        </>
    )
}

export default AgricultorLogin;