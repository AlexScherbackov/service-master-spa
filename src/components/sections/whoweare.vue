<template>
	<section class="base-section padd">
		<h1 class="base-title base-title--line-over base-title--fz-28 margin__top--20">who we are</h1>
		<div class="container">
			<peopleBox v-if="width >= 768" :peoples="servicemasterGoverment"/>
			<peopleSlider v-else :slides="servicemasterGoverment" class="margin__top--20"/>
		</div>
		
	</section>
</template>
<script>
	import peopleBox from '../uiComponents/peopleBoxGrid.vue';
	import peopleSlider from '../uiComponents/peopleSlider.vue';

	import {mapGetters} from 'vuex';

	export default {
		props: {
			width: {
				type: Number
			}
		},
		components:{
			peopleBox,
			peopleSlider
		},
		data(){
			return {

			}
		},
		computed: {
			...mapGetters(['servicemasterGoverment']),
			
		}
	}
</script>
<style lang="scss" scoped>
.padd{
	padding: 36px 0 56px;
}


</style>