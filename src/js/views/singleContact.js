import React, { useEffect, useContext } from "react";
import { HiArchiveBoxXMark } from "react-icons/hi2";
import { CiEdit } from "react-icons/ci";
import { Context } from "../store/appContext";
import { useParams, Link, useNavigate } from "react-router-dom";

const SingleContact = () => {
  const { store, actions } = useContext(Context);
  const { contactId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    actions.getAgendaContacts();
  }, []);

  const contact = store.contacts.find(item => item.id === parseInt(contactId));

  if (!contact) {
    return <p>Cargando información del contacto...</p>;
  }

  return (
    <div className="container">
      <h1 className="text-white">Detalle del contacto:</h1>
      <div className="card contacts col-4">
        <div className="card-body">
          <div>
            <h5 className="card-title">{contact.name}</h5>
            <ul>
              <li className="card-text">Phone Number: {contact.phone}</li>
              <li className="card-text">Email: {contact.email}</li>
              <li className="card-text">Address: {contact.address}</li>
            </ul>
          </div>
          <div className="buttons">
            <Link to={"/deleteContactModal/"}>
              <HiArchiveBoxXMark className="buttons" onClick={() => actions.fetchDeleteContact(contact.id, navigate)} />
            </Link>

            <Link to={`/editContactsModal/${contact.id}`}>
              <CiEdit className="buttons" />
            </Link>

            <Link to={"/contactList/"}>
              <button className="btn btn-danger text-white m-2">Back to Contact List</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SingleContact };
