import { useSelector } from "react-redux";
import React from 'react';
import Header from './Header';

function About() {
    const myDetails = useSelector((state) => state.myDetails);

    return (
        <div>
            <Header />
            <h1>{myDetails.name}</h1>
            <p>You can reach us via email at {myDetails.email}</p>
            <h1>This is the About component</h1>
        </div>
    );
}

export default About;
