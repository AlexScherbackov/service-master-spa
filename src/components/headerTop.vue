<template>
	<div class="header-top">
		<div class="container header-top__wrapper" >
			<img class="header-top__logo" src="../assets/image/header-logo.png" />
			<div class="header-top__block header-top__block--prev-order header-top__block--yellow header-top__block--js-c-xs">
				<a class="header-top__link" href="tel:773-376-1110">
					<span><i class="fa fa-phone header-top__icon" aria-hidden="true"></i> 773-376-1110</span>
				</a>
			</div>
			<div class="header-top__block header-top__block--js-e header-top__block--js-s-xs">
				<a class="header-top__link header-top__link--type2 ff-book" href="#">
					need urgent help?
				</a>
			</div>
			<hamburger @hamburger-click="hamburgerClickHandler" class="hidden--xl header-top__hamburger"></hamburger>
			<mobile-menu :class="{'d-none': !mobileMenuTrigger}"></mobile-menu>
		</div>
	</div>
</template>
<script>
	import hamburger from './hamburger.vue';
	import mobileMenu from './mobileMenu.vue';

	export default {
		components: {
			hamburger,
			mobileMenu
		},
		data(){
			return{
				mobileMenuShow: false
			}
		},
		computed:{
			mobileMenuTrigger(){
				return this.mobileMenuShow
			}
		},
		methods: {
			hamburgerClickHandler(){
				this.mobileMenuShow = !this.mobileMenuShow ;
			}
		}
	}
</script>
<style lang="scss" scoped>
	.header-top{
		@media screen and(max-width: 992px){
			padding: 10px 0;
		}
		&__wrapper{
			display: grid;
			grid-template-columns: repeat(3, minmax(200px, 1fr));
			grid-gap: 20px;
			grid-template-areas: 'prevBlock logo lastBlock';
			align-items: center;
			min-height: 100px;
			box-sizing: border-box;
			@media screen and (min-width: 480px) and (max-width: 992px){
				grid-template-columns: repeat(2,  1fr);
				grid-template-areas: 
					'logo hamburger'
					'prevBlock lastBlock';
			}
			@media screen and (max-width: 480px){
				max-width: 290px;
				width: 100%;
				grid-template-columns: 210px 60px;
				grid-template-areas: 
					'logo logo'
					'prevBlock prevBlock'
					'lastBlock hamburger';
				padding: 0;
			}

		}
		&__logo{
			justify-self: center;
			grid-area: logo;
			@media screen and (min-width: 481px) and (max-width: 992px){
				justify-self: start;
			}
			
		}
		&__hamburger{
			grid-area: hamburger;
			justify-self: end;
			@media screen and (max-width: 480px){
				justify-self: end;
			}
		}
		&__block{
			height: 45px;
			max-width: 240px;
			width: 100%;
			border: 2px solid #000;
			grid-area: lastBlock;
			@media screen and(max-width: 576px){
				max-width: 200px;
			}
			&--yellow{
				border-color: #f7e74d;
				@media screen and(max-width: 480px){
					max-width: 290px;
				}
			}
			&--prev-order{
				grid-area: prevBlock;
			}
			&--js-e{
				justify-self: end;
			}
			&--js-s-xs{
				@media screen and (max-width: 480px){
					justify-self: start;
				}
			}
			&--js-c-xs{
				@media screen and (max-width: 480px){
					justify-self: center;
				}
			}
		}		
		&__link{
			display: block;
			color: #000;
			font-size: 18px;
			line-height: 45px;
			letter-spacing: 1.5px;
			text-align: center;
			&:hover{
				text-decoration: none;
			}
			&--type2{
				font-size: 16px;
				font-weight: 400;
				text-transform: uppercase;
				@media screen and(max-width: 576px){
					font-size: 12px;
				}
			}
		}
		&__icon{
			transform: rotate(90deg);
			font-size: 15px;
		}
	}
</style>