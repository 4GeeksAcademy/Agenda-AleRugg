import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import wallpaper from "../../img/wallpaper.webp";

import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		<h1 className="text-white">Bienvenido a tu AgendaApp!</h1>
		<h3 className="text-white">Que necesitas?</h3>
		<div className="wrapper d-flex flex-row m-5 justify-content-around">
			<div>
		<a href="#" className="btn btn-danger btn1">
			Crear un nuevo contacto
		</a>
		</div>
		<div>
		<a href="#" className="btn btn-danger btn1">
			Ir a tus contactos
		</a>
		</div>
		</div>

	</div>
);
