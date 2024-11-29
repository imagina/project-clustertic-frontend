import { _ as _sfc_main$2, a as _sfc_main$1, b as _sfc_main$3 } from './CardTitle-BbDugV-N.mjs';
import { _ as _sfc_main$4 } from './CardContent-CfXgBR5p.mjs';
import { a as _sfc_main$1$1, _ as _sfc_main$5 } from './RatingIndicator-CK_7lkYG.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref, withCtx, renderSlot, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, toDisplayString, createTextVNode } from 'vue';
import { H as Helper } from './helper-C0GmhoMX.mjs';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { BookmarkIcon } from 'lucide-vue-next';
import { c as cn } from './utils-H80jjgLf.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CardProject",
  __ssrInlineRender: true,
  props: {
    class: {},
    id: {},
    rating: {},
    skills: {},
    createdAt: {}
  },
  setup(__props) {
    const props = __props;
    const daysSince = computed(() => {
      if (!props.createdAt) return 0;
      const now = (/* @__PURE__ */ new Date()).getTime();
      const created = Helper.parseStringToDate(props.createdAt).getTime();
      let diffMiliSeconds = Math.abs(now - created);
      let diffSeconds = Math.floor(diffMiliSeconds / 1e3);
      let diffMinutes = Math.floor(diffSeconds / 60);
      let diffHours = Math.floor(diffMinutes / 60);
      return Math.floor(diffHours / 24);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = _sfc_main$2;
      const _component_CardHeader = _sfc_main$1;
      const _component_CardTitle = _sfc_main$3;
      const _component_CardContent = _sfc_main$4;
      const _component_CardFooter = _sfc_main$1$1;
      const _component_RatingIndicator = _sfc_main$5;
      _push(ssrRenderComponent(_component_Card, mergeProps({
        class: unref(cn)(props.class, "tw-pt-4 tw-pb-1 tw-px-6 !tw-rounded-xl")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, { class: "tw-font-bold" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "title", {}, null, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "title", {}, void 0, true)
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                  if (_ctx.$slots.subtitle) {
                    _push3(`<p class="tw-font-semibold tw-text-sm tw-mt-2" data-v-f95c5f6d${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "subtitle", {}, null, _push3, _parent3, _scopeId2);
                    _push3(`</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(_component_CardTitle, { class: "tw-font-bold" }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "title", {}, void 0, true)
                      ]),
                      _: 3
                    }),
                    _ctx.$slots.subtitle ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "tw-font-semibold tw-text-sm tw-mt-2"
                    }, [
                      renderSlot(_ctx.$slots, "subtitle", {}, void 0, true)
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CardContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (_ctx.$slots.description) {
                    _push3(`<div class="tw-relative" data-v-f95c5f6d${_scopeId2}><p class="tw-text-sm tw-line-clamp-3" data-v-f95c5f6d${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "description", {}, null, _push3, _parent3, _scopeId2);
                    _push3(`</p></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (props.skills) {
                    _push3(`<p class="tw-mt-5 tw-text-link" data-v-f95c5f6d${_scopeId2}><!--[-->`);
                    ssrRenderList(props.skills.join(" \u2022 ..").split(".."), (skill, index) => {
                      _push3(`<span data-v-f95c5f6d${_scopeId2}>${ssrInterpolate(skill)}</span>`);
                    });
                    _push3(`<!--]--></p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    _ctx.$slots.description ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "tw-relative"
                    }, [
                      createVNode("p", { class: "tw-text-sm tw-line-clamp-3" }, [
                        renderSlot(_ctx.$slots, "description", {}, void 0, true)
                      ])
                    ])) : createCommentVNode("", true),
                    props.skills ? (openBlock(), createBlock("p", {
                      key: 1,
                      class: "tw-mt-5 tw-text-link"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(props.skills.join(" \u2022 ..").split(".."), (skill, index) => {
                        return openBlock(), createBlock("span", {
                          key: `card_project_${_ctx.id}_${index}`
                        }, toDisplayString(skill), 1);
                      }), 128))
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CardFooter, { class: "d-flex" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="tw-flex" data-v-f95c5f6d${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_RatingIndicator, {
                    starClass: "tw-text-lg tw-mr-1",
                    rating: props.rating
                  }, null, _parent3, _scopeId2));
                  _push3(`<p class="tw-mb-0 tw-ml-3 tw-text-base tw-text-link" data-v-f95c5f6d${_scopeId2}>${ssrInterpolate(props.rating)}</p></div><div class="tw-flex-grow" data-v-f95c5f6d${_scopeId2}></div><p data-v-f95c5f6d${_scopeId2}> hace ${ssrInterpolate(unref(daysSince))} d\xEDas `);
                  _push3(ssrRenderComponent(unref(BookmarkIcon), {
                    color: "#4848A9",
                    size: 15,
                    class: "tw-inline tw-text-sm"
                  }, null, _parent3, _scopeId2));
                  _push3(`</p>`);
                } else {
                  return [
                    createVNode("div", { class: "tw-flex" }, [
                      createVNode(_component_RatingIndicator, {
                        starClass: "tw-text-lg tw-mr-1",
                        rating: props.rating
                      }, null, 8, ["rating"]),
                      createVNode("p", { class: "tw-mb-0 tw-ml-3 tw-text-base tw-text-link" }, toDisplayString(props.rating), 1)
                    ]),
                    createVNode("div", { class: "tw-flex-grow" }),
                    createVNode("p", null, [
                      createTextVNode(" hace " + toDisplayString(unref(daysSince)) + " d\xEDas ", 1),
                      createVNode(unref(BookmarkIcon), {
                        color: "#4848A9",
                        size: 15,
                        class: "tw-inline tw-text-sm"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_CardTitle, { class: "tw-font-bold" }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "title", {}, void 0, true)
                    ]),
                    _: 3
                  }),
                  _ctx.$slots.subtitle ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "tw-font-semibold tw-text-sm tw-mt-2"
                  }, [
                    renderSlot(_ctx.$slots, "subtitle", {}, void 0, true)
                  ])) : createCommentVNode("", true)
                ]),
                _: 3
              }),
              createVNode(_component_CardContent, null, {
                default: withCtx(() => [
                  _ctx.$slots.description ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "tw-relative"
                  }, [
                    createVNode("p", { class: "tw-text-sm tw-line-clamp-3" }, [
                      renderSlot(_ctx.$slots, "description", {}, void 0, true)
                    ])
                  ])) : createCommentVNode("", true),
                  props.skills ? (openBlock(), createBlock("p", {
                    key: 1,
                    class: "tw-mt-5 tw-text-link"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(props.skills.join(" \u2022 ..").split(".."), (skill, index) => {
                      return openBlock(), createBlock("span", {
                        key: `card_project_${_ctx.id}_${index}`
                      }, toDisplayString(skill), 1);
                    }), 128))
                  ])) : createCommentVNode("", true)
                ]),
                _: 3
              }),
              createVNode(_component_CardFooter, { class: "d-flex" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "tw-flex" }, [
                    createVNode(_component_RatingIndicator, {
                      starClass: "tw-text-lg tw-mr-1",
                      rating: props.rating
                    }, null, 8, ["rating"]),
                    createVNode("p", { class: "tw-mb-0 tw-ml-3 tw-text-base tw-text-link" }, toDisplayString(props.rating), 1)
                  ]),
                  createVNode("div", { class: "tw-flex-grow" }),
                  createVNode("p", null, [
                    createTextVNode(" hace " + toDisplayString(unref(daysSince)) + " d\xEDas ", 1),
                    createVNode(unref(BookmarkIcon), {
                      color: "#4848A9",
                      size: 15,
                      class: "tw-inline tw-text-sm"
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/card/layouts/CardProject.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f95c5f6d"]]);

export { __nuxt_component_7 as _ };
//# sourceMappingURL=CardProject-CTkRXCLT.mjs.map
