import { u as useRoute, _ as __nuxt_component_0$1 } from './server.mjs';
import { _ as _sfc_main$1 } from './index-BUfu69CW.mjs';
import { _ as _sfc_main$2, a as _sfc_main$1$1, b as _sfc_main$4 } from './CardTitle-BbDugV-N.mjs';
import { _ as _sfc_main$5 } from './CardContent-CfXgBR5p.mjs';
import { _ as _sfc_main$3, a as _sfc_main$1$2 } from './RatingIndicator-CK_7lkYG.mjs';
import { S as ShareSVG, F as FacebookSVG, T as TwitterSVG, _ as __nuxt_component_4 } from './share-Cu-XUjKM.mjs';
import { u as useProfilesStore } from './useProfiles-DSsDX3vj.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode } from 'vue';
import { H as Helper } from './helper-C0GmhoMX.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { FactoryIcon, PhoneIcon, MailIcon, MapPinIcon, GlobeIcon } from 'lucide-vue-next';
import { S as StarSVG } from './star-kerVB7NH.mjs';
import { L as LinkedinSVG } from './brand-linkedin-DRmOFgkr.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import 'radix-vue';
import 'class-variance-authority';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import './nuxt-icon-1v0WEHYY.mjs';
import './useAuth-CRsBI6Hp.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const profilesStore = useProfilesStore();
    useRoute();
    const user = computed(() => profilesStore.user);
    const extraFields = computed(() => {
      var _a;
      return (_a = profilesStore.fullUser) == null ? void 0 : _a.extraFields;
    });
    const description = computed(() => profilesStore.userDescription);
    const socialMedia = computed(() => profilesStore.userSocialMedia);
    const experiences = computed(
      () => {
        var _a2;
        var _a, _b;
        return (_a2 = (_b = (_a = profilesStore.user) == null ? void 0 : _a.information) == null ? void 0 : _b.filter(
          (item) => item.type === "experience"
        )) != null ? _a2 : [];
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_client_only = __nuxt_component_0$1;
      const _component_Button = _sfc_main$1;
      const _component_Card = _sfc_main$2;
      const _component_RatingIndicator = _sfc_main$3;
      const _component_CardExperience = __nuxt_component_4;
      const _component_CardHeader = _sfc_main$1$1;
      const _component_CardTitle = _sfc_main$4;
      const _component_CardContent = _sfc_main$5;
      const _component_CardFooter = _sfc_main$1$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tw-mt-20" }, _attrs))} data-v-1c93342c><div class="tw-bg-gray-100 tw-h-64 img-profile" data-v-1c93342c></div><div class="tw-container" data-v-1c93342c><div class="tw-flex tw-mt-5" data-v-1c93342c><div class="tw-basis-64 tw-relative" data-v-1c93342c><div class="img-container" data-v-1c93342c>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div><div class="tw-grow tw-border-b tw-border-[hsla(0, 0%, 90%, 1)]" data-v-1c93342c><h2 class="tw-mb-0 tw-w-max tw-px-4 tw-py-3 tw-border-b-4 tw-text-xl tw-font-normal profile-title" data-v-1c93342c> Perfil del usuario </h2></div></div><div class="tw-mt-10 tw-flex tw-items-center tw-gap-4" data-v-1c93342c><h3 class="tw-font-bold tw-text-4xl" data-v-1c93342c>${ssrInterpolate((_a = unref(user)) == null ? void 0 : _a.firstName)} ${ssrInterpolate((_b = unref(user)) == null ? void 0 : _b.lastName)}</h3><p class="tw-text-muted-custom tw-text-3xl tw-font-light" data-v-1c93342c>${ssrInterpolate((_c = unref(user)) == null ? void 0 : _c.email)}</p><div class="tw-grow" data-v-1c93342c></div>`);
      _push(ssrRenderComponent(_component_Button, {
        type: "button",
        variant: "outline",
        class: "tw-border-none profile-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ShareSVG), {
              filled: "",
              class: "tw-text-xl"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ShareSVG), {
                filled: "",
                class: "tw-text-xl"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="tw-flex tw-gap-8 tw-mt-10" data-v-1c93342c><div class="tw-basis-full lg:tw-flex-1 tw-overflow-hidden tw-pr-4" data-v-1c93342c><h4 class="tw-text-xl tw-text-muted-custom tw-mb-5" data-v-1c93342c>Descripci\xF3n</h4><p class="tw-text-xl" data-v-1c93342c>${ssrInterpolate(unref(description))}</p><h4 class="tw-text-xl tw-text-black tw-font-bold tw-mb-10" data-v-1c93342c>`);
      _push(ssrRenderComponent(unref(StarSVG), { class: "tw-inline-block tw-text-black tw-mr-5" }, null, _parent));
      _push(` 0.0 - 0 Reviews </h4><div data-v-1c93342c>`);
      _push(ssrRenderComponent(_component_Card, { class: "tw-max-w-72 tw-py-3 tw-px-6 tw-mb-2 xl:tw-translate-x-1/2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_RatingIndicator, {
              starClass: "tw-text-lg tw-mr-1",
              rating: 5
            }, null, _parent2, _scopeId));
            _push2(`<div class="tw-mt-2 tw-flex tw-gap-3" data-v-1c93342c${_scopeId}><div class="tw-bg-muted-light tw-h-10 tw-w-10 tw-rounded" data-v-1c93342c${_scopeId}></div><div class="tw-flex-grow" data-v-1c93342c${_scopeId}><div class="tw-bg-muted-light tw-w-full tw-h-2 tw-rounded-md tw-mb-3" data-v-1c93342c${_scopeId}></div><div class="tw-bg-muted-light tw-w-1/2 tw-h-2 tw-rounded-md" data-v-1c93342c${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode(_component_RatingIndicator, {
                starClass: "tw-text-lg tw-mr-1",
                rating: 5
              }),
              createVNode("div", { class: "tw-mt-2 tw-flex tw-gap-3" }, [
                createVNode("div", { class: "tw-bg-muted-light tw-h-10 tw-w-10 tw-rounded" }),
                createVNode("div", { class: "tw-flex-grow" }, [
                  createVNode("div", { class: "tw-bg-muted-light tw-w-full tw-h-2 tw-rounded-md tw-mb-3" }),
                  createVNode("div", { class: "tw-bg-muted-light tw-w-1/2 tw-h-2 tw-rounded-md" })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Card, { class: "tw-max-w-72 tw-py-3 tw-px-6 tw-mb-2 xl:tw-transform translate-x-custom" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_RatingIndicator, {
              starClass: "tw-text-lg tw-mr-1",
              rating: 5
            }, null, _parent2, _scopeId));
            _push2(`<div class="tw-mt-2 tw-flex tw-gap-3" data-v-1c93342c${_scopeId}><div class="tw-bg-muted-light tw-h-10 tw-w-10 tw-rounded" data-v-1c93342c${_scopeId}></div><div class="tw-flex-grow" data-v-1c93342c${_scopeId}><div class="tw-bg-muted-light tw-w-full tw-h-2 tw-rounded-md tw-mb-3" data-v-1c93342c${_scopeId}></div><div class="tw-bg-muted-light tw-w-1/2 tw-h-2 tw-rounded-md" data-v-1c93342c${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode(_component_RatingIndicator, {
                starClass: "tw-text-lg tw-mr-1",
                rating: 5
              }),
              createVNode("div", { class: "tw-mt-2 tw-flex tw-gap-3" }, [
                createVNode("div", { class: "tw-bg-muted-light tw-h-10 tw-w-10 tw-rounded" }),
                createVNode("div", { class: "tw-flex-grow" }, [
                  createVNode("div", { class: "tw-bg-muted-light tw-w-full tw-h-2 tw-rounded-md tw-mb-3" }),
                  createVNode("div", { class: "tw-bg-muted-light tw-w-1/2 tw-h-2 tw-rounded-md" })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Card, { class: "tw-max-w-72 tw-py-3 tw-px-6 tw-mb-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_RatingIndicator, {
              starClass: "tw-text-lg tw-mr-1",
              rating: 5
            }, null, _parent2, _scopeId));
            _push2(`<div class="tw-mt-2 tw-flex tw-gap-3" data-v-1c93342c${_scopeId}><div class="tw-bg-muted-light tw-h-10 tw-w-10 tw-rounded" data-v-1c93342c${_scopeId}></div><div class="tw-flex-grow" data-v-1c93342c${_scopeId}><div class="tw-bg-muted-light tw-w-full tw-h-2 tw-rounded-md tw-mb-3" data-v-1c93342c${_scopeId}></div><div class="tw-bg-muted-light tw-w-1/2 tw-h-2 tw-rounded-md" data-v-1c93342c${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode(_component_RatingIndicator, {
                starClass: "tw-text-lg tw-mr-1",
                rating: 5
              }),
              createVNode("div", { class: "tw-mt-2 tw-flex tw-gap-3" }, [
                createVNode("div", { class: "tw-bg-muted-light tw-h-10 tw-w-10 tw-rounded" }),
                createVNode("div", { class: "tw-flex-grow" }, [
                  createVNode("div", { class: "tw-bg-muted-light tw-w-full tw-h-2 tw-rounded-md tw-mb-3" }),
                  createVNode("div", { class: "tw-bg-muted-light tw-w-1/2 tw-h-2 tw-rounded-md" })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="lg:tw-w-1/2" data-v-1c93342c><p class="tw-text-xl tw-text-muted-custom tw-font-light tw-my-10 tw-text-center" data-v-1c93342c> Sin reviews </p></div><div class="tw-flex tw-mt-32 tw-mb-10" data-v-1c93342c><h4 class="tw-font-bold tw-text-4xl" data-v-1c93342c>Experiencia</h4><div class="tw-grow" data-v-1c93342c></div></div><div data-v-1c93342c><!--[-->`);
      ssrRenderList(unref(experiences), (experience) => {
        var _a2, _b2;
        _push(ssrRenderComponent(_component_CardExperience, {
          key: `experience_user${experience.id}`,
          class: "tw-mb-3",
          img: (_b2 = (_a2 = experience.mediaFiles) == null ? void 0 : _a2.mainimage) == null ? void 0 : _b2.path,
          id: experience.id,
          init: ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).parseStringToDate(experience.options.dateInit),
          end: experience.options.dateEnd ? ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).parseStringToDate(experience.options.dateEnd) : void 0,
          place: experience.options.place
        }, {
          skill: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(experience.options.skill)}`);
            } else {
              return [
                createTextVNode(toDisplayString(experience.options.skill), 1)
              ];
            }
          }),
          title: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(experience.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(experience.title), 1)
              ];
            }
          }),
          description: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(experience.description)}`);
            } else {
              return [
                createTextVNode(toDisplayString(experience.description), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><aside class="tw-basis-full lg:tw-flex-none tw-w-80 tw-pb-20" data-v-1c93342c>`);
      _push(ssrRenderComponent(_component_Card, { class: "tw-py-3 tw-px-6 tw-sticky tw-top-28 tw-bottom-20" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, { class: "tw-h-full tw-justify-center tw-border-b-2 tw-border-muted-light !tw-p-2 !tw-pb-4 !tw-rounded-4xl" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, { class: "!tw-leading-normal tw-font-normal tw-text-base tw-text-muted-custom" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Datos de contacto `);
                      } else {
                        return [
                          createTextVNode(" Datos de contacto ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, { class: "!tw-leading-normal tw-font-normal tw-text-base tw-text-muted-custom" }, {
                      default: withCtx(() => [
                        createTextVNode(" Datos de contacto ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CardContent, { class: "!tw-py-5 !tw-px-0 tw-border-b-2 tw-border-muted-light" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2, _c2, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
                if (_push3) {
                  _push3(`<div class="tw-flex tw-items-center tw-mb-4" data-v-1c93342c${_scopeId2}><div class="tw-border-r-2 tw-border-muted-light tw-px-3 tw-py-5" data-v-1c93342c${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(FactoryIcon), {
                    class: "tw-text-black",
                    size: 20
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="tw-text-black tw-ml-3" data-v-1c93342c${_scopeId2}><p class="tw-mb-1 tw-text-sm tw-font-bold" data-v-1c93342c${_scopeId2}> Nombre de la empresa </p><p class="tw-mb-0 tw-text-xs" data-v-1c93342c${_scopeId2}>${ssrInterpolate((_b2 = (_a2 = unref(extraFields)) == null ? void 0 : _a2.companyName) == null ? void 0 : _b2.value)}</p></div></div><div class="tw-flex tw-items-center tw-mb-4" data-v-1c93342c${_scopeId2}><div class="tw-border-r-2 tw-border-muted-light tw-px-3 tw-py-5" data-v-1c93342c${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(PhoneIcon), {
                    class: "tw-text-black",
                    size: 20
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="tw-text-black tw-ml-3" data-v-1c93342c${_scopeId2}><p class="tw-mb-1 tw-text-sm tw-font-bold" data-v-1c93342c${_scopeId2}>Tel\xE9fono</p><p class="tw-mb-0 tw-text-xs" data-v-1c93342c${_scopeId2}>${ssrInterpolate((_d = (_c2 = unref(extraFields)) == null ? void 0 : _c2.phone) == null ? void 0 : _d.value)}</p></div></div><div class="tw-flex tw-items-center tw-mb-4" data-v-1c93342c${_scopeId2}><div class="tw-border-r-2 tw-border-muted-light tw-px-3 tw-py-5" data-v-1c93342c${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(MailIcon), {
                    class: "tw-text-black",
                    size: 20
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="tw-text-black tw-ml-3" data-v-1c93342c${_scopeId2}><p class="tw-mb-1 tw-text-sm tw-font-bold" data-v-1c93342c${_scopeId2}>Email</p><p class="tw-mb-0 tw-text-xs" data-v-1c93342c${_scopeId2}>${ssrInterpolate((_e = unref(user)) == null ? void 0 : _e.email)}</p></div></div><div class="tw-flex tw-items-center tw-mb-4" data-v-1c93342c${_scopeId2}><div class="tw-border-r-2 tw-border-muted-light tw-px-3 tw-py-5" data-v-1c93342c${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(MapPinIcon), {
                    class: "tw-text-black",
                    size: 20
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="tw-text-black tw-ml-3" data-v-1c93342c${_scopeId2}><p class="tw-mb-1 tw-text-sm tw-font-bold" data-v-1c93342c${_scopeId2}>Ubicaci\xF3n</p><p class="tw-mb-0 tw-text-xs" data-v-1c93342c${_scopeId2}>${ssrInterpolate((_g = (_f = unref(extraFields)) == null ? void 0 : _f.place) == null ? void 0 : _g.value)}</p></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "tw-flex tw-items-center tw-mb-4" }, [
                      createVNode("div", { class: "tw-border-r-2 tw-border-muted-light tw-px-3 tw-py-5" }, [
                        createVNode(unref(FactoryIcon), {
                          class: "tw-text-black",
                          size: 20
                        })
                      ]),
                      createVNode("div", { class: "tw-text-black tw-ml-3" }, [
                        createVNode("p", { class: "tw-mb-1 tw-text-sm tw-font-bold" }, " Nombre de la empresa "),
                        createVNode("p", { class: "tw-mb-0 tw-text-xs" }, toDisplayString((_i = (_h = unref(extraFields)) == null ? void 0 : _h.companyName) == null ? void 0 : _i.value), 1)
                      ])
                    ]),
                    createVNode("div", { class: "tw-flex tw-items-center tw-mb-4" }, [
                      createVNode("div", { class: "tw-border-r-2 tw-border-muted-light tw-px-3 tw-py-5" }, [
                        createVNode(unref(PhoneIcon), {
                          class: "tw-text-black",
                          size: 20
                        })
                      ]),
                      createVNode("div", { class: "tw-text-black tw-ml-3" }, [
                        createVNode("p", { class: "tw-mb-1 tw-text-sm tw-font-bold" }, "Tel\xE9fono"),
                        createVNode("p", { class: "tw-mb-0 tw-text-xs" }, toDisplayString((_k = (_j = unref(extraFields)) == null ? void 0 : _j.phone) == null ? void 0 : _k.value), 1)
                      ])
                    ]),
                    createVNode("div", { class: "tw-flex tw-items-center tw-mb-4" }, [
                      createVNode("div", { class: "tw-border-r-2 tw-border-muted-light tw-px-3 tw-py-5" }, [
                        createVNode(unref(MailIcon), {
                          class: "tw-text-black",
                          size: 20
                        })
                      ]),
                      createVNode("div", { class: "tw-text-black tw-ml-3" }, [
                        createVNode("p", { class: "tw-mb-1 tw-text-sm tw-font-bold" }, "Email"),
                        createVNode("p", { class: "tw-mb-0 tw-text-xs" }, toDisplayString((_l = unref(user)) == null ? void 0 : _l.email), 1)
                      ])
                    ]),
                    createVNode("div", { class: "tw-flex tw-items-center tw-mb-4" }, [
                      createVNode("div", { class: "tw-border-r-2 tw-border-muted-light tw-px-3 tw-py-5" }, [
                        createVNode(unref(MapPinIcon), {
                          class: "tw-text-black",
                          size: 20
                        })
                      ]),
                      createVNode("div", { class: "tw-text-black tw-ml-3" }, [
                        createVNode("p", { class: "tw-mb-1 tw-text-sm tw-font-bold" }, "Ubicaci\xF3n"),
                        createVNode("p", { class: "tw-mb-0 tw-text-xs" }, toDisplayString((_n = (_m = unref(extraFields)) == null ? void 0 : _m.place) == null ? void 0 : _n.value), 1)
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CardFooter, { class: "tw-flex tw-justify-center !tw-p-0 !tw-pt-3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(socialMedia).facebook) {
                    _push3(`<a${ssrRenderAttr("href", unref(socialMedia).facebook)} class="social-icon facebook" data-v-1c93342c${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(FacebookSVG), { class: "tw-text-white tw-text-3xl" }, null, _parent3, _scopeId2));
                    _push3(`</a>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(socialMedia).twitter) {
                    _push3(`<a${ssrRenderAttr("href", unref(socialMedia).twitter)} class="social-icon !tw-bg-primary" data-v-1c93342c${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(TwitterSVG), {
                      filled: "",
                      class: "tw-text-white tw-text-3xl"
                    }, null, _parent3, _scopeId2));
                    _push3(`</a>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(socialMedia).linkedin) {
                    _push3(`<a${ssrRenderAttr("href", unref(socialMedia).linkedin)} class="social-icon !tw-bg-primary" data-v-1c93342c${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(LinkedinSVG), {
                      filled: "",
                      class: "tw-text-white tw-text-2xl"
                    }, null, _parent3, _scopeId2));
                    _push3(`</a>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(socialMedia).web) {
                    _push3(`<a${ssrRenderAttr("href", unref(socialMedia).web)} class="social-icon !tw-bg-primary" data-v-1c93342c${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(GlobeIcon), {
                      size: 30,
                      class: ""
                    }, null, _parent3, _scopeId2));
                    _push3(`</a>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(socialMedia).facebook ? (openBlock(), createBlock("a", {
                      key: 0,
                      href: unref(socialMedia).facebook,
                      class: "social-icon facebook"
                    }, [
                      createVNode(unref(FacebookSVG), { class: "tw-text-white tw-text-3xl" })
                    ], 8, ["href"])) : createCommentVNode("", true),
                    unref(socialMedia).twitter ? (openBlock(), createBlock("a", {
                      key: 1,
                      href: unref(socialMedia).twitter,
                      class: "social-icon !tw-bg-primary"
                    }, [
                      createVNode(unref(TwitterSVG), {
                        filled: "",
                        class: "tw-text-white tw-text-3xl"
                      })
                    ], 8, ["href"])) : createCommentVNode("", true),
                    unref(socialMedia).linkedin ? (openBlock(), createBlock("a", {
                      key: 2,
                      href: unref(socialMedia).linkedin,
                      class: "social-icon !tw-bg-primary"
                    }, [
                      createVNode(unref(LinkedinSVG), {
                        filled: "",
                        class: "tw-text-white tw-text-2xl"
                      })
                    ], 8, ["href"])) : createCommentVNode("", true),
                    unref(socialMedia).web ? (openBlock(), createBlock("a", {
                      key: 3,
                      href: unref(socialMedia).web,
                      class: "social-icon !tw-bg-primary"
                    }, [
                      createVNode(unref(GlobeIcon), {
                        size: 30,
                        class: ""
                      })
                    ], 8, ["href"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardHeader, { class: "tw-h-full tw-justify-center tw-border-b-2 tw-border-muted-light !tw-p-2 !tw-pb-4 !tw-rounded-4xl" }, {
                default: withCtx(() => [
                  createVNode(_component_CardTitle, { class: "!tw-leading-normal tw-font-normal tw-text-base tw-text-muted-custom" }, {
                    default: withCtx(() => [
                      createTextVNode(" Datos de contacto ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, { class: "!tw-py-5 !tw-px-0 tw-border-b-2 tw-border-muted-light" }, {
                default: withCtx(() => {
                  var _a2, _b2, _c2, _d, _e, _f, _g;
                  return [
                    createVNode("div", { class: "tw-flex tw-items-center tw-mb-4" }, [
                      createVNode("div", { class: "tw-border-r-2 tw-border-muted-light tw-px-3 tw-py-5" }, [
                        createVNode(unref(FactoryIcon), {
                          class: "tw-text-black",
                          size: 20
                        })
                      ]),
                      createVNode("div", { class: "tw-text-black tw-ml-3" }, [
                        createVNode("p", { class: "tw-mb-1 tw-text-sm tw-font-bold" }, " Nombre de la empresa "),
                        createVNode("p", { class: "tw-mb-0 tw-text-xs" }, toDisplayString((_b2 = (_a2 = unref(extraFields)) == null ? void 0 : _a2.companyName) == null ? void 0 : _b2.value), 1)
                      ])
                    ]),
                    createVNode("div", { class: "tw-flex tw-items-center tw-mb-4" }, [
                      createVNode("div", { class: "tw-border-r-2 tw-border-muted-light tw-px-3 tw-py-5" }, [
                        createVNode(unref(PhoneIcon), {
                          class: "tw-text-black",
                          size: 20
                        })
                      ]),
                      createVNode("div", { class: "tw-text-black tw-ml-3" }, [
                        createVNode("p", { class: "tw-mb-1 tw-text-sm tw-font-bold" }, "Tel\xE9fono"),
                        createVNode("p", { class: "tw-mb-0 tw-text-xs" }, toDisplayString((_d = (_c2 = unref(extraFields)) == null ? void 0 : _c2.phone) == null ? void 0 : _d.value), 1)
                      ])
                    ]),
                    createVNode("div", { class: "tw-flex tw-items-center tw-mb-4" }, [
                      createVNode("div", { class: "tw-border-r-2 tw-border-muted-light tw-px-3 tw-py-5" }, [
                        createVNode(unref(MailIcon), {
                          class: "tw-text-black",
                          size: 20
                        })
                      ]),
                      createVNode("div", { class: "tw-text-black tw-ml-3" }, [
                        createVNode("p", { class: "tw-mb-1 tw-text-sm tw-font-bold" }, "Email"),
                        createVNode("p", { class: "tw-mb-0 tw-text-xs" }, toDisplayString((_e = unref(user)) == null ? void 0 : _e.email), 1)
                      ])
                    ]),
                    createVNode("div", { class: "tw-flex tw-items-center tw-mb-4" }, [
                      createVNode("div", { class: "tw-border-r-2 tw-border-muted-light tw-px-3 tw-py-5" }, [
                        createVNode(unref(MapPinIcon), {
                          class: "tw-text-black",
                          size: 20
                        })
                      ]),
                      createVNode("div", { class: "tw-text-black tw-ml-3" }, [
                        createVNode("p", { class: "tw-mb-1 tw-text-sm tw-font-bold" }, "Ubicaci\xF3n"),
                        createVNode("p", { class: "tw-mb-0 tw-text-xs" }, toDisplayString((_g = (_f = unref(extraFields)) == null ? void 0 : _f.place) == null ? void 0 : _g.value), 1)
                      ])
                    ])
                  ];
                }),
                _: 1
              }),
              createVNode(_component_CardFooter, { class: "tw-flex tw-justify-center !tw-p-0 !tw-pt-3" }, {
                default: withCtx(() => [
                  unref(socialMedia).facebook ? (openBlock(), createBlock("a", {
                    key: 0,
                    href: unref(socialMedia).facebook,
                    class: "social-icon facebook"
                  }, [
                    createVNode(unref(FacebookSVG), { class: "tw-text-white tw-text-3xl" })
                  ], 8, ["href"])) : createCommentVNode("", true),
                  unref(socialMedia).twitter ? (openBlock(), createBlock("a", {
                    key: 1,
                    href: unref(socialMedia).twitter,
                    class: "social-icon !tw-bg-primary"
                  }, [
                    createVNode(unref(TwitterSVG), {
                      filled: "",
                      class: "tw-text-white tw-text-3xl"
                    })
                  ], 8, ["href"])) : createCommentVNode("", true),
                  unref(socialMedia).linkedin ? (openBlock(), createBlock("a", {
                    key: 2,
                    href: unref(socialMedia).linkedin,
                    class: "social-icon !tw-bg-primary"
                  }, [
                    createVNode(unref(LinkedinSVG), {
                      filled: "",
                      class: "tw-text-white tw-text-2xl"
                    })
                  ], 8, ["href"])) : createCommentVNode("", true),
                  unref(socialMedia).web ? (openBlock(), createBlock("a", {
                    key: 3,
                    href: unref(socialMedia).web,
                    class: "social-icon !tw-bg-primary"
                  }, [
                    createVNode(unref(GlobeIcon), {
                      size: 30,
                      class: ""
                    })
                  ], 8, ["href"])) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</aside></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profiles/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1c93342c"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-DO0_triI.mjs.map
