import React, { useState, useEffect, useContext } from "react";

//AGENDA OPRATIONS:

// const getAllAgendas = () => {
//     const [allAgendas, setAllAgendas] = useState([])

//     const myHeaders = new Headers();
// myHeaders.append("accept", "application/json");

// const requestOptions = {
//   method: "GET",
//   headers: myHeaders,
//   redirect: "follow"
// };

// fetch("https://playground.4geeks.com/contact/agendas?offset=0&limit=100", requestOptions)
//   .then((response) => response.json())
//   .then((result) => setAllAgendas(result))
//   .catch((error) => console.error(error));

// }

// const getSingleAgenda = () => {

//     const myHeaders = new Headers();
// myHeaders.append("accept", "application/json");

// const requestOptions = {
//   method: "GET",
//   headers: myHeaders,
//   redirect: "follow"
// };

// fetch("https://playground.4geeks.com/contact/agendas/veterinario", requestOptions)
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));
    
// }

const createAgenda = () => {
    
}

const deleteAgenda = () => {
    
}


//CONTACTS OPERATIONS:

const getAgendaContacts = () => {

}

const createAgendaContact = () => {
    
}

const updateAgendaContact = () => {
    
}

const deleteAgendaContact = () => {
    
}

export {getAllAgendas, getSingleAgenda, createAgenda, deleteAgenda, getAgendaContacts, createAgendaContact, updateAgendaContact, deleteAgendaContact}