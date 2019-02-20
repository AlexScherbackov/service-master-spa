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
				<div class="form-box__contact-form bg-acent" v-show="displayData.form">
					<span class="close-btn" @click="handlerClick('form')">
						<i class="fa fa-times"></i>
					</span>
					<form class="contact-form" @submit.prevent="handlerSubmit">
						<input 
							type="text" 
							class="contact-form__item contact-form__item--height32 contact-form__item--firstName" 
							placeholder="First Name*" 
							:class="{'no-valid' : !validation.userName.value}" 
							v-model="formData.userName"
							@change="checkValide('userName')"
							@focus="validClear($event)">
						
						<input 
							type="text" 
							class="contact-form__item contact-form__item--height32 contact-form__item--lastName" 
							placeholder="Last Name*" 
							:class="{'no-valid' : !validation.userSurname.value}" 
							v-model="formData.userSurname"
							@change="checkValide('userSurname')">

						<input 
							type="text" 
							class="contact-form__item contact-form__item--height32 contact-form__item--phone" 
							placeholder="Phone Number*" 
							:class="{'no-valid' : !validation.userPhone.value}" 
							v-model="formData.userPhone" 
							@change="checkValide('userPhone')">

						<input 
							type="text" 
							class="contact-form__item contact-form__item--height32 contact-form__item--email" 
							placeholder="Email address*" 
							v-model="formData.userEmail" 
							:class="{'no-valid' : !validation.userEmail.value}" 
							@change="checkValide('userEmail')">

						<textarea 
							name="problem" 
							id="contact-form-problem" rows="3" 
							class="contact-form__item contact-form__item--problem" 
							placeholder="Tell us what happened*" 
							:class="{'no-valid' : !validation.problem.value}" 
							v-model="formData.problem"
							@change="checkValide('problem')">
								
							</textarea>
						<button type="submit" class="contact-form__btn ff-book">send</button>
					</form>
				</div>
			</div>
		</transition>
	</div>
</template>
<script>

	import {mapActions} from 'vuex';

	export default {
		data(){
			return {
				displayData: {
					phone: false,
					form: false
				},
				formData: {
					userName: '',
					userSurname: '',
					userPhone: '',
					userEmail: '',
					problem: ''
				},
				validation:{
					userName: {
						regExp: /^[a-zA-Z]{1,}$/,
						value: true
					},
					userSurname: {
						regExp: /^[a-zA-Z]{1,}$/,
						value: true
					},
					userPhone: {
						regExp: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
						value: true
					},
					userEmail: {
						regExp: /.+@.+\..+/i,
						value: true
					},
					problem: {
						regExp: /^[A-Za-z0-9\s]{1,}$/,
						value: true
					}
				}
			}
		},
		methods:{
			...mapActions(['addItemToServiceState']),
			handlerClick(target){
				const targetData = this.displayData[target];
				for(let key in this.displayData) 
					this.displayData[key] = (this.displayData[key] && this.displayData[key] != targetData) ? !this.displayData[key] : this.displayData[key];
				this.displayData[target] = !targetData;
			},
			handlerSubmit(){
				if(this.validateForm()){
					this.addItemToServiceState(this.formData);
					this.handlerClick('form');
				}
				
			},
			validateForm(){
				let result = true;
				for (let key in this.formData){
					this.validation[key].value = !!this.formData[key];
					!this.formData[key] ? (result = false) : '';
				}
				return result;
			},
			checkValide(prop){
				this.validation[prop].value = this.validation[prop].regExp.test(this.formData[prop]);
			},
			validClear(e){
				const elem = e.target;
				elem.classList.contains('no-valid') ? elem.classList.remove('no-valid') : '';
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
	&__contact-form{
		padding: 55px 25px 25px;
		border-radius: 4px;
	}
}

.contact-form{
	display: grid;
	grid-template-columns: repeat(2, 235px);
	grid-gap: 15px;
	grid-template-areas: 
		'firstName lastName'
		'phone email'
		'problem problem'
		'btn .';
	&__item{
		width: 100%;
		box-sizing: border-box;
		background-color: #fff;
		border: 2px solid #000;
		padding-left: 15px;
		font-size: 13px;
		line-height: 32px;
		font-weight: 400;
		color: #000;
		outline: none;
		&.no-valid{
			border-color: red;
		}
		&::-webkit-input-placeholder, &::-moz-placeholder, &:-moz-placeholder, &::-ms-input-placeholder{
			color: #fefefe;
		}
		&--firstName{
			grid-area: firstName;
		}
		&--lastName{
			grid-area: lastName;
		}
		&--phone{
			grid-area: phone;
		}
		&--email{
			grid-area: email;
		}
		&--problem{
			grid-area: problem;
		}
		&--height32{
			height: 32px;
		}
	}
	&__btn{
		grid-area: btn;
		width: 150px;
		height: 45px;
		background-color: #000;
		color: #fff;
		font-size: 14px;
		font-weight: 100;
		letter-spacing: 3px;
		outline: none;
		border: none;
		text-align: center;
		text-transform: uppercase;
		cursor: pointer;
	}
}

.close-btn{
	position: absolute;
	top: 5px;
	right: 10px;
	cursor: pointer;
}
</style>