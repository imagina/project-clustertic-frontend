import { _ as __nuxt_component_0 } from './searchProject-CPl_kmTa.mjs';
import { _ as _sfc_main$2, a as _sfc_main$1$1, b as _sfc_main$3 } from './CardTitle-BbDugV-N.mjs';
import { _ as __nuxt_component_4 } from './CardSmallProfile-rdq3AvVI.mjs';
import { _ as __nuxt_component_8 } from './Paginator-BBLdPLWP.mjs';
import { useSSRContext, defineComponent, ref, computed, reactive, watch, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode } from 'vue';
import { u as useRoute } from './server.mjs';
import { u as useProfilesStore } from './useProfiles-DSsDX3vj.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './LoadingScreen-BE1NuBJz.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../_/QForm.mjs';
import '@vueuse/core';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import '../_/vm.mjs';
import './helper-C0GmhoMX.mjs';
import 'lucide-vue-next';
import './index-BUfu69CW.mjs';
import 'radix-vue';
import 'class-variance-authority';
import './star-kerVB7NH.mjs';
import './nuxt-icon-1v0WEHYY.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@fortawesome/fontawesome-svg-core';
import './useAuth-CRsBI6Hp.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    const router = useRoute();
    const profilesStore = useProfilesStore();
    const page = computed(() => profilesStore.pagination.currentPage);
    const totalPages = computed(() => profilesStore.pagination.lastPage);
    reactive({
      minPrice: "0",
      maxPrice: "100000000",
      searchSkills: "",
      skills: []
    });
    watch(
      () => router.query,
      (newQuery, oldQuery) => {
        if (oldQuery["search"] !== newQuery["search"]) handleRefreshPage();
      }
    );
    function handleRefreshPage(page2 = 1) {
      profilesStore.get(page2, 12);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SearchProject = __nuxt_component_0;
      const _component_Card = _sfc_main$2;
      const _component_CardHeader = _sfc_main$1$1;
      const _component_CardTitle = _sfc_main$3;
      const _component_CardSmallProfile = __nuxt_component_4;
      const _component_Paginator = __nuxt_component_8;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_SearchProject, { class: "tw-mt-20" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        loading: unref(profilesStore).loading
      }, null, _parent));
      _push(`<section class="tw-container tw-mt-5 tw-mb-16 tw-relative" data-v-5b57192a>`);
      _push(ssrRenderComponent(_component_Card, { class: "tw-mb-3 tw-h-full" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, { class: "tw-font-extrabold" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Resultados ${ssrInterpolate(unref(router).query["search"] ? `que contengan "${unref(router).query["search"]}"` : ``)} <span class="tw-font-normal tw-text-base tw-ml-5" data-v-5b57192a${_scopeId3}> P\xE1gina ${ssrInterpolate(unref(page))} de ${ssrInterpolate(unref(totalPages))}</span>`);
                      } else {
                        return [
                          createTextVNode(" Resultados " + toDisplayString(unref(router).query["search"] ? `que contengan "${unref(router).query["search"]}"` : ``) + " ", 1),
                          createVNode("span", { class: "tw-font-normal tw-text-base tw-ml-5" }, " P\xE1gina " + toDisplayString(unref(page)) + " de " + toDisplayString(unref(totalPages)), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, { class: "tw-font-extrabold" }, {
                      default: withCtx(() => [
                        createTextVNode(" Resultados " + toDisplayString(unref(router).query["search"] ? `que contengan "${unref(router).query["search"]}"` : ``) + " ", 1),
                        createVNode("span", { class: "tw-font-normal tw-text-base tw-ml-5" }, " P\xE1gina " + toDisplayString(unref(page)) + " de " + toDisplayString(unref(totalPages)), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_CardTitle, { class: "tw-font-extrabold" }, {
                    default: withCtx(() => [
                      createTextVNode(" Resultados " + toDisplayString(unref(router).query["search"] ? `que contengan "${unref(router).query["search"]}"` : ``) + " ", 1),
                      createVNode("span", { class: "tw-font-normal tw-text-base tw-ml-5" }, " P\xE1gina " + toDisplayString(unref(page)) + " de " + toDisplayString(unref(totalPages)), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul class="profile-list" data-v-5b57192a><!--[-->`);
      ssrRenderList(unref(profilesStore).users, (user) => {
        var _a;
        _push(`<li data-v-5b57192a>`);
        _push(ssrRenderComponent(_component_CardSmallProfile, {
          class: "tw-h-full",
          id: user.id,
          name: user.fullName,
          img: (_a = user == null ? void 0 : user.mediaFiles.profile.path) != null ? _a : user == null ? void 0 : user.mediumImage,
          rating: 4.5,
          location: "xx, zz",
          "number-jobs": "x",
          price: "0"
        }, {
          tag: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b;
            if (_push2) {
              if (user.skills) {
                _push2(`<div class="tw-flex tw-mb-3" data-v-5b57192a${_scopeId}><p data-v-5b57192a${_scopeId}>${ssrInterpolate(((_a2 = user.skills) == null ? void 0 : _a2.length) > 0 ? user.skills[0].title : "Sin definir")}</p></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                user.skills ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "tw-flex tw-mb-3"
                }, [
                  createVNode("p", null, toDisplayString(((_b = user.skills) == null ? void 0 : _b.length) > 0 ? user.skills[0].title : "Sin definir"), 1)
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul><div class="tw-flex tw-justify-center tw-mt-10" data-v-5b57192a>`);
      _push(ssrRenderComponent(_component_Paginator, {
        onOnPageSelected: handleRefreshPage,
        pages: unref(totalPages),
        "btn-per-side": 3,
        current: unref(page)
      }, null, _parent));
      _push(`</div></section><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profiles/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5b57192a"]]);

export { index as default };
//# sourceMappingURL=index-CxfdlQmD.mjs.map
