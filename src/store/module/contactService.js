const contactService = {
	state: [
		{
			id: 1,
			userName: 'Ivan',
			userSurname: 'Ivanov',
			userPhone: '9-999-999-99-99',
			userEmail: 'tes@mail.ru',
			problem: 'Something hapend!'
		}
	],
	mutations:{
		addItemToServiceState(state, item){
			let stateObj = {
				id : state[state.length-1].id + 1
			};

			stateObj = Object.assign(stateObj, item);
			state.push(stateObj);
		}	
	},
	actions: {
		addItemToServiceState(context, payload){
			context.commit('addItemToServiceState', payload);
		}
	}
}

export {contactService};