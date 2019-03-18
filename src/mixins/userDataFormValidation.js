export const userDataFormValidation = {
	data(){
			return {
				formData: {
					userName: '',
					userSurname: '',
					userPhone: '',
					userEmail: '',
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
				}
			}
		},
		methods: {
			checkValide(prop){
				this.validation[prop].value = this.validation[prop].regExp.test(this.formData[prop]);
			},
			validClear(e){
				const elem = e.target;
				elem.classList.contains('no-valid') ? elem.classList.remove('no-valid') : '';
			}
		}
}