<template>
	<section class="base-section base-section--max576-pad20px0">
		<div class="container">
			<h1 class="base-title base-title--max480fz40 base-title--max390fz32">Why servicemaster</h1>
			<p class="why__subtitle">ServiceMaster Chicago provides professional Water Damage Restoration, Fire & Smoke Damage Restoration and Specialty Cleaning services in Chicago, IL and surrounding areas</p>	
			<div class="why__content flex-row flex-row--jcsb flex-row--fxdc-md flex-row--fxdc-sm flex-row--fxdc-xs">
				<div class="why__box">
					<h2 class="why__title">Lorem ipsum dolor sit</h2>
					<ul class="why__list">
						<li class="why__list-item">Lorem ipsum dolor sit amet</li>
						<li class="why__list-item">Lorem ipsum dolor sit amet</li>
						<li class="why__list-item">Lorem ipsum dolor sit amet</li>
						<li class="why__list-item">Lorem ipsum dolor sit amet</li>
						<li class="why__list-item">Lorem ipsum dolor sit amet</li>
					</ul>
				</div>
				<div class="why__poster">
					
				</div>
			</div>
		</div>
		
	</section>
</template>
<script>
	export default {
		data(){
			return {

			}
		}
	}
</script>
<style lang="scss" scoped>
.why{
	&__subtitle{
		display: inline-block;
		max-width: 720px;
		margin: 10px auto 0px;
		color: #000;
		font-size: 18px;
		line-height: 24px;
		text-align: center;
		@media screen and (max-width: 546px){
			font-size: 16px;
			line-height: 22px;
		}
		@media screen and (max-width: 480px){
			font-size: 14px;
			line-height: 20px;
		}
	}
	&__content{
		position: relative;
		padding: 35px 0;
		flex-basis: 300px;
	}
	&__box{
		height: 100%;
		background-color: #000;
		padding: 33px;
		flex-shrink: 2;
		@media screen and (max-width: 480px){
			padding: 20px;
		}
	}
	&__title{
		display: block;
		margin-top: 0;
		font-size: 18px;
		font-weight: 400;
		line-height: 25px;
		text-align: left;
		color: #ffee50;
		@media screen and (max-width: 992px){
			text-align: center;
		}
		@media screen and (max-width: 546px){
			font-size: 16px;
			line-height: 22px;
		}
		@media screen and (max-width: 480px){
			font-size: 14px;
			line-height: 20px;
		}
	}
	&__list{
		margin-top: 35px;
		padding-left: 20px;
		color: #fff;
		@media screen and (max-width: 992px){
			display: flex;
			width: 100%;
			flex-direction: column;
			flex-wrap: wrap;
		}

	}
	&__list-item{
		position: relative;
		margin: 0 0 15px;
		padding: 0;
		font-size: 16px;
		line-height: 22px;
		@media screen and (max-width: 992px){
			text-align: left;
		}
		@media screen and (max-width: 546px){
			font-size: 14px;
			line-height: 20px;
		}
		@media screen and (max-width: 480px){
			font-size: 12px;
			line-height: 18px;
			margin: 0 0 10px;
		}
		&:before{
			content: '';
			display: block;
			width: 5px;
			height: 5px;
			position: absolute;
			background-color: #fff;
			border-radius: 40%;
			top: 10px;
			left: -20px;
		}
	}
	&__poster{
		height: inherit;
		flex-basis: 900px;
		background-image: url("../../assets/image/servicemaster.jpg");
		background-size: cover;
		background-position: center center;
		@media screen and (max-width: 992px){
			flex-basis: 300px;
		}
	}
	
}
</style>