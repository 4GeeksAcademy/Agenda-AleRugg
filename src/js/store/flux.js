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
			fetchSingleAgenda: () => {
				const requestOptions = {
					method: "GET",
				};
		
				fetch(`https://playground.4geeks.com/contact/agendas/${slug}`, requestOptions) // no funciona aun desde aqui 
					.then((response) => response.json())
					.then((result) => {
						setUserAgenda(result.contacts);
						store.contacts = result.contacts
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
