const comments = {
	state: [
		{
			id: new Date(2019, 2, 3, 11, 31),
			post: 7,
			author: 'Shon Garnier',
			text: 'Simpy clever!'
		},
		{
			id: new Date(2019, 2, 3, 22, 10),
			post: 6,
			author: 'Mat Basby',
			text: 'Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um ein Musterbuch zu erstellen. Es hat nicht nur 5 Jahrhunderte überlebt, sondern auch in Spruch in die elektronische Schriftbearbeitung geschafft (bemerke, nahezu unverändert). Bekannt wurde es 1960, mit dem erscheinen von "Letraset", welches Passagen von Lorem Ipsum enhielt, so wie Desktop Software wie "Aldus PageMaker" - ebenfalls mit Lorem Ipsum.'
		}
	],
	getters: {
		comments: state => {
			return state;
		}
	}
}

export {comments};