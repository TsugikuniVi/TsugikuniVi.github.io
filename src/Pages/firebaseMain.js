import "../App.css";
import { useState, useEffect, React } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js";
import { db } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function FireBase() {
  let navigate = useNavigate();
  const [newCak, setNewCak] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [newWeight, setNewWeight] = useState("");
  const [caks, setCaks] = useState([]);
  const CaksColRef = collection(db, "caks");

  const createCak = async () => {
    await addDoc(CaksColRef, {
      name: newCak,
      price: Number(newPrice),
      weight: newWeight,
    });
  };

  const updateCak = async (id, price) => {
    const cakDoc = doc(db, "caks", id);
    const newFields = { price: price + 10 };
    await updateDoc(cakDoc, newFields);
  };

  const deleteCak = async (id) => {
    const cakDoc = doc(db, "caks", id);
    await deleteDoc(cakDoc);
  };

  // eslint-disable-next-line
  useEffect(() => {
    const getCaks = async () => {
      const data = await getDocs(CaksColRef);
      setCaks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    // eslint-disable-next-line
    getCaks();
  }, []);

  return (
    <div className="caks">
      <input
        placeholder="Name..."
        onChange={(event) => {
          setNewCak(event.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Price..."
        onChange={(event) => {
          setNewPrice(event.target.value);
        }}
      />
      <input
        placeholder="Weight..."
        onChange={(event) => {
          setNewWeight(event.target.value);
        }}
      />
      <button onClick={createCak}>Create New Cake</button> <br></br>
      <br></br>
      Current Cakes Available:
      {caks.map((caks) => {
        return (
          <div>
            <h2>Name: {caks.name}</h2>
            <h2>
              Price: {caks.price} <br></br>
              <br></br>
              <button
                className="fire"
                onClick={() => {
                  updateCak(caks.id, caks.price);
                }}
              >
                Increase price by 10.00
              </button>
            </h2>
            <h2>Weight: {caks.weight}</h2>
            <br></br>
            <button
              className="fire"
              onClick={() => {
                deleteCak(caks.id);
              }}
            >
              Delete Cake
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
      })}
    </div>
  );
}

export default FireBase;
