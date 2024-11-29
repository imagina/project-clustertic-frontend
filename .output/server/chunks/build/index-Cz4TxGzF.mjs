import { _ as __nuxt_component_0 } from './nuxt-link-WQaQD4mm.mjs';
import { _ as _sfc_main$7 } from './index-BUfu69CW.mjs';
import { _ as __nuxt_component_0$1 } from './searchProject-CPl_kmTa.mjs';
import { _ as __nuxt_component_7 } from './CardProject-CTkRXCLT.mjs';
import { ref, useSSRContext, defineComponent, mergeProps, unref, withCtx, renderSlot, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, computed, createTextVNode, h, createElementBlock, createStaticVNode } from 'vue';
import { H as Helper } from './helper-C0GmhoMX.mjs';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { D as DeskLandingSVG } from './desk-landing-ClfVh3Rv.mjs';
import { N as NuxtIcon } from './nuxt-icon-1v0WEHYY.mjs';
import { PlayIcon, FlagIcon, ArrowRightIcon, SparkleIcon, HourglassIcon, CheckCheckIcon, BriefcaseBusinessIcon } from 'lucide-vue-next';
import { createInjectionState } from '@vueuse/core';
import emblaCarouselVue from 'embla-carousel-vue';
import { c as cn } from './utils-H80jjgLf.mjs';
import { _ as __nuxt_component_4 } from './CardSmallProfile-rdq3AvVI.mjs';
import { u as useProfilesStore } from './useProfiles-DSsDX3vj.mjs';
import { _ as _sfc_main$8 } from './LoadingScreen-BE1NuBJz.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import './server.mjs';
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
import '../_/QForm.mjs';
import '../_/vm.mjs';
import './CardTitle-BbDugV-N.mjs';
import './CardContent-CfXgBR5p.mjs';
import './RatingIndicator-CK_7lkYG.mjs';
import './star-kerVB7NH.mjs';
import 'clsx';
import 'tailwind-merge';
import './useAuth-CRsBI6Hp.mjs';

const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 608 533"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _cache[0] || (_cache[0] = [
    createStaticVNode('<g clip-path="url(#i262129449__a)"><path fill="#40FFB7" stroke="#222236" stroke-linecap="round" stroke-linejoin="round" d="M607.27.73H257.237v241.904H607.27V.73Z"></path><path fill="#222236" d="M607.27.73H257.237v23.918H607.27V.73Z"></path><path fill="#3D3D64" fill-opacity=".56" stroke="#222236" stroke-linecap="round" stroke-linejoin="round" d="M607.27 242.298H257.237v24.721H607.27v-24.721Z"></path><path fill="#222236" d="M542.489 252.028h-228.71v5.26h228.71v-5.26Z"></path><path stroke="#222236" stroke-linecap="round" stroke-linejoin="round" d="M595.92 249.925h-9.465v9.467h9.465v-9.467ZM580.043 249.925h-9.465v9.467h9.465v-9.467ZM284.566 249.822h-16.491v9.672h16.491v-9.672Z"></path><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M267.871 12.682h62.238M598.389 12.463a3.654 3.654 0 0 1-3.652 3.652 3.654 3.654 0 0 1 0-7.305 3.654 3.654 0 0 1 3.652 3.652ZM583.958 12.682a3.654 3.654 0 0 1-3.652 3.652 3.654 3.654 0 0 1 0-7.305 3.654 3.654 0 0 1 3.652 3.653ZM569.511 12.915a3.653 3.653 0 0 1-3.651 3.653 3.654 3.654 0 0 1 0-7.305 3.653 3.653 0 0 1 3.651 3.652Z"></path><path fill="#fff" stroke="#222236" stroke-linecap="round" stroke-linejoin="round" d="M453.17 44.372H337.252a7.144 7.144 0 0 0-7.143 7.144v157.222a7.143 7.143 0 0 0 7.143 7.144H453.17a7.143 7.143 0 0 0 7.143-7.144V51.516a7.144 7.144 0 0 0-7.143-7.144Z"></path><path fill="#15151F" d="M429.098 75.828h-83.389a3.14 3.14 0 0 0 0 6.282h83.389a3.14 3.14 0 1 0 0-6.282Z"></path><path fill="#222236" d="M429.098 102.126h-83.389a3.141 3.141 0 0 0 0 6.283h83.389a3.141 3.141 0 0 0 0-6.283Z"></path><path fill="#15151F" d="M392.071 88.977h-46.362a3.14 3.14 0 0 0 0 6.282h46.362a3.14 3.14 0 0 0 0-6.282Z"></path><path fill="#40FFB7" stroke="#222236" stroke-miterlimit="10" d="M402.339 121.675h-29.856a7.494 7.494 0 0 0-7.493 7.495v29.864a7.494 7.494 0 0 0 7.493 7.495h29.856a7.494 7.494 0 0 0 7.493-7.495V129.17a7.494 7.494 0 0 0-7.493-7.495ZM330.109 121.675h21.019c4.134 0 7.493 3.36 7.493 7.495v29.849c0 4.135-3.359 7.495-7.493 7.495h-21.019V121.66v.015ZM422.978 121.675h37.335v44.854h-37.335c-4.134 0-7.493-3.361-7.493-7.495v-29.849c0-4.135 3.359-7.495 7.493-7.495v-.015Z"></path><path stroke="#222236" stroke-miterlimit="10" d="M532.893 144.102h-56.25a7.756 7.756 0 0 0-7.756 7.758v56.264a7.756 7.756 0 0 0 7.756 7.758h56.25a7.757 7.757 0 0 0 7.756-7.758V151.86a7.757 7.757 0 0 0-7.756-7.758Z"></path><path stroke="#222236" stroke-miterlimit="10" d="m468.887 194.741 25.152-25.159 19.427 19.432 11.715-11.717 15.03 15.034M518.184 169.582a6.998 6.998 0 0 0 6.997-6.998 6.998 6.998 0 1 0-6.997 6.998Z"></path><path fill="#fff" d="M310.609 68.96h-15.424a6.91 6.91 0 0 0-6.909 6.912v47.352a6.91 6.91 0 0 0 6.909 6.91h15.424a6.91 6.91 0 0 0 6.909-6.91V75.871a6.91 6.91 0 0 0-6.909-6.91ZM589.011 144.102h-34.53a6.91 6.91 0 0 0-6.909 6.911v4.646a6.91 6.91 0 0 0 6.909 6.91h34.53a6.91 6.91 0 0 0 6.909-6.91v-4.646a6.91 6.91 0 0 0-6.909-6.911ZM589.011 166.529h-34.53a6.91 6.91 0 0 0-6.909 6.91v4.646a6.91 6.91 0 0 0 6.909 6.911h34.53a6.91 6.91 0 0 0 6.909-6.911v-4.646a6.91 6.91 0 0 0-6.909-6.91ZM589.011 188.956h-34.53a6.91 6.91 0 0 0-6.909 6.91v4.646a6.91 6.91 0 0 0 6.909 6.911h34.53a6.91 6.91 0 0 0 6.909-6.911v-4.646a6.91 6.91 0 0 0-6.909-6.91Z"></path><path fill="#40FFB7" d="M480.893 125.371s-9.903-30.112 17.528-36.394c27.432-6.282 28.644 16.846 34.297 23.435 7.946 9.263 31.243 4.193 22.099-30.302"></path><path stroke="#222236" stroke-linecap="round" stroke-linejoin="round" d="M480.893 125.371s-9.903-30.112 17.528-36.394c27.432-6.282 28.644 16.846 34.297 23.435 7.946 9.263 31.243 4.193 22.099-30.302"></path><path fill="#3D3D64" fill-opacity=".56" d="M292.074 496.065h-34.588l-18.726-5.932-5.887-1.855-1.709 17.634-204.813.38s3.125-7.889 8.223-19.461c10.999-24.969 31.156-67.134 48.786-84.36 14.315-13.982 50.072-14.376 50.072-14.376s5.74-4.033 12.313-3.711c6.573.321 56.265 5.712 59.347 7.261 3.082 1.534 5.389 4.997 5.389 4.997s17.412-7.7 34.516-.76c17.104 6.925 47.077 100.183 47.077 100.183Z"></path><mask id="i262129449__b" width="267" height="123" x="26" y="384" maskUnits="userSpaceOnUse" style="mask-type:luminance;"><path fill="#fff" d="M292.074 496.065h-34.588l-18.726-5.932-5.887-1.855-1.709 17.634-204.813.38s3.125-7.889 8.223-19.461c10.999-24.969 31.156-67.134 48.786-84.36 14.315-13.982 50.072-14.376 50.072-14.376s5.74-4.033 12.313-3.711c6.573.321 56.265 5.712 59.347 7.261 3.082 1.534 5.389 4.997 5.389 4.997s17.412-7.7 34.516-.76c17.104 6.925 47.077 100.183 47.077 100.183Z"></path></mask><g mask="url(#i262129449__b)"><path fill="#000" d="m238.76 490.133-5.887-1.855-1.709 17.634-204.813.38s3.125-7.889 8.223-19.461c7.902-.19 16.812-.599 16.812-.599l4.587-15.004s7.2-7.612 16.198-3.127c0 0-1.139-3.813 2.323-6.122 3.476-2.308 17.732 5.099 17.732 5.099s6.865-13.091 9.203-21.755c2.351-8.649 3.885 12.171 3.885 12.171s5.784-9.555 5.784-12.171c0-2.615 10.78 25.905 10.78 25.905s14.256 1.709 18.112 3.17c3.856 1.446 42.242 2.98 54.599 0 12.372-2.981-8.763 14.552-8.763 14.552s21.705 7.32 33.974 2.513c12.255-4.822 17.762-9.921 17.762-9.921s.555 3.609 1.198 8.591Z" opacity=".2"></path></g><path stroke="#222236" stroke-linecap="round" stroke-linejoin="round" d="M292.074 496.065h-34.588l-18.726-5.932-5.887-1.855-1.709 17.634-204.813.38s3.125-7.889 8.223-19.461c10.999-24.969 31.156-67.134 48.786-84.36 14.315-13.982 50.072-14.376 50.072-14.376s5.74-4.033 12.313-3.711c6.573.321 56.265 5.712 59.347 7.261 3.082 1.534 5.389 4.997 5.389 4.997s17.412-7.7 34.516-.76c17.104 6.925 47.077 100.183 47.077 100.183Z"></path><path stroke="#222236" stroke-linecap="round" stroke-linejoin="round" d="M227.469 451.007s-3.389 5.157-10.356 11.849M207.005 471.374c-11.671 8.634-28.483 17.342-50.743 20.074"></path><path fill="#3D3D64" fill-opacity=".56" d="M270.953 466.391s5.317-3.301 9.976-2.22c4.66 1.081 8.516 5.698 8.516 5.698s38.678-3.215 47.471-2.952c8.779.263 28.425 6.035 28.425 6.035s9.523-1.929 10.531-1.535c1.023.38-2.059 32.815-2.059 32.815H248.225c-6.164 0-10.736-8.927-15.351-15.94 0 0 12.123-38.176 12.123-85.806"></path><mask id="i262129449__c" width="145" height="103" x="232" y="402" maskUnits="userSpaceOnUse" style="mask-type:luminance;"><path fill="#fff" d="M270.953 466.391s5.317-3.301 9.976-2.22c4.66 1.081 8.516 5.698 8.516 5.698s38.678-3.215 47.471-2.952c8.779.263 28.425 6.035 28.425 6.035s9.523-1.929 10.531-1.535c1.023.38-2.059 32.815-2.059 32.815H248.225c-6.164 0-10.736-8.927-15.351-15.94 0 0 12.123-38.176 12.123-85.806"></path></mask><g mask="url(#i262129449__c)"><path fill="#000" d="M305.439 504.218H248.24c-6.164 0-10.736-8.927-15.366-15.94 0 0 6.207-19.549 9.742-48.127 0 0 6.076 9.015 2.381 19.461l3.695-10.446s3.55 11.191 0 20.674c-3.534 9.482-6.076 12.199-6.076 12.199s4.338 5.727 9.027 4.193c4.689-1.519 9.699 7.758 9.699 7.758s11.159.424 13.482 0c1.066-.189 15.512 4.793 30.615 10.228Z" opacity=".2"></path></g><path stroke="#222236" stroke-linecap="round" stroke-linejoin="round" d="M270.953 466.391s5.317-3.301 9.976-2.22c4.66 1.081 8.516 5.698 8.516 5.698s38.678-3.215 47.471-2.952c8.779.263 28.425 6.035 28.425 6.035s9.523-1.929 10.531-1.535c1.023.38-2.059 32.815-2.059 32.815H248.225c-6.164 0-10.736-8.927-15.351-15.94 0 0 12.123-38.176 12.123-85.806"></path><path fill="#fff" stroke="#222236" stroke-linecap="round" stroke-linejoin="round" d="M199.161 365.434v31.208s-5.331 3.725-12.269 7.436c-8.516 4.515-19.442 8.986-25.942 6.444-11.787-4.632-19.427-22.427-19.427-22.427 12.723-9.702 14.256-22.661 16.185-28.827l41.453 6.166Z"></path><path stroke="#222236" stroke-linecap="round" stroke-linejoin="round" d="M135.36 390.476s10.78 23.508 23.882 27.745c13.102 4.237 35.348-12.331 35.348-12.331M76.422 418.922s20.42 15.926 23.882 21.288c3.461 5.362 0 55.855 0 55.855"></path><path fill="#3D3D64" fill-opacity=".56" d="M48.582 470.307c12.05-7.773 20.522.745 27.84 2.265 7.318 1.534 23.502-6.736 35.64 0 12.138 6.735 12.138 4.412 12.138 4.412s12.708 9.701 6.164 29.104l-104.014.19s-6.938-14.83 15.863-35.986"></path><path stroke="#222236" stroke-linecap="round" stroke-linejoin="round" d="M48.582 470.307c12.05-7.773 20.522.745 27.84 2.265 7.318 1.534 23.502-6.736 35.64 0 12.138 6.735 12.138 4.412 12.138 4.412s12.708 9.701 6.164 29.104l-104.014.19s-6.938-14.83 15.863-35.986"></path><path fill="#40FFB7" stroke="#222236" stroke-linecap="round" stroke-linejoin="round" d="m150.477 440.21 27.446 50.215.862 5.64-4.338-3.901-28.308-49.865s1.3-2.601 4.338-2.089Z"></path><path fill="#fff" stroke="#222236" stroke-linecap="round" stroke-linejoin="round" d="M124.478 479.585s4.046-1.155 6.353-1.155c2.308 0 16.594-10.563 21.443-11.352 4.849-.789 13.57 6.443 18.025 7.597 4.455 1.155 4.162 6.94 6.762 9.249 2.6 2.308-1.154 4.909-4.338 2.308 0 0 .862 2.922-1.154 5.216 0 0 .862 3.156 0 4.602h-51.488s-.818-9.832 4.382-16.465h.015Z"></path><path stroke="#222236" stroke-linecap="round" stroke-linejoin="round" d="m172.723 486.232-4.615-4.573-11.846-3.799M171.569 491.463l-7.084-3.185-9.67-1.827M154.815 493.99l9.67.439 7.084 1.636M152.274 467.078c-4.397 3.843-.058 7.89-2.089 10.783-2.016 2.892-4.338 3.754-2.6 8.386"></path><path fill="#40FFB7" d="M214.805 498.505h233.983c0 4.295-3.491 7.787-7.785 7.787H233.545a7.8 7.8 0 0 1-2.395-.38l-16.666-5.376c-1.125-.365-.862-2.031.321-2.031Z"></path><mask id="i262129449__d" width="236" height="9" x="213" y="498" maskUnits="userSpaceOnUse" style="mask-type:luminance;"><path fill="#fff" d="M214.805 498.505h233.983c0 4.295-3.491 7.787-7.785 7.787H233.545a7.8 7.8 0 0 1-2.395-.38l-16.666-5.376c-1.125-.365-.862-2.031.321-2.031Z"></path></mask><g fill="#000" mask="url(#i262129449__d)"><path d="M448.788 498.505a7.812 7.812 0 0 1-2.278 5.508 3.064 3.064 0 0 1-.234.205 7.746 7.746 0 0 1-5.273 2.074H233.56a7.812 7.812 0 0 1-2.396-.38l-16.666-5.376c-1.139-.365-.876-2.031.322-2.031h233.968Z" opacity=".2"></path><path d="M448.788 498.505a7.812 7.812 0 0 1-2.278 5.508 3.064 3.064 0 0 1-.234.205h-133.87c-3.155 0-5.725-2.557-5.725-5.713h142.107Z" opacity=".2"></path></g><path stroke="#222236" stroke-linecap="round" stroke-linejoin="round" d="M214.805 498.505h233.983c0 4.295-3.491 7.787-7.785 7.787H233.545a7.8 7.8 0 0 1-2.395-.38l-16.666-5.376c-1.125-.365-.862-2.031.321-2.031Z"></path><path stroke="#222236" stroke-linecap="round" stroke-linejoin="round" d="M306.681 498.505a5.71 5.71 0 0 0 5.711 5.713h22.216"></path><path fill="#40FFB7" d="M490.665 402.442s-.029.131-.044.19l-27.183 94.748c-.686 2.382-3.257 4.31-5.74 4.31h-141.83c-2.483 0-3.944-1.928-3.272-4.31l27.198-94.748c.686-2.382 3.242-4.31 5.74-4.31h141.83c2.41 0 3.871 1.826 3.301 4.12Z"></path><mask id="i262129449__e" width="179" height="104" x="312" y="398" maskUnits="userSpaceOnUse" style="mask-type:luminance;"><path fill="#fff" d="M490.665 402.442s-.029.131-.044.19l-27.183 94.748c-.686 2.382-3.257 4.31-5.74 4.31h-141.83c-2.483 0-3.944-1.928-3.272-4.31l27.198-94.748c.686-2.382 3.242-4.31 5.74-4.31h141.83c2.41 0 3.871 1.826 3.301 4.12Z"></path></mask><g mask="url(#i262129449__e)"><path fill="#fff" d="M490.665 402.442s-.029.131-.044.19l-27.183 94.748c-.686 2.381-3.257 4.31-5.74 4.31H316.803s.029-.131.044-.19l27.182-94.748c.687-2.381 3.258-4.31 5.741-4.31h140.895Z" opacity=".4"></path></g><path stroke="#222236" stroke-linecap="round" stroke-linejoin="round" d="M490.665 402.442s-.029.131-.044.19l-27.183 94.748c-.686 2.382-3.257 4.31-5.74 4.31h-141.83c-2.483 0-3.944-1.928-3.272-4.31l27.198-94.748c.686-2.382 3.242-4.31 5.74-4.31h141.83c2.41 0 3.871 1.826 3.301 4.12Z"></path><path fill="#fff" stroke="#222236" stroke-linecap="round" stroke-linejoin="round" d="M411.819 451.752c-2.264 4.88-7.742 8.576-13.088 8.576-5.959 0-9.479-4.617-7.843-10.315 1.636-5.698 7.8-10.329 13.774-10.329h.16c-.263.57-.482 1.154-.657 1.753-1.621 5.654 1.797 10.227 7.669 10.315h-.015Z"></path><path stroke="#222236" stroke-linecap="round" stroke-linejoin="round" d="m317.519 497.044 26.54-92.484c.394-1.388 1.899-2.513 3.345-2.513h137.492"></path><path fill="#fff" d="M251.643 506.292H55.973l2.366-4.938s18.433 1.695 33.084-2.849c6.47-2.016 16.432-2.951 26.423-2.805 6.296.087 21.618.146 31.127.102h.015c3.388-.015 6.047-.044 7.274-.088.482-.029.964-.029 1.431-.029a38.39 38.39 0 0 1 8.078.76 60.885 60.885 0 0 1 7.726-.38c4.514.059 23.926-.073 29.214 0 6.967.088 15.015 1.432 22.654 2.513.074-.029.147-.044.205-.073l.044.102c9.231 1.286 17.878 2.163 23.327-.102l2.702 7.787Z"></path><mask id="i262129449__f" width="197" height="12" x="55" y="495" maskUnits="userSpaceOnUse" style="mask-type:luminance;"><path fill="#fff" d="M251.643 506.292H55.973l2.366-4.938s18.433 1.695 33.084-2.849c6.47-2.016 16.432-2.951 26.423-2.805 6.296.087 21.618.146 31.127.102h.015c3.388-.015 6.047-.044 7.274-.088.482-.029.964-.029 1.431-.029a38.39 38.39 0 0 1 8.078.76 60.885 60.885 0 0 1 7.726-.38c4.514.059 23.926-.073 29.214 0 6.967.088 15.015 1.432 22.654 2.513.074-.029.147-.044.205-.073l.044.102c9.231 1.286 17.878 2.163 23.327-.102l2.702 7.787Z"></path></mask><g mask="url(#i262129449__f)"><path fill="#40FFB7" d="M251.643 506.292H99.923l3.083-5.303s8.282 4.836 16.374 1.402c8.092-3.419 16.242-5.113 29.593-6.589h.014c2.995-.336 5.945-.321 8.706-.117 9.567.716 16.958 3.857 16.958 3.857s7.961-3.477 28.06-3.477c6.967.088 15.015 1.432 22.654 2.513.073-.029.146-.044.205-.073l.044.102c9.231 1.286 17.878 2.163 23.326-.102l2.703 7.787Z" opacity=".4"></path><path fill="#40FFB7" d="m103.006 500.989-44.667.365-2.366 4.938h43.95l3.083-5.303Z"></path><path stroke="#222236" stroke-linecap="round" stroke-linejoin="round" d="m101.18 504.115 1.826-3.126s5.974 2.79 12.518 2.6c6.544-.19 16.885-8.298 36.765-7.904M165.771 496.445c3.666 1.344 8.88 3.097 8.88 3.097s6.749-3.886 21.574-3.477M103.006 500.989s-23.108.409-32.354.613M171.569 506.292s.38-3.36 3.667-3.901c3.271-.54 5.389 3.507 5.389 3.507M174.651 499.542l.585 2.849M177.923 502.391s10.4-4.748 20.42-3.901"></path><path stroke="#222236" stroke-linecap="round" stroke-linejoin="round" d="M173.658 502.961c-.935-.73-16.535-5.552-32.514-1.972M171.569 504.948s-13.16-2.498-24.583-.774M179.398 504.203s12.635-3.974 26.76-1.812c14.139 2.163 26.715 1.768 26.715 1.768"></path></g><path stroke="#222236" stroke-linecap="round" stroke-linejoin="round" d="M251.643 506.292H55.973l2.366-4.938s18.433 1.695 33.084-2.849c6.47-2.016 16.432-2.951 26.423-2.805 6.296.087 21.618.146 31.127.102h.015c3.388-.015 6.047-.044 7.274-.088.482-.029.964-.029 1.431-.029a38.39 38.39 0 0 1 8.078.76 60.885 60.885 0 0 1 7.726-.38c4.514.059 23.926-.073 29.214 0 6.967.088 15.015 1.432 22.654 2.513.074-.029.147-.044.205-.073l.044.102c9.231 1.286 17.878 2.163 23.327-.102l2.702 7.787Z"></path><path fill="#222236" d="M199.161 391.455v5.187s-5.331 3.725-12.269 7.436c-9.363-8.605-10.692-24.954-10.692-24.954l22.961 12.331Z"></path><path fill="#fff" d="M159.242 361.577c-11.014-16.291-8.794-46.826 5.389-63.38 20.8-24.282 75.093-6.545 75.035 27.774 0 4.588-.453 9.38-1.227 14.231-.716 4.529-4.645 9.102-5.858 13.617-1.212 4.514-.715 11.63-1.197 16.115-1.067 9.979-14.87 29.776-18.624 31.924-5.229 2.98-33.493-5.012-39.657-23.129"></path><path stroke="#222236" stroke-linecap="round" stroke-linejoin="round" d="M159.242 361.577c-11.014-16.291-8.794-46.826 5.389-63.38 20.8-24.282 75.093-6.545 75.035 27.774 0 4.588-.453 9.38-1.227 14.231-.716 4.529-4.645 9.102-5.858 13.617-1.212 4.514-.715 11.63-1.197 16.115-1.067 9.979-14.87 29.776-18.624 31.924-5.229 2.98-33.493-5.012-39.657-23.129"></path><path stroke="#222236" stroke-linecap="round" stroke-linejoin="round" d="M197.759 341.444s7.698-2.805 14.636 0M228.199 341.444s5.609-2.805 9.348 0"></path><path fill="#222236" d="M204.974 354.535c-.408 1.987-1.752 3.375-2.994 3.126-1.241-.248-1.943-2.074-1.534-4.047.409-1.987 1.753-3.375 2.995-3.126 1.256.248 1.942 2.074 1.533 4.047ZM229.733 354.535c-.409 1.987-1.753 3.375-2.994 3.126-1.256-.263-1.943-2.074-1.534-4.047.409-1.987 1.753-3.375 2.994-3.126 1.257.248 1.943 2.074 1.534 4.047Z"></path><path fill="#fff" d="M225.687 344.439s-3.666 6.355-4.046 11.747c-.38 5.391 5.784 16.378 4.046 19.84-1.738 3.463-9.436 3.273-11.948 1.155"></path><path stroke="#222236" stroke-linecap="round" stroke-linejoin="round" d="M225.687 344.439s-3.666 6.355-4.046 11.747c-.38 5.391 5.784 16.378 4.046 19.84-1.738 3.463-9.436 3.273-11.948 1.155M215.097 384.121s-7.902 1.344-14.826-2.119"></path><path fill="#222236" d="M170.299 346.557s3.578-3.462 7.814-2.118c4.236 1.344 5.01 12.915 5.01 12.915l3.082-3.272s-1.154-6.531 3.462-15.692c4.616-9.16 2.308-19.958 2.308-19.958s7.946 2.703 10.721 8.869c0 0 3.009-6.545 0-11.557 0 0 12.401 3.083 15.483 12.331 0 0 2.439-6.94 1.607-10.402 0 0 8.413 2.703 11.495 10.782 0 0 2.805-6.165 1.592-11.177 0 0 3.389 2.893 4.674 11.557 0 0 3.959-6.94 2.118-16.948 0 0 4.324 5.011 5.098 9.248 0 0 3.564-12.331-17.294-28.899-20.844-16.568-56.528-12.813-62.064 0 0 0 1.841-9.438 5.536-12.813 0 0-10.297 4.558-10.005 13.967 0 0-9.012-1.154-13.643 4.617 0 0 4.616-.38 8.472.38 0 0-12.328 7.32-11.554 24.662.774 17.343 11.554 42.385 11.554 42.385l8.443-2.469s1.344-11.791 6.076-16.422l.015.014Z"></path><path fill="#fff" d="M179.662 350.794s-6.544-11.556-10.02-12.331c-3.462-.774-10.021 3.857-8.472 10.023 1.533 6.165 2.702 16.568 4.615 17.722 1.928 1.154 5.01 8.094 8.092 6.166 3.082-1.929.775-4.617.775-4.617"></path><path stroke="#222236" stroke-linecap="round" stroke-linejoin="round" d="M179.662 350.794s-6.544-11.556-10.02-12.331c-3.462-.774-10.021 3.857-8.472 10.023 1.533 6.165 2.702 16.568 4.615 17.722 1.928 1.154 5.01 8.094 8.092 6.166 3.082-1.929.775-4.617.775-4.617M252.855 440.151s-.774 3.58-2.556 8.401M247.962 454.119c-2.337 4.967-5.624 10.242-10.02 13.982M289.445 469.854c-2.002-.263-6.077 2.25-9.801 5.523M276.927 477.963c-2.951 3.024-5.2 6.224-5.2 8.284M64.474 461.979s8.325 2.309 8.398 9.438M95.673 423.057s1.753 1.87 3.754 4.938M102.728 434.015c1.476 3.346 2.586 7.232 2.586 11.323 0 12.024-3.462 18.964-3.462 18.964M146.139 411.267s2.644 2.6 7.055 5.625M160.527 421.26c7.464 3.769 17.119 6.619 27.139 4.12"></path><g stroke="#fff" stroke-linecap="round" stroke-linejoin="round" opacity=".2"><path d="M176.2 292.821s3.272-.585 7.887-.512M187.914 292.514c7.157.672 15.936 3.17 21.413 10.709M193.523 286.962s13.394.146 22.991 6.852M220.297 297.043a20.436 20.436 0 0 1 4.046 6.18M172.723 298.592s13.161 4.617 17.718 12.915M166.37 303.223s4.206 5.421 6.032 13.076M173.22 322.874c0 1.695-.132 3.433-.482 5.201M157.503 308.614s-.833 2.016-1.68 5.26M154.786 318.915c-.642 4.003-.934 8.81-.175 13.777"></path></g><path fill="#3D3D64" d="M329.905 532.269h184.321v-25.977H.73v25.977h103.81"></path><path stroke="#222236" stroke-linecap="round" stroke-linejoin="round" d="M329.905 532.269h184.321v-25.977H.73v25.977h103.81M316.671 532.269h-26.175"></path></g><defs><clipPath id="i262129449__a"><path fill="#fff" d="M0 0h608v533H0z"></path></clipPath></defs>', 2)
  ]));
}
const CharacterLandingSVG = { render() {
  return h(NuxtIcon, { icon: { render }, name: "character-landing" });
} };
const [useProvideCarousel, useInjectCarousel] = createInjectionState(
  ({ opts, orientation, plugins }, emits) => {
    const [emblaNode, emblaApi] = emblaCarouselVue(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    function scrollPrev() {
      var _a;
      (_a = emblaApi.value) == null ? void 0 : _a.scrollPrev();
    }
    function scrollNext() {
      var _a;
      (_a = emblaApi.value) == null ? void 0 : _a.scrollNext();
    }
    const canScrollNext = ref(false);
    const canScrollPrev = ref(false);
    return {
      carouselRef: emblaNode,
      carouselApi: emblaApi,
      canScrollPrev,
      canScrollNext,
      scrollPrev,
      scrollNext,
      orientation
    };
  }
);
function useCarousel() {
  const carouselState = useInjectCarousel();
  if (!carouselState)
    throw new Error("useCarousel must be used within a <Carousel />");
  return carouselState;
}
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Carousel",
  __ssrInlineRender: true,
  props: {
    opts: {},
    plugins: {},
    orientation: { default: "horizontal" },
    class: {}
  },
  emits: ["init-api"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const {
      canScrollNext,
      canScrollPrev,
      carouselApi,
      carouselRef,
      orientation,
      scrollNext,
      scrollPrev
    } = useProvideCarousel(props, emits);
    __expose({
      canScrollNext,
      canScrollPrev,
      carouselApi,
      carouselRef,
      orientation,
      scrollNext,
      scrollPrev
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("tw-relative", props.class),
        role: "region",
        "aria-roledescription": "carousel",
        tabindex: "0"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {
        canScrollNext: unref(canScrollNext),
        canScrollPrev: unref(canScrollPrev),
        carouselApi: unref(carouselApi),
        carouselRef: unref(carouselRef),
        orientation: unref(orientation),
        scrollNext: unref(scrollNext),
        scrollPrev: unref(scrollPrev)
      }, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/carousel/Carousel.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "CarouselContent",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { carouselRef, orientation } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "carouselRef",
        ref: carouselRef,
        class: "overflow-hidden"
      }, _attrs))}><div${ssrRenderAttrs(mergeProps({
        class: unref(cn)(
          "tw-flex",
          unref(orientation) === "horizontal" ? "tw-ml-4" : "tw-mt-4 tw-flex-col",
          props.class
        )
      }, _ctx.$attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/carousel/CarouselContent.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CarouselItem",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { orientation } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        role: "group",
        "aria-roledescription": "slide",
        class: unref(cn)(
          "tw-min-w-0 tw-shrink-0 tw-grow-0 tw-basis-full",
          unref(orientation) === "horizontal" ? "tw-px-2" : "tw-py-2",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/carousel/CarouselItem.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CarouselPrevious",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { orientation, canScrollPrev, scrollPrev } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$7), mergeProps({
        disabled: !unref(canScrollPrev),
        class: unref(cn)(
          "tw-touch-manipulation tw-absolute tw-rounded-full tw-p-0 tw-z-40  tw-border-none ",
          unref(orientation) === "horizontal" ? "tw-left-12 tw-top-1/2 -tw-translate-y-1/2" : "tw-top-12 tw-left-1/2 -tw-translate-x-1/2 tw-rotate-90",
          props.class
        ),
        variant: "outline",
        onClick: unref(scrollPrev)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(unref(PlayIcon), {
                style: { "transform": "rotate(180deg)" },
                class: "h-4 w-4 text-current"
              }, null, _parent2, _scopeId));
              _push2(`<span class="sr-only"${_scopeId}>Previous Slide</span>`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(unref(PlayIcon), {
                  style: { "transform": "rotate(180deg)" },
                  class: "h-4 w-4 text-current"
                }),
                createVNode("span", { class: "sr-only" }, "Previous Slide")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/carousel/CarouselPrevious.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CarouselNext",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { orientation, canScrollNext, scrollNext } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$7), mergeProps({
        disabled: !unref(canScrollNext),
        class: unref(cn)(
          "tw-touch-manipulation tw-absolute tw-rounded-full tw-p-0 tw-z-40 tw-border-none",
          unref(orientation) === "horizontal" ? "tw-right-12 tw-top-1/2 -tw-translate-y-1/2" : "tw-bottom-12 tw-left-1/2 -tw-translate-x-1/2 rotate-90",
          props.class
        ),
        variant: "outline",
        onClick: unref(scrollNext)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(unref(PlayIcon), { class: "h-4 w-4 text-current" }, null, _parent2, _scopeId));
              _push2(`<span class="sr-only"${_scopeId}>Next Slide</span>`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(unref(PlayIcon), { class: "h-4 w-4 text-current" }),
                createVNode("span", { class: "sr-only" }, "Next Slide")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/carousel/CarouselNext.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "projectsCarousel",
  __ssrInlineRender: true,
  setup(__props) {
    const profilesStore = useProfilesStore();
    const experts = ref([]);
    function handleSelectUsers(user_id) {
      profilesStore.viewDetails(user_id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Carousel = _sfc_main$6;
      const _component_CarouselPrevious = _sfc_main$3;
      const _component_CarouselContent = _sfc_main$5;
      const _component_CarouselItem = _sfc_main$4;
      const _component_CardSmallProfile = __nuxt_component_4;
      const _component_CarouselNext = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tw-bg-gray-200" }, _attrs))}><h3 class="tw-font-light tw-text-black tw-text-center tw-text-[30px] tw-py-10"> De la mano de <b class="tw-font-bold">expertos</b> en m\xFAltiples campos <b class="tw-font-bold">creativos.</b></h3><div class="tw-gap-4 tw-py-10 lg:tw-px-40 tw-pb-20">`);
      _push(ssrRenderComponent(_component_Carousel, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CarouselPrevious, { class: "lg:tw-left-[-5%]" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CarouselContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(experts), (user) => {
                    _push3(ssrRenderComponent(_component_CarouselItem, {
                      class: "lg:!tw-basis-1/3",
                      key: `user-card=${user.id}`
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a2, _b2, _c, _d, _e, _f;
                        var _a, _b;
                        if (_push4) {
                          _push4(`<div${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_CardSmallProfile, {
                            class: "tw-h-full",
                            id: user.id,
                            name: (_a2 = (_a = user.extraFields.companyName) == null ? void 0 : _a.value) != null ? _a2 : user.fullName,
                            username: (_b2 = user.socialMedia["web"]) != null ? _b2 : user.fullName,
                            img: (_c = user == null ? void 0 : user.mediaFiles.profile.path) != null ? _c : user == null ? void 0 : user.mediumImage,
                            rating: 4.5,
                            location: "xx, zz"
                          }, {
                            tag: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              var _a3, _b3;
                              var _a22, _b22;
                              if (_push5) {
                                _push5(`<div class="tw-flex tw-mb-3"${_scopeId4}>`);
                                _push5(ssrRenderComponent(unref(FlagIcon), {
                                  class: "flag-icon tw-mr-2",
                                  size: 20
                                }, null, _parent5, _scopeId4));
                                _push5(`<p${_scopeId4}>${ssrInterpolate((_a3 = (_a22 = user.extraFields.place) == null ? void 0 : _a22.value) != null ? _a3 : "Tolima, Colombia")}</p></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "tw-flex tw-mb-3" }, [
                                    createVNode(unref(FlagIcon), {
                                      class: "flag-icon tw-mr-2",
                                      size: 20
                                    }),
                                    createVNode("p", null, toDisplayString((_b3 = (_b22 = user.extraFields.place) == null ? void 0 : _b22.value) != null ? _b3 : "Tolima, Colombia"), 1)
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", {
                              onClick: ($event) => handleSelectUsers(user.id)
                            }, [
                              createVNode(_component_CardSmallProfile, {
                                class: "tw-h-full",
                                id: user.id,
                                name: (_d = (_b = user.extraFields.companyName) == null ? void 0 : _b.value) != null ? _d : user.fullName,
                                username: (_e = user.socialMedia["web"]) != null ? _e : user.fullName,
                                img: (_f = user == null ? void 0 : user.mediaFiles.profile.path) != null ? _f : user == null ? void 0 : user.mediumImage,
                                rating: 4.5,
                                location: "xx, zz"
                              }, {
                                tag: withCtx(() => {
                                  var _a3;
                                  var _a22;
                                  return [
                                    createVNode("div", { class: "tw-flex tw-mb-3" }, [
                                      createVNode(unref(FlagIcon), {
                                        class: "flag-icon tw-mr-2",
                                        size: 20
                                      }),
                                      createVNode("p", null, toDisplayString((_a3 = (_a22 = user.extraFields.place) == null ? void 0 : _a22.value) != null ? _a3 : "Tolima, Colombia"), 1)
                                    ])
                                  ];
                                }),
                                _: 2
                              }, 1032, ["id", "name", "username", "img"])
                            ], 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(experts), (user) => {
                      return openBlock(), createBlock(_component_CarouselItem, {
                        class: "lg:!tw-basis-1/3",
                        key: `user-card=${user.id}`
                      }, {
                        default: withCtx(() => {
                          var _a2, _b, _c;
                          var _a;
                          return [
                            createVNode("div", {
                              onClick: ($event) => handleSelectUsers(user.id)
                            }, [
                              createVNode(_component_CardSmallProfile, {
                                class: "tw-h-full",
                                id: user.id,
                                name: (_a2 = (_a = user.extraFields.companyName) == null ? void 0 : _a.value) != null ? _a2 : user.fullName,
                                username: (_b = user.socialMedia["web"]) != null ? _b : user.fullName,
                                img: (_c = user == null ? void 0 : user.mediaFiles.profile.path) != null ? _c : user == null ? void 0 : user.mediumImage,
                                rating: 4.5,
                                location: "xx, zz"
                              }, {
                                tag: withCtx(() => {
                                  var _a3;
                                  var _a22;
                                  return [
                                    createVNode("div", { class: "tw-flex tw-mb-3" }, [
                                      createVNode(unref(FlagIcon), {
                                        class: "flag-icon tw-mr-2",
                                        size: 20
                                      }),
                                      createVNode("p", null, toDisplayString((_a3 = (_a22 = user.extraFields.place) == null ? void 0 : _a22.value) != null ? _a3 : "Tolima, Colombia"), 1)
                                    ])
                                  ];
                                }),
                                _: 2
                              }, 1032, ["id", "name", "username", "img"])
                            ], 8, ["onClick"])
                          ];
                        }),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CarouselNext, { class: "lg:tw-right-[-5%]" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CarouselPrevious, { class: "lg:tw-left-[-5%]" }),
              createVNode(_component_CarouselContent, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(experts), (user) => {
                    return openBlock(), createBlock(_component_CarouselItem, {
                      class: "lg:!tw-basis-1/3",
                      key: `user-card=${user.id}`
                    }, {
                      default: withCtx(() => {
                        var _a2, _b, _c;
                        var _a;
                        return [
                          createVNode("div", {
                            onClick: ($event) => handleSelectUsers(user.id)
                          }, [
                            createVNode(_component_CardSmallProfile, {
                              class: "tw-h-full",
                              id: user.id,
                              name: (_a2 = (_a = user.extraFields.companyName) == null ? void 0 : _a.value) != null ? _a2 : user.fullName,
                              username: (_b = user.socialMedia["web"]) != null ? _b : user.fullName,
                              img: (_c = user == null ? void 0 : user.mediaFiles.profile.path) != null ? _c : user == null ? void 0 : user.mediumImage,
                              rating: 4.5,
                              location: "xx, zz"
                            }, {
                              tag: withCtx(() => {
                                var _a3;
                                var _a22;
                                return [
                                  createVNode("div", { class: "tw-flex tw-mb-3" }, [
                                    createVNode(unref(FlagIcon), {
                                      class: "flag-icon tw-mr-2",
                                      size: 20
                                    }),
                                    createVNode("p", null, toDisplayString((_a3 = (_a22 = user.extraFields.place) == null ? void 0 : _a22.value) != null ? _a3 : "Tolima, Colombia"), 1)
                                  ])
                                ];
                              }),
                              _: 2
                            }, 1032, ["id", "name", "username", "img"])
                          ], 8, ["onClick"])
                        ];
                      }),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              }),
              createVNode(_component_CarouselNext, { class: "lg:tw-right-[-5%]" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/projectsCarousel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    ref(1);
    const project = ref(null);
    const createdAt = computed(() => {
      var _a;
      return (_a = project.value) == null ? void 0 : _a.createdAt;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Button = _sfc_main$7;
      const _component_SearchProject = __nuxt_component_0$1;
      const _component_CardProject = __nuxt_component_7;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$8, null, null, _parent));
      _push(`<div class="tw-h-svh tw-relative" data-v-d2c76362><div class="tw-absolute tw-inset-0 tw-z-[-1] tw-bg-primary tw-opacity-10" data-v-d2c76362></div><div class="tw-container tw-flex tw-justify-center tw-items-center tw-h-[100%] tw-pt-24" data-v-d2c76362><div class="tw-flex tw-flex-col lg:tw-flex-row" data-v-d2c76362><div class="tw-basis-7/12" data-v-d2c76362><h1 class="tw-text-black tw-font-light tw-text-[30px] sm:tw-text-[45px] md:tw-text-[55px] tw-leading-tight tw-mb-10" data-v-d2c76362> Conecta ahora tus ideas <br data-v-d2c76362> con <b class="tw-font-bold" data-v-d2c76362>manos expertas</b> en <br data-v-d2c76362> tecnolog\xEDa para hacerlas realidad </h1><div class="tw-flex tw-mb-10 lg:tw-mb-0" data-v-d2c76362>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/projects/create" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, {
              size: "lg",
              class: "tw-border tw-border-black tw-border-solid md:tw-text-[20px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("landing.publishProject"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("landing.publishProject")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Button, {
                size: "lg",
                class: "tw-border tw-border-black tw-border-solid md:tw-text-[20px]"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("landing.publishProject")), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/projects" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, {
              variant: "ghost",
              class: "tw-ml-5 md:tw-text-[20px] hover:tw-bg-transparent hover:tw-underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("landing.findProject"))} `);
                  _push3(ssrRenderComponent(unref(ArrowRightIcon), { class: "tw-ml-3" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("landing.findProject")) + " ", 1),
                    createVNode(unref(ArrowRightIcon), { class: "tw-ml-3" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Button, {
                variant: "ghost",
                class: "tw-ml-5 md:tw-text-[20px] hover:tw-bg-transparent hover:tw-underline"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("landing.findProject")) + " ", 1),
                  createVNode(unref(ArrowRightIcon), { class: "tw-ml-3" })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="tw-basis-3/12 lg:tw-basis-6/12" data-v-d2c76362><div class="tw-relative" data-v-d2c76362>`);
      _push(ssrRenderComponent(unref(DeskLandingSVG), {
        filled: "",
        class: "tw-text-9xl lg:tw-text-[36rem]"
      }, null, _parent));
      _push(`<div class="float-label tw-opacity-0 first add-shadow tw-top-[5px]" data-v-d2c76362> Infraestructura TI y Conectividad </div><div class="float-label tw-opacity-0 second tw-top-[25%] md:tw-right-[8%] xl:tw-right-[-4%]" data-v-d2c76362> Videojuegos, Realidad Aumentada y Virtual </div><div class="float-label tw-opacity-0 second tw-top-[35%] md:tw-left-[-8%] xl:tw-left-[-35%]" data-v-d2c76362> Producci\xF3n de Contenidos y Marketing Digital </div><div class="float-label tw-opacity-0 third tw-top-[56%] tw-left-[-25%]" data-v-d2c76362> Transformaci\xF3n Digital y Desarrollo de Software </div></div></div></div></div></div>`);
      _push(ssrRenderComponent(_component_SearchProject, null, null, _parent));
      _push(`<div class="tw-bg-gray-200" data-v-d2c76362><h3 class="tw-font-light tw-text-black tw-text-center lg:tw-text-[30px] tw-py-10" data-v-d2c76362>${ssrInterpolate(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("landing.recentProjects"))}</h3><div class="tw-flex tw-justify-center tw-w-full" data-v-d2c76362>`);
      _push(ssrRenderComponent(unref(PlayIcon), { style: { "transform": "rotate(90deg)" } }, null, _parent));
      _push(`</div><div class="tw-container tw-py-10 lg:tw-px-40 tw-mb-10" data-v-d2c76362>`);
      if (unref(project)) {
        _push(ssrRenderComponent(_component_CardProject, {
          class: "card-shadow",
          id: unref(project).id,
          rating: 4.5,
          skills: (_a2 = (_a = unref(project).categories) == null ? void 0 : _a.map((cat) => cat.title)) != null ? _a2 : [],
          "created-at": unref(createdAt)
        }, {
          title: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(project).title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(project).title), 1)
              ];
            }
          }),
          subtitle: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Presupuesto ${ssrInterpolate(unref(project).minPrice)} - ${ssrInterpolate(unref(project).maxPrice)}$ `);
            } else {
              return [
                createTextVNode(" Presupuesto " + toDisplayString(unref(project).minPrice) + " - " + toDisplayString(unref(project).maxPrice) + "$ ", 1)
              ];
            }
          }),
          description: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(project).description)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(project).description), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="tw-flex tw-justify-center tw-pb-20" data-v-d2c76362>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/projects" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button variant="ghost" type="button" class="tw-bg-white !tw-px-10 !tw-py-4 tw-text-lg tw-rounded-xl tw-flex tw-justify-center tw-items-center" data-v-d2c76362${_scopeId}> Ver m\xE1s `);
            _push2(ssrRenderComponent(unref(ArrowRightIcon), { class: "tw-ml-3" }, null, _parent2, _scopeId));
            _push2(`</button>`);
          } else {
            return [
              createVNode("button", {
                variant: "ghost",
                type: "button",
                class: "tw-bg-white !tw-px-10 !tw-py-4 tw-text-lg tw-rounded-xl tw-flex tw-justify-center tw-items-center"
              }, [
                createTextVNode(" Ver m\xE1s "),
                createVNode(unref(ArrowRightIcon), { class: "tw-ml-3" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="tw-bg-secondary tw-pb-" data-v-d2c76362><div class="tw-pl-5 lg:tw-pl-56 tw-pr-0 tw-flex" data-v-d2c76362><div class="tw-basis-full lg:tw-basis-1/2 tw-my-20" data-v-d2c76362><h3 class="tw-text-white tw-font-light tw-text-[30px] sm:tw-text-[45px] md:tw-text-[55px] tw-leading-tight tw-mb-10" data-v-d2c76362><span class="tw-text-primary" data-v-d2c76362>Hazlo realidad</span><br data-v-d2c76362> con Cl\xFAster </h3><div class="tw-px-20 line-variant" data-v-d2c76362><div class="tw-grid tw-grid-cols-2 tw-gap-x-20 tw-gap-y-5 tw-mb-20" data-v-d2c76362><div class="" data-v-d2c76362>`);
      _push(ssrRenderComponent(unref(SparkleIcon), {
        size: 35,
        class: "tw-text-white"
      }, null, _parent));
      _push(`<h4 class="tw-text-primary tw-font-semibold tw-text-xl tw-my-5" data-v-d2c76362> Conexiones estrat\xE9gicas </h4><p class="tw-text-white" data-v-d2c76362> Encuentra a los socios tecnol\xF3gicos adecuados con rapidez. Esta plataforma conecta a ofertantes del sector TIC con demandantes de soluciones en diversos sectores, facilitando colaboraciones clave para el desarrollo regional. </p></div><div class="" data-v-d2c76362>`);
      _push(ssrRenderComponent(unref(HourglassIcon), {
        size: 35,
        class: "tw-text-white"
      }, null, _parent));
      _push(`<h4 class="tw-text-primary tw-font-semibold tw-text-xl tw-my-5" data-v-d2c76362> Soluciones de calidad </h4><p class="tw-text-white" data-v-d2c76362> Accede a una red de empresas y profesionales del Tolima reconocidos por su experiencia. Los proyectos publicados se desarrollan bajo altos est\xE1ndares de calidad, garantizando resultados sobresalientes para cada necesidad tecnol\xF3gica. </p></div><div class="" data-v-d2c76362>`);
      _push(ssrRenderComponent(unref(CheckCheckIcon), {
        size: 35,
        class: "tw-text-white"
      }, null, _parent));
      _push(`<h4 class="tw-text-primary tw-font-semibold tw-text-xl tw-my-5" data-v-d2c76362> Propuestas \xE1giles </h4><p class="tw-text-white" data-v-d2c76362> Publica demandas y recibe respuestas r\xE1pidas y personalizadas. La plataforma permite gestionar ofertas y demandas de manera eficiente, asegurando que las oportunidades se concreten en tiempo r\xE9cord. </p></div><div class="" data-v-d2c76362>`);
      _push(ssrRenderComponent(unref(BriefcaseBusinessIcon), {
        size: 35,
        class: "tw-text-white"
      }, null, _parent));
      _push(`<h4 class="tw-text-primary tw-font-semibold tw-text-xl tw-my-5" data-v-d2c76362> Gesti\xF3n inteligente </h4><p class="tw-text-white" data-v-d2c76362> Disfruta de herramientas avanzadas que simplifican la gesti\xF3n de proyectos. Desde perfiles detallados hasta valoraciones y rese\xF1as, todo est\xE1 dise\xF1ado para fomentar relaciones confiables y exitosas entre las partes. </p></div></div><div class="" data-v-d2c76362><p class="tw-text-white tw-text-2xl tw-font-semibold tw-mb-3" data-v-d2c76362> Haz realidad tus sue\xF1os </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/auth/register" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, {
              variant: "ghost",
              type: "button",
              class: "!tw-text-2xl !tw-font-semibold tw-text-primary hover:tw-text-primary hover:tw-underline !tw-p-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Comienza Ya `);
                  _push3(ssrRenderComponent(unref(ArrowRightIcon), {
                    size: 35,
                    class: "tw-text-primary tw-ms-2"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(" Comienza Ya "),
                    createVNode(unref(ArrowRightIcon), {
                      size: 35,
                      class: "tw-text-primary tw-ms-2"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Button, {
                variant: "ghost",
                type: "button",
                class: "!tw-text-2xl !tw-font-semibold tw-text-primary hover:tw-text-primary hover:tw-underline !tw-p-0"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Comienza Ya "),
                  createVNode(unref(ArrowRightIcon), {
                    size: 35,
                    class: "tw-text-primary tw-ms-2"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="tw-hidden lg:tw-basis-1/2 lg:tw-flex tw-items-end tw-justify-center cluster-details-img tw-pb-20" data-v-d2c76362>`);
      _push(ssrRenderComponent(unref(CharacterLandingSVG), {
        filled: "",
        class: "tw-text-9xl lg:tw-text-[36rem] !tw-m-0"
      }, null, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d2c76362"]]);

export { index as default };
//# sourceMappingURL=index-Cz4TxGzF.mjs.map
