const navigation = {
	state: {
		services:{
			name: 'services',
			subNavs:{
				disaster_restoration:{
					name: 'disaster restoration',
					title: 'disaster restoration',
					link: '#',
					description: `DRS is available to help you recover from disaster 24 hours a day, 
					7 days a week. With our professional restoration services, you get immediate response to your fire, 
					water, or storm damage. Our full-service team of professional and attentive first-responders perform cleanup, 
					repair and remodeling, where you can solve all your restoration needs with just one call.`
				},
				water_damage_cleanup:{
					name: 'Water Damage Cleanup',
					title: 'Water Damage Cleanup',
					link: '#',
					description: `When water invades your home and causes damage, 
					it is usually unbelievably traumatizing. After the water stops 
					flowing you are usually stuck with a daunting mess and more damage than you may realize.
					Water can find its way into hidden nooks and crannies, such as under flooring, behind walls, 
					in the ceiling, and can continue to wreak havoc if it isn’t dealt with properly.
					When dealing with any kind of water damage timing is critical. 
					If water damage is not treated quickly or properly it can cause significant structural damage,
					mold and possible health issues. All Brite Cleaning & Restoration staffs the best certified technicians 
					in our area. We utilize the best cleaning and restoration practices to restore you 
					property to its pre-loss condition.`
				},
				fire_damage_cleanup:{
					name: 'Fire Damage Cleanup',
					title: 'Fire Damage Cleanup',
					link: '#',
					description: `You lose more than possessions when a fire strikes your home;
					you lose precious peace-of-mind. Which is why you turn to ServiceMaster 
					Restoration by Simons for fire &amp; smoke damage cleanup &amp; restoration.`
				},
				mold_remediation:{
					name: 'Mold Remediation',
					title: 'Mold Remediation',
					link: '#',
					description: `We know mold removal can be a daunting task. 
					Where should you begin? And how can you get it done right at a reasonable price?  
					Well, the truth is that mold removal isn’t as complicated as it’s often made out to be.  
					And the right mold professional can guide you through the process while charging a reasonable price.

					So here are Moldman’s tips for finding the right pro to get your job done right without breaking the bank.`
				},
				hoarder_cleanup:{
					name: 'Hoarder Cleanup',
					title: 'Hoarder Cleanup',
					link: '#',
					description: `When you think of hoarding clean up do you see piles of trash bags lining your street? 
					If so, you haven’t experienced or been made aware of the hoarding cleanup services of Bio Recovery.  
					Our professional hoarding cleanup specialists don’t just throw your belongings out to the curb, 
					we find a place for unwanted belongings.  
					Whether it’s in your home, business, or someone else’s property you have ownership of, 
					we can schedule a professional cclean upcleanup any location.`
				},
				carpet_clean_extraction:{
					name: 'Carpet Clean Extraction',
					title: 'Carpet Clean Extraction',
					link: '#',
					description: `Mix your carpet cleaning chemical according to the directions on the label of the bottle. 
					A great all-purpose carpet cleaning solution is our Extraction Care Carpet & Upholstery Cleaner. 
					Fill the solution tank of your extractor with the proper amount of chemical and water. 
					If it is non-heated unit, it is a good idea to fill your solution tank with hot tap water. 
					If you're using a heated machine, this would be the time to turn the heater on and circulate the water 
					so the solution is at an optimum temperature when you begin cleaning. Attach all hoses and the necessary tools.
					Place a few ounces of a defoamer into a container and suck it up through the vacuum hose. 
					This will coat all surfaces through the hoses and recovery tank, eliminating foam as the shampoo is recovered.`
				},
				water_flood_damage:{
					name: 'Water/Flood Damage',
					title: 'Water & Flood Damage Restoration' ,
					link: '#',
					description: `Water is one of the most destructive perils to a home or business. 
					A fast response to begin the drying process is critical to avoid further damage, such as mold and bacteria. 
					Reynolds has a team of certified water damage restoration technicians that will ensure this process is 
					initiated as quickly as possible to help you get your home or business back to pre-loss condition. 
					Since 2005, we have been one of the leading water damage cleanup companies in the area. 
					With trained personnel and advanced water cleanup equipment, 
					we get in and make quick work of your water and flood damage. 
					Our experts are certified to assess your water damage and propose the right repair solutions.`
				},
				fire_smoke_damage:{
					name: 'Fire/Smoke Damage',
					title: 'Fire & Smoke Damage Restoration',
					link: '#',
					description: `You lose more than possessions when a fire strikes your home;
					you lose precious peace-of-mind. Which is why you turn to ServiceMaster 
					Restoration by Simons for fire &amp; smoke damage cleanup &amp; restoration.`
				},
				mold_removal:{
					name: 'Mold Removal',
					title: 'Mold Removal' ,
					link: '#',
					description: `Since microscopic mold spores exist naturally almost everywhere, 
					indoors and outdoors, removing all mold from a home or business is impossible. 
					Some restoration businesses advertise “mold removal” and even guarantee to remove all mold. This is a fallacy.`
				},
				educational_facilities_disaster_restoration:{
					name: 'Educational Facilities Disaster Restoration',
					title:  'Educational Facilities Disaster Restoration',
					link: '#',
					description: `Small, large, private and public schools present similar challenges every day. 
					You have to manage multiple departments, balance budgets and prioritize spending. 
					Providing a quality education and safe environment for your students always stays at the very top of your 
					list of responsibilities.`
				},
				odor_mitigation:{
					name: 'Odor Mitigation',
					title:  'Odor Mitigation',
					link: '#',
					description: `Urban-gro offers a whole suite of patented technology product options to meet your 
					needs to reduce odors and clean the air and environment. Our products are made for greenhouse 
					and indoor cultivation environments. They work to actively “scrub” ducting, air and surfaces.`
				},
				plumbing_repair:{
					name: 'Plumbing Repair',
					title:  'Plumbing Repair',
					link: '#',
					description: `We'll give you a fixed price repair to get your plumbing and drains up-and-running again. 
					And then our ongoing cover for the next year, so you don't need to worry if anything else goes wrong. `
				},
				healthcare_disaster_restoration:{
					name: 'Healthcare Disaster Restoration',
					title: 'Healthcare Disaster Restoration',
					link: '#',
					description: `At ServiceMaster Restoration by Simons, we have extensive experience and expertise in damage restoration 
					of hospitals and other types of healthcare facilities. After all,
					when disaster strikes, nothing is more vital to the community than functioning clinics and hospitals.`
				},
				natural_disaster:{
					name: 'Natural Disaster',
					title: 'Natural Disaster',
					link: '#',
					description: `You lose more than possessions when a fire strikes your home;
					you lose precious peace-of-mind. Which is why you turn to ServiceMaster 
					Restoration by Simons for fire &amp; smoke damage cleanup &amp; restoration.`
				},
				hospitality_hotel:{
					name: 'Hospitality/Hotel Disaster Restoration',
					title: 'Hospitality & Hotel Disaster Restoration',
					link: '#',
					description: `You lose more than possessions when a fire strikes your home;
					you lose precious peace-of-mind. Which is why you turn to ServiceMaster 
					Restoration by Simons for fire &amp; smoke damage cleanup &amp; restoration.`
				},
				manufacturing_disaster:{
					name: 'Manufacturing Disaster Restoration',
					title: 'Manufacturing Disaster Restoration',
					link: '#',
					description: `You lose more than possessions when a fire strikes your home;
					you lose precious peace-of-mind. Which is why you turn to ServiceMaster 
					Restoration by Simons for fire &amp; smoke damage cleanup &amp; restoration.`
				},
				military_facility:{
					name: 'Military Facility Disaster Restoration',
					title: 'Military Facility Disaster Restoration',
					link: '#',
					description: `You lose more than possessions when a fire strikes your home;
					you lose precious peace-of-mind. Which is why you turn to ServiceMaster 
					Restoration by Simons for fire &amp; smoke damage cleanup &amp; restoration.`
				},
				places_of_worship:{
					name: 'Places of Worship Disaster Restoration',
					title: 'Places of Worship Disaster Restoration',
					link: '#',
					description: `You lose more than possessions when a fire strikes your home;
					you lose precious peace-of-mind. Which is why you turn to ServiceMaster 
					Restoration by Simons for fire &amp; smoke damage cleanup &amp; restoration.`
				},
				retail_disaster_restoration:{
					name: 'Retail Disaster Restoration',
					title: 'Retail Disaster Restoration',
					link: '#',
					description: `You lose more than possessions when a fire strikes your home;
					you lose precious peace-of-mind. Which is why you turn to ServiceMaster 
					Restoration by Simons for fire &amp; smoke damage cleanup &amp; restoration.`
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
			name: 'service areas',
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
			link: 'blog'
		},
		contact_us: {
			name: 'contact us',
			link: 'contactUs'
		}

	},
	getters: {
		navigation: state => {
			return state;
		},
	}
}

export {navigation};