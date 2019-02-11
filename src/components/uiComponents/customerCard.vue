<template>
	<div class="card">	
		<simple-svg :filepath="logo.src" class="card__icon" :width="logo.width" :height="logo.height"/>
		<div class="card__raiting ff-din">{{rating}}</div>
		<ul class="card__stars-list">
			<li v-for="index in stars" :key="index" class="card__star-item">
				<a class="card__star-link">
					<i class="fas fa-star"></i>
				</a>
			</li>
		</ul>
		<div class="card__text">
			<p>{{description}}<a v-if="text.descr.length > 172" href="">read more</a></p>
			<span v-if="text.author">By {{text.author}}</span>
		</div>
		<a href="" class="card__link">View All {{name}} Reviews</a>
	</div>
</template>
<script>
	export default {
		props:{
			name: {type: String},
			logo: {type: Object},
			rating: {type: String},
			stars: {type: Number},
			text: {type: Object}
		},
		data(){
			return {

			}
		},
		computed:{
			description(){
				let str = this.text.descr;

				if(str.length){
					str = str.substr(0, 172) + '... ';
				}

				return str;
			}
		}
		
	}
</script>
<style lang="scss" scoped>
.card{
	display: grid;
	grid-template-columns: minmax(200px,250px);
	grid-template-rows: 50px 60px 30px 160px 20px;
	justify-items: center;
	justify-content: center;
	box-sizing: border-box;
	max-width: 300px;
	padding: 30px;
	background-color: #000;
	transform: skew(-3deg);
	&__icon{
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		height: 50px;		
	}	
	&__raiting{
		font-size: 34px;
		line-height: 38px;
		margin: 10px 0;
	}
	&__stars-list{
		margin: 0;
	}
	&__star-item{
		margin: 0 2px;
	}
	&__star-link{
		font-size: 14px;
		color: #ffee50;
		&:hover, &:focus{
			text-decoration: none;
			color: #9b8a00;
		}
	}
	&__text{
		font-size: 12px;
		text-align: center;
	}
	&__link{
		display: block;
		justify-self: center;
		font-size: 14px;
	}
}
</style>