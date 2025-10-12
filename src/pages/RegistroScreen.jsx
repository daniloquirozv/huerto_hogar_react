import FormRegistro from '../components/layout/FormRegistro'

import React from 'react';
function RegistroScreen (){
    const [showLogin, setShowLogin] = React.useState(true);
    return (
        <>  
        
        <div className="page-center">
            <div className="frame-box">
                <FormRegistro />
            </div>
        </div>
        
        </>
    )
}

export default RegistroScreen;