import React, { useState } from 'react';
import './LoginRegister.css';
import Login from '../login/Login';
import Register from '../register/Register';

const LoginRegister = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped((prevState) => !prevState);
    };

    return (
        <div className={`containerCardLoginRegister`}>
            <div className={`card ${isFlipped ? 'flip-vertical-left' : ''}`}>
                <div className="card__face card__face--front">
                    <div className="card__content" >
                        <div className={`containerButtonSelectForm`}>
                            <button className={`buttonSelectForm`} onClick={handleFlip}>Register</button>
                        </div>
                        <div className="card__form">
                            <Login />
                        </div>
                    </div>
                </div>
                <div className="card__face card__face--back">
                    <div className="card__content">

                        <div className={`containerButtonSelectForm`}>
                            <button className={`buttonSelectForm`} onClick={handleFlip}>login</button>
                        </div>
                        <div className="card__form">
                            <Register />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginRegister;