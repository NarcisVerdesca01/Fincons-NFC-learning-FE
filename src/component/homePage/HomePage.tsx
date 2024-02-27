import React, { useState } from 'react';
import './HomePage.css';
import Login from '../login/Login';
import Header from '../header/Header';
import Course from '../courses/Course';
import { LampContainer, LampDemo } from '../ui/Lamp';
import { PinContainer } from '../ui/3d-pin';

const HomePage = () => {


    return (
        <>
            <div className={`header`}>
                <Header />
                <div className={`containerCourses`}>
                    {/*<Course />*/}
                </div>

            </div>
        </>
    );
};

export default HomePage;