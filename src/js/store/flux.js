const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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
			contacts: [
							// aqui se volcaran los contactos de la agenda desde la API
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			getAgendaContacts: () => {
				const slug = "AleRugg";
				const requestOptions = {
					method: "GET",
				};
		
				fetch(`https://playground.4geeks.com/contact/agendas/${slug}`, requestOptions) // no funciona aun desde aqui 
					.then((response) => response.json())
					.then((result) => { console.log(result);
						setStore({contacts: result.contacts});
					})
					.catch((error) => console.error(error));
			},
			 fetchDeleteContact:  (id) => {
				const slug = "AleRugg";
				const {contacts} = getStore()
				const newContact = contacts.filter((contact) => contact.id !== id); // borrar articulos de la lista	
							
				const myHeaders = new Headers();
				myHeaders.append("accept", "application/json");
							
				const requestOptions = {
				  method: "DELETE",
				  headers: myHeaders,
				};
			
				fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts/${id}`, requestOptions)				
				  .then(() => { 
					setStore({contacts: newContact})
				})
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
