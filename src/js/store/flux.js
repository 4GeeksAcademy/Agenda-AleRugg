import { useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			isModalOpen: true,
			demo: [

				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: [], 
			slug: "", // aqui se volcaran los contactos de la agenda desde la API

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			// Este es el GET del SLUG
			getAgendaContacts: () => {
				const slug = "AleRugg";
				const requestOptions = {
					method: "GET",
				};

				fetch(`https://playground.4geeks.com/contact/agendas/${slug}`, requestOptions)
					.then((response) => response.json())
					.then((result) => {
						console.log(result.contacts);
						setStore({ contacts: result.contacts }); // Seteamos el store.contacts con el result del fetch 
					})
					.catch((error) => console.error(error));
			},
			// fetchAPI POST contact
			fetchCreateContact: (name, phone, email, address) => {
				const store = getStore();

				const myHeaders = new Headers();
				myHeaders.append("accept", "application/json");
				myHeaders.append("Content-Type", "application/json");

				const raw = JSON.stringify({
					name: name,
					phone: phone,
					email: email,
					address: address
				});

				const requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};
				fetch("https://playground.4geeks.com/contact/agendas/AleRugg/contacts", requestOptions)
					.then((response) => response.json())
					.then((result) => {
						console.log(result);
						setStore({ contacts: [...store.contacts, result] });

					})
					.catch((error) => console.error(error));

			},
			// fetchAPI que borra/elimina 
			fetchDeleteContact: (id) => {
				const slug = "AleRugg";
				const { contacts } = getStore()
				const newContact = contacts.filter((contact) => contact.id !== id); // borrar articulos de la lista	

				const myHeaders = new Headers();
				myHeaders.append("accept", "application/json");

				const requestOptions = {
					method: "DELETE",
					headers: myHeaders,
				};

				fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts/${id}`, requestOptions)
					.then(() => {
						setStore({ contacts: newContact })
					})
					.catch((error) => console.error(error));
			},

			fetchUpdateContact: (id, name, email, address, phone) => {
				const slug = "AleRugg";

				const myHeaders = new Headers();
				myHeaders.append("accept", "application/json");
				myHeaders.append("Content-Type", "application/json");

				const raw = JSON.stringify({
					name: name,
					phone: phone,
					email: email,
					address: address,
				});

				const requestOptions = {
					method: "PUT",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts/${id}`, requestOptions)
					.then((response) => response.text())
					.then((result) => {
						getActions().getAgendaContacts()
					})
			},
		fetchCreateSlug: (slug) => {
			const store = getStore();

				const myHeaders = new Headers();
				myHeaders.append("accept", "application/json");

				const requestOptions = {
					method: "POST",
				};

				fetch(`https://playground.4geeks.com/contact/agendas/${slug}`, requestOptions)
					.then((response) => response.json())
					.then((result) => 
						setStore({ slug: [...store.slug, result] })
						
				)
					.catch((error) => console.error(error));
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
