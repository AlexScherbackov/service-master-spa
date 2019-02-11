<template>
	<footer class="main-foot">
		<div class="container main-foot__wrapper">
			<a class="main-foot__logo-link" href="#">
				<img src="../../assets/image/header-logo.png" alt="Service Master" class="main-foot__logo">
			</a>
			<div class="main-foot__btn-cont">
				<btn 
					:link="'tel:773 376 1110'"
					:background="'transparent'"
					:sizeModif="'small'"
					:fontSizeModif="'small'"
					:borderColor="'white'"
				>
					<span><i class="fa fa-phone header-top__icon" aria-hidden="true"></i> 773-376-1110</span>
				</btn>
				<btn 
					:link="'№'"
					:background="'transparent'"
					:sizeModif="'extra-small'"
					:fontSizeModif="'small'"
					:borderColor="'white'"
					:text="'call us'"
				/>

			</div>
			<div class="main-foot__menu-cont">
				<ul class="main-foot__menu">
					<li v-for="(item, index) in footerMenu" v-if="item.subNavs" class="main-foot__menu-item" :key="index">
						<div class="main-foot__title">{{item.name}}</div>
						<ul class="main-foot__submenu">
							<li v-for="subitem in item.subNavs" class="main-foot__submenu-item">
								<a :href="subitem.link">{{subitem.name}}</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<div class="main-foot__text">
				Terminix® | Merry Maids® | TruGreen® | ServiceMaster Clean® American Home Shield® | Furniture Medic® | AmeriSpec®
			</div>
		</div>
		<div class="container flex-row flex-row--jcc">
			<p class="main-foot__copyright">
				Copyright © 2019 ServiceMaster Restoration by Simons. All Rights Reserved. An independent business licensed to serve you by ServiceMaster Clean.
			</p>
		</div>
	</footer>
</template>
<script>
	import btn from '../interfaceComponents/button.vue';
	import {mapGetters} from 'vuex';

	export default {
		components: {
			btn
		},
		data(){
			return{

			}
		},
		computed:{
			...mapGetters(['footerMenu'])
		}
	}
</script>
<style lang="scss" scoped>
.main-foot{
	background-color: #000;
	padding: 35px 0 0;
	color: #fff;
	&__wrapper{
		display: grid;
		grid-template-columns: 40% 60%;
		grid-row-gap: 30px;
		grid-column-gap: 60px;
		grid-template-areas: 
		'logo menu'
		'buttons menu'
		'. menu'
		'text menu';
		@media screen and (max-width: 992px){
			grid-template-columns: 100%;
			grid-template-areas: 
			'logo'
			'buttons'
			'text'
			'menu'
			'menu'
			'menu'
			'menu';
		}
		@media screen and (max-width: 480px){
			grid-template-areas: 
			'logo'
			'buttons'
			'text';
		}
	}
	&__title{
		text-transform: uppercase;
		font-size: 9px;
		font-weight: 100;
		line-height: 14px;
		margin: 5px 0;
	}
	&__logo-link{
		grid-area: logo;
	}
	&__btn-cont{
		grid-area: buttons;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	&__menu-cont{
		grid-area: menu;
		@media screen and (max-width: 480px){
			display: none;
		}
	}
	&__text{
		grid-area: text;
		font-size: 10px;
	}
	&__menu{
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		max-height: 480px;
		height: 100%;
		width: 100%;
		box-sizing: border-box;
		text-align: left;
		margin: 0;
		padding: 0;
	
	}
	&__menu-item{
		width: 130px;
		margin: 0 0 30px;
		padding: 0;
		
	}
	&__submenu{
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
	}
	&__submenu-item{
		margin: 0;
		padding: 0;
		text-transform: capitalize;
		font-size: 9px;
		line-height: 12px;
		font-weight: 100;
	}
	&__copyright{
		max-width: 420px;
		margin: 20px auto;
		text-align: center;
		color: #fff;
		font-size: 9px;
		font-weight: 100;
		line-height: 12px;
	}
}
</style>