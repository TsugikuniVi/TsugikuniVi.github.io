import "../App.css";
import { React } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  return (
    <div>
      <h2>Sangeetha's Bake@Home</h2>
      <br></br>
      <h2>Buy Cakes HERE</h2>
      <br></br>
      <br></br>
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        {" "}
        About Us
      </button>
      <br></br>
      <br></br>
      <button
        onClick={() => {
          navigate("/fire");
        }}
      >
        {" "}
        Firebase
      </button>
      <br></br>
      <br></br>
      <button
        onClick={() => {
          navigate("/signin");
        }}
      >
        {" "}
        GoogleAuth
      </button>
    </div>
  );
}

export default Home;
