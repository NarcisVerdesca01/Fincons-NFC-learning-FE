import React, { useState } from 'react';
import './prova1.css';
import Login from '../login/Login';


const Test = () => {
    const [isFlipped, setIsFlipped] = useState('');


    const onClick = () => {
        setIsFlipped('flip-vertical-left')
    }
    return (
        <>
            <div style={{ width: 500, height: 500, backgroundColor: 'red' }} className={`
            ${isFlipped ? isFlipped : ''}`}>
                test
            </div>
            <button onClick={() => onClick()}>click</button>
        </>

    );
};

export default Test;