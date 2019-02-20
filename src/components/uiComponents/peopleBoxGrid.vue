<template>
	<div class="people-box">
		<peopleCard  v-for="item in peoples" :cardData="item" :key="item.id"/>
	</div>
</template>
<script>
	import peopleCard from '../uiComponents/peopleCard.vue';

	export default {
		props: {
			peoples: {
				type: Array,
				required: true
			}
		},
		components:{
			peopleCard
		},
		data(){
			return {

			}
		}
	}
</script>
<style lang="scss" scoped>
.people-box{
	display: grid;
	grid-template-columns: repeat(4, minmax(200px,210px));
	justify-content: center;
	justify-items: center;
	grid-row-gap: 20px;
	margin-top: 25px;
	color: #000;
	padding: 0 60px;
	@media screen and (max-width: 991px){
		grid-template-columns: repeat(2, minmax(200px,250px));
	}
}
</style>