import React, { useState } from 'react';
import './HomePage.css';
import Login from '../login/Login';
import Header from '../header/Header';


const HomePage = () => {


    return (
        <>
            <div className={`header`}>
                <Header />
            </div>
        </>
    );
};

export default HomePage;