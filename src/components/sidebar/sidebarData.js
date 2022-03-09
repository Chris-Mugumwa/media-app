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
