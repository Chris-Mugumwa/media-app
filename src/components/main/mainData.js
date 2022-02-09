export const timeFormat = value => {
	if (value) {
		let valueSplit = value.split('')
		let valueSlice = valueSplit.slice(0, 4)
		let valueJoin = valueSlice.join('')
		return valueJoin
	} else {
		console.log('no value')
		return null
	}
}

export const texts = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
]
