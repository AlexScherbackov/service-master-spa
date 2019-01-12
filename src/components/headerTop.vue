<template>
	<div class="header-top">
		<div class="container header-top__wrapper" >
			<img class="header-top__logo" src="../assets/image/header-logo.png" />
			<div class="header-top__block header-top__block--prev-order header-top__block--yellow header-top__block--js-c-xs">
				<a class="header-top__link" href="tel:773-376-1110">
					<span><i class="fa fa-phone header-top__icon" aria-hidden="true"></i> 773-376-1110</span>
				</a>
			</div>
			<div class="header-top__block header-top__block--js-e header-top__block--js-c-xs">
				<a class="header-top__link header-top__link--type2 ff-book" href="#">
					need urgent help?
				</a>
			</div>
			<hamburger class="hidden--xl header-top__hamburger"></hamburger>
		</div>
	</div>
</template>
<script>
	import hamburger from './hamburger.vue';

	export default {
		components: {
			hamburger
		},
		data(){
			return{

			}
		}
	}
</script>
<style lang="scss" scoped>
	.header-top{
		padding-top: 10px;
		padding-bottom: 10px;
		&__wrapper{
			display: grid;
			grid-template-columns: repeat(3, minmax(200px, 1fr));
			grid-gap: 20px 10px;
			grid-template-areas: 'prevBlock logo lastBlock';
			align-items: center;
			min-height: 100px;
			@media screen and (min-width: 480px) and (max-width: 992px){
				grid-template-columns: repeat(2,  1fr);
				grid-template-areas: 
					'logo hamburger'
					'prevBlock lastBlock';
			}
			@media screen and (max-width: 480px){
				grid-template-columns: repeat(2,  1fr);
				grid-template-areas: 
					'logo hamburger'
					'prevBlock prevBlock' 
					'lastBlock lastBlock';
			}
		}
		&__logo{
			justify-self: center;
			grid-area: logo;
			@media screen and (min-width: 480px) and (max-width: 992px){
				justify-self: start;
			}
			@media screen and (max-width: 480px){
				justify-self: end;
			}
		}
		&__hamburger{
			grid-area: hamburger;
			justify-self: end;
			@media screen and (max-width: 480px){
				justify-self: center;
			}
		}
		&__block{
			height: 45px;
			max-width: 240px;
			width: 100%;
			border: 2px solid #000;
			grid-area: lastBlock;
			@media screen and(max-width: 546px){
				max-width: 200px;
			}
			&--yellow{
				border-color: #f7e74d;
			}
			&--prev-order{
				grid-area: prevBlock;
			}
			&--js-e{
				justify-self: end;
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
				@media screen and(max-width: 546px){
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