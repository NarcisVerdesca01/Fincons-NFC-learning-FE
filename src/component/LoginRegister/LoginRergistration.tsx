import React, { useState } from "react";
import Register from "../register/Register";
import Login from "../login/Login";
import './LoginRegistration.css'


const LoginRegistration = () => {
    
    const cardFront = <Login />;
    const cardBack = <Register />;
    const [isFlipped, setFlipped] = useState('');
 
    const handleFlip = () => {
        setFlipped('flip-vertical-left');
    };
 
    return (
        <div className="App">
            <div className="container">
                <div
                    className={`flip-card ${isFlipped ? "flipped" : ''}`}
                >
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className="card-content">
                                {cardFront}
                            </div>
                            <button
                                className="flip-button"
                                onClick={handleFlip}
                            >
                                Flip
                            </button>
                        </div>
                        <div className="flip-card-back">
                            <div className="card-content">
                                {cardBack}
                            </div>
                            <button
                                className="flip-button"
                                onClick={handleFlip}
                            >
                                Flip
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default LoginRegistration;