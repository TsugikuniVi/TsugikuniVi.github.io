import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/home";
import About from "./Pages/about";
import Cakbuy from "./Pages/buyCak";
import Error from "./Pages/error";
import FireBase from "./Pages/firebaseMain";
import GoogleAuth from "./Pages/GoogleAuth";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/signin";
    });
  };

  return (
    <Router>
      <nav>
        <Link to="/home">
          <button class="redirect">
            <img class="redirect" src={require("./Logo.png")} alt="Logo" />
          </button>
        </Link>
        <Link class="nav" to="/">
          {" "}
          <button class="navbutton">Home</button>{" "}
        </Link>{" "}
        {!isAuth ? (
          <Link class="nav" to="/signin">
            {" "}
            <button class="navbutton">Login</button>{" "}
          </Link>
        ) : (
          <>
            <Link class="nav" to="/cakes">
              {" "}
              <button class="navbutton">Buy Cakes</button>{" "}
            </Link>
            <button class="logout" onClick={signUserOut}>
              {" "}
              Log Out
            </button>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cakes" element={<Cakbuy />} />
        <Route path="/*" element={<Error />} />
        {localStorage.getItem("email") === "saayuj1015@gmail.com" && (
          <Route path="/fire" element={<FireBase />} />
        )}
        <Route path="/signin" element={<GoogleAuth />} />
      </Routes>
    </Router>
  );
}

export default App;
