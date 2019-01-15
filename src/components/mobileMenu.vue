<template>
	<div class="mobile-menu">
		<div class="mobile-menu__wrapper">
			<ul class="mobile-menu__navigation-list navigation-list">
				<li class="navigation-list__item">
					<a class="navigation-list__link">Home</a>
				</li>
				<li class="navigation-list__item">
					<a class="navigation-list__link">What's new</a>
				</li>
				<li class="navigation-list__item">
					<a class="navigation-list__link">About us</a>
				</li>
				<li class="navigation-list__item">
					<a class="navigation-list__link">FAQ</a>
				</li>
				<li class="navigation-list__item">
					<a class="navigation-list__link">Special offers</a>
				</li>
				
				
				<li class="navigation-list__item">
					<a class="navigation-list__link">Gallery</a>
				</li>
			</ul>
			<ul class="mobile-menu__megamenu megamenu">
				<li v-for="item in navigation" class="megamenu__item">
					<a 
						class="megamenu__link" 
						:href="item.link ? item.link : null"
					>
						{{item.name}}
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import {mapGetters} from 'vuex';

	export default {
		data(){
			return{
				
			}
		},
		computed: {
			...mapGetters([
					'navigation'
			])
		},
	}
</script>
<style lang="scss" scoped>
	.mobile-menu{
		max-width: 345px;
		width: 100%;
		position: absolute;
		top: 0;
		right: 0;
		z-index: 100;
		background-color: #000;
		@media screen and (min-width: 992px){
			display: none;
		}
		&__wrapper{
			padding: 25px;
		}
    
	}

	.navigation-list{
		display: grid;
		grid-template-columns: repeat(2, 120px);
		grid-gap: 10px;
		width: 250px;
		&__link{
			display: block;
			font-size: 13px;
			text-align: left;
		}
	}

	.megamenu{
		display: flex;
		flex-direction: column;
		position: relative;
		margin-top: 55px;
		&:before{
			content: '';
			display: block;
			position: absolute;
			top: -15px;
			left: 50%;
			transform: translate(-50%);
			height: 3px;
			width: 50px;
			background-color: #ffee50;
		}
		&__link{
			font-size: 14px;
			line-height: 2;
			text-transform: uppercase;
		}
	}
</style>