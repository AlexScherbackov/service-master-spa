import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		navigation:{
			services:{
				name: 'services',
				subNavs:{
					disaster_restoration:{
						name: 'disaster restoration',
						link: '#'
					},
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
					carpet_clean_extraction:{
						name: 'Carpet Clean Extraction',
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
					educational_facilities_disaster_restoration:{
						name: 'Educational Facilities Disaster Restoration',
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
					healthcare_disaster_restoration:{
						name: 'Healthcare Disaster Restoration',
						link: '#'
					},
					natural_disaster:{
						name: 'Natural Disaster',
						link: '#'
					},
					hospitality_hotel:{
						name: 'Hospitality/Hotel Disaster Restoration',
						link: '#'
					},
					manufacturing_disaster:{
						name: 'Manufacturing Disaster Restoration',
						link: '#'
					},
					military_facility:{
						name: 'Military Facility Disaster Restoration',
						link: '#'
					},
					places_of_worship:{
						name: 'Places of Worship Disaster Restoration',
						link: '#'
					},
					retail_disaster_restoration:{
						name: 'Retail Disaster Restoration',
						link: '#'
					},
				}
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
			resedintial_cleaning:{
				name: 'resedintial cleaning',
				subNavs:{
					residential_carpet_cleaning:{
						name: 'Residential Carpet Cleaning',
						link: '#'
					},
					disaster_restoration_carpet_cleaning:{
						name: 'Disaster Restoration Carpet Cleaning',
						link: '#'
					},
					residential_upholstery_cleaning:{
						name: 'Residential Upholstery Cleaning',
						link: '#'
					},
					residential_floor_cleaning:{
						name: 'Residential Floor Cleaning',
						link: '#'
					},
					general_housewide_cleaning:{
						name: 'General Housewide Cleaning',
						link: '#'
					},
					residential_post_construction_cleaning:{
						name: 'Residential Post Construction Cleaning',
						link: '#'
					},
					apartment_carpet_cleaning:{
						name: 'Apartment Carpet Cleaning',
						link: '#'
					},
					hoarder_cleanup:{
						name: 'Hoarder Cleanup',
						link: '#'
					},
					estate_cleanup:{
						name: 'Estate Cleanup',
						link: '#'
					},
					water_damage:{
						name: 'Water Damage',
						link: '#'
					},
					fire_and_smoke_damage_repair:{
						name: 'Fire and Smoke Damage Repair',
						link: '#'
					},
					mold_cleanup:{
						name: 'Mold Cleanup',
						link: '#'
					},
					trauma_aftermath_cleanup:{
						name: 'Trauma Aftermath Cleanup',
						link: '#'
					},
					air_duct_cleaning:{
						name: 'Air Duct Cleaning',
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
			},
			service_areas: {
				name: 'service cleaning',
				subNavs:{
					chicago:{
						name: 'Chicago',
						link: '#'
					},
					chicago_suburbs:{
						name: 'Chicago Suburbs',
						link: '#'
					},
				}
			},
			blog:{
				name: 'blog',
				link: '#'
				},
			contact_us: {
				name: 'contact us',
				link: 'https://www.google.com'
			}
		}
	},
	getters:{
		navigation: state => {
			return state.navigation;
		} 
	}
})