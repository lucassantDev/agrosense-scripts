import { useNavigate } from "react-router-dom";
import Footer from "../../../assets/components/Footer";
function RequestDone(){

    const navigate = useNavigate()

    function ReturnPage(){
        navigate(-1)
    }

    return(
        <>
            <div style={{
                width: '100%',
                height: '100px',
                border: '1px solid red',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <button className="see-requests" onClick={ReturnPage}>
                    Retornar
                </button>
            </div>

            <section style={{
                width: '100%',
                border: '1px solid red',
                paddingBlock: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                gap: '20px',
                flexDirection: 'column'
            }}>
                <div className="last-request"></div>
                <div className="last-request"></div>
                <div className="last-request"></div>
                <div className="last-request"></div>
            </section>

            <Footer/>
        </>
    )
}

export default RequestDone;