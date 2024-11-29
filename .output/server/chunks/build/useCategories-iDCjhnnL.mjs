import { a as apiCluster } from './useAuth-CRsBI6Hp.mjs';
import { H as Helper } from './helper-C0GmhoMX.mjs';
import { d as defineStore } from './server.mjs';

const apiRoutes = {
  /* auth */
  categories: "/api/ipin/v1/categories"
};
const useCategoryStore = defineStore("categories", {
  state: () => ({
    categories: [],
    pagination: {
      total: 0,
      lastPage: 1,
      perPage: 12,
      currentPage: 0
    },
    filters: {
      order: {
        field: "id",
        way: "desc"
      }
    },
    loading: false,
    parentCategories: []
  }),
  getters: {},
  actions: {
    setFilters(filters) {
      var _a;
      if (typeof filters.search === "string")
        this.filters["search"] = (_a = filters.search) != null ? _a : void 0;
    },
    async get(page, take = 10) {
      try {
        this.loading = true;
        const response = await apiCluster.get(apiRoutes.categories, {
          page,
          take,
          filter: JSON.stringify(this.filters)
        });
        const metadata = response.meta;
        this.categories = response.data;
        this.pagination = metadata.page;
      } catch (error) {
        console.error(error);
        throw error;
      } finally {
        this.loading = false;
      }
    },
    async requestParentsCategories() {
      try {
        this.loading = true;
        const response = await apiCluster.get(apiRoutes.categories, {
          include: "children",
          filter: JSON.stringify({
            order: {
              field: "id",
              way: "asc"
            },
            parentId: null
          })
        });
        const metadata = response.meta;
        this.parentCategories = response.data;
      } catch (error) {
        console.error(error);
        throw error;
      } finally {
        this.loading = false;
      }
    },
    async viewDetails(id) {
      try {
        this.loading = true;
        const response = await apiCluster.get(apiRoutes.categories, {
          include: "children",
          filter: JSON.stringify({
            order: {
              field: "id",
              way: "asc"
            },
            id
          })
        });
        this.selected = response.data[0];
        Helper.redirectTo(`/categories/${id}`);
      } catch (error) {
        console.error(error);
        throw error;
      } finally {
        this.loading = false;
      }
    }
  }
});

export { useCategoryStore as u };
//# sourceMappingURL=useCategories-iDCjhnnL.mjs.map
