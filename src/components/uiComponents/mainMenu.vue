<template>
	<div class="main-menu">
		<div class="container main-menu__wrapper">
			<ul class="flex-row flex-row--ai-c flex-row--jcsb main-menu__list">
				<li v-for="item in navigation" class="main-menu__item">
					<a 
					class="main-menu__link" 
					:href="item.link ? item.link : null"
					@click="item.subNavs ? showMegamenu($event) : null"
					>
					{{item.name}}
				</a>
				<div v-if="item.subNavs" class="main-menu__submenu d-none">
					<div class="container">
						<ul class="megamenu">
							<li v-for="subItem in item.subNavs" class="megamenu__item">
								<router-link :to="{name: item.link}" class="megamenu__link" >{{subItem.name}}</router-link>
								
							</li>
						</ul>
					</div>

				</div>
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
		methods:{
			addClass(item, deselecItem, className){
				if(!item.classList.contains(className) && item!=deselecItem){
					item.classList.add(className);
				}
			},
			removeClass(item, deselecItem, className){
				if(item.classList.contains(className) && item!=deselecItem){
					item.classList.remove(className);
				}
			},
			classTrigger(items, target, classFunction, className){
				items.forEach(item=>{
					classFunction(item, target, className)
				})
				target.classList.toggle(className);
			},
			showMegamenu(event){
				const targetLink = event.target;
				const menuListItem = targetLink.parentNode;
				const menuList = menuListItem.parentNode;
				const megamenu = menuListItem.querySelector('.main-menu__submenu');
				const lists = menuList.querySelectorAll('.main-menu__submenu');
				const links = menuList.querySelectorAll('.main-menu__link');

				this.classTrigger(links, targetLink, this.removeClass, 'is-active')
				this.classTrigger(lists, megamenu, this.addClass, 'd-none')

			},
			trancatedString(str){

			}
		}

	}
</script>
<style lang="scss" scoped>
.main-menu{
	&__list{
		margin: 0;
		padding-left: 20px;
		padding-right: 20px;
		position: relative;
	}
	&__item{
		display: block;
		padding: 0px;
		margin: 0;
	}
	&__link{
		display: block;
		padding: 10px;
		font-size: 11px;
		font-weight: 500;
		color: #000;
		text-transform: uppercase;
		transition: background-color ease 0.4s;
		&.is-active{
			background-color: #ffee50;
		}
	}
	&__submenu{
		position: absolute;
		z-index: 100;
		top: 35px;
		left: 50%;
		transform: translateX(-50%);
		width: 100vw;
		padding: 25px 0;
		background-color: rgba(#000, .9);
		border-top: 3px solid #ffee50;
	}
}

.megamenu{
	display: grid;
	grid-template-columns: repeat(4, minmax(120px, 1fr));
	align-items: center;
	&__item{
		min-height: 25px;
	}
	&__link{
		display: block;
		text-align: left;
		text-transform: capitalize;
		font-size: 10px;
		&:hover{
			text-decoration: none;
			color: #ffee50;
		}
	}
}
</style>