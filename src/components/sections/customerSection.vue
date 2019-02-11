<template>
	<section class="base-section">
		<div class="container">
			<h2 class="base-title">Our happy customers</h2>
			<div v-if="width >= 769" class="customer__wrapper margin__top--20">
				<customer-card  v-for="(card, index) in customers" :key="index" :name="card.name" :logo="card.logo" :rating="card.rating" :stars="card.stars" :text="card.text" class="customer__item" />
			</div>
			<customers-slider v-else :slides="customers" class="margin__top--20"/>
		</div>
	</section>
</template>
<script>
	import {mapGetters} from 'vuex';

	import customerCard from '../uiComponents/customerCard.vue';
	import customersSlider from '../uiComponents/customersSlider.vue';

	export default {
		components:{
			customerCard,
			customersSlider
		},
		props:{
			width: {
				type: Number
			}
		},
		data(){
			return {

			}
		},
		computed:{
			...mapGetters(['customers'])
		}
	}
</script>
<style lang="scss" scoped>
	.customer{
		&__wrapper{
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-gap: 20px;
			@media screen and (max-width: 992px){
				grid-template-columns: repeat(3, minmax(200px, 230px));
				grid-gap: 10px;
			}
		}
	}
</style>