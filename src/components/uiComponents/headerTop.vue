<template>
	<div class="header-top">
		<div class="container header-top__wrapper" >
			<img class="header-top__logo" src="../../assets/image/header-logo.png" />
			<btn 
				:link="'tel:773-376-1110'"
				:size-modif="'medium'"
				:background="'transparent'" 
				:border-color="'yellow'"
				class="header-top__block header-top__block--prev-order header-top__block--js-c-xs header-top__link"
			>	
				<span><i class="fa fa-phone header-top__icon" aria-hidden="true"></i> 773-376-1110</span>
			</btn>
			<btn 
				class="header-top__block header-top__block--js-e header-top__block--js-s-xs ff-book" 

				:link="'#'" 
				:background="'transparent'" 
				:text="'need urgent help?'" 
				:font-size-modif="'small'"
				:size-modif="'medium'"
			/>
			
			
			<hamburger @hamburger-click="hamburgerClickHandler" class="hidden--xl header-top__hamburger"></hamburger>
			<mobile-menu :class="{'d-none': !mobileMenuTrigger}"></mobile-menu>
		</div>
	</div>
</template>
<script>
	import hamburger from './hamburger.vue';
	import mobileMenu from '../responsive/mobileMenu.vue';
	import btn from '../interfaceComponents/button.vue';

	export default {
		components: {
			hamburger,
			mobileMenu,
			btn
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
		@media screen and(max-width: 991px){
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
			@media screen and (min-width: 480px) and (max-width: 991px){
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
			@media screen and (min-width: 481px) and (max-width: 991px){
				justify-self: start;
			}
			
		}
		&__hamburger{
			grid-area: hamburger;
			justify-self: end;
		}
		&__block{
			grid-area: lastBlock;
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
			&:hover{
				text-decoration: none;
			}
			
		}
		&__icon{
			transform: rotate(90deg);
			font-size: 15px;
		}
	}
</style>