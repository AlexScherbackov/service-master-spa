<template>
	<section class="cover-slides">

		<div class="cover-slides__wrapper container">
			<div class="cover-slides__item">
				
				<simple-svg :filepath="'./src/assets/svg/icon-1.svg'" :width="'60px'" :height="'75px'"  class="cover-slides__icon" />
				
				<h3 class="cover-slides__title ff-din">Fire & Smoke Damage Restoration</h3>
			</div>
			<div class="cover-slides__item">
			
				<simple-svg :filepath="'./src/assets/svg/icon-2.svg'" :width="'60px'" :height="'75px'"  class="cover-slides__icon" />
			
				<h3 class="cover-slides__title ff-din">Water & Flood Damage Restoration</h3>
			</div>
			<div class="cover-slides__item">
			
				<simple-svg :filepath="'./src/assets/svg/icon-3.svg'" :width="'60px'" :height="'75px'"  class="cover-slides__icon" />
				
				<h3 class="cover-slides__title ff-din">Residential & Commercial Carpet Cleaning</h3>
			</div>
			<div class="cover-slides__item cover-slides__item--pb-27">
				
				<simple-svg :filepath="'./src/assets/svg/icon-4.svg'" :width="'60px'" :height="'75px'"  class="cover-slides__icon" />
				
				<h3 class="cover-slides__title ff-din">Chicago Service Area</h3>
			</div>
		</div>
	</section>
</template>
<script>
	export default {
		data(){
			return{

			}
		}
	}
</script>
<style lang="scss" scoped>

	.cover-slides{
		background-image: url('../../assets/image/cover-slide.png');
		background-repeat: no-repeat;
		background-position: center center;
		background-size: cover;
		&__wrapper{
			display: grid;
			grid-template-columns: repeat(2, minmax(320px, 1fr));
			grid-template-rows: repeat(2,minmax(270px, 300px));
			grid-column-gap: 100px;
			@media screen and (max-width: 768px){
				grid-template-columns: repeat(2, minmax(220px, 1fr));
				grid-column-gap: 60px;
			}
			@media screen and (max-width: 576px){
				grid-template-columns: repeat(2, minmax(210px, 1fr));
				grid-column-gap: 60px;
			}
		}
		&__item{
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			align-items: flex-start;
			&--pb-27{
				padding-bottom: 27px;
			}
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
		&__title{
			display: block;
			max-width: 270px;
			margin-top: 10px;
			text-transform: uppercase;
			font-size: 28px;
			line-height: 28px;
			text-align: left;
		}
	}
</style>