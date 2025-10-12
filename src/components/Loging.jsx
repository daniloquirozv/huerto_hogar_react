import React, { useState, useRef, useEffect } from 'react';
import '../assets/styles/Login-styles.css';
import { Modal } from 'react-bootstrap';
function LoginUser({ show , handleClose}) {
    return(
        <Modal show={show} onHide={handleClose} style={{'color':
         'black', 'textAlign': 'center'
         }}>
            <Modal.Header closeButton className='close-btn'>
                <Modal.Title className='Login' >Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="login-form" action="/login" method="POST">
                    <label className="email">Correo</label>
                    <input className="login-input" type="email" name="email" placeholder="Correo" required />
                    <label className="password">Contraseña</label>
                    <input className="login-input" type="password" name="password" placeholder="Contraseña" required />
                    <div className='remember-container'>
                        <input type="checkbox" id="remember" name="remember" />
                        <label htmlFor="remember">Recuérdame</label>
                    </div>
                    <p className='sin-cuenta'>si no tienes cuenta <a href="/registro">regístrate aquí</a></p>
                   
                    <button className="login-button" type="submit">Login</button>
                </form>

            </Modal.Body>
        </Modal>
    );
};

export default LoginUser;