import FooterComponent from '../components/FooterComponent';
import FormRegistro from '../components/FormRegistro'
import HeaderComponent from '../components/HeaderComponent';
import LoginUser from '../components/Loging';
import React from 'react';
function RegistroScreen (){
    const [showLogin, setShowLogin] = React.useState(true);
    return (
        <>
        <LoginUser show={showLogin} handleClose={() => setShowLogin(false)} />
        <HeaderComponent />
        <div className="page-center">
            <div className="frame-box">
                <FormRegistro />
            </div>
        </div>
        <FooterComponent/>
        </>
    )
}

export default RegistroScreen;