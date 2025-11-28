function AgricultorLogin(){
    return (
        <>
            <section className="section-login">
                <div className='logo-title'>
                    <div className='image-logo-small'>
                        {/* imagem aqui */}
                    </div>
                    <h1 className='title-agrosense-small'>AgroSense</h1>
                </div>
                <div className="password-user">
                    <input type="text" placeholder="CPF" />
                    <input type="password" placeholder="SENHA" />
                </div>
                <div className="button-acess">
                    <button>Acessar</button>
                    <p>
                        Criar conta? <span>Clique Aqui!</span>
                    </p>
                </div>
            </section>
        </>
    )
}

export default AgricultorLogin;