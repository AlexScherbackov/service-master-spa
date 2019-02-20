<template>
<div class="people-card">
	<img :src="cardData.image" :alt="cardData.name" class="people card__poster">
	<h4 class="people card__title base-title base-title--fz-16 base-title--fw-400 ff-gotham margin__top--10">
		{{cardData.name}}
	</h4>
	<p class="people-card__subtitle">
		{{cardData.office}}
	</p>
	<p class="people-card__text ff-book">{{truncatedString(cardData.description, 250)}}
		<a v-if="this.cardData.description.length > 250" class="people-card__link ff-gotham"" href="">Read more</a></p>
</div>

</template>
<script>
	import {truncatedString} from '../../mixins/truncatedStrimg.js';

	export default {
		props:{
			cardData: {
				type: Object,
				required: true
			}
		},
		mixins:[truncatedString],
		data(){
			return{

			}
		}
	}
</script>
<style lang="scss" scoped>
	.people-card{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		cursor: pointer;
		box-sizing: bordeer-box;
		&:hover &__text{
			color: #000;
		}
		&:hover &__link{
			color: #06a9ba;
			text-decoration: underline;
		}
		&__poster{
			border-radius: 50%;
		}
		&__subtitle{
			margin: 0;
			display: block;
			font-size: 14px;
			line-height: 24px;
			font-weight: 400;
			text-align: center;
			text-transform: capitalize;
			color: #000;
		}
		&__text{
			display: block;
			font-size: 12px;
			line-height: 20px;
			color: #979797;
		}
		&__link{
			color: #979797;
			transition: .5s;
			font-weight: 400;
			&:hover{
				color: #06a9ba;
				text-decoration: underline;
			}
		}
	}
</style>