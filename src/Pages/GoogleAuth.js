import React from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase-config";

function GoogleAuth({ setIsAuth }) {
  let navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
        window.location.reload();
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/");
      })
      .catch(console.error());
  };

  return (
    <div>
      <h1>{localStorage.getItem("name")}</h1>
      <h2>{localStorage.getItem("email")}</h2>
      <img src={localStorage.getItem("profilePic")} alt={"ProfilePicture"} />
      <br></br>
      <br></br>
      <button class="login-with-google-btn" onClick={signInWithGoogle}>
        Sign In With Google
      </button>
      <br></br>
      <br></br>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        {" "}
        Go Back?
      </button>
    </div>
  );
}

export default GoogleAuth;
