import React, { useState, useEffect, useContext } from "react";
import { HiArchiveBoxXMark } from "react-icons/hi2";
import { CiEdit } from "react-icons/ci";

// import "/workspaces/Agenda-AleRugg/src/styles/contactList.css"


import { Context } from "../store/appContext";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";


const SingleContact = () => {

    const { store, actions } = useContext(Context);
    const [ nameInputValue, setNameInputValue ] = useState("")
    const [ phoneInputValue, setPhoneInputValue ] = useState("")
    const [ addressInputValue, setAddressInputValue ] = useState("")
    const [emailInputValue, setEmailInputValue ] = useState("")
    const {contactId} = useParams()
    const navigate = useNavigate(); // Hook para redirigir


    const nameInputHandler= (e) => {
        setNameInputValue( e.target.value);
      
    };
    // maneja el input del phone
    const phoneInputHandler= (e) => {
        setPhoneInputValue( e.target.value );
        
    };
    // maneja el input del address
    const addressInputHandler= (e) => {
        setAddressInputValue( e.target.value );
     
    };
    //maneja el input del email
    const emailInputHandler= (e) => {
        setEmailInputValue( e.target.value );    

    };  

    const contact = store.contacts.filter((item)=> {
      return item.id !== contactId.id
    })

    
   
    return (

          
          
    <div className="container">
      <h1 className="text-white">Contactos en la agenda:</h1>
      <div className="container wrapper row"></div>
      <div className="card contacts col-4" key={contact.id}>
              <div className="card-body">
                <div>
                  <h5 className="card-title">{contact.name}</h5>
                  <ul>
                    <li className="card-text">Phone Number: {contact.phone}</li>
                    <li className="card-text"> Email: {contact.email}</li>
                    <li className="card-text">Adress: {contact.address}</li>
                  </ul>
                </div>
                <div className="buttons">
                <Link to={"/deleteContactModal/"}>
                <HiArchiveBoxXMark className="buttons" onClick={() => actions.fetchDeleteContact(contactId.id)} />
				          </Link>
                
                  <Link to={`/editContactsModal/${contact.id}`}>
                    <CiEdit  data-mdb-button-init data-mdb-ripple-init className="buttons" data-mdb-modal-init data-mdb-target="#staticBackdrop2"  />
				          </Link>
                  <Link to={`/singleContact/${contact.id}`}>
					<button className="btn btn-danger text-white m-2">Single Contact</button>
				</Link>
                </div>
              </div>

            </div>
            
        </div>
    );
};



export { SingleContact }