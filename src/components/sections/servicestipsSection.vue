<template>
	<section class="services-tips base-section">
		<div class="container services-tips__wrapper">
			<div class="services  ">
				<div class="services__wrapper">
					<div class="base-title base-title--line-over base-title--fz-40">services</div>
					<slider 
					:animation="'normal'" 
					:autoplay="true" 
					:height="'220px'" 
					:width="'100%'" 
					:class="'services__slider margin__top--20'"
					:slides="services"
					>
					<template slot="slide" slot-scope="slotProps">
						<div class="services-slide">
							<h4 class="services-slide__title">{{slotProps.item.title}}</h4>
							<p class="services-slide__text ff-book">{{truncatedString(slotProps.item.description, tuncatedLength)}}</p>
							<a v-if="slotProps.item.description.length > tuncatedLength" :href="slotProps.item.description.link" class="services-slide__link">Learn more</a>
						</div>
					</template>
				</slider>
			</div>
		</div>
		<div class="tips">
			<div class="tips__wrapper">
				<div class="base-title base-title--line-over base-title--fz-40">news and tips</div>
				<h4 class="tips__title">{{blogpost.title}}</h4>
				<p class="tips__text">{{blogpost.date.toLocaleString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}}</p>
				<p class="tips__text">
					{{truncatedString(this.blogpost.text, 107)}}
					<a v-if="this.blogpost.text.length > 107" class="tips__link" href="">Learn more</a>
				</p>
				<btn :link="'#'" :background="'transparent'" 
				:sizeModif="'large'" :fontSizeModif="'small'"
				:borderColor="'black'" :text="'see all blog posts'"
				class="ff-book tips__btn"
				/>
			</div>
		</div>
	</div>
</section>
</template>
<script>
	import btn from '../interfaceComponents/button.vue';
	import slider from '../interfaceComponents/slider.vue';

	import {mapGetters} from 'vuex';
	import {truncatedString} from '../../mixins/truncatedStrimg.js';

	export default {
		components:{
			btn,
			slider
		},
		mixins:[truncatedString],
		props: {
			width: {
				type: Number
			}
		},
		data(){
			return {
				
			}
		},
		computed: {
			...mapGetters(['blogposts', 'services']),
			blogpost(){
				return this.blogposts[this.blogposts.length - 1];
			},
			tuncatedLength(){
				const maxLength = 180;
				const smallLength = 140;

				return this.width > 420 ? maxLength : smallLength;
			}	
		},
		
	}
</script>
<style lang="scss">
.services-tips{
	position: relative;
	background: linear-gradient(to right, #ffee50 60%, rgb(248, 248, 248) 40%); 
	@media screen and (max-width: 768px){
		background: linear-gradient(to bottom, #ffee50 50%, rgb(248, 248, 248) 50%);
	}
	&__wrapper{
		display: flex;
		align-items: center;
		@media screen and (max-width: 768px){
			flex-direction: column;
		}
	}
}
.services{
	color: #000;
	width: 65%;
	padding-right: 48px;
	@media screen and (max-width: 768px){
		width: 100%;
		padding: 0;
		margin-bottom: 70px;
	}
	
	&__wrapper{
		box-sizing: border-box;
	}
	&__slider{
		overflow: visible!important ;
		& .slider-items{
			position: relative;
			overflow: hidden;
		}
		& .slider-item{
			display: flex;
			align-items: flex-start;
			justify-content: center;
			text-align: left;
			@media screen and (max-width: 768px){
				text-align: center;
			}
		}
		& .slider-btn, & .slider-btn:hover{
			background: none;

			& .slider-icon{
				color: #000;
				border-color: #000;
				border-width: 3px;
			}
			&.slider-btn-left{
				left: 0px;
				@media screen and (min-width: 768px) and (max-width: 992px){
					transform: translateX(-100%);
				}
				@media screen and (min-width: 480px) and (max-width: 767px){
					transform: translateX(-60%);
				}
				@media screen and (max-width: 546px){
					display: none;
				}
			}
			&.slider-btn-right{
				right: 0px;
				@media screen and (min-width: 768px) and (max-width: 992px){
					transform: translateX(90%);
				}
				@media screen and (min-width: 480px) and (max-width: 767px){
					transform: translateX(50%);
				}
				@media screen and (max-width: 546px){
					display: none;
				}
			}
		}
		& .slider-indicators{
			display: none;
		}
		
	}
}

.services-slide{
	max-width: 440px;
	&__title{
		font-size: 18px;
		line-height: 24px;
		text-transform: capitalize;
		margin-top: 20px;
		margin-bottom: 20px;
		@media screen and (max-width: 992px){
			margin-top: 0px;
			
		}
	}
	&__text{
		font-size: 16px;
		speak-header: 22px;
		margin-top: 0;
		margin-bottom: 10px;
	}
	&__link{
		font-size: 16px;
		font-weight: 700;
		color: #000;
		
	}
}

.tips{
	color: #000;
	width: 35%;
	padding-left: 48px;
	@media screen and (min-width: 1400px){
		padding-left: 15%;
	}
	@media screen and (max-width: 768px){
		width: 100%;
		padding: 0;
	} 
	&__wrapper{
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		justify-content: flex-start;
		@media screen and (max-width: 768px){
			justify-content: center;
		}
	}
	&__title{
		font-size: 14px;
		line-height: 20px;
		text-align: left;
		font-weight: 400;
		margin: 20px 0 0;
		@media screen and (max-width: 768px){
			text-align: center;
		}
	}
	&__text{
		font-size: 12px;
		line-height: 20px;
		text-align: left;
		margin: 6px 0;
		@media screen and (max-width: 768px){
			text-align: center;
		}
	}
	&__link{
		color: #000;
	}
	&__btn{
		margin-top: 25px;
		@media screen and (max-width: 992px){
			font-size: 12px!important;
		}
		@media screen and (max-width: 768px){
			margin: 25px auto 0;
		}
	}
}



</style>