import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
				<Link to="/contactList">
					<button className="btn btn-primary">Contact List</button>
				</Link>
				<Link to="/addContacts">
					<button className="btn btn-primary">Create a Contact here</button>
				</Link>


			</div>
		</nav>
	);
};
