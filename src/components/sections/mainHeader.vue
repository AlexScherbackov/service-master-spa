<template>
	<header>
		<top-line class="bg-base""></top-line>
    <header-top></header-top>
    <main-menu class="hidden--md hidden--sm hidden--xs"></main-menu>
	</header>
</template>
<script>
	import topLine from '../uiComponents/topLine.vue';
	import headerTop from '../uiComponents/headerTop.vue';
	import mainMenu from '../uiComponents/mainMenu.vue';

	export default {
		components:{
    	'top-line': topLine,
    	headerTop,
    	mainMenu
  	},
		data(){
			return{

			}
		}
	}
</script>
<style lang="scss" scoped>
	
</style>