const categories = {
	state: [
		{
			id: 1,
			title: 'Fire Damage Cleanup'
		},
		{
			id: 2,
			title: 'Interview'
		},
		{
			id: 3,
			title: 'Post-Construction Cleaning'
		},
		{
			id: 4,
			title: 'Estate Cleaning'
		},
		{
			id: 5,
			title: 'Oven Safety'
		},
		{
			id: 6,
			title: 'Water/Flood Damage'
		},
		{
			id: 7,
			title: 'Healthcare Disaster Restoration'
		},
		{
			id: 8,
			title: 'Top Tips'
		}
	],
	getters: {
		categories: state => {
			return state;
		}
	}
}

export {categories}