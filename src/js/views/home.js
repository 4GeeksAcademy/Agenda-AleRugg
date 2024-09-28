import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import wallpaper from "../../img/wallpaper.webp";
import { Link } from "react-router-dom";

import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		<h1 className="text-white">Bienvenido a tu AgendaApp!</h1>
		<h3 className="text-white">Que necesitas?</h3>
		<div className="wrapper d-flex flex-row m-5 justify-content-around">
		<Link to="/contactList">
					<button className="btn btn-danger text-white m-2">Contact List</button>
				</Link>
				<Link to="/addContacts">
					<button className="btn btn-danger text-white m-2">Create a Contact here</button>
				</Link>
		</div>

	</div>
);
