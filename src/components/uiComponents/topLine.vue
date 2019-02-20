<template>
	<div class="top-line">
		<div class="container flex-row flex-row--ai-c flex-row--jcsb flex-row--fxdc-xs top-line__wrapper">
			<div class="top-line__social flex-row flex-row--ai-c flex-row--jcsb">
				<a class="top-line__link"><i class="fab fa-facebook-f top-line__icon"></i></a>
				<a class="top-line__link"><i class="fab fa-yelp top-line__icon"></i></a>
				<a class="top-line__link"><i class="fab fa-google-plus-g top-line__icon"></i></a>
				<a class="top-line__link"><i class="fab fa-youtube top-line__icon"></i></a>
				<a class="top-line__link"><i class="fab fa-linkedin-in top-line__icon"></i></a>
			</div>
			<nav>
				<ul class="top-line__nav menu-list flex-row flex-row--ai-c flex-row--jcsb hidden--md hidden--sm  hidden--xs">
					<li class="menu-list__item">
						<router-link :to="{name: 'home'}"" class="menu-list__link">Home</router-link>
					</li>
					<li class="menu-list__item">
						<router-link :to="{name: 'aboutUs'}" class="menu-list__link">About us</router-link>
					</li>
					<li class="menu-list__item">
						<a class="menu-list__link">Special offers</a>
					</li>
					<li class="menu-list__item">
						<a class="menu-list__link">What's new</a>
					</li>
					<li class="menu-list__item">
						<a class="menu-list__link">FAQ</a>
					</li>
					<li class="menu-list__item">
						<a class="menu-list__link">Gallery</a>
					</li>
				</ul>
			</nav>
			<search-form></search-form>

		</div>
	</div>
</template>
<script>
	import searchForm from './searchform.vue';
	
	export default{
		components: {
			searchForm,
		},
		data(){
			return{
				
			}
		}
	}
</script>
<style lang="scss" scoped>

.top-line{
	padding-top: 10px;
	padding-bottom: 10px;
	@media screen and (max-width: 480px){
		padding-top: 20px;
		padding-bottom: 20px;
	}

	&__social{
		@media screen and (max-width: 480px){
			margin-bottom: 10px;
		}
	}
	&__link{
		display: block;
		font-size: 14px;
		width: 32px;
		text-align: left;
		@media screen and (max-width: 546px){
			font-size: 16px;
		}
		@media screen and (max-width: 480px){
			text-align: center;
		}
	}
}

.menu-list{
	margin: 0;
	&__item{
		margin: 0;
		padding-right: 8px;
		padding-left: 8px;
		border-right: 1px solid #fff;
		line-height: 12px;
		&:last-child{
			border: none;
		}
	}
	&__link{
		font-size: 10px;
	}
}

</style>