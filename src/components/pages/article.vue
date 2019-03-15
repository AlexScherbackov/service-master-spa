<template>
	<div class="blogpost container margin__top--25">
		<header class="blogpost__header">
			<h1 class="base-title blogpost__title">{{blogpost($route.params.id).title}}</h1>
			<img class="blogpost__poster" :src="'../'+blogpost($route.params.id).poster" :alt="blogpost($route.params.id).title">
			<p class="blogpost__date">{{blogpost($route.params.id).date.toLocaleString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}}</p>
			<p class="blogpost__theme">{{categorie(blogpost($route.params.id).theme).title}}</p>
		</header>
		<main class="blogpost__content">
			<p>{{blogpost($route.params.id).text}}</p>
			<p  v-html="blogpost($route.params.id).html"></p>
		</main>
	</div>
</template>
<script>
	import {mapGetters} from 'vuex';

	export default {
		data(){
			return {

			}
		},
		computed:{
			...mapGetters(['blogpost', 'categorie'])
		},
		methods:{

		}
	}
</script>
<style lang="scss">
.blogpost{
	color: #000;
	&__header{
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 10px;
		grid-template-areas: 
		'title title'
		'poster poster'
		'theme date';
		justify-items: center;
		align-items: center;
	}
	&__title{
		display: block;
		grid-area: title;
		@media screen and (max-width: 480px){
			font-size: 32px!important;
			line-height: 44px!important;
		}
	}
	&__poster{
		grid-area: poster;
		display: block;
	}
	&__date{
		grid-area: date;
			@media screen and (max-width: 480px){
			font-size: 14px;
		}
	}
	&__theme{
		grid-area: theme;
		display: block;
		padding: 6px 8px;
		background-color: #000;
		color: #fff;
		font-size: 11px;
		font-weight: 400;
		line-height: 12px;
		text-transform: capitalize;
	}
	&__content{
		text-align: left;
		@media screen and (max-width: 480px){
			font-size: 14px;
		}
	}
	&__list{
		display: flex;
		flex-direction: column;
	}
	&__list-title{

	}
	&__list-item{
		padding-left: 20px;
		margin: 0;
		position: relative;
		&:before{
			content: '';
			display: block;
			position: absolute;
			width: 8px;
			height: 8px;
			border-radius: 50%;
			background-color: #000;
			top: 0;
			transform: translateY(150%);
			left: 2px;
		}
	}
	&__link{
		color: #00a0af;
	}
}
</style>