import { a as apiCluster, u as useAuthStore, U as User } from './useAuth-CRsBI6Hp.mjs';
import { H as Helper } from './helper-C0GmhoMX.mjs';
import { d as defineStore, N as Notify } from './server.mjs';

const apiRoutes = {
  /* auth */
  projects: "/api/ipin/v1/pins",
  proposals: "/api/ipin/v1/bids"
};
const useProjectsStore = defineStore("projects", {
  state: () => ({
    projects: [],
    pagination: {
      total: 0,
      lastPage: 1,
      perPage: 12,
      currentPage: 0
    },
    selected: null,
    filters: {
      order: {
        field: "id",
        way: "desc"
      }
    },
    loading: false
  }),
  getters: {},
  actions: {
    setFilters(filters) {
      var _a;
      if (typeof filters.search === "string")
        this.filters["search"] = (_a = filters.search) != null ? _a : void 0;
      if (typeof filters.minPrice === "number" && typeof filters.maxPrice === "number")
        this.filters["priceRange"] = {
          from: filters.minPrice > 0 ? filters.minPrice : 0,
          to: filters.maxPrice > 0 ? filters.maxPrice : 1e12
        };
      if (Array.isArray(filters.categories))
        this.filters["categories"] = filters.categories.length > 0 ? filters.categories : void 0;
    },
    async get(page, take = 10) {
      try {
        this.loading = true;
        const response = await apiCluster.get(apiRoutes.projects, {
          page,
          take,
          include: "categories",
          filter: JSON.stringify(this.filters)
        });
        const metadata = response.meta;
        this.projects = response.data;
        this.pagination = metadata.page;
      } catch (error) {
        console.error(error);
        throw error;
      } finally {
        this.loading = false;
      }
    },
    async create(attributes) {
      var _a;
      const auth = useAuthStore();
      if (!auth.user) {
        Notify.create({
          message: "Debes Ingresar para poder crear un proyecto",
          type: "negative"
        });
        throw new Error("you need be logged");
      }
      const files = attributes.files;
      delete attributes.files;
      attributes = {
        ...attributes,
        user_id: auth.user.id,
        country_id: 48,
        province_id: 721,
        city_id: 956,
        status: 2
      };
      if (files && files.length > 0) {
        attributes.medias_multi = {
          documents: {
            files: []
          }
        };
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const formData = new FormData();
          formData.append("disk", "s3");
          formData.append("parent_id", "0");
          formData.append("file", file);
          const { data: dataMedia } = await apiCluster.post(
            "/api/imedia/v1/files",
            formData,
            false
          );
          (_a = attributes.medias_multi.documents) == null ? void 0 : _a.files.push(dataMedia.id);
        }
      }
      const response = await apiCluster.post(apiRoutes.projects, {
        attributes
      });
      this.get(1);
      Helper.redirectTo(`/projects`);
      return response;
    },
    async viewDetails(id) {
      try {
        const filtros = {
          order: {
            field: "id",
            way: "desc"
          },
          ad_id: id
        };
        this.loading = true;
        const projectResponse = await apiCluster.get(
          `${apiRoutes.projects}/${id}`,
          {
            include: "categories,user,province,country,city"
          }
        );
        const proposalResponse = await apiCluster.get(
          `${apiRoutes.proposals}`,
          {
            filter: JSON.stringify(filtros),
            include: "creator.ratings"
          }
        );
        const project = projectResponse.data;
        project.bids = proposalResponse.data.map((pro) => {
          if (pro.creator) pro.creator = new User(pro.creator);
          return pro;
        });
        this.selected = project;
        Helper.redirectTo(`/projects/${id}`);
      } catch (error) {
        console.error(error);
        throw error;
      } finally {
        this.loading = false;
      }
    },
    removeSelected() {
      this.selected = null;
    },
    async addProposal(attributes) {
      var _a2;
      var _a;
      const auth = useAuthStore();
      if (!auth.user) {
        Notify.create({
          message: "Debes Ingresar para poder crear una propuesta",
          type: "negative"
        });
        throw new Error("you need be logged");
      }
      try {
        const files = attributes.files;
        delete attributes.files;
        if (files && files.length > 0) {
          attributes.medias_multi = {
            documents: {
              files: []
            }
          };
          for (let i = 0; i < files.length; i++) {
            const { data: dataMedia } = await apiCluster.fileUpload(
              files[i]
            );
            (_a = attributes.medias_multi.documents) == null ? void 0 : _a.files.push(dataMedia.id);
          }
        }
        const response = await apiCluster.post(apiRoutes.proposals, {
          attributes
        });
        if (this.selected && this.selected.id === attributes.ad_id) {
          const bids = (_a2 = this.selected.bids) != null ? _a2 : [];
          bids.unshift(response.data);
          this.selected.bids = bids;
        }
        Notify.create({
          message: "Se ha enviado la propuesta exitosamente",
          type: "positive"
        });
        console.log(response);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async selectProposal(proposal) {
      const auth = useAuthStore();
      if (!auth.user) {
        Notify.create({
          message: "Debes Ingresar para poder crear una propuesta",
          type: "negative"
        });
        throw new Error("you need be logged");
      }
      if (!this.selected || this.selected.createdBy !== auth.user.id) {
        throw new Error("you need to select a project that you create");
      }
      try {
        const response = await apiCluster.put(
          apiRoutes.proposals + `/${proposal.id}`,
          {
            "attributes[selected]": 1
          }
        );
        Notify.create({
          message: "Se ha seleccionado la propuesta exitosamente",
          type: "positive"
        });
        this.viewDetails(this.selected.id);
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  }
});

export { useProjectsStore as u };
//# sourceMappingURL=useProjects-CIpw3REu.mjs.map
