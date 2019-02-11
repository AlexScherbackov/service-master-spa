const footerMenu = {
	state: {
		main: {
			name: 'main navigation',
			subNavs: {
				home: {
					name: 'Home',
					link: '#'
				},
				press_releases: {
					name: 'Press Releases',
					link: '#'
				},
				customer_reviews: {
					name: 'Customer Reviews',
					link: '#'
				},
				about_us: {
					name: 'About Us',
					link: '#'
				},
				service_master: {
					name: 'ServiceMaster',
					link: '#'
				},
				contact_us: {
					name: 'Contact Us',
					link: '#'
				},
			},
		},
		useful_tips:{
			name: 'Useful Tips',
			subNavs: {
				taking_care_of_business: {
					name: 'Taking Care of Business',
					link: '#'
				},
				environmental: {
					name: 'Environmental',
					link: '#'
				},
				energy_management: {
					name: 'Energy Management',
					link: '#'
				},
				pest_control: {
					name: 'Pest Control',
					link: '#'
				},
				landscaping: {
					name: 'Landscaping',
					link: '#'
				},
				damage_control: {
					name: 'Damage Control',
					link: '#'
				},
				mold_damage: {
					name: 'Mold Damage',
					link: '#'
				},
				fire_restoration: {
					name: 'Fire Restoration',
					link: '#'
				},
			},
		},
		damage_restoration: {
			name: 'Damage Restoration Services',
			subNavs:{
				water_damage:{
					name: 'Water Damage Cleanup',
					link: '#'
				},
				fire_damage:{
					name: 'Fire Damage Cleanup',
					link: '#'
				},
				mold_remediation:{
					name: 'Mold Remediation',
					link: '#'
				},
				hoarder_cleanup:{
					name: 'Hoarder Cleanup',
					link: '#',
				},
				trauma_aftermath_cleanup:{
					name: 'Trauma Aftermath Cleanup',
					link: '#'
				},
				carpet_cleaning:{
					name: 'Carpet Cleaning and Extraction ',
					link: '#'
				},
			},
		},
		residential_restoration:{
			name: 'Residential Restoration Services',
			subNavs: {
				disaster_restoration:{
					name: 'Disaster Restoration',
					link: '#',
				},
				water_damage:{
					name: 'Water Damage',
					link: '#',
				},
				fire_smoke_damage:{
					name: 'Fire and Smoke Damage Repair',
					link: '#',
				},
				hoarder_cleanup:{
					name: 'Hoarder Cleanup',
					link: '#',
				},
				mold_cleanup:{
					name: 'Mold Cleanup',
					link: '#',
				},
				estate_cleanup:{
					name: 'Estate Cleanup',
					link: '#',
				},
				trauma_aftermath:{
					name: 'Trauma Aftermath Cleanup',
					link: '#',
				},
			},
		},
		commercial_cleaning: {
			name: 'commercial cleaning',
			subNavs:{
				restaurant_hotel_carpet_cleaning:{
					name: 'Restaurant and Hotel Carpet Cleaning',
					link: '#'
				},
				carpet_cleaning_retail_stores:{
					name: 'Carpet Cleaning for Retail Stores',
					link: '#'
				},
				air_duct_cleaning:{
					name: 'Air Duct Cleaning',
					link: '#'
				},
				commercial_carpet_cleaning:{
					name: 'Commercial Carpet Cleaning',
					link: '#'
				},
				commercial_upholstery_cleaning:{
					name: 'Commercial Upholstery Cleaning',
					link: '#'
				},
				commercial_floor_cleaning:{
					name: 'Commercial Floor Cleaning',
					link: '#'
				},
				commercial_construction_cleaning:{
					name: 'Commercial Construction Cleaning',
					link: '#'
				},
				hospital_carpet_cleaning:{
					name: 'Hospital Carpet Cleaning',
					link: '#'
				},
			}
		},
		disaster_cleaning: {
			name: 'disaster cleaning',
			subNavs:{
				water_damage_cleanup:{
					name: 'Water Damage Cleanup',
					link: '#'
				},
				fire_damage_cleanup:{
					name: 'Fire Damage Cleanup',
					link: '#'
				},
				mold_remediation:{
					name: 'Mold Remediation',
					link: '#'
				},
				hoarder_cleanup:{
					name: 'Hoarder Cleanup',
					link: '#'
				},
				trauma_aftermath_cleanup:{
					name: 'Trauma Aftermath Cleanup',
					link: '#'
				},
				carpet_cleaning_extraction:{
					name: 'Carpet Cleaning and Extraction',
					link: '#'
				},
				water_flood_damage:{
					name: 'Water/Flood Damage',
					link: '#'
				},
				fire_smoke_damage:{
					name: 'Fire/Smoke Damage',
					link: '#'
				},
				mold_removal:{
					name: 'Mold Removal',
					link: '#'
				},
				odor_mitigation:{
					name: 'Odor Mitigation',
					link: '#'
				},
				plumbing_repair:{
					name: 'Plumbing Repair',
					link: '#'
				},
			}
		}
	},
	getters:{
		footerMenu: state => {
			return state;
		}
	}
}
	export {footerMenu};