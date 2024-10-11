import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/addContacts.css";

const AddContacts = () => {
  const { actions } = useContext(Context);
  const [nameInputValue, setNameInputValue] = useState([]);
  const [phoneInputValue, setPhoneInputValue] = useState([]);
  const [addressInputValue, setAddressInputValue] = useState([]);
  const [emailInputValue, setEmailInputValue] = useState([]);

  const nameInputHandler= (e) => {
    setNameInputValue( e.target.value );
    console.log(e.target.value)
};
// maneja el input del phone
const phoneInputHandler= (e) => {
    setPhoneInputValue( e.target.value );
    console.log(e.target.value);
};
// maneja el input del address
const addressInputHandler= (e) => {
    setAddressInputValue( e.target.value );
    console.log(e.target.value)
};
//maneja el input del email
const emailInputHandler= (e) => {
    setEmailInputValue( e.target.value );
   
    console.log(e.target.value)

};

const clearInputs = () => {
  setNameInputValue("");
  setPhoneInputValue("");
  setEmailInputValue("");
  setAddressInputValue("") // Pone en blanco los inputs
}

const handleClick = () => {
  if(
    nameInputValue &&  phoneInputValue && emailInputValue && addressInputValue !== ""
  )
  {  actions.fetchCreateContact(nameInputValue, addressInputValue, phoneInputValue, emailInputValue);
    clearInputs()
  }

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
            <input placeholder="Address" type="text" id="form6Example3" className="form-control"  value={addressInputValue}  onChange={(e)=> addressInputHandler(e)}/>
          </div>
          <div data-mdb-input-init className="form-outline mb-4">
            <input placeholder="PhoneNumber" type="number" id="form6Example4" className="form-control"   value={phoneInputValue}  onChange={(e)=> phoneInputHandler(e)}/>
          </div>
          <div data-mdb-input-init className="form-outline mb-4">
            <input placeholder="Email" type="email"  id="form6Example5" className="form-control"  value={emailInputValue}  onChange={(e)=> emailInputHandler(e)}/>
          </div>
          <div className="d-flex justify-content-center">
          <button data-mdb-ripple-init type="button" className="btn btn-danger btn-block m-5" onClick={()=> handleClick()}>Crea un contacto nuevo</button>
          </div>
        </form>
      </div>
    </>
  )
}

export { AddContacts }