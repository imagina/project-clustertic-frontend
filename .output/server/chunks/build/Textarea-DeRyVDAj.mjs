import { getCurrentInstance, onDeactivated, onBeforeUnmount, nextTick, useSSRContext, defineComponent, mergeProps, unref } from 'vue';
import { k as vmIsDestroyed } from '../_/vm.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { useVModel } from '@vueuse/core';
import { c as cn } from './utils-H80jjgLf.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

/*
 * Usage:
 *    registerTick(fn)
 *    removeTick()
 */

function useTick () {
  let tickFn;
  const vm = getCurrentInstance();

  function removeTick () {
    tickFn = void 0;
  }

  onDeactivated(removeTick);
  onBeforeUnmount(removeTick);

  return {
    removeTick,

    registerTick (fn) {
      tickFn = fn;

      nextTick(() => {
        if (tickFn === fn) {
          // we also check if VM is destroyed, since if it
          // got to trigger one nextTick() we cannot stop it
          vmIsDestroyed(vm) === false && tickFn();
          tickFn = void 0;
        }
      });
    }
  }
}

/*
 * Usage:
 *    registerTimeout(fn[, delay])
 *    removeTimeout()
 */

function useTimeout () {
  let timer = null;
  const vm = getCurrentInstance();

  function removeTimeout () {
    if (timer !== null) {
      clearTimeout(timer);
      timer = null;
    }
  }

  onDeactivated(removeTimeout);
  onBeforeUnmount(removeTimeout);

  return {
    removeTimeout,

    registerTimeout (fn, delay) {
      removeTimeout();

      if (vmIsDestroyed(vm) === false) {
        timer = setTimeout(() => {
          timer = null;
          fn();
        }, delay);
      }
    }
  }
}

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Textarea",
  __ssrInlineRender: true,
  props: {
    class: {},
    dark: { type: Boolean },
    resize: { type: Boolean },
    defaultValue: {},
    modelValue: {},
    disable: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const modelValue = useVModel(props, "modelValue", emits, {
      passive: true,
      defaultValue: props.defaultValue
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<textarea${ssrRenderAttrs(mergeProps({
        disabled: props.disable,
        class: unref(cn)(
          "tw-flex tw-min-h-20 tw-w-full tw-rounded-2xl tw-border tw-border-black tw-border-opacity-25 tw-bg-background tw-px-3 tw-py-2 tw-text-sm tw-ring-offset-background placeholder:tw-text-muted-foreground focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 disabled:tw-cursor-not-allowed disabled:tw-opacity-50",
          props.dark ? "input-dark" : "",
          !props.resize ? "tw-resize-none" : "",
          props.class
        )
      }, _attrs), "textarea")} data-v-35b397b6>${ssrInterpolate(unref(modelValue))}</textarea>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/textarea/Textarea.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-35b397b6"]]);

export { __nuxt_component_3 as _, useTimeout as a, useTick as u };
//# sourceMappingURL=Textarea-DeRyVDAj.mjs.map
