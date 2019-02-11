export const truncatedString = {
	methods: {
		truncatedString(string,length){
			return string.length > length ? string.substr(0, length)+ '... ' : string;
		}
	}
}