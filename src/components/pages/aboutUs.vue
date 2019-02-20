<template>
	<main class="base-section--bd-top-xl">
		<h1 class="base-title base-title--max390fz32 base-title--fz-40 base-title--line-under margin__top--20 margin__bottom--20">about us</h1>
		<represents />
		<whoweare :width="width" />
	</main>
</template>
<script >
	import represents from '../sections/represents.vue';
	import whoweare from '../sections/whoweare.vue';
	export default {
		components: {
			represents,
			whoweare
		},
		props:{
  		width: Number
  	},
  	data () {
      return {
        
      }
    },
	}
</script>
<style lang="scss" scoped>
	.represents{
		&__title{
			display: block;
			max-width: 780px;
			margin: 30px auto 15px;
		}
		&__text{
			display: block;
			max-width: 780px;
			margin: 15px auto;
			font-size: 14px;
			line-height: 20px;
			color: #000;
			text-align: left;
		}	
	}
</style>