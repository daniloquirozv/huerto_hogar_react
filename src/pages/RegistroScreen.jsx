import FooterComponent from '../components/FooterComponent';
import FormRegistro from '../components/FormRegistro'
import HeaderComponent from '../components/HeaderComponent';

function RegistroScreen (){
    return (
        <>
        <HeaderComponent />
        <div className="page-center">
            <div className="frame-box">
                <FormRegistro />
            </div>
        </div>
        </>
    )
}

export default RegistroScreen;