<template>
	<component :is="toggleGridSlider" :class="{'margin__top--20': marginTop}"></component> 
</template>
<script>
	import gridHeader from '../uiComponents/gridHeader.vue';
  import mainSlider from '../uiComponents/mainSlider.vue';

	export default {
		componnents: {
			gridHeader,
      mainSlider,
		},
		props: {
			width: {
				type: Number
			}
		},
		data(){
			return {

			}
		},
		computed: {
			toggleGridSlider(){
				return this.width > 546 ? gridHeader : mainSlider
			},
			marginTop(){
				return this.width < 992 ? true : false
			}
		}
	}
</script>
<style lang="scss" scoped>

</style>