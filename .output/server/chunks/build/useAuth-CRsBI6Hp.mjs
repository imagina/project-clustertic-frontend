import { H as Helper } from './helper-C0GmhoMX.mjs';
import { d as defineStore, N as Notify, r as useRuntimeConfig } from './server.mjs';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
const apiCluster = {
  config: () => {
    const authStore = useAuthStore();
    const token = authStore.getToken;
    const config = useRuntimeConfig();
    const url = config.public.apiRoute;
    const headers = {
      ...{
        "Content-Type": "application/json",
        Authorization: `${token}`
      }
    };
    return { url, headers };
  },
  get: (url, params = {}) => {
    const config = apiCluster.config();
    return $fetch(`${config.url}${url}`, {
      headers: config.headers,
      params,
      method: "GET"
    });
  },
  /**/
  post: (url, data, params = {}, toSnakeCase = true) => {
    const config = apiCluster.config();
    let body = {};
    let headers = { ...config.headers };
    if (data instanceof FormData) {
      body = data;
      delete headers["Content-Type"];
    } else {
      body = toSnakeCase ? Helper.toSnakeCase(data) : data;
    }
    return $fetch(`${config.url}${url}`, {
      headers,
      method: "POST",
      body,
      params
    });
  },
  fileUpload: (img) => {
    const formData = new FormData();
    formData.append("disk", "s3");
    formData.append("parent_id", "0");
    formData.append("file", img);
    return apiCluster.post("/api/imedia/v1/files", formData);
  },
  patch: (url, params = {}, data, toSnakeCase = true) => {
    const config = apiCluster.config();
    let body = {};
    let headers = { ...config.headers };
    if (data instanceof FormData) {
      body = data;
      delete headers["Content-Type"];
    } else {
      body = toSnakeCase ? Helper.toSnakeCase(data) : data;
    }
    return $fetch(`${config.url}${url}`, {
      headers,
      method: "PATCH",
      body,
      params
    });
  },
  put: (url, params, data = {}, toSnakeCase = true) => {
    const config = apiCluster.config();
    let body = {};
    let headers = { ...config.headers };
    if (data instanceof FormData) {
      body = data;
      delete headers["Content-Type"];
    } else {
      body = toSnakeCase ? Helper.toSnakeCase(data) : data;
    }
    return $fetch(`${config.url}${url}`, {
      headers,
      method: "PUT",
      body,
      params
    });
  },
  delete: (url, params = {}, data, toSnakeCase = true) => {
    const config = apiCluster.config();
    const body = toSnakeCase ? Helper.toSnakeCase(data) : data;
    return $fetch(`${config.url}${url}`, {
      headers: config.headers,
      method: "DELETE",
      body,
      params
    });
  }
};
const EntityTypes = {
  Categories: "Modules\\Iad\\Entities\\Categories"
};
class User {
  constructor(data) {
    __publicField(this, "id");
    __publicField(this, "firstName");
    __publicField(this, "lastName");
    __publicField(this, "fullName");
    __publicField(this, "isActivated");
    __publicField(this, "email");
    __publicField(this, "permissions");
    __publicField(this, "createdAt");
    __publicField(this, "updatedAt");
    __publicField(this, "lastLoginstring");
    __publicField(this, "smallImage");
    __publicField(this, "mediumImage");
    __publicField(this, "mainImage");
    __publicField(this, "contacts");
    __publicField(this, "socialNetworks");
    __publicField(this, "departments");
    __publicField(this, "organizations");
    __publicField(this, "settings");
    __publicField(this, "fields");
    __publicField(this, "addresses");
    __publicField(this, "roles");
    __publicField(this, "allPermissions");
    __publicField(this, "allSettings");
    __publicField(this, "files");
    __publicField(this, "mediaFiles");
    __publicField(this, "skills");
    __publicField(this, "information");
    __publicField(this, "ratings");
    __publicField(this, "averageRating");
    this.id = data.id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.fullName = data.fullName;
    this.isActivated = data.isActivated;
    this.email = data.email;
    this.permissions = data.permissions;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.lastLoginstring = data.lastLoginstring;
    this.smallImage = data.smallImage;
    this.mediumImage = data.mediumImage;
    this.mainImage = data.mainImage;
    this.contacts = data.contacts;
    this.socialNetworks = data.socialNetworks;
    this.departments = data.departments;
    this.organizations = data.organizations;
    this.settings = data.settings;
    this.fields = data.fields;
    this.addresses = data.addresses;
    this.roles = data.roles;
    this.allPermissions = data.allPermissions;
    this.allSettings = data.allSettings;
    this.files = data.files;
    this.mediaFiles = data.mediaFiles;
    this.skills = data.skills;
    this.information = data.information;
    this.ratings = data.ratings;
    this.averageRating = data.averageRating;
  }
  get extraFields() {
    if (!this.fields) return {};
    return this.fields.reduce(
      (prev, curr) => {
        prev[`${curr.name}`] = curr;
        return prev;
      },
      {}
    );
  }
  get socialMedia() {
    if (!this.socialNetworks.id) return {};
    const socialMedia = JSON.parse(this.socialNetworks.value);
    return socialMedia;
  }
}
const apiRoutes = {
  /* auth */
  authLogin: "/api/profile/v1/auth/login",
  authLogout: "/api/profile/v1/auth/logout",
  authMe: "/api/profile/v1/auth/me",
  authRegister: "/api/profile/v1/users/register",
  authLoginSocialNetwork: "/api/profile/v1/auth/social",
  authReset: "/api/profile/v1/auth/reset",
  authResetComplete: "/api/profile/v1/auth/reset-complete",
  changePassword: `/api/profile/v1/users/change-password`,
  /* settings */
  settings: "/api/isite/v1/site/settings",
  profileUsers: "/api/profile/v1/users",
  profileSkills: "/api/profile/v1/skills",
  profileInformation: "/api/profile/v1/information"
};
const routes = {
  home: "/",
  login: "/auth/login"
};
const useAuthStore = defineStore("auth", {
  state: () => ({
    username: "",
    password: "",
    user: null,
    token: "",
    expiresIn: null,
    loading: false,
    facebookClientId: null,
    googleClientId: null
  }),
  getters: {
    fullUser(state) {
      return state.user ? new User(state.user) : void 0;
    },
    userDescription(state) {
      var _a;
      if (!state.user) return "";
      const description = state.user.fields.find(
        (value) => value.name === "description"
      );
      return (_a = description == null ? void 0 : description.value) != null ? _a : "";
    },
    userSocialMedia(state) {
      if (!state.user || !state.user.socialNetworks.id) return {};
      const socialMedia = JSON.parse(state.user.socialNetworks.value);
      return socialMedia;
    },
    getToken(state) {
      return state.token;
    },
    getExpiresIn(state) {
      return state.expiresIn ? state.expiresIn : Helper.parseStringToDate(localStorage.getItem("expiresIn"));
    },
    getUsername(state) {
      var _a;
      return state.user ? (_a = state.user) == null ? void 0 : _a.email : localStorage.getItem("username");
    },
    getFacebookClientId(state) {
      return state.facebookClientId;
    },
    getGoogleClientId(state) {
      return state.googleClientId;
    }
  },
  actions: {
    async setToken(token, expiresIn) {
      this.token = token;
      this.expiresIn = Helper.parseStringToDate(expiresIn);
      localStorage.setItem("userToken", token);
      localStorage.setItem("expiresIn", expiresIn);
    },
    async clearToken() {
      this.token = "";
      this.expiresIn = null;
      this.user = null;
      localStorage.removeItem("userToken");
      localStorage.removeItem("expiresIn");
      localStorage.removeItem("username");
    },
    validateToken() {
      return Helper.timestamp(this.getExpiresIn) >= Helper.timestamp();
    },
    /* Request login with Social Networks */
    authSocialNetwork(params) {
      return new Promise((resolve, reject) => {
        const requestUrl = `${apiRoutes.authLoginSocialNetwork}/${params.type}`;
        const socialData = params.socialData ? params.socialData : "";
        let requestParams = {
          attributes: {
            token: params.token,
            socialData,
            device: Helper.detectDevice()
          },
          type: params.type
        };
        this.token = "";
        apiCluster.post(requestUrl, requestParams).then((response) => {
          if (response == null ? void 0 : response.data) {
            this.authSuccess(response.data);
            resolve(response.data);
          }
        }).catch((error) => {
          console.warn(error);
          reject(error);
        });
      });
    },
    async authSuccess(userData) {
      this.user = userData.userData;
      this.token = userData.userToken;
      this.expiresIn = Helper.parseStringToDate(userData.expiresIn);
      localStorage.setItem("userToken", this.token);
      localStorage.setItem("expiresIn", userData.expiresIn);
      localStorage.setItem("username", this.user.email);
      Helper.redirectTo(routes.home);
    },
    async login(credentials) {
      try {
        this.loading = true;
        await apiCluster.post(apiRoutes.authLogin, credentials).then((response) => {
          if (response == null ? void 0 : response.data) {
            this.authSuccess(response.data);
            Helper.redirectTo(routes.home);
          }
        });
      } catch (error) {
        console.error("Login failed:", error);
        let msg = "Algo salio mal en el login";
        if (error.data.errors) msg = "Usuario o contrase\xF1a invalido";
        Notify.create({
          message: msg,
          type: "negative"
        });
      } finally {
        this.loading = false;
      }
    },
    async logout() {
      await apiCluster.get(apiRoutes.authLogout).then((response) => {
        this.clearToken();
      });
      Helper.redirectTo(routes.login);
      Notify.create({
        message: "Has cerrado sesi\xF3n exitosamente. \xA1Hasta pronto!",
        type: "positive"
      });
    },
    async register(dataForm) {
      const currentDate = /* @__PURE__ */ new Date();
      const credentials = {
        attributes: {
          ...dataForm,
          password_confirmation: dataForm.password,
          timezone: currentDate.getTimezoneOffset() / 60,
          language: (void 0).language || (void 0).userLanguage
        }
      };
      try {
        await apiCluster.post(apiRoutes.authRegister, credentials).then((response) => {
          this.username = dataForm.email;
          this.password = dataForm.password;
          Helper.redirectTo(routes.login);
          Notify.create({
            message: "\xA1Usuario creado! Ahora puedes iniciar sesi\xF3n.",
            type: "positive"
          });
        });
      } catch (error) {
        console.error("Login failed:", error);
        let msg = "Algo salio mal en el login";
        if (error.data.errors) msg = "Correo no disponible";
        Notify.create({
          message: msg,
          type: "negative"
        });
      }
    },
    /* change the password form admin/changePassword */
    async changePassword(dataForm) {
      const requestData = {
        attributes: {
          ...dataForm,
          email: this.getUsername
        }
      };
      apiCluster.post(apiRoutes.changePassword, requestData, {}, false).then((response) => {
        Helper.redirectTo(routes.login);
        Notify.create({
          message: "contrase\xF1a actualizada!",
          type: "positive"
        });
      }).catch((error) => {
        Notify.create({
          message: "error al cambiar la contrase\xF1a",
          type: "negative"
        });
      });
    },
    /* reset password request */
    async refreshSession() {
      var _a;
      try {
        if (!this.getToken) return;
        const response = await apiCluster.get(apiRoutes.authMe);
        this.user = response.data.userData;
        this.expiresIn = Helper.parseStringToDate(
          localStorage.getItem("expiresIn")
        );
        this.token = (_a = localStorage.getItem("userToken")) != null ? _a : "";
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async requestFullUser() {
      var _a;
      try {
        if (!this.getToken) return;
        const response = await apiCluster.get(
          apiRoutes.profileUsers + `/${(_a = this.user) == null ? void 0 : _a.id}`,
          {
            include: "information.files,skills"
          }
        );
        this.user = { ...this.user, ...response.data };
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    /* reset password request */
    async resetPassword(dataForm) {
      this.clearToken();
      apiCluster.post(apiRoutes.authReset, { attributes: dataForm }).then((response) => {
        Helper.redirectTo(routes.login);
        Notify.create({
          message: "Revisa tu email para reiniciar tu contrase\xF1a.",
          type: "positive"
        });
      }).catch((error) => {
        Notify.create({
          message: "Ning\xFAn usuario con esa direcci\xF3n de correo electr\xF3nico se encuentra registrado en nuestro sistema.",
          type: "negative"
        });
      });
    },
    /* 
      Change password from reset email url
    */
    async changedPasswordRequest(dataForm) {
      this.clearToken();
      let dataRequest = {
        password: dataForm.password,
        password_confirmation: dataForm.passwordConfirmation,
        userId: dataForm.userId,
        code: dataForm.token
      };
      apiCluster.post(apiRoutes.authResetComplete, dataRequest).then((response) => {
        Helper.redirectTo(routes.login);
        Notify.create({
          message: "Tu contrase\xF1a se actualiz\xF3 correctamente.",
          type: "positive"
        });
      }).catch((error) => {
        Notify.create({
          message: "No se pudo actualizar la contrase\xF1a",
          type: "negative"
        });
      });
    },
    /* site settings */
    async getSettings(settings) {
      const config = useRuntimeConfig();
      return await $fetch(`${config.public.apiRoute}${apiRoutes.settings}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        params: {
          filter: {
            name: settings
          }
        }
      });
    },
    /* facebook settings */
    async getFacebookSettings() {
      await this.getSettings(["isite::facebookClientId"]).then(
        (response) => {
          if (response == null ? void 0 : response.data) {
            this.facebookClientId = response.data["isite::facebookClientId"];
          }
        }
      );
    },
    /* google settings */
    async getGoogleSettings() {
      await this.getSettings(["isite::googleClientId"]).then(
        (response) => {
          if (response == null ? void 0 : response.data) {
            this.googleClientId = response.data["isite::googleClientId"];
          }
        }
      );
    },
    //user edit
    async editProfileInfo(data) {
      var _a;
      if (!this.user) throw Error("you must be logged");
      const user = new User(this.user);
      const body = {
        "attributes[id]": user.id,
        "attributes[is_activated]": 1,
        ...data
      };
      if (body["attributes[fields]"]) {
        const currentFields = Object.keys(user.extraFields);
        const fields = body["attributes[fields]"];
        delete body["attributes[fields]"];
        fields.forEach(
          (item, i) => {
            body[`attributes[fields][${i}][name]`] = item.name;
            body[`attributes[fields][${i}][value]`] = item.value;
            if (currentFields.includes(item.name)) {
              const oldField = user.fields.find((field) => {
                return field.name === item.name;
              });
              if (oldField) body[`attributes[fields][${i}][id]`] = oldField.id;
            }
          }
        );
      }
      apiCluster.put(apiRoutes.profileUsers + `/${(_a = this.user) == null ? void 0 : _a.id}`, body).then((response) => {
        Notify.create({
          message: "Usuario actualizado exitosamente.",
          type: "positive"
        });
        this.requestFullUser();
      }).catch((e) => {
        Notify.create({
          message: "No se pudo actualizar el usuario.",
          type: "positive"
        });
        throw e;
      });
    },
    async changeProfileImage(img) {
      if (!this.user) throw Error("you must be logged");
      const { data: dataMedia } = await apiCluster.fileUpload(img);
      this.editProfileInfo({
        "attributes[medias_single][profile]": dataMedia.id
      });
    },
    async changeSocialMedia(socialMedia) {
      this.editProfileInfo({
        "attributes[fields]": [
          {
            name: "socialNetworks",
            value: JSON.stringify(socialMedia)
          }
        ]
      });
    },
    async addSkill(tagToAttach) {
      if (!this.user) throw Error("you must be logged");
      const body = {
        attributes: {
          title: tagToAttach.title,
          user_id: this.user.id,
          entity_type: EntityTypes.Categories,
          entity_id: tagToAttach.id
        }
      };
      apiCluster.post(apiRoutes.profileSkills, body).then((response) => {
        this.requestFullUser();
      }).catch((e) => {
        console.error(e);
      });
    },
    async removeSkill(skillToRemove) {
      if (!this.user) throw Error("you must be logged");
      apiCluster.delete(apiRoutes.profileSkills + `/${skillToRemove.id}`).then((response) => {
        this.requestFullUser();
      }).catch((e) => {
        console.error(e);
      });
    },
    async addExperience(experience) {
      if (!this.user) throw Error("you must be logged");
      const body = {
        attributes: {
          es: {
            title: experience.title,
            description: experience.description
          },
          user_id: this.user.id,
          type: "experience",
          options: {
            dateInit: experience.dateInit,
            dateEnd: experience.dateEnd,
            place: experience.place,
            skill: experience.skill
          }
        }
      };
      if (experience.img) {
        const { data: dataMedia } = await apiCluster.fileUpload(
          experience.img
        );
        body.attributes["medias_single"] = {
          mainimage: dataMedia.id
        };
      }
      return apiCluster.post(apiRoutes.profileInformation, body).then((response) => {
        this.requestFullUser();
        Notify.create({
          message: "Experiencia agregada!",
          type: "positive"
        });
        return true;
      }).catch((e) => {
        console.error(e);
        Notify.create({
          message: "No se pudo crear",
          type: "negative"
        });
        throw e;
      });
    },
    async addPortfolio(experience) {
      if (!this.user) throw Error("you must be logged");
      const body = {
        attributes: {
          es: {
            title: experience.title,
            description: experience.description
          },
          user_id: this.user.id,
          type: "portfolio",
          options: {
            dateInit: experience.dateInit,
            dateEnd: experience.dateEnd,
            place: experience.place,
            skill: experience.skill
          }
        }
      };
      if (experience.img) {
        const { data: dataMedia } = await apiCluster.fileUpload(
          experience.img
        );
        body.attributes["medias_single"] = {
          mainimage: dataMedia.id
        };
      }
      apiCluster.post(apiRoutes.profileInformation, body).then((response) => {
        this.requestFullUser();
      }).catch((e) => {
        console.error(e);
      });
    }
  }
});

export { User as U, apiCluster as a, useAuthStore as u };
//# sourceMappingURL=useAuth-CRsBI6Hp.mjs.map
