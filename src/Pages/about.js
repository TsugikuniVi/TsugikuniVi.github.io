import '../App.css';
import React from 'react';
import {useNavigate} from "react-router-dom";

function About() {
    let navigate = useNavigate();
    return ( 
        <div>
            About Sangeetha's Bake@Home
            <br></br>
            Made by Saayuj!
            <button onClick={() => {navigate("/");}}>{" "}Go Back?</button>
        </div>
    );
}

export default About;