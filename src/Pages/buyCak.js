import '../App.css';
import React from 'react';
import {useNavigate} from "react-router-dom";

function Cakbuy() {
    let navigate = useNavigate();
    return ( 
        <div>
            WIll add buy options later
            <button onClick={() => {navigate("/");}}>{" "}Go Back?</button>
        </div>
     );
}

export default Cakbuy;