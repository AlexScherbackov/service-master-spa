<template>
	<div class="tidings">
		<h4 class="tidings__title">{{blogpost.title}}</h4>
		<p class="tidings__text ff-book">{{blogpost.date.toLocaleString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}}</p>
		<p class="tidings__text ff-book">
			{{truncatedString(this.blogpost.text, 107)}}
			<a v-if="this.blogpost.text.length > 107" class="tidings__link ff-gotham" href="">Learn more</a>
		</p>
	</div>
</template>
<script>
	import {truncatedString} from '../../mixins/truncatedStrimg.js';

	export default {
		props: {
			blogpost: {
				type: Object,
				required: true
			}
		},
		mixins:[truncatedString],
	}
</script>
<style lang="scss" scoped>
	.tidings{
		display: flex;
		max-width: 100%;
		flex-direction: column;
		box-sizing: border-box;
		justify-content: flex-start;
	
		@media screen and (max-width: 768px){
			justify-content: center;
		}
	
	&__title{
		font-size: 14px;
		line-height: 20px;
		text-align: left;
		font-weight: 400;
			color: #000;
		margin: 20px 0 0;
		@media screen and (max-width: 768px){
			text-align: center;
		}
	}
	&__text{
		font-size: 12px;
		line-height: 20px;
		text-align: left;
			color: #333;
		margin: 6px 0;
		@media screen and (max-width: 768px){
			text-align: center;
		}
	}
	&__link{
		color: #000;
	}
	
	}
</style>