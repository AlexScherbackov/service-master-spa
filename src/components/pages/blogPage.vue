<template>
	<section class="base-section--bd-top-xl">
		<div class="container blog">
			<h1 class="base-title base-title--max390fz32 base-title--fz-40 base-title--line-under margin__top--20 margin__bottom--55 blog__title">blog</h1>
			<main class="blog__content blog-content">
				<blog-post :post="blogpost" :titleFzModif="'16'" class="blog-content__main-post main-post" />
				<div v-if="blogpostSortedByDate.length > 0" class="blog__wrapper margin__top--20">
					<blog-post v-for="item in blogpostSortedByDate" :key="item.id" :post="item" :titleFzModif="'14'" class="blog__item"/>
				</div>
			</main>
			<blog-sidebar class="blog__sidebar">
				<search-form class="blog__searchform margin__top--5 margin__bottom--5" />
			</blog-sidebar>
		</div>
		
	</section>

</template>
<script>
	import {mapGetters} from 'vuex';
	
	import blogSidebar from '../sections/blog/blogSidebar.vue';
	import blogPost from '../uiComponents/blogItems/blogPost.vue';
	import searchForm from '../uiComponents/searchform.vue';

	export default {
		components: {
			blogSidebar,
			blogPost,
			searchForm
		},
		data(){
			return{
			
			}
		},
		computed: {
			...mapGetters(['blogposts']),
			blogpostSortedByDate(){
				let blogposts = this.postsToShow.length > 1 ? this.postsToShow.slice(0, this.blogposts.length - 1) : [];

				return blogposts.sort((a,b)=>{
					return a.date > b.date ? -1 : 1;
				}
				);
			},
			blogpost(){
				return this.postsToShow[this.postsToShow.length - 1];
			},
			postsToShow(){
				let postsToShow;
				
				if(this.$route.name == 'blog'){
					postsToShow = this.blogposts;
				} else if(this.$route.name == 'postPerCategorie'){
					postsToShow = this.blogposts.filter(item => item.theme == this.$route.params.id)
				}
				return postsToShow;
			}
		},
	}
</script>
<style lang="scss" scoped>
.blog{
	display:grid;
	grid-template-columns: minmax(270px, 3fr) minmax(220px, 1fr);
	grid-template-areas: 
	'title title'
	'content aside';
	grid-column-gap: 30px;
	@media screen and (max-width: 576px){
		grid-template-columns: 1fr;
		grid-template-areas: 
		'title'
		'content'
		'aside';
	}
	&__title{
		grid-area: title;
	}
	&__content{
		grid-area: content;
	}
	&__sidebar{
		grid-area: aside;
	}
	&__searchform{
		font-size: 12px;
		width: 190px;
		@media screen and (max-width: 576px){
			width: 100%;
			padding: 0 15px;
		}
	}
	&__wrapper{
		display: grid;
		grid-template-columns: repeat(3, minmax(200px, 1fr));
		grid-gap: 25px;
		@media screen and (max-width: 991px){
			grid-template-columns: 1fr;
			grid-gap: 35px;
		}
	}
	&__item{
		display: grid;
		grid-template-rows: 125px 1fr;
		grid-gap: 10px;
		@media screen and (max-width: 991px){
			grid-template-rows: 220px 1fr;
		}
	}

}

.main-post{
	display: grid;
	grid-template-columns: minmax(250px, 350px) minmax(250px, 330px);
	grid-template-rows: 220px;
	grid-gap: 25px;
	@media screen and (max-width: 991px){
		grid-template-columns: 1fr;
		grid-template-rows: 220px 1fr;
		grid-gap: 10px;
	}
}


</style>