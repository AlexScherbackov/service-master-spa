<template>
	<aside >
		<div class="sidebar__wrapper">
			<slot />
			<ul class="sidebar__menu">
				<li  class="sidebar__menu-item">
					<div class="sidebar__menu-item-title"><span class="base-title base-title--fz-24 base-title--line-over">Recent Posts</span></div>
					<ul  class="sidebar__submenu">
						<li v-for="item in recentPosts" ><router-link :to="'/blog/'+item.id" class="sidebar__submenu-item ff-book">{{item.title}}</router-link></li>
					</ul>
				</li>
				<li  class="sidebar__menu-item">
					<div class="sidebar__menu-item-title"><span class="base-title base-title--fz-24 base-title--line-over">Recent Comments</span></div>
					<ul  class="sidebar__submenu">
						<li v-for="item in recentComments" class="sidebar__submenu-item ff-book">{{item.author}} <span class="sidebar__submenu-item--acent-col">on</span> {{truncatedString(item.text, 50)}}</li>
					</ul>
				</li>
				<li  class="sidebar__menu-item">
					<div class="sidebar__menu-item-title"><span class="base-title base-title--fz-24 base-title--line-over">Categories</span></div>
					<ul  class="sidebar__submenu">
						<li v-for="item in categories" ><router-link :to="{name:'postPerCategorie', params:{id: item.id}}" class="sidebar__submenu-item ff-book" >{{item.title}}</router-link></li>
					</ul>
				</li>
				<li  class="sidebar__menu-item">
					<div class="sidebar__menu-item-title"><span class="base-title base-title--fz-24 base-title--line-over">Archive</span></div>
					<blog-archive :archive="archive" :classObject="{
						archiveItem: 'archive__item ff-gotham-light', 
						archiveList: 'archive__list', 
						submenuItem: 'sidebar__submenu-item sidebar__submenu-item--m0 sidebar__submenu-item--bd-10', 
						submenu: 'sidebar__submenu', 
						archiveLink: 'archive__link'}"/> 

				</li>
			</ul>
		</div>
	</aside>
</template>
<script>
	import {mapGetters} from 'vuex';
	import {truncatedString} from '../../../mixins/truncatedStrimg.js';
	import blogArchive from '../../uiComponents/blogItems/blogArchive.vue';
	
	export default {
		mixins: [truncatedString],
		components: {
			blogArchive,
		},

		computed: {
			...mapGetters(['blogposts', 'recentPosts', 'comments', 'categories']),
		
			archive(){
				let archive = {};
				
				this.blogposts.forEach( item => {
					const hasYear = !archive.hasOwnProperty(item.date.getFullYear());
					const year = item.date.getFullYear();
					const month = item.date.toLocaleString('en-us', { month: "long" });

					if(hasYear){
						let monthes = [];
						monthes.push(month);
						Object.defineProperty(archive, year, {enumerable: true, value: monthes });
					} else if(!archive[year].includes(month)) {
						archive[year].push(month);
					}
				})
				
				return archive;
			},
			recentComments(){
				return this.comments.filter(item => {
					return this.recentPosts.find((element)=>{
						return element.id == item.post ? true : false
					})
				})
			},

		}
	}
</script>
<style lang="scss" scoped>
/deep/ .sidebar{
	&__wrapper{
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		background-color: #000;
	}
	&__menu{
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		margin: 0;
	}
	&__menu-item{
		width: 100%;
	}
	&__menu-item-title{
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		height: 90px;
		background-color: #fff;
	}
	&__submenu{
		padding: 20px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	&__submenu-item{
		display: block;
		font-size: 12px;
		line-height: 17px;
		text-align: left;
		margin-bottom: 10px;
		cursor: pointer;
		transition: 0.4s;
		&--m0{
			margin: 0;
		}
		&--bd-10{
			border-bottom: 10px solid #fff;
		}	
		&--acent-col{
			color: #ffee50;
		}
		&:hover{
			color: #ffee50;
			text-decoration: none;
			& > span{
				color: #fff;
			}
		}
	}
}

/deep/ .archive{
	&__list{
		display: flex;
		flex-direction: column;
		background-color: #fff;
		color: #000;
		padding: 15px 25px;
	}
	&__item{
		font-size: 13px;
		line-height: 26px;
		font-weight: 100;
		
	}
	&__link{
		display: block;
		position: relative;
		padding: 10px 25px;
		font-size: 14px;
		line-height: 20px;
		&:after, &:before{
			content: '';
			display: block;
			position: absolute;
			width: 8px;
			height: 2px;
			background-color: #fff;
			right: 25px;
		}
		&:before{
			top: 50%;
			transform: rotate(90deg);
		}
		&:after{
			top: 50%;
		}
		&:hover{
			text-decoration: none;
		}
	}
}
</style>