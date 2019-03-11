<template>
	<section class="sm-description">
		<div class="container bg-black sm-description__wrapper">
			<h1 class="base-title base-title--fz-28 texc-color-acent">what we do</h1>
			<p class="sm-description__text ff-book">
				ServiceMaster Restoration By Simons is proud and honored to support and engage in the communities we serve by giving back. Our entire company is regularly involved in fundraising and local activities in the Arts, Urban Agriculture, Youth Education, Domestic Violence Prevention and Minority-and-Women scholarships in graduate real estate programs.
			</p>
			<p class="sm-description__text ff-book sm-description__text--fz18 margin__top--25">Our local community partnerships include:</p>
			<ul class="sm-description__list ff-book">
				<li class="sm-description__list-item margin__bottom--10" v-for="(item, index) in partnership" :key="index"><i class="fas fa-map-marker-alt texc-color-acent sm-description__icon"></i>{{item}}</li>
			</ul>
			<p class="sm-description__text ff-book">
				By including our staff, sub-contractors and vendors in our community giving programs, ServiceMaster Restoration By Simons fosters and nurtures an environment of giving, meaningful service and charity to those in need and the organizations that serve them.
			</p>
			<p class="sm-description__text ff-book">
				This philosophy is deeply ingrained in ServiceMaster Restoration By Simons’ company culture.
			</p>
			<p class="sm-description__text ff-book">
				If you live in the Chicago-land area and have recently experienced water damage, fire damage, smoke damage, storm damage or have a mold problem, contact ServiceMaster Restoration by Simons. We pledge to respond quickly and handle the disaster restoration process from start to satisfaction.
			</p>
			<h3 class="base-title base-title--fw-400 ff-book sm-description__title margin__top--25">We pledge to respond quickly and handle the disaster restoration process from start to satisfaction.</h3>
		</div>	
	</section>
</template>
<script>
	export default {
		data(){
			return {
				partnership:[
					'The Talking Farm, Skokie, Illinois',
					'The Evanston Arts Center, Evanston, Illinois',
					'Albany Park Community Center, Chicago, Illinois',
					'A Safe Place, Lake County, Illinois',
					'Roosevelt University - Marshall Bennett Institute of Real Estate, Chicago, Illinois',
					'Lycee Francais de Chicago, Chicago, Illinois'
				]
			}
		}
	}
</script>
<style lang="scss" scoped>
	.sm-description{
		&__wrapper{
			padding: 30px 35px;
		}
		&__text{
			font-size: 14px;
			line-height: 20px;
			text-align: left;
			font-weight: 400;
			&--fz18{
				font-size: 18px;
			}
		}
		&__list{
			display: flex;
			flex-wrap:wrap;
			padding-left: 20px;
			@media screen and(max-width: 767px){
				flex-direction: column;
			}
			@media screen and(max-width: 480px){
				padding-left: 10px;
			}
		}
		&__list-item{
			display: inline-block;
			position: relative;
			flex-basis: 50%;
			margin-left: 0;
			margin-right: 0;
			font-size: 14px;
			font-weight: 400;
			line-height: 20px;
			text-align: left;
			padding-left: 25px;

		}
		&__icon{
			position: absolute;
			vertical-align: middle;
			left: 0;
			font-size: 19px;
		}	
		&__title{
			max-width: 800px;
			font-size: 20px;
			line-height: 25px;
			color: #fff;
			text-transform: none;
			@media screen and(max-width: 480px){
				font-size: 16px;
			line-height: 25px;
			}
		}
	}
</style>