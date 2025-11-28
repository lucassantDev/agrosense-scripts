import AgrosenseLogo from '../../assets/image/agrosense-logo.png';
import { Navigate, useNavigate } from 'react-router-dom';

function FirstPageAgricultor(){

    const navigate = useNavigate()
    function Setting(){
        
    }

    return (
        <>
           <header>
                <div>
                    <img src={AgrosenseLogo} />
                    <h4>Agrosense</h4>

                    config
                </div>
           </header>
           <main>
                <section className='user-request'>
                    <div>
                        {/* <img src={} /> */}
                        <h4>Olá, José Silva</h4>
                        <p>***.***.*89-00</p>
                    </div>
                    <div>

                    </div>
                </section>
                <section className='seeds-grains-request'>

                </section>
                <section className='message-end'>
                    
                </section>
           </main>
        </>
    )
}

export default FirstPageAgricultor;