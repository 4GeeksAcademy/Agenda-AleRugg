import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>.
		<div className="text-center mt-5">
		<div className="card" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">Nombre del Contacto: store.name</h5>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Phone Number: store.phone </li>
    <li className="list-group-item">Email: store.email</li>
    <li className="list-group-item">Adress: store.adress</li>
  </ul>
  <div className="card-body">
    <a href="#" className="card-link">Eliminar</a>

  </div>
	</div>
	</div>)
	</div>
);
