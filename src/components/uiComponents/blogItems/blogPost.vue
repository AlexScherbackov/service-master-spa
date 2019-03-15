<template>
	<div>
		<div class="post__poster">
			<img class="post__image" :src="post.poster" :alt="post.title">
			<span class="post__mark ff-din">blog</span>
		</div>
		<div class="post__content">
			<router-link :to="'/blog/'+post.id":class="'base-title--fz-'+ titleFzModif" class="base-title  base-title--fw-400 ff-gotham post__title">{{post.title}}</router-link>
			<span class="post__text post__date  ff-book margin__top--15">
				{{post.date.toLocaleString("en-US", { year: 'numeric', month: 'long', day: 'numeric'})}}
			</span>
			<a class="post__theme">{{categorie(post.theme).title}}</a>
			<p class="post__text ff-book">
				{{truncatedString(post.text, 150)}}
				<router-link :to="'/blog/'+post.id" v-if="post.text.length > 150" class="post__link ff-gotham">Read more</router-link>
			</p>
		</div>
	</div>
</template>
<script>
	import {truncatedString} from '../../../mixins/truncatedStrimg.js';
	import {mapGetters} from 'vuex';

	export default {
		mixins: [truncatedString],
		props: {
			post:{
				type: Object,
				required: true
			},
			titleFzModif: {
				type: String
			}
		},
		computed: {
			...mapGetters(['categorie']),
		}
}
</script>
<style lang="scss" scoped>
.post{
	&__content{
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		text-align: left;
	}
	&__poster{
		position: relative;
	}
	&__title{
		margin: 0;
		text-align: left;
		text-transform: capitalize;
		line-height: 22px;
	}
	&__image{
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	&__mark{
		display: block;
		position: absolute;
		background-color: #FFEE50;
		color: #000;
		bottom: 0;
		left: 0;
		padding: 0px 10px;
		font-size: 18px;
		line-height: 32px;
		font-weight: 700;
		text-transform: uppercase;
	}
	&__date{
		color: #333;
	}
	&__text{
		font-size: 12px;
		line-height: 20px;
		font-weight: 400;
		color: #000;
	}
	&__theme{
		display: block;
		padding: 6px 8px;
		background-color: #000;
		color: #fff;
		font-size: 11px;
		font-weight: 400;
		line-height: 12px;
		text-transform: capitalize;
	}
	&__link{
		cursor: pointer;
		color: #000;
	}
}
</style>