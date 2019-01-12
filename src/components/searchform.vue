<template>
	<form id="searchform" class="top-line__searchform searchform" @submit.prevent="submit">
		<input class="searchform__control" placeholder="Search" v-model.trim="searchdata"></input>
		<button class="searchform__submit"><i class="fas fa-search"></i></button>
	</form>
</template>
<script>
	export default{
		data(){
			return{
				searchdata: ''
			}
		},
		methods:{
			submit(){
				console.log(this.searchdata);
			}
		}
	}
</script>
<style lang="scss" scoped>

.searchform{
	display: block;
	position: relative;
	&__control{
		display: block;
		min-width: 170px;
		padding-top: 5px;
		padding-bottom: 5px;
		background-color: transparent;
		color: #fff;
		font-size: 11px;
		border-bottom: 1px solid white;
		outline: none;
		&::-webkit-input-placeholder {color:#fafafa; opacity: 1;}
		&::-moz-placeholder {color:#fefefe; opacity: 1;}
		&:-moz-placeholder {color:#fefefe; opacity: 1;}
		&::-ms-input-placeholder{color:#fefefe; opacity: 1;}
		&:hover, &:focus{
			outline: none;
		};
	}
	&__submit{
		position: absolute;
		top: 2.5px;
		right: 0;
		cursor: pointer;
		background-color: transparent;
		border: none;
		color: #fff;
	}
}
</style>