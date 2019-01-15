<template>
	<div class="hamburger" >
		<span class="hamburger__item" @click="toggleActive(); hamburgerClickHandler($event);"></span>
	</div>
</template>
<script>
	import {toggle} from '../mixins/toggle.js';

	export default {
		mixins: [toggle],
		data(){
			return {}
		},
		methods: { 
			hamburgerClickHandler(event){
				this.$emit('hamburger-click');
				const target = event.target;
				target.classList.toggle('is-active');
			}
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
		z-index: 120;
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
				transition: all ease 0.4s;
			}
			&:before{
				top:-8px;
			}
			&:after{
				top: 8px;
			}
			&.is-active{
				background-color: transparent;
				&:before, &:after{
					background-color: #ffee50;

				}
				&:before{
				 transform: rotate(45deg) translate(5px, 6px);
				}
				&:after{
					transform: rotate(-45deg) translate(5px,-6px);
				}
			}
		}
	}
</style>