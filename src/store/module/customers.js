const customers = {
	state: [
	{
		name: 'Yelp',
		logo: {src: './src/assets/svg/yeil-svg.svg', width:'96px', height: '49px'},
		rating: '4,5',
		stars: 3,
		text: {descr: `Lorem ipsum dolor sit amet, ad vis novum saepe maiestatis, facilis sadipscing id cum. At nec quod utroque detracto.`, author:'Anna Frank'}
	},
	{
		name: 'Google',
		logo: {src: './src/assets/svg/google-svg.svg', width:'145px', height: '39px'},
		rating: '4,9',
		stars: 5,
		text: {descr: `Lorem ipsum dolor sit amet, ad vis novum saepe maiestatis, facilis sadipscing id cum. At nec quod utroque detracto. Volumus tacimates antiopam ea ius. Qui ea simul lobortis… read more`}
	},
	{
		name: 'Facebook',
		logo: {src: './src/assets/svg/facebook-svg.svg', width:'148px', height: '29px'},
		rating: '4,6',
		stars: 4,
		text: {descr: `Lorem ipsum dolor sit amet, ad vis novum saepe maiestatis, facilis sadipscing id cum. At nec quod utroque detracto. Volumus tacimates antiopam ea ius. Qui ea simul lobortis… read more`}
	}
	],
	getters: {
		customers: state => {
			return state;
		}
	}
}

export {customers};