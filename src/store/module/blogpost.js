const blogposts = {
	state: [
		{
			id:1,
			title: 'Disaster Restoration Professionals- Restoring Community',
			date: new Date(2019, 0, 27),
			text: 'Disaster Restoration Professionals, ServiceMaster Restoration By Simons, Chicagoland’s leader in professional dis blablabal'
		}
	],
	getters: {
		blogposts: state => {
			return state;
		},
	}
}

export {blogposts};