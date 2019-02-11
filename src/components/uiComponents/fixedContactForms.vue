<template>
	<div class="form-box">
		<div class="form-box__icons">
			<span class="form-box__icon bg-acent bg-acent-hover" @click="handlerClick('phone')">
				<i class="fa fa-phone form-box__icon--rotate90" />
			</span>
			<span class="form-box__icon form-box__icon--fz28 bg-acent bg-acent-hover" @click="handlerClick('form')">
				<i class="fas fa-envelope" />
			</span>
		</div>
		<transition name="fade">
			<div class="form-box__content" v-show="displayData.phone || displayData.form">
				<div class="form-box__phone bg-acent" v-show="displayData.phone">
					<span class="close-btn" @click="handlerClick('phone')">
						<i class="fa fa-times"></i>
					</span>
					<div class="form-box__title base-title">get help now</div>
					<div class="form-box__text ff-din">855-9-SIMONS or 773-376-1110</div>
				</div>
			</div>
		</transition>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				displayData: {
					phone: false,
					form: false
				}
			}
		},
		methods:{
			handlerClick(target){
				const targetData = this.displayData[target];
				for(let key in this.displayData) 
					this.displayData[key] = (this.displayData[key] && this.displayData[key] != targetData) ? !this.displayData[key] : this.displayData[key];
				this.displayData[target] = !targetData;
			}
		}
	}
</script>
<style lang="scss" scoped>
.form-box{
	position: fixed;
	right: 0;
	top: 50%;
	z-index: 1100;
	&__icons{
		display: flex;
		flex-direction: column;
	}
	&__icon{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 45px;
		height: 45px;
		color: #000;
		font-size: 24px;
		cursor: pointer;
		margin-bottom: 2px;
		transition: 0.3s;
		&--rotate90{
			transform: rotate(90deg);
		}
		&--fz28{
			font-size: 28px;
		}
	}
	&__content{
		position: absolute;
		right: 50px;
		top: 0;
		transform: translateY( -50%);
		color: #000;
	}
	&__phone{
		box-sizing: border-box;
		width: 273px;
		padding: 22px;
	}
	&__title{
		position: relative;
		&:before{
			content: '';
			position: absolute;
			display: block;
			height: 5px;
			width: calc(100% + 30px);
			left: -25px;
			bottom: -2px;
			background-color: #000;
		}
	}
	&__text{
		font-weight: 100;
    line-height: 42px;
    font-size: 38px;
    margin: 0;
    margin-top: 10px;
    text-align: right;
	}
}

.close-btn{
	position: absolute;
	top: 5px;
	right: 10px;
	cursor: pointer;
}
</style>