<template>
	<header>
		<top-line class="bg-base""></top-line>
    <header-top></header-top>
    <main-menu class="hidden--md hidden--sm hidden--xs"></main-menu>
	</header>
</template>
<script>
	import topLine from './topLine.vue';
	import headerTop from './headerTop.vue';
	import mainMenu from './mainMenu.vue';

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