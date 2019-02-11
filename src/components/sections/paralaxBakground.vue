<template>
	<section class="base-section section-paralax">
		<div class="container flex-row flex-row--fxdc">
			<h3 class="base-title section-paralax__title">Don't know what to do next? We do.</h3>
			<btn :link="'#'" :background="'yellow'" :fontSizeModif="'medium'" :text="'get help now'" :sizeModif="'medium'" :letterSpacingmodif="'big'" class="margin__top--20 ff-book section-paralax__btn"/>
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
.section-paralax{
	background-image: url(../../assets/image/2-layers.png);
	background-position: center;
	background-size: cover;
	background-attachment: fixed;
	max-height: 440px;
	height: 100%;
	position: relative;
	padding: 92px;
	@media screen and (max-width:575px){
		padding: 92px 30px;
	}
	&:before{    
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-color: rgba(0,0,0,.25);
	}
	&__title{
		margin: 0;
		max-width: 420px;
		text-align: left;
		color: #fff;
		font-size: 64px;
		line-height: 64px;
		@media screen and (max-width: 480px){
			font-size: 44px!important;
			line-height: 52px!important;
		}
		@media screen and (max-width: 390px){
			font-size: 40px!important;
			line-height: 44px!important;
		}
	}
	
}
</style>