export const toggle = {
	data(){
		return {
			$_isActive: false
		}
	},
	methods: {
		toggleActive(){
			this.$_isActive = !this.$_isActive;
		}
	}
}