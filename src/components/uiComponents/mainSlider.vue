<template>
	<slider animation="normal" :autoplay="autoplay" :height="height" class="main-slider">
		<slider-item
		v-for="(item, index) in slides"
		:key="index">
		<div class="main-slider__slide-cont">
			<div class="main-slider__item">
				<img :src="item.slide1.image" class="main-slider__image">
				<div class="main-slider__content">
					<simple-svg :filepath="item.slide1.icon" :width="'60px'" :height="'75px'"  class="main-slider__icon" />
					<p class="main-slider__title  ff-din">{{item.slide1.text}}</p>	
				</div>
			</div>
			<div class="main-slider__item">
				<img :src="item.slide2.image" class="main-slider__image">
				<div class="main-slider__content">
					<simple-svg :filepath="item.slide2.icon" :width="'60px'" :height="'75px'"  class="main-slider__icon" />
					<p class="main-slider__title  ff-din">{{item.slide2.text}}</p>	
				</div>

			</div>	
		</div>

	</slider-item>
</slider>
</template>
<script>
	import { Slider, SliderItem } from 'vue-easy-slider';
	export default {
		components:{
			Slider,
			SliderItem
		},
		data(){
			return{ 
				autoplay: true,
				height: '100%',
				slides: [
				{
					slide1: {
						image: './src/assets/image/slider-slide-1.png',
						text: 'Fire & Smoke Damage Restoration',
						icon: './src/assets/svg/icon-1.svg'
					},
					slide2: {
						image: './src/assets/image/slider-slide-2.png',
						text: 'Water & Flood Damage Restoration',
						icon: './src/assets/svg/icon-2.svg'
					},
				},
				{
					slide1: {
						image: './src/assets/image/slider-slide-3.png',
						text: 'Residential & Commercial Carpet Cleaning',
						icon: './src/assets/svg/icon-3.svg'
					},
					slide2: {
						image: './src/assets/image/slider-slide-4.png',
						text: 'Chicago Service Area',
						icon: './src/assets/svg/icon-4.svg'
					},
				}
				]
			}
		}
	}
</script>
<style lang="scss">
.main-slider {

	max-height: 580px;
	@media screen and (max-width: 480px){
		max-height: 540px;
	}
	@media screen and (max-width: 390px){
		max-height: 480px;
	}
	&__item{
		position: relative;
		box-sizing: border-box;
		height: 290px;
		width: 100%;
		@media screen and (max-width: 480px){
			height: 270px;
		}
		@media screen and (max-width: 390px){
			height: 240px;
		}
	}
	&__image{
		display: block;
		position: relative;
		width: 100%;
		height: 100%;
		object-fit: cover;		
	}
	&__content{
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-start;
		top: 50%;
		left: 0;
		transform: translateY(-80px);
		padding-left: 40px;
	}
	&__title{
		display: block;
		max-width: 270px;
		margin-top: 10px;
		text-transform: uppercase;
		font-size: 28px;
		line-height: 28px;
		text-align: left;
	}
	&__icon{
		display: inline-block;
		position: relative;
		&:after{
			content: '';
			display: block;
			width: 60px;
			height: 6px;
			background-color: #ffee50;
			margin-top: 5px;
		}
	}
}
.main-slider .slider-indicators{
	display: none;
}

.main-slider .slider-btn{
	display: flex;
	width: 40px!important;
	height: 40px!important;
	align-items: center;
	justify-content: center;
	border: 2px solid #fff!important;
	color: #fff;
	opacity: 0.35;
	font-size: 25px;
	&:hover{
		opacity: 1;
	}
}

.main-slider .slider-btn-right{
	transform: translate(-50%, 50%);
}
.main-slider .slider-btn-left{
	left: 100%!important;
	transform: translate(-270%, 50%);
}

.main-slider .slider-icon{
	width: 10px!important;
	height: 10px!important;
}
</style>