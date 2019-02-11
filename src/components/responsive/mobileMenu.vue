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
					@click="showSubmenu($event)"
					>
					{{item.name}}
				</a>
				<ul v-if="item.subNavs" class="megamenu__sublist">
					<li v-for="subitem in item.subNavs" class="megamenu__sublist-item">
						<a class="megamenu__sublist-link" :href="subitem.link">{{subitem.name}}</a>
					</li>
				</ul>
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
		methods: {
			showSubmenu(event){
				const target = event.target;
				const triggerElement = target.parentNode.querySelector('.megamenu__sublist');
				if(triggerElement)
					triggerElement.classList.toggle('is-showing');				
			}
		}
	}
</script>
<style lang="scss" scoped>
.mobile-menu{
	max-width: 345px;
	width: 100%;
	position: absolute;
	top: 0;
	right: 0;
	z-index: 1000;
	background-color: #000;
	@media screen and (min-width: 993px){
		display: none;
	}
	@media screen and (max-width: 480px){
		top: 150px;
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
	&__sublist{
		display: flex;
		flex-direction: column;
		overflow: hidden;
		transition: 0.3s cubic-bezier(0.45, 0.01, 0.27, 2);
		transition-property: margin, padding, border-top, border-bottom;
		perspective: 600px;
		&.is-showing{
			margin: 15px 0;
			padding: 15px 0;
			border-top: 2px solid #ffee50;
			border-bottom: 2px solid #ffee50;
			& > li{
				margin-top: 0;
				opacity: 1;
			}
		}
	}
	&__sublist-item{
		opacity: 0;
		padding: 5px;
		margin-top: -5em;
		transition: 0.5s cubic-bezier(0.45, 0.01, 0.27, 2);
		transition-property: margin, opacity;
	}
	&__sublist-link{
		font-size: 14px;
		line-height: 16px;
		text-transform: capitalize;
	}
}
</style>