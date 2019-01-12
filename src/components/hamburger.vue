<template>
	<div class="hamburger" @click="toggleActive">
		<span class="hamburger__item"></span>
	</div>
</template>
<script>
	import {toggle} from '../mixins/toggle.js';

	export default {
		mixins: [toggle],
		data(){
			return {}
		}
	}

</script>
<style lang="scss" scoped>
	.hamburger{
		width: 30px;
		height: 30px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		&__item{
			width: 100%;
			height: 4px;
			display: block;
			position: relative;
			backface-visibility: hidden;
			background-color: #000;
			&:before, &:after{
				content: '';
				display: block;
				width: 100%;
				height: 4px;
				position: absolute;
				background-color: #000;
			}
			&:before{
				top:-8px;
			}
			&:after{
				top: 8px;
			}
			
		}
	}
</style>