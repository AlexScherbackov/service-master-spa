<template>
	<slider 
		:animation="'normal'" 
		:autoplay="'autoplay'" 
		:height="height" 
		:width="width" 
		:class="'customer-slider'"
		:slides="slides"
	>
		<template slot="slide" slot-scope="slotProps">
			<customer-card :name="slotProps.item.name" :logo="slotProps.item.logo" :rating="slotProps.item.rating" :stars="slotProps.item.stars" :text="slotProps.item.text" />
		</template>
	</slider>
</template>
<script>
	import slider from '../interfaceComponents/slider.vue';
	import customerCard from './customerCard.vue';
	export default {
		components:{
			slider,
			customerCard
		},
		props: {
			slides: {
				type: [Array, Object],
				required: true
			}
		},
		data(){
			return {
				autoplay: true,
				height: '380px',
				width: '100%'
			}
		}
	}

</script>
<style lang="scss" >
.customer-slider{
	& .slider-indicators{
		display: none;
	}
	& .slider-item{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	& .slider-icon{
		border-color: #000;
		cursor: pointer;
	}
	& .slider-btn{
		background: none;
		@media screen and (max-width: 420px){
			display: none;
		}
		&:hover .slider-icon{
			border-color: #000;
		}
	}
	& .card{
		@media screen and (max-width: 390px){
			max-width: 250px!important;
			padding: 20px!important;
		}
	}
}

</style>