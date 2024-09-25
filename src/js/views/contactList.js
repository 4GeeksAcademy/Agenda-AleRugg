import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "/workspaces/Agenda-AleRugg/src/styles/contactList.css"
import { getAllAgendas } from "../component/fetchingApiUrl";

import { Context } from "../store/appContext";

const ContactList = () => {
    const { store, actions } = useContext(Context);
    console.log(getAllAgendas())

    return (

        <div className="container">
            <h1>Contactos en la agenda:</h1>
            <ul>
                <div className="container cardsWrapper row d-flex flex-row">
                    {store.contacts.map((item, index) => {

                        return (

                            <div className="text-center mt-5 col-4"key={index}>
                                <div className="card" style={{ width: "18rem" }}>
                                    <div  className="card-body">
                                        <h5 className="card-title">Nombre del Contacto: {item.name}</h5>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Phone Number: {item.phone} </li>
                                        <li className="list-group-item">Email: {item.email}</li>
                                        <li className="list-group-item">Adress: {item.address}</li>
                                    </ul>
                                    <div className="card-body">
                                        <a href="#" className="card-link">Eliminar</a>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )
                    }
                </div>
            </ul>
        </div>

    )
}

export { ContactList }