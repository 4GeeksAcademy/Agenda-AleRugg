import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/addContacts.css";

const AddContacts = () => {
  const { store, actions } = useContext(Context);
  const [nameInputValue, setNameInputValue] = useState([]);
  const [phoneInputValue, setPhoneInputValue] = useState([]);
  const [addressInputValue, setAddressInputValue] = useState([]);
  const [emailInputValue, setEmailInputValue] = useState([]);


 const createContact = () => {

    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "name": nameInputValue, // estos valores deben venir de los inputs

      phone: phoneInputValue,
      email: emailInputValue,
      address: addressInputValue
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("https://playground.4geeks.com/contact/agendas/AleRugg/contacts", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }

  const nameInputHandler = (e) => {
    // setNameInputValue(e.target.value);
    console.log(e)
  };

  const phoneInputHandler = (e) => {
    setPhoneInputValue(e.target.value);
    console.log(e.target.value)
  };
  const addressInputHandler = (e) => {
    setAddressInputValue(e.target.value);
    console.log(e.target.value)
  };
  const emailInputHandler = (e) => {
    setEmailInputValue(e.target.value);
    console.log(e.target.value)
  };

  const contactCreator = (e) => {
  
      createContact();     
      setNameInputValue("");
      setEmailInputValue("");
      setPhoneInputValue("");
      setAddressInputValue("");
    }

  return (
    <>
      <div className="container">
        <h1 className="mb-4 text-white">Crear contacto en agenda:</h1>
        <form className="m-5">
          <div className="row mb-4">
            <div className="col">
              <div data-mdb-input-init className="form-outline">
                <input placeholder="FullName" type="text" id="form6Example1" className="form-control" value={nameInputValue} onChange={(e)=> nameInputHandler(e)}/>
              </div>
            </div>
          </div>
          <div data-mdb-input-init className="form-outline mb-4">
            <input placeholder="Address" type="text" id="form6Example3" className="form-control" key={addressInputValue} onChange={(e)=> addressInputHandler(e)}/>
          </div>
          <div data-mdb-input-init className="form-outline mb-4">
            <input placeholder="PhoneNumber" type="number" id="form6Example4" className="form-control" value={phoneInputValue} onChange={(e)=> phoneInputHandler(e)}/>
          </div>
          <div data-mdb-input-init className="form-outline mb-4">
            <input placeholder="Email" type="email" id="form6Example5" className="form-control" value={emailInputValue} onChange={(e)=> emailInputHandler(e)}/>
          </div>
          <div className="d-flex justify-content-center">
          <button data-mdb-ripple-init type="button" className="btn btn-danger btn-block m-5" onClick={()=> contactCreator()}>Crea un contacto nuevo</button>
          </div>
        </form>
      </div>
    </>
  )
}





export { AddContacts }