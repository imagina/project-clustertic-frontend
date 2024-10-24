
//Convert object keys to snake_case
export const toSnakeCase = (object, params = {}) => {
	//Items to ignore when try to convert to snakeCase
	const notToSnakeCase = [...(params.notToSnakeCase || []), ...["options", "fields", "settings", "permissions"]]
	const keysNotToSnakeCase = (params.keysNotToSnakeCase || []);
	//function recursive to loop all items from object
	let convertObject = (dataObject) => {
		let response = {}//Object to save fields vonverted
		//Loop all items for convert

		for (var item in dataObject) {
			let itemValue = dataObject[item]//Value from item
			if (!notToSnakeCase.includes(item)) {
				//If value is object, also convert value
				if ((typeof itemValue === 'object' && itemValue !== null)) {
					if (Array.isArray(itemValue)) {
						itemValue = itemValue.map(item => (typeof item == 'object') ? convertObject(item) : item)
					} else itemValue = convertObject(dataObject[item])

					//itemValue = convertObject(dataObject[item])
				}
				//Add to response new Key with Value
				let objKey = keysNotToSnakeCase.includes(item) ? item : this.convertStringToSnakeCase(item);
				response[objKey] = (itemValue !== undefined) ? itemValue : null;
			} else {
				response[item] = itemValue
			}
		}
		return response
	}
	return convertObject(object)//Return response
}
