import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/createSlug.css";
import { GrActions } from "react-icons/gr";

const CreateSlug = () => {
  const { store, actions } = useContext(Context);
  const [slug, setSlug] = useState("")

  const slugInputHandler= (e) => {
    setSlug( e.target.value);
    console.log(e.target.value)
};

    return (
<div className="container loginContainer d-flex flex-column" >
    <h1 className="text-white mb-5">You can create your own Slug</h1>
    <div>
        <form   className="createInput bg-danger mt-5" style={{width: "22rem"}}>
  <div data-mdb-input-init className="form-outline mb-4">
     <input type="text" id="form5Example1" className="form-control" value={slug} onChange={(e)=>slugInputHandler(e)} />          { /* <----- input para crear slug */ }
    <div className="d-flex justify-content-center m-2">
    <label className="form-label text-white text-center" >Create your slug!</label>
    </div>
  </div>
  <div className="d-flex justify-content-center">
  <button data-mdb-ripple-init type="button" className="btn btn-dark btn-block mb-4 createButton" onClick={()=> actions.fetchCreateSlug(slug)}>Create</button>
  </div>
</form >
</div>
</div>
    )


}

export {CreateSlug}