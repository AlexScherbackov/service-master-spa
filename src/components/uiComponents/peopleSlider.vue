<template>
	<slider
		:animation="'normal'" 
		:autoplay="autoplay" 
		:height="height" 
		:width="width" 
		:class="'people-slider'"
		:slides="slides"
	>
		<template slot="slide" slot-scope="slotProps">
			<people-card :cardData="slotProps.item" />
		</template>
	</slider>
</template>
<script>
	import slider from '../interfaceComponents/slider.vue';
	import peopleCard from '../uiComponents/peopleCard.vue';

	export default {
		components: {
			slider,
			peopleCard
		},
		props:{
			slides: {
				type: [Array, Object],
				required: true
			}
		},
		data(){
			return {
				autoplay: false,
				height: '420px',
				width: '100%'
			}
		}
	}
</script>
<style lang="scss">
.people-slider{
	& .slider-item{

	}

	& .slider-btn{
		background: transparent!important;
		@media screen and(max-width: 390px){
			display: none;
		}
		
	}
	& .slider-icon{
		border-color: #000!important;
	}
	& .people-card__text{
		max-width: 320px;
		@media screen and(max-width: 420px){
			max-width: 290px;
		}
	}
	& .slider-indicator-active{
		background-color: #000;
	}
}
	
</style>