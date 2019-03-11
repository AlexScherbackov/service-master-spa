<template>
	<section class="phone-section">
		<div class="container phone-section__wrapper">
			<img src="../../assets/image/chicago-carpet-cleaning.png" class="phone-section__poster">
			<div class="phone-section__contacts">
				<p class="phone-section__title ff-din">schedule an appointment</p>
				<a href="tel:773-376-1110" class="phone-section__link ff-sfns margin__top--10">855-9-simons
						773-376-1110</a>
			</div>
		</div>
	</section>
</template>
<script>
	export default {

	}
</script>
<style lang="scss" scoped>
	.phone-section{
		padding: 55px 0;
		&__wrapper{
			display: flex;
			align-items: center;
			justify-content: center;
			@media screen and (max-width: 767px){
				flex-direction: column;
			}
		}
		&__contacts{
			position: relative;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			max-width: 290px;
			z-index: 5;
			@media screen and (max-width: 390px){
				max-width: 250px;
			}
			&:after{
				content: '';
				display: block;
				position: absolute;
				top: -30px;
				left: -25px;
				width: 115%;
				height: 130%;
				border: 6px solid #ffee50;
			}
		}
		&__poster{
			display: block;
			position: relative;
			@media screen and (max-width: 767px){
				display: none;
			}
		}
		&__title{
			position: relative;
			font-size: 55px;
			font-weight: 700;
			line-height: 50px;
			text-transform: uppercase;
			color: #000;
			z-index: 10;
			margin: 0;
			@media screen and (max-width: 390px){
				font-size: 45px;
				line-height: 45px;
			}
		}
		&__link{
			color: #00a0af;
			font-size: 32px;
			font-weight: 400;
			line-height: 35px;
			text-transform: uppercase;
			cursor: pointer;
			z-index: 10;
			&:hover{
				text-decoration: underline;
			}
		}
	}
</style>