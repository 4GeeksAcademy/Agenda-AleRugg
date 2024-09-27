import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 bg-black" style={{borderBottom:" solid 1px red", borderRadius:"8px"}}>
			<Link to="/">
				<span className="navbar-brand mb-0 h1 text-white m-5">AgendaApp</span>
			</Link>
			<div className="ml-auto">
				<Link to="/contactList">
					<button className="btn btn-danger text-white m-2">Contact List</button>
				</Link>
				<Link to="/addContacts">
					<button className="btn btn-danger text-white m-2">Create a Contact here</button>
				</Link>


			</div>
		</nav>
	);
};
