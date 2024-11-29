import { q as defineNuxtRouteMiddleware } from './server.mjs';
import { u as useAuthStore } from './useAuth-CRsBI6Hp.mjs';
import 'vue';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@fortawesome/fontawesome-svg-core';
import './helper-C0GmhoMX.mjs';

const auth = defineNuxtRouteMiddleware((to, from) => {
  useAuthStore();
});

export { auth as default };
//# sourceMappingURL=auth-DLyP3bVi.mjs.map
