import '../App.css';
import React from 'react';
import {useNavigate} from "react-router-dom";

function Error() {
    let navigate = useNavigate();
    return ( 
    <div>
        Why are you here?? HUh?
        <button onClick={() => {navigate("/");}}>{" "}Go Back?</button>
    </div> );
}

export default Error;