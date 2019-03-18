<template>
	<section class="base-section--bd-top contact">
		<div class="container">
			<h1 class="base-title base-title--max390fz32 base-title--fz-40 base-title--line-under margin__top--20 margin__bottom--55 blog__title">contact us</h1>
			<main class="contact__content">
				<form class="contact-form">
					<label 
						for="firstName" 
						class="contact-form__item" 
						:class="{'no-valid' : !validation.userName.value}" 
					>
						<span class="contact-form__validation"></span>
						<input 
							name="firstName" type="text" 
							class="contact-form__control ff-book" 
							placeholder="First Name*"
							v-model="formData.userName"
							@change="checkValide('userName')"
							@focus="validClear($event)"
						>
					</label>
					<label 
						for="lastName" 
						class="contact-form__item"
						:class="{'no-valid' : !validation.userSurname.value}"
					>
						<span class="contact-form__validation"></span>
						<input 
							name="lastName" type="text" 
							class="contact-form__control ff-book" 
							placeholder="Last Name*"
							v-model="formData.userSurname"
							@change="checkValide('userSurname')"
						>
					</label>
					<label 
						for="phoneNumber" 
						class="contact-form__item"
						:class="{'no-valid' : !validation.userPhone.value}"
					>
						<span class="contact-form__validation"></span>
						<input 
							name="phoneNumber" type="text" 
							class="contact-form__control ff-book" 
							placeholder="Phone Number*"
							v-model="formData.userPhone" 
							@change="checkValide('userPhone')"
						>
					</label>
					<label 
						for="emailAdress" 
						class="contact-form__item"
						:class="{'no-valid' : !validation.userEmail.value}"
					>
						<span class="contact-form__validation"></span>
						<input 
							name="emailAdress" type="email" 
							class="contact-form__control ff-book" 
							placeholder="Phone Number*"
							v-model="formData.userEmail" 
							@change="checkValide('userEmail')"
						>
					</label>
					<label for="message" class="contact-form__item contact-form__fullwidth">
						<span class="contact-form__validation"></span>
						<textarea name="message" class="contact-form__control contact-form__control--h110 contact-form__control--pt20 ff-book" placeholder="Write a revew*" />
					</label>
					<div class="contact-form__fullwidth">
						<button class="contact-form__submit ff-book" type="submit">
							submit
						</button>
					</div>
				</form>
			</main>
		</div>
	</section>
</template>
<script>
	
	import {userDataFormValidation} from '../../mixins/userDataFormValidation.js';

	export default {
		mixins: [userDataFormValidation],
	}
</script>
<style lang="scss" scoped>
	.contact{
		background-image: url('../../assets/image/stock-photo-chicago-usa.png');
		padding-bottom: 50px;
	}

	.contact-form{
		display: grid;
		grid-template-columns: repeat(2, minmax(270px, 1fr));
		grid-gap: 20px;
		max-width: 680px;
		margin: 0 auto;
		@media screen and (max-width: 768px){
			grid-template-columns:  minmax(270px, 1fr);
		}
		&__item{
			&.no-valid input{
				border-color: red;
			}
		}
		&__control{
			display: block;
			height: 38px;
			width: 100%;
			border: 2px solid #000;
			background-color: #fff;
			font-size: 13px;
			line-height: 26px;
			padding-left: 20px;
			&:hover,&:focus{
				outline: none;
			}
			&--h110{
				height: 110px;
			}
			&--pt20{
				padding-top: 10px;
			}
		}
		&__fullwidth{
			@media screen and (min-width: 769px){
				grid-column-start: 1;
				grid-column-end: 3;
			}
		}
		&__submit{
			display: block;
			width: 160px;
			border: solid 2px #000;
			background-color: transparent;
			font-size: 14px;
			line-height: 38px;
			text-align: center;
			text-transform: uppercase;
			margin: 0 auto;
		}
	}
</style>