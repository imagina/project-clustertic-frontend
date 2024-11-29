import { U as User, a as apiCluster } from './useAuth-CRsBI6Hp.mjs';
import { H as Helper } from './helper-C0GmhoMX.mjs';
import { d as defineStore } from './server.mjs';

const apiRoutes = {
  profileUsers: "/api/profile/v1/users",
  profileSkills: "/api/profile/v1/skills"
};
const useProfilesStore = defineStore("profiles", {
  state: () => ({
    user: null,
    users: [],
    pagination: {
      total: 0,
      lastPage: 1,
      perPage: 12,
      currentPage: 0
    },
    loading: false,
    filters: {}
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
    }
  },
  actions: {
    setFilters(filters) {
    },
    async get(page, take = 10) {
      try {
        this.loading = true;
        const response = await apiCluster.get(apiRoutes.profileUsers, {
          page,
          take,
          include: "information.files,skills",
          filter: JSON.stringify(this.filters)
        });
        const metadata = response.meta;
        this.users = response.data;
        this.pagination = metadata.page;
      } catch (error) {
        console.error(error);
        throw error;
      } finally {
        this.loading = false;
      }
    },
    async requestFullUser(user_id) {
      try {
        this.loading = true;
        const response = await apiCluster.get(
          apiRoutes.profileUsers + `/${user_id}`,
          {
            include: "information,skills"
          }
        );
        let user;
        if (this.user) user = { ...this.user, ...response.data };
        else user = response.data;
        this.user = user;
      } catch (error) {
        console.error(error);
        throw error;
      } finally {
        this.loading = false;
      }
    },
    async viewDetails(id) {
      try {
        await this.requestFullUser(id);
        Helper.redirectTo(`/profiles/${id}`);
      } catch (error) {
        console.error(error);
        throw error;
      } finally {
        this.loading = false;
      }
    },
    removeSelected() {
      this.user = null;
    }
  }
});

export { useProfilesStore as u };
//# sourceMappingURL=useProfiles-DSsDX3vj.mjs.map
