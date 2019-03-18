<template>
	<ul >
		<li v-for="item in $data" :class="classObject.submenuItem" :key="item.name">
			<a 
				:class="[classObject.archiveLink, $data[item.name].value ? 'active' : '']"  
				@click.prevent="trigerMenu" 
				:data-name="item.name">
				{{item.name}}
			</a>
		
			<collapse-transition>
				<ul v-if="$data[item.name].value" :class="classObject.archiveList" >
					<li v-for="elem in archive[item.name]" :class="classObject.archiveItem" :key="elem"> 
						{{elem}}
					</li>
				</ul>
			</collapse-transition>
		</li>
	</ul>
</template>
<script>
	import { CollapseTransition } from 'vue2-transitions';

	export default {
		components: {
			CollapseTransition
		},
		props: {
		archive: {
			type: Object,
			required: true
		},
		classObject: {
			archiveItem: String,
			archiveLink: String,
			archiveList: String,
			submenuItem: String,
			submenu: String
		}
	},
	data(){
		const years = {};

		Object.keys(this.archive).forEach( item => {
			Object.defineProperty(years, item, {enumerable: true, value: {name:item, value: false}})
		});
		return {
			...years
		};

	},
	computed:{
		
	},
	methods: {
		trigerMenu(event){
			const param = event.target.dataset.name;
			this[param].value = !this[param].value; 
		}
	}
}

</script>
 