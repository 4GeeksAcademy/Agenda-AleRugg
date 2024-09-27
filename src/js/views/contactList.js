import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "/workspaces/Agenda-AleRugg/src/styles/contactList.css"



import { Context } from "../store/appContext";
import { HiArchiveBoxXMark } from "react-icons/hi2";
import { CiEdit } from "react-icons/ci";

const slug = "AleRugg"

const ContactList = () => {
  const { store, actions } = useContext(Context);
  const [userAgenda, setUserAgenda] = useState([]);

  const getContacts = () => {

    const requestOptions = {
      method: "GET",
    };

    fetch(`https://playground.4geeks.com/contact/agendas/${slug}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setUserAgenda(result.contacts);
        store.contacts = result.contacts
      })
      .catch((error) => console.error(error));
  }


  useEffect(() => {
    getContacts()

  }, [store.contact])

  // useEffect(() => {

  //     console.log(userAgenda) // este efecto sera para probar que los estados tengan los valores esperados 
  // },)

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const handlerKeyDown = (e) => {
    if (e.key === "Enter" && inputValue !== "") {
      createToDo();
      setInputValue(""); // Limpia el input despues de la interaccion 
    }
  };

  const deleteContact = (id) => {
    const newContact = userAgenda.filter((contact) => contact.id !== id); // borrar articulos de la lista
    fetchDeleteContact(id)
    console.log(id);
    setUserAgenda(newContact);
  };

  const fetchDeleteContact = (id) => {

    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
    };

    fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getContacts()
  }, [store.contacts])



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
                  <HiArchiveBoxXMark className="buttons" onClick={() => deleteContact(item.id)} />
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