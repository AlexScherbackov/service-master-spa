<template>
	<section class="news-and-tips bg-gray">
		<h1 class="base-title base-title--line-over base-title--fz-40 base-title--max390fz32">news and tips</h1>
		<div class="container news-and-tips__wrapper margin__top--20">
			<tindings  v-for="item in blogpostToShow" :key="item.id" :blogpost="item" class="news-and-tips__item"/>
		</div>
		<btn :link="'#'" :background="'transparent'" 
					:sizeModif="'large'" :fontSizeModif="'small'"
					:borderColor="'black'" :text="'see all blog posts'"
					class="ff-book tips__btn margin__top--20" />
	</section>
</template>
<script>
	import {mapGetters} from 'vuex';
	import tindings from '../uiComponents/tidings.vue';
	import btn from '../interfaceComponents/button.vue';

	export default {
		components: {
			tindings,
			btn
		},
		data(){
			return {

			}
		},
		computed: {
			...mapGetters(['blogposts']),
			blogpostToShow(){
				const highLimit = this.blogposts[this.blogposts.length -1].id
				const lowLimit = highLimit - 2;

				return this.blogposts.filter(item=>item.id<=highLimit && item.id>=lowLimit );
				
			}
		}
	}
</script>
<style lang="scss" scoped>
	.news-and-tips{
		padding: 55px 0;
		&__wrapper{
			display: flex;
			align-items: flex-start;
			justify-content: space-between;
			@media screen and (max-width: 991px){
				justify-content: center;
				flex-wrap: wrap;
			}
		}
		&__item{
			width: 290px;
		}
	}
</style>