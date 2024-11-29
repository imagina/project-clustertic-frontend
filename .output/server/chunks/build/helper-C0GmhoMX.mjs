import { v as useRouter } from './server.mjs';

const lang = {
  "appbar": {
    "nav": {
      "briefcase": "portafolio",
      "explore": "explorar proyectos",
      "login": "iniciar sesi\xF3n",
      "register": "registrarse"
    },
    "publish_project": "Publicar un proyecto"
  },
  "landing": {
    "title": {
      "content": "Conecta ahora tus ideas {br} con {highlight} en {br2} tecnolog\xEDa para hacerlas realidad",
      "highlight": "manos expertas"
    },
    "publishProject": "Publicar proyectos",
    "findProject": "Buscar Proyectos",
    "recentProjects": "Lo m\xE1s reciente"
  },
  "auth": {
    "login": {
      "title": "Iniciar sesi\xF3n",
      "subtitle": "Bienvenido nuevamente",
      "inputs": {
        "email": "Email",
        "password": "Contrase\xF1a",
        "rememberMe": "Recordar usuario"
      },
      "forgotPassword": "\xBFOlvidaste tu contrase\xF1a?",
      "submitBtn": "Ingresar",
      "withoutAccount": {
        "content": "\xBFNo tienes una cuenta?",
        "link": "Reg\xEDstrate"
      }
    },
    "register": {
      "title": "Registro",
      "inputs": {
        "firstName": "Nombre",
        "lastName": "Apellido",
        "email": "Email",
        "password": "Contrase\xF1a",
        "passwordAgain": "Repetir contrase\xF1a",
        "termsAndCond": {
          "content": "Acepto el {highlight1} y la {highlight2}.",
          "highlight1": "Acuerdo de usuario",
          "highlight2": "Pol\xEDtica de privacidad"
        }
      },
      "submitBtn": "Registrarme",
      "existAccount": {
        "content": "\xBFYa tienes una cuenta?",
        "link": "Ingresar"
      }
    },
    "reset": {
      "title": "Recuperar Contrase\xF1a",
      "submitBtn": "Recuperar Contrase\xF1a",
      "confirmPassword": "Confirmar Contrase\xF1a"
    }
  },
  "projects": {
    "singular": "Proyecto ",
    "create": {
      "pages": {
        "one": {
          "title": "Cu\xE9ntanos qu\xE9 necesitas",
          "description": "Recibe ofertas de los principales expertos de la industria TIC y escoge la propuesta que mejor se adapte a tu necesidad."
        },
        "two": {
          "title": "\xBFQu\xE9 habilidades se necesitan?",
          "description": "Ingresa hasta 5 habilidades que describen mejor tu proyecto. Los freelancers utilizar\xE1n estas habilidades para encontrar proyectos en los que est\xE1n m\xE1s interesados y experimentados."
        },
        "three": {
          "title": "\xBFComo quieres pagar?"
        },
        "four": {
          "title": "\xBFSon correctos tus datos?"
        }
      },
      "form": {
        "name": {
          "label": "Elige un nombre para tu proyecto",
          "placeholder": "p. ej., Necesito un sitio web"
        },
        "description": {
          "label": "Explica tu proyecto",
          "placeholder": "Describe tu proyecto aqu\xED...",
          "clearBtn": "Borrar descripci\xF3n"
        },
        "files": {
          "empty": {
            "title": "Adjuntar Documentos",
            "description": "Arrastra y suelta cualquier imagen o documento que podr\xEDa resultar \xFAtil para explicar aqu\xED tu proyecto (tama\xF1o de archivo m\xE1x 25 MB)"
          },
          "loadedMsg": "Documentos adjuntados"
        },
        "skills": {
          "label": "Elige las habilidades necesarias para tu proyecto",
          "placeholder": "Ingresa habilidades aqu\xED...",
          "suggested": "Habilidades sugeridas:"
        },
        "prices": {
          "details": {
            "title": "Precio fijo",
            "description": "Acepta un precio fijo y libera el pago cuando se realice el trabajo. Es mejor para tareas espor\xE1dicas."
          },
          "label": "Elige un el rango de precios para tu proyecto"
        },
        "final": {
          "label": "Detalles del proyecto"
        },
        "buttons": {
          "back": "Volver",
          "next": "Siguiente",
          "submit": "Crear"
        }
      }
    }
  }
};
const Helper = {
  //convert a date string with the format "YYYY-MM-DD HH:mm:ss" to a date
  parseStringToDate: (fechaString, formato = "YYYY-MM-DD HH:mm:ss") => {
    if (!fechaString) return /* @__PURE__ */ new Date();
    const separadores = formato.match(/[^A-Za-z]/g) || [];
    const partesFechaHora = fechaString.split(
      new RegExp(
        `[${separadores.map((sep) => {
          if (sep === "-" || sep === "\\" || sep === ".") return `\\${sep}`;
          return sep;
        }).join("")}]`
      )
    );
    let anio = 0, mes = 0, dia = 0, horas = 0, minutos = 0, segundos = 0;
    formato.split(/[^A-Za-z]/).forEach((parte, index) => {
      var _a, _b, _c, _d, _e, _f;
      switch (parte) {
        case "YYYY":
          anio = Number((_a = partesFechaHora[index]) != null ? _a : 0);
          break;
        case "MM":
          mes = Number((_b = partesFechaHora[index]) != null ? _b : 0) - 1;
          break;
        case "DD":
          dia = Number((_c = partesFechaHora[index]) != null ? _c : 0);
          break;
        case "HH":
          horas = Number((_d = partesFechaHora[index]) != null ? _d : 0);
          break;
        case "mm":
          minutos = Number((_e = partesFechaHora[index]) != null ? _e : 0);
          break;
        case "ss":
          segundos = Number((_f = partesFechaHora[index]) != null ? _f : 0);
          break;
        default:
          throw new Error(`Formato desconocido: ${parte}`);
      }
    });
    return new Date(anio, mes, dia, horas, minutos, segundos);
  },
  parseDateToString: (date, format = "YYYY-MM-DD HH:mm:ss") => {
    const meses = [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic"
    ];
    const diasSemana = ["dom", "lun", "mar", "mi\xE9", "jue", "vie", "s\xE1b"];
    const map = {
      DD: ("0" + date.getDate()).slice(-2),
      D: `${date.getDate()}`,
      MMMM: date.toLocaleString("es-ES", { month: "long" }),
      MMM: meses[date.getMonth()],
      MM: ("0" + (date.getMonth() + 1)).slice(-2),
      M: `${date.getMonth() + 1}`,
      YYYY: `${date.getFullYear()}`,
      YY: String(date.getFullYear()).slice(-2),
      dddd: diasSemana[date.getDay()],
      ddd: date.toLocaleString("es-ES", { weekday: "short" })
    };
    return format.replace(
      /DD|D|MMMM|MMM|MM|M|YYYY|YY|dddd|ddd/g,
      (matched) => map[matched]
    );
  },
  calculateDifferencesBetweenDays(date1, date2) {
    if (!date1) date1 = /* @__PURE__ */ new Date();
    if (!date2) date2 = /* @__PURE__ */ new Date();
    let diffMiliSeconds = Math.abs(date2.getTime() - date1.getTime());
    let diffSeconds = Math.floor(diffMiliSeconds / 1e3);
    let diffMinutes = Math.floor(diffSeconds / 60);
    let diffHours = Math.floor(diffMinutes / 60);
    let diffDays = Math.floor(diffHours / 24);
    let diffMonth = Math.floor(diffDays / 30);
    let diffYear = Math.floor(diffMonth / 12);
    const diff = {
      miliSeconds: diffMiliSeconds % 1e3,
      seconds: diffSeconds % 60,
      minutes: diffMinutes % 60,
      hours: diffHours % 24,
      days: diffDays % 30,
      month: diffMonth % 12,
      years: diffYear
    };
    return diff;
  },
  //Convert object keys to snake_case
  toSnakeCase: (object, params = {}) => {
    const notToSnakeCase = [
      ...params.notToSnakeCase || [],
      ...["options", "fields", "settings", "permissions"]
    ];
    const keysNotToSnakeCase = params.keysNotToSnakeCase || [];
    let convertObject = (dataObject) => {
      let response = {};
      for (var item in dataObject) {
        let itemValue = dataObject[item];
        if (!notToSnakeCase.includes(item)) {
          if (typeof itemValue === "object" && itemValue !== null) {
            if (Array.isArray(itemValue)) {
              itemValue = itemValue.map(
                (item2) => typeof item2 == "object" ? convertObject(item2) : item2
              );
            } else itemValue = convertObject(dataObject[item]);
          }
          let objKey = keysNotToSnakeCase.includes(item) ? item : Helper.convertStringToSnakeCase(item);
          response[objKey] = itemValue !== void 0 ? itemValue : null;
        } else {
          response[item] = itemValue;
        }
      }
      return response;
    };
    return convertObject(object);
  },
  //Convert strings to snake_case
  convertStringToSnakeCase: (string) => string.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`),
  timestamp: (date) => {
    date = date ? date : /* @__PURE__ */ new Date();
    return date.getTime() / 1e3 | 0;
  },
  // Detect Device
  detectDevice: () => {
    const userAgent = (void 0).userAgent.toLowerCase();
    let device = "Unknown";
    let version = "Unknown";
    if (/iphone|ipad|ipod/.test(userAgent)) {
      device = "iPhone/iPad/iPod";
      const versionMatch = userAgent.match(/os (\d+_\d+)/);
      if (versionMatch) {
        version = versionMatch[1].replace("_", ".");
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
        version = versionMatch[1].replace(/_/g, ".");
      }
    } else if (/windows/.test(userAgent)) {
      device = "Windows";
      const versionMatch = userAgent.match(/windows nt (\d+(\.\d+)?)/);
      if (versionMatch) {
        version = versionMatch[1];
      }
    }
    return `${device} ${version}`;
  },
  /* redirect with router instance*/
  redirectTo(route) {
    const router = useRouter();
    router.push(route);
  },
  toggleItem(list, item, searchField) {
    list = [...list];
    const itemIndex = list.findIndex((listItem) => {
      if (!searchField) return listItem === item;
      else
        return listItem[searchField] === listItem[searchField];
    });
    if (itemIndex >= 0) {
      list.splice(itemIndex, 1);
    } else {
      list.push(item);
    }
    return list;
  },
  tLang(key) {
    let word = lang;
    key.split(".").forEach((subKey) => {
      word = word[subKey];
      debugger;
    });
    return word;
  }
};

export { Helper as H };
//# sourceMappingURL=helper-C0GmhoMX.mjs.map
