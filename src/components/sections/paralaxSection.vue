<template>
	<section class="paralax-section">
		<div class="paralax-section__wrapper flex-row flex-row--ai-fs flex-row--jcsb flex-row--fxdc-sm flex-row--fxdc-xs">
			<div class="paralax-section__content">
				<h1 class="base-title base-title--max480fz40 base-title--max390fz32 base-title--fz-54 base-title--without-margin paralax-section__title">Chicago Service Area</h1>
				<div class="paralax-section__description ff-book">
					<p>We provide cleaning and restoration services for several neighborhoods and towns in the Chicago Area. We have the knowledge and experience to provide top quality service for your home or business. No matter the size and scope of the project, we’re here to help.</p>
					<btn 
						:link="'#'" 
						:background="'black'" 
						:text="'learn more'" 
						:size-modif="'medium'"
						class="ff-book paralax-section__btn"/>
				</div>
				
			</div>
			<div class="paralax-section__paralax-cont">
				
			</div>
		</div>
	</section>
</template>
<script>
	import btn from '../interfaceComponents/button.vue';

	export default {
		components:{
			btn
		},
		data(){
			return {

			}
		}
	}
</script>
<style lang="scss" scoped>
	.paralax-section{
		height: 475px;
		position: relative;
		&__wrapper{
			height: 100%;
			position: relative;
		}
		&__content{
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			justify-content: center;
			position: relative;
			box-sizing: border-box;
			height: 100%;
			background-color: #ffee50;			
			flex-basis: 50%;
			color: #000;
			padding: 93px 37px;
			@media screen and (max-width: 767px){
				flex-basis: 600px;
				width: 100%;
				align-items: center;
				

			}
			&:after{
				content: '';
				position: absolute;
				display: block;
				top: 0;
				right: -123px;
    		border-style: solid;
    		border-width: 240px 0 239px 123px;
    		border-color: transparent transparent transparent #ffee50;
    		@media screen and (max-width: 767px){
    			display: none;
    		}
			}
		}
		&__paralax-cont{
			height: 100%;
			background-image: url(../../assets/image/shutterstock-17270707.png);
			background-attachment: fixed;
			background-position: center;
			background-size: cover;
			flex-grow: 2;
			@media screen and (max-width: 767px){
    		height: 300px;
    		width: 100%;
    	}
		}
		&__title{
			position: relative;
			&:after{
				content: '';
				display: block;
				position: absolute;
				height: 6px;
				width: 660px;
				background-color: #000;
				left: -150%;
				transform: translateX(50%);
				@media screen and (max-width: 767px){
					left: -50%;
					width: 100%;
				}
			}
		}
		&__description{
			display: block;
			max-width: 389px;
			font-size: 16px;
			text-align: left;
			letter-spacing: 0.6px;
			@media screen and (max-width: 480px){
				font-size: 14px;
				line-height: 22px;
			}
		}

	}
</style>