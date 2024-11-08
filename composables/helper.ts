export const Helper = {
  //convert a date string with the format "YYYY-MM-DD HH:mm:ss" to a date
  parseStringToDate: (
    fechaString?: string | null,
    formato: string = 'YYYY-MM-DD HH:mm:ss',
  ) => {
    if (!fechaString) return null
    const separadores = formato.match(/[^A-Za-z]/g) || []
    const partesFechaHora = fechaString.split(
      new RegExp(
        `[${separadores
          .map((sep) => {
            if (sep === '-' || sep === '\\' || sep === '.') return `\\${sep}`
            return sep
          })
          .join('')}]`,
      ),
    )

    let anio = 0,
      mes = 0,
      dia = 0,
      horas = 0,
      minutos = 0,
      segundos = 0

    formato.split(/[^A-Za-z]/).forEach((parte, index) => {
      switch (parte) {
        case 'YYYY':
          anio = Number(partesFechaHora[index])
          break
        case 'MM':
          mes = Number(partesFechaHora[index]) - 1
          break
        case 'DD':
          dia = Number(partesFechaHora[index])
          break
        case 'HH':
          horas = Number(partesFechaHora[index])
          break
        case 'mm':
          minutos = Number(partesFechaHora[index])
          break
        case 'ss':
          segundos = Number(partesFechaHora[index])
          break
        default:
          throw new Error(`Formato desconocido: ${parte}`)
      }
    })

    return new Date(anio, mes, dia, horas, minutos, segundos)
  },

  //Convert object keys to snake_case
  toSnakeCase: (object, params = {}) => {
    //Items to ignore when try to convert to snakeCase
    const notToSnakeCase = [
      ...(params.notToSnakeCase || []),
      ...['options', 'fields', 'settings', 'permissions'],
    ]
    const keysNotToSnakeCase = params.keysNotToSnakeCase || []
    //function recursive to loop all items from object
    let convertObject = (dataObject) => {
      let response = {} //Object to save fields vonverted
      //Loop all items for convert

      for (var item in dataObject) {
        let itemValue = dataObject[item] //Value from item
        if (!notToSnakeCase.includes(item)) {
          //If value is object, also convert value
          if (typeof itemValue === 'object' && itemValue !== null) {
            if (Array.isArray(itemValue)) {
              itemValue = itemValue.map((item) =>
                typeof item == 'object' ? convertObject(item) : item,
              )
            } else itemValue = convertObject(dataObject[item])

            //itemValue = convertObject(dataObject[item])
          }
          //Add to response new Key with Value
          let objKey = keysNotToSnakeCase.includes(item)
            ? item
            : Helper.convertStringToSnakeCase(item)
          response[objKey] = itemValue !== undefined ? itemValue : null
        } else {
          response[item] = itemValue
        }
      }
      return response
    }
    return convertObject(object) //Return response
  },

  //Convert strings to snake_case
  convertStringToSnakeCase: (string: string) =>
    string.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`),

  timestamp: (date?: Date | null) => {
    date = date ? date : new Date()
    return (date.getTime() / 1000) | 0
  },

  // Detect Device
  detectDevice: () => {
    const userAgent = navigator.userAgent.toLowerCase()

    let device = 'Unknown'
    let version = 'Unknown'

    if (/iphone|ipad|ipod/.test(userAgent)) {
      device = 'iPhone/iPad/iPod'
      const versionMatch = userAgent.match(/os (\d+_\d+)/)
      if (versionMatch) {
        version = versionMatch[1].replace('_', '.')
      }
    } else if (/android/.test(userAgent)) {
      device = 'Android'
      const versionMatch = userAgent.match(/android (\d+(\.\d+)?)/)
      if (versionMatch) {
        version = versionMatch[1]
      }
    } else if (/macintosh|mac os x/.test(userAgent)) {
      device = 'MacOs'
      const versionMatch = userAgent.match(/mac os x (\d+[_\d]+)/)
      if (versionMatch) {
        version = versionMatch[1].replace(/_/g, '.')
      }
    } else if (/windows/.test(userAgent)) {
      device = 'Windows'
      const versionMatch = userAgent.match(/windows nt (\d+(\.\d+)?)/)
      if (versionMatch) {
        version = versionMatch[1]
      }
    }

    return `${device} ${version}`
  },

  /* redirect with router instance*/
  redirectTo(route) {
    const router = useRouter()
    router.push(route)
  },
}
