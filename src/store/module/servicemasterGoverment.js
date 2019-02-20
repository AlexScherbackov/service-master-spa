const servicemasterGoverment = {
	state: [
		{
			id: 1,
			image: './src/assets/image/people-1.png',
			name: 'Nasutsa Mabwa',
			office: 'president',
			description: 'ServiceMaster Restoration By Simons’ esteemed president, utilizes her skills in business and real estate development to direct the company’s strategic course. She oversees finance, compliance, marketing and has a background in urban	planning and municipal government… '
		},
		{
			id: 2,
			image: './src/assets/image/people-2.png',
			name: 'Sam Simon',
			office: 'Managing Director',
			description: 'Our Managing Director, Sam Simon oversees all local and national disaster restoration projects, project managers,	technicians and sub-contractors. Sam has over 20 years of experience in the disaster restoration industry and is	certified in water and fire damage restoration, as well as mold… '
		},
		{
			id: 3,
			image: './src/assets/image/people-3.png',
			name: 'Neda Howell',
			office: 'Marketing Manager',
			description: 'Neda, a former fourteen year high school English teacher, is responsible for carrying out marketing and advertising	initiatives, managing social media and customer relations. She occasionally performs as a project manager on residential disaster restoration… '
		},
		{
			id: 4,
			image: './src/assets/image/people-4.png',
			name: 'Hilda Contreras',
			office: 'Office Manager',
			description: 'Hilda is the Office Manager and responsible for payroll, office communication, scheduling, book-keeping and administrative duties for the office; keeping everyone organized. Hilda has previously worked in the auto insurance industry as an underwriter for over 20 years.'
		}, 
	],
	getters: {
		servicemasterGoverment: state => {
			return state;
		}
	}
}

export {servicemasterGoverment};