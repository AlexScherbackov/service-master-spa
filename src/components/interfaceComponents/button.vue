<template>
	<a 
		:href="link" 
		class="btn" 
		:class="classObject" 
	>
		<slot>{{text}}</slot>
	</a>
</template>
<script>
	export default {
		props:{
			link:{
				type: String,
				required: true
			},
			background: {
				type: String
			},
			sizeModif:{
				type: String
			},
			fontSizeModif:{
				type: String
			},
			borderColor:{
				type: String
			},
			letterSpacingmodif:{
				type: String,
			},
			text: {
				type: String,
			}
		},
		data(){
			return {

			}
		},
		computed:{
			bgClass(){
				if(this.background){
					return `btn--${this.background}-bg`;
				}
			},
			fzClass(){
				
			},
			classObject(){
				let classObject = '';

				if(this.background){
					classObject += `btn--${this.background}-bg `;
				}

				if(this.fontSizeModif){
					classObject += `btn--fz-${this.fontSizeModif} `;
				}

				if(this.sizeModif){
					classObject += `btn--${this.sizeModif}-size `;
				}

				if(this.borderColor){
					classObject += `btn--bd-${this.borderColor} `;
				}

				if(this.letterSpacingmodif){
					classObject += `btn--ls-${this.letterSpacingmodif} `;
				}

				return classObject;
			}
		}
	}
</script>
<style lang="scss" scoped>
	.btn{
		display: inline-block;
		height: 45px;
		width: 100%;
		position: relative;
		cursor: pointer;
		outline: none;
		font-size: 18px;
		line-height: 45px;
		font-weight: 400;
		letter-spacing: 2.5px;
		border: none;
		text-transform: uppercase;
		text-align: center;
		@media screen and (max-width: 576px){
			font-size: 14px;
		}
		&--black-bg{
			background-color: #000;
			color: #fff;
		}
		&--transparent-bg{
			box-sizing: border-box;
			border: 2px solid #000;
			line-height: 42px;
    	color: #000;
    	background-color: transparent;
		}
		&--yellow-bg{
			background-color: #ffee50;
    	color: #000;
		}
		&--bd-white{
			border-color: #fff;
			color: #fff;
			border-width: 1px;
		}
		&--bd-black{
			border-color: #000;
		}
		&--bd-yellow{
			border-color: #f7e74d;
		}
		&--fz-medium{
			font-size: 16px;
			@media screen and(max-width: 576px){
				font-size: 14px;
			}
		}
		&--fz-small{
			font-size: 14px;
			@media screen and(max-width: 576px){
				font-size: 12px;
			}
		}
		&--extra-small-size{
				max-width: 120px;
			@media screen and(max-width: 576px){
				max-width: 100px;
			}
		}
		&--small-size{
			max-width: 200px;
			@media screen and(max-width: 576px){
				max-width: 180px;
			}
		}
		&--medium-size{
			max-width: 240px;
			@media screen and(max-width: 576px){
				max-width: 200px;
			}
		}
		&--large-size{
			max-width: 260px;
			@media screen and(max-width: 576px){
				max-width: 220px;
			}
		}
		&--ls-big{
			letter-spacing: 4px;
		}
	}
</style>