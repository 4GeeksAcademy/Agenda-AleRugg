import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "/workspaces/Agenda-AleRugg/src/styles/contactList.css"
// import { getAllAgendas } from "../component/fetchingApiUrl";


import { Context } from "../store/appContext";
import { HiArchiveBoxXMark } from "react-icons/hi2";
import { CiEdit } from "react-icons/ci";

const slug = "AleRugg"

const ContactList = () => {
    const { store, actions } = useContext(Context);
    const [allAgendasAPI, setAllAgendasAPI] = useState([]);
    const [userAgenda, setUserAgenda] = useState([]);

    useEffect(() => {
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

    }, [])

    useEffect(() => {
        console.log(userAgenda) // este efecto sera para probar que los estados tengan los valores esperados 
    },)



    return (

        <div className="container">
            <h1>Contactos en la agenda:</h1>
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
                                     <HiArchiveBoxXMark className="buttons"/>
                                    <CiEdit className="buttons"/>
                                     </div>
                                </div>
                            </div>

                        )
                    }
                    )
                    }
                </div>
        </div>

    )
}

export { ContactList }