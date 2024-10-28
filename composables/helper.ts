
export const Helper = {
	//Convert object keys to snake_case
	toSnakeCase: (object, params = {}) => {
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
					let objKey = keysNotToSnakeCase.includes(item) ? item : Helper.convertStringToSnakeCase(item);
					response[objKey] = (itemValue !== undefined) ? itemValue : null;
				} else {
					response[item] = itemValue
				}
			}
			return response
		}
		return convertObject(object)//Return response
	},

	//Convert strings to snake_case
	convertStringToSnakeCase: (string) => string.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`),
	
	timestamp: (date = false ) => {
		date = date ? date : new Date();
		return date / 1000 | 0;
	}, 

	// Detect Device
  detectDevice: () => {
    const userAgent = navigator.userAgent.toLowerCase();

    let device = "Unknown";
    let version = "Unknown";

    if (/iphone|ipad|ipod/.test(userAgent)) {
      device = "iPhone/iPad/iPod";
      const versionMatch = userAgent.match(/os (\d+_\d+)/);
      if (versionMatch) {
        version = versionMatch[1].replace('_', '.');
      }
    } else if (/android/.test(userAgent)) {
      device = "Android";
      const versionMatch = userAgent.match(/android (\d+(\.\d+)?)/);
      if (versionMatch) {
        version = versionMatch[1];
      }
    } else if (/macintosh|mac os x/.test(userAgent)) {
      device = "MacOs";
      const versionMatch = userAgent.match(/mac os x (\d+[_\d]+)/);
      if (versionMatch) {
        version = versionMatch[1].replace(/_/g, '.');
      }
    } else if (/windows/.test(userAgent)) {
      device = "Windows";
      const versionMatch = userAgent.match(/windows nt (\d+(\.\d+)?)/);
      if (versionMatch) {
        version = versionMatch[1];
      }
    }

    return `${device} ${version}`;
  }
}