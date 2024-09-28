import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "/workspaces/Agenda-AleRugg/src/styles/contactList.css"
import { Context } from "../store/appContext";
import { HiArchiveBoxXMark } from "react-icons/hi2";
import { CiEdit } from "react-icons/ci";

const slug = "AleRugg"

const ContactList = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getAgendaContacts()
  }, [])



  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const handlerKeyDown = (e) => {
    if (e.key === "Enter" && inputValue !== "") {
      createToDo();
      setInputValue(""); // Limpia el input despues de la interaccion 
    }
  };

  

  return (

    <div className="container">
      <h1 className="text-white">Contactos en la agenda:</h1>
      <div className="container wrapper row">
        {store.contacts.map((item, index) => {

          return (
            <div className="card contacts col-4" key={index}>
              <div className="card-body">
                <div>
                  <h5 className="card-title">{item.name}</h5>
                  <ul>
                    <li className="card-text">Phone Number: {item.phone}</li>
                    <li className="card-text"> Email: {item.email}</li>
                    <li className="card-text">Adress: {item.address}</li>
                  </ul>
                </div>
                <div className="buttons">
                  <HiArchiveBoxXMark className="buttons" onClick={() => actions.fetchDeleteContact(item.id)} />
                  <CiEdit className="buttons" />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { ContactList }