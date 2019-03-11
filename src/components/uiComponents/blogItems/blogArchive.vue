<template>
	<ul >
		<li v-for="item in years" :class="classObject.submenuItem" :key="item.name">
			<a 
				:class="classObject.archiveLink" 
				@click.prevent="trigerMenu" 
				:data-name="item.name">
				{{item.name}}
			</a>
		
			<transition name="fade">
				<ul :class="classObject.archiveList" >
					<li v-for="elem in archive[item.name]" :class="classObject.archiveItem" :key="elem"> 
						{{elem}}
					</li>
				</ul>
			</transition>
		</li>
	</ul>
</template>
<script>
	export default {
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
			years:years
		};

	},
	methods: {
		trigerMenu(event){
			const param = event.target.dataset.name;
			this.years[param].value = !this.years[param].value; 
			console.log(this.$data)
		} 
	}
}

</script>
 