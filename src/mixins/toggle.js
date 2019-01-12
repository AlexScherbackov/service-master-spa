export const toggle = {
	data(){
		return {
			isActive: false
		}
	},
	methods: {
		toggleActive(){
			this.isActive = !this.isActive;
		}
	}
}