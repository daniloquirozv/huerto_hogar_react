import FormRegistro from '../components/layout/FormRegistro'
import Header from '../components/layout/header';
import header from '../components/layout/header'
import React from 'react';
function RegistroScreen (){
    const [showLogin, setShowLogin] = React.useState(true);
    return (
        <>  
        <Header />
        <div className="page-center">
            <div className="frame-box">
                <FormRegistro />
            </div>
        </div>
        
        </>
    )
}

export default RegistroScreen;