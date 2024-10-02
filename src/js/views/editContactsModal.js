import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";



const Modal = () => {
    const { store, actions } = useContext(Context);
    const [ nameInputValue, setNameInputValue ] = useState("")
    const [ phoneInputValue, setPhoneInputValue ] = useState("")
    const [ addressInputValue, setAddressInputValue ] = useState("")
    const [emailInputValue, setEmailInputValue ] = useState("")
    const params = useParams()
    const navigate = useNavigate(); // Hook para redirigir

    console.log(params)

    useEffect(() => {

        const contact = store.contacts.filter((item)=> {
            return item.id == params.id 
        
        })
        setNameInputValue(contact[0].name)
        setPhoneInputValue(contact[0].phone)
        setAddressInputValue(contact[0].address)
        setEmailInputValue(contact[0].email)

    }, [])


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
    

    return (
        <>
           // Solo renderiza si isModalOpen es true
                <div className="modal" style={{
                    display: 'block',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1050,
                }}>
                    <div className="modal-dialog d-flex justify-content-center" style={{ marginTop: '10%' }}>
                        <div className="modal-content w-75">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Contact</h5>
                                <Link to={"/contactList/"}>
                                <button type="button" className="btn-close"  aria-label="Close"></button>
				                </Link>
                            </div>
                            <div className="modal-body p-4">                                
                                <form onSubmit={(e) => {
                                    e.preventDefault();
                                    actions.fetchUpdateContact(params.id, nameInputValue, emailInputValue, addressInputValue, phoneInputValue);
                                    navigate("/contactList"); // Redirige a /ruta-destino
                                }}>
                                    {/* Campos de entrada */}
                                    <div className="form-outline mb-4">
                                        <input type="text" id="name2" className="form-control" value={nameInputValue} onChange={(e) => nameInputHandler(e)} />
                                        <label className="form-label" htmlFor="name2">Name</label>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="email" id="email2" className="form-control"  value={emailInputValue} onChange={(e) => emailInputHandler(e)} />
                                        <label className="form-label" htmlFor="email2">Email address</label>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="text" id="address1" className="form-control"  value={addressInputValue} onChange={(e) => addressInputHandler(e)} />
                                        <label className="form-label" htmlFor="address1">Address</label>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="text" id="phone1" className="form-control" value={phoneInputValue} onChange={(e) => phoneInputHandler(e)} />
                                        <label className="form-label" htmlFor="phone1">Phone</label>
                                    </div>
                                    <button type="submit" className="btn btn-danger btn-block">Edit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            
        </>
    );
};

export { Modal };





