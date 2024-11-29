import { _ as __nuxt_component_0 } from './searchProject-C9YkVT_M.mjs';
import { _ as _sfc_main$2$1, b as _sfc_main$3, a as _sfc_main$1$2 } from './CardTitle-BbDugV-N.mjs';
import { _ as _sfc_main$5 } from './CardContent-CfXgBR5p.mjs';
import { _ as _sfc_main$4, a as _sfc_main$1$1 } from './RatingIndicator-CK_7lkYG.mjs';
import { getCurrentInstance, ref, computed, watch, provide, onBeforeUnmount, onDeactivated, onActivated, h, inject, onMounted, withDirectives, Transition, KeepAlive, useSSRContext, defineComponent, mergeProps, unref, withCtx, renderSlot, createTextVNode, createVNode, toDisplayString, reactive, isRef, openBlock, createBlock, Fragment, renderList, withModifiers } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderSlot, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { MessageSquareTextIcon, CircleDollarSignIcon, FlagIcon, Paperclip, MapPinIcon, UserIcon, Clock9Icon, IdCardIcon, ShieldCheckIcon, WalletIcon, MailCheckIcon, UserCheck2Icon, PhoneIcon } from 'lucide-vue-next';
import { c as cn } from './utils-H80jjgLf.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { u as useDarkProps, b as useDark, _ as __nuxt_component_1, a as __nuxt_component_2 } from '../_/QForm.mjs';
import { u as useTick, a as useTimeout, _ as __nuxt_component_3 } from './Textarea-DeRyVDAj.mjs';
import { _ as __nuxt_component_5$1 } from './Dropzone-DWrgowuh.mjs';
import { _ as _sfc_main$6 } from './index-BUfu69CW.mjs';
import { u as useProjectsStore } from './useProjects-CIpw3REu.mjs';
import { u as useAuthStore } from './useAuth-CRsBI6Hp.mjs';
import { c as createComponent, n as noop, t as tabsKey, e as emptyRenderFn, s as stopAndPrevent, a as createDirective, u as useRoute } from './server.mjs';
import { H as Helper } from './helper-C0GmhoMX.mjs';
import { _ as _sfc_main$2 } from './LoadingScreen-BE1NuBJz.mjs';
import Swal from 'sweetalert2';
import { h as hSlot, Q as QIcon, i as isKeyCode, s as shouldIgnoreKey, b as hMergeSlot, g as getNormalizedVNodes, d as hDir } from '../_/vm.mjs';
import { R as Ripple, g as getSSRProps } from '../_/Ripple.mjs';
import { _ as __nuxt_component_6 } from '../_/QSeparator.mjs';
import './star-kerVB7NH.mjs';
import './nuxt-icon-1v0WEHYY.mjs';
import 'clsx';
import 'tailwind-merge';
import '@vueuse/core';
import 'radix-vue';
import 'class-variance-authority';
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

const QResizeObserver = createComponent({
  name: 'QResizeObserver',

  props: {
    debounce: {
      type: [ String, Number ],
      default: 100
    }
  },

  emits: [ 'resize' ],

  setup (props, { emit }) {
    { return noop }
  }
});

function getIndicatorClass (color, top, vertical) {
  const pos = vertical === true
    ? [ 'left', 'right' ]
    : [ 'top', 'bottom' ];

  return `absolute-${ top === true ? pos[ 0 ] : pos[ 1 ] }${ color ? ` text-${ color }` : '' }`
}

const alignValues = [ 'left', 'center', 'right', 'justify' ];

const __nuxt_component_4 = createComponent({
  name: 'QTabs',

  props: {
    modelValue: [ Number, String ],

    align: {
      type: String,
      default: 'center',
      validator: v => alignValues.includes(v)
    },
    breakpoint: {
      type: [ String, Number ],
      default: 600
    },

    vertical: Boolean,
    shrink: Boolean,
    stretch: Boolean,

    activeClass: String,
    activeColor: String,
    activeBgColor: String,
    indicatorColor: String,
    leftIcon: String,
    rightIcon: String,

    outsideArrows: Boolean,
    mobileArrows: Boolean,

    switchIndicator: Boolean,

    narrowIndicator: Boolean,
    inlineLabel: Boolean,
    noCaps: Boolean,

    dense: Boolean,

    contentClass: String,

    'onUpdate:modelValue': [ Function, Array ]
  },

  setup (props, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;

    const { registerTick: registerScrollTick } = useTick();
    const { registerTick: registerUpdateArrowsTick } = useTick();
    const { registerTick: registerAnimateTick } = useTick();

    const { registerTimeout: registerFocusTimeout, removeTimeout: removeFocusTimeout } = useTimeout();
    const { registerTimeout: registerScrollToTabTimeout, removeTimeout: removeScrollToTabTimeout } = useTimeout();

    const rootRef = ref(null);
    const contentRef = ref(null);

    const currentModel = ref(props.modelValue);
    const scrollable = ref(false);
    const leftArrow = ref(true);
    const rightArrow = ref(false);
    const justify = ref(false);

    const tabDataList = [];
    const tabDataListLen = ref(0);
    const hasFocus = ref(false);

    let animateTimer = null, scrollTimer = null, unwatchRoute;

    const tabProps = computed(() => ({
      activeClass: props.activeClass,
      activeColor: props.activeColor,
      activeBgColor: props.activeBgColor,
      indicatorClass: getIndicatorClass(
        props.indicatorColor,
        props.switchIndicator,
        props.vertical
      ),
      narrowIndicator: props.narrowIndicator,
      inlineLabel: props.inlineLabel,
      noCaps: props.noCaps
    }));

    const hasActiveTab = computed(() => {
      const len = tabDataListLen.value;
      const val = currentModel.value;

      for (let i = 0; i < len; i++) {
        if (tabDataList[ i ].name.value === val) {
          return true
        }
      }

      return false
    });

    const alignClass = computed(() => {
      const align = scrollable.value === true
        ? 'left'
        : (justify.value === true ? 'justify' : props.align);

      return `q-tabs__content--align-${ align }`
    });

    const classes = computed(() =>
      'q-tabs row no-wrap items-center'
      + ` q-tabs--${ scrollable.value === true ? '' : 'not-' }scrollable`
      + ` q-tabs--${ props.vertical === true ? 'vertical' : 'horizontal' }`
      + ` q-tabs__arrows--${ props.outsideArrows === true ? 'outside' : 'inside' }`
      + ` q-tabs--mobile-with${ props.mobileArrows === true ? '' : 'out' }-arrows`
      + (props.dense === true ? ' q-tabs--dense' : '')
      + (props.shrink === true ? ' col-shrink' : '')
      + (props.stretch === true ? ' self-stretch' : '')
    );

    const innerClass = computed(() =>
      'q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position '
      + alignClass.value
      + (props.contentClass !== void 0 ? ` ${ props.contentClass }` : '')
    );

    const domProps = computed(() => (
      props.vertical === true
        ? { container: 'height', content: 'offsetHeight', scroll: 'scrollHeight' }
        : { container: 'width', content: 'offsetWidth', scroll: 'scrollWidth' }
    ));

    const isRTL = computed(() => props.vertical !== true && $q.lang.rtl === true);
    const rtlPosCorrection = computed(() => isRTL.value === true);

    watch(isRTL, updateArrows);

    watch(() => props.modelValue, name => {
      updateModel({ name, setCurrent: true, skipEmit: true });
    });

    watch(() => props.outsideArrows, recalculateScroll);

    function updateModel ({ name, setCurrent, skipEmit }) {
      if (currentModel.value === name) return

      if (skipEmit !== true && props[ 'onUpdate:modelValue' ] !== void 0) {
        emit('update:modelValue', name);
      }

      if (
        setCurrent === true
        || props[ 'onUpdate:modelValue' ] === void 0
      ) {
        animate(currentModel.value, name);
        currentModel.value = name;
      }
    }

    function recalculateScroll () {
      registerScrollTick(() => {
        updateContainer({
          width: rootRef.value.offsetWidth,
          height: rootRef.value.offsetHeight
        });
      });
    }

    function updateContainer (domSize) {
      // it can be called faster than component being initialized
      // so we need to protect against that case
      // (one example of such case is the docs release notes page)
      if (domProps.value === void 0 || contentRef.value === null) return

      const
        size = domSize[ domProps.value.container ],
        scrollSize = Math.min(
          contentRef.value[ domProps.value.scroll ],
          Array.prototype.reduce.call(
            contentRef.value.children,
            (acc, el) => acc + (el[ domProps.value.content ] || 0),
            0
          )
        ),
        scroll = size > 0 && scrollSize > size; // when there is no tab, in Chrome, size === 0 and scrollSize === 1

      scrollable.value = scroll;

      // Arrows need to be updated even if the scroll status was already true
      scroll === true && registerUpdateArrowsTick(updateArrows);

      justify.value = size < parseInt(props.breakpoint, 10);
    }

    function animate (oldName, newName) {
      const
        oldTab = oldName !== void 0 && oldName !== null && oldName !== ''
          ? tabDataList.find(tab => tab.name.value === oldName)
          : null,
        newTab = newName !== void 0 && newName !== null && newName !== ''
          ? tabDataList.find(tab => tab.name.value === newName)
          : null;

      if (hadActivated === true) {
        // After the component has been re-activated
        // we should not animate the transition.
        // Consider it as if the component has just been mounted.
        hadActivated = false;
      }
      else if (oldTab && newTab) {
        const
          oldEl = oldTab.tabIndicatorRef.value,
          newEl = newTab.tabIndicatorRef.value;

        if (animateTimer !== null) {
          clearTimeout(animateTimer);
          animateTimer = null;
        }

        oldEl.style.transition = 'none';
        oldEl.style.transform = 'none';
        newEl.style.transition = 'none';
        newEl.style.transform = 'none';

        const
          oldPos = oldEl.getBoundingClientRect(),
          newPos = newEl.getBoundingClientRect();

        newEl.style.transform = props.vertical === true
          ? `translate3d(0,${ oldPos.top - newPos.top }px,0) scale3d(1,${ newPos.height ? oldPos.height / newPos.height : 1 },1)`
          : `translate3d(${ oldPos.left - newPos.left }px,0,0) scale3d(${ newPos.width ? oldPos.width / newPos.width : 1 },1,1)`;

        // allow scope updates to kick in (QRouteTab needs more time)
        registerAnimateTick(() => {
          animateTimer = setTimeout(() => {
            animateTimer = null;
            newEl.style.transition = 'transform .25s cubic-bezier(.4, 0, .2, 1)';
            newEl.style.transform = 'none';
          }, 70);
        });
      }

      if (newTab && scrollable.value === true) {
        scrollToTabEl(newTab.rootRef.value);
      }
    }

    function scrollToTabEl (el) {
      const
        { left, width, top, height } = contentRef.value.getBoundingClientRect(),
        newPos = el.getBoundingClientRect();

      let offset = props.vertical === true ? newPos.top - top : newPos.left - left;

      if (offset < 0) {
        contentRef.value[ props.vertical === true ? 'scrollTop' : 'scrollLeft' ] += Math.floor(offset);
        updateArrows();
        return
      }

      offset += props.vertical === true ? newPos.height - height : newPos.width - width;
      if (offset > 0) {
        contentRef.value[ props.vertical === true ? 'scrollTop' : 'scrollLeft' ] += Math.ceil(offset);
        updateArrows();
      }
    }

    function updateArrows () {
      const content = contentRef.value;
      if (content === null) return

      const
        rect = content.getBoundingClientRect(),
        pos = props.vertical === true ? content.scrollTop : Math.abs(content.scrollLeft);

      if (isRTL.value === true) {
        leftArrow.value = Math.ceil(pos + rect.width) < content.scrollWidth - 1;
        rightArrow.value = pos > 0;
      }
      else {
        leftArrow.value = pos > 0;
        rightArrow.value = props.vertical === true
          ? Math.ceil(pos + rect.height) < content.scrollHeight
          : Math.ceil(pos + rect.width) < content.scrollWidth;
      }
    }

    function animScrollTo (value) {
      scrollTimer !== null && clearInterval(scrollTimer);
      scrollTimer = setInterval(() => {
        if (scrollTowards(value) === true) {
          stopAnimScroll();
        }
      }, 5);
    }

    function scrollToStart () {
      animScrollTo(rtlPosCorrection.value === true ? Number.MAX_SAFE_INTEGER : 0);
    }

    function scrollToEnd () {
      animScrollTo(rtlPosCorrection.value === true ? 0 : Number.MAX_SAFE_INTEGER);
    }

    function stopAnimScroll () {
      if (scrollTimer !== null) {
        clearInterval(scrollTimer);
        scrollTimer = null;
      }
    }

    function onKbdNavigate (keyCode, fromEl) {
      const tabs = Array.prototype.filter.call(
        contentRef.value.children,
        el => el === fromEl || (el.matches && el.matches('.q-tab.q-focusable') === true)
      );

      const len = tabs.length;
      if (len === 0) return

      if (keyCode === 36) { // Home
        scrollToTabEl(tabs[ 0 ]);
        tabs[ 0 ].focus();
        return true
      }
      if (keyCode === 35) { // End
        scrollToTabEl(tabs[ len - 1 ]);
        tabs[ len - 1 ].focus();
        return true
      }

      const dirPrev = keyCode === (props.vertical === true ? 38 /* ArrowUp */ : 37 /* ArrowLeft */);
      const dirNext = keyCode === (props.vertical === true ? 40 /* ArrowDown */ : 39 /* ArrowRight */);

      const dir = dirPrev === true ? -1 : (dirNext === true ? 1 : void 0);

      if (dir !== void 0) {
        const rtlDir = isRTL.value === true ? -1 : 1;
        const index = tabs.indexOf(fromEl) + dir * rtlDir;

        if (index >= 0 && index < len) {
          scrollToTabEl(tabs[ index ]);
          tabs[ index ].focus({ preventScroll: true });
        }

        return true
      }
    }

    // let's speed up execution of time-sensitive scrollTowards()
    // with a computed variable by directly applying the minimal
    // number of instructions on get/set functions
    const posFn = computed(() => (
      rtlPosCorrection.value === true
        ? { get: content => Math.abs(content.scrollLeft), set: (content, pos) => { content.scrollLeft = -pos; } }
        : (
            props.vertical === true
              ? { get: content => content.scrollTop, set: (content, pos) => { content.scrollTop = pos; } }
              : { get: content => content.scrollLeft, set: (content, pos) => { content.scrollLeft = pos; } }
          )
    ));

    function scrollTowards (value) {
      const
        content = contentRef.value,
        { get, set } = posFn.value;

      let
        done = false,
        pos = get(content);

      const direction = value < pos ? -1 : 1;

      pos += direction * 5;

      if (pos < 0) {
        done = true;
        pos = 0;
      }
      else if (
        (direction === -1 && pos <= value)
        || (direction === 1 && pos >= value)
      ) {
        done = true;
        pos = value;
      }

      set(content, pos);
      updateArrows();

      return done
    }

    function hasQueryIncluded (targetQuery, matchingQuery) {
      for (const key in targetQuery) {
        if (targetQuery[ key ] !== matchingQuery[ key ]) {
          return false
        }
      }

      return true
    }

    // 1. Do not use directly; use verifyRouteModel() instead
    // 2. Should set hadActivated to false upon exit
    function updateActiveRoute () {
      let name = null, bestScore = { matchedLen: 0, queryDiff: 9999, hrefLen: 0 };

      const list = tabDataList.filter(tab => tab.routeData !== void 0 && tab.routeData.hasRouterLink.value === true);
      const { hash: currentHash, query: currentQuery } = proxy.$route;
      const currentQueryLen = Object.keys(currentQuery).length;

      // Vue Router does not keep account of hash & query when matching
      // so we're doing this as well

      for (const tab of list) {
        const exact = tab.routeData.exact.value === true;

        if (tab.routeData[ exact === true ? 'linkIsExactActive' : 'linkIsActive' ].value !== true) {
          // it cannot match anything as it's not active nor exact-active
          continue
        }

        const { hash, query, matched, href } = tab.routeData.resolvedLink.value;
        const queryLen = Object.keys(query).length;

        if (exact === true) {
          if (hash !== currentHash) {
            // it's set to exact but it doesn't matches the hash
            continue
          }

          if (
            queryLen !== currentQueryLen
            || hasQueryIncluded(currentQuery, query) === false
          ) {
            // it's set to exact but it doesn't matches the query
            continue
          }

          // yey, we found the perfect match (route + hash + query)
          name = tab.name.value;
          break
        }

        if (hash !== '' && hash !== currentHash) {
          // it has hash and it doesn't matches
          continue
        }

        if (
          queryLen !== 0
          && hasQueryIncluded(query, currentQuery) === false
        ) {
          // it has query and it doesn't includes the current one
          continue
        }

        const newScore = {
          matchedLen: matched.length,
          queryDiff: currentQueryLen - queryLen,
          hrefLen: href.length - hash.length
        };

        if (newScore.matchedLen > bestScore.matchedLen) {
          // it matches more routes so it's more specific so we set it as current champion
          name = tab.name.value;
          bestScore = newScore;
          continue
        }
        else if (newScore.matchedLen !== bestScore.matchedLen) {
          // it matches less routes than the current champion so we discard it
          continue
        }

        if (newScore.queryDiff < bestScore.queryDiff) {
          // query is closer to the current one so we set it as current champion
          name = tab.name.value;
          bestScore = newScore;
        }
        else if (newScore.queryDiff !== bestScore.queryDiff) {
          // it matches less routes than the current champion so we discard it
          continue
        }

        if (newScore.hrefLen > bestScore.hrefLen) {
          // href is lengthier so it's more specific so we set it as current champion
          name = tab.name.value;
          bestScore = newScore;
        }
      }

      if (
        name === null
        && tabDataList.some(tab => tab.routeData === void 0 && tab.name.value === currentModel.value) === true
      ) {
        // we shouldn't interfere if non-route tab is active
        hadActivated = false;
        return
      }

      updateModel({ name, setCurrent: true });
    }

    function onFocusin (e) {
      removeFocusTimeout();

      if (
        hasFocus.value !== true
        && rootRef.value !== null
        && e.target
        && typeof e.target.closest === 'function'
      ) {
        const tab = e.target.closest('.q-tab');

        // if the target is contained by a QTab/QRouteTab
        // (it might be other elements focused, like additional QBtn)
        if (tab && rootRef.value.contains(tab) === true) {
          hasFocus.value = true;
          scrollable.value === true && scrollToTabEl(tab);
        }
      }
    }

    function onFocusout () {
      registerFocusTimeout(() => { hasFocus.value = false; }, 30);
    }

    function verifyRouteModel () {
      if ($tabs.avoidRouteWatcher === false) {
        registerScrollToTabTimeout(updateActiveRoute);
      }
      else {
        removeScrollToTabTimeout();
      }
    }

    function watchRoute () {
      if (unwatchRoute === void 0) {
        const unwatch = watch(() => proxy.$route.fullPath, verifyRouteModel);
        unwatchRoute = () => {
          unwatch();
          unwatchRoute = void 0;
        };
      }
    }

    function registerTab (tabData) {
      tabDataList.push(tabData);
      tabDataListLen.value++;

      recalculateScroll();

      // if it's a QTab or we don't have Vue Router
      if (tabData.routeData === void 0 || proxy.$route === void 0) {
        // we should position to the currently active tab (if any)
        registerScrollToTabTimeout(() => {
          if (scrollable.value === true) {
            const value = currentModel.value;
            const newTab = value !== void 0 && value !== null && value !== ''
              ? tabDataList.find(tab => tab.name.value === value)
              : null;

            newTab && scrollToTabEl(newTab.rootRef.value);
          }
        });
      }
      // else if it's a QRouteTab with a valid link
      else {
        // start watching route
        watchRoute();

        if (tabData.routeData.hasRouterLink.value === true) {
          verifyRouteModel();
        }
      }
    }

    function unregisterTab (tabData) {
      tabDataList.splice(tabDataList.indexOf(tabData), 1);
      tabDataListLen.value--;

      recalculateScroll();

      if (unwatchRoute !== void 0 && tabData.routeData !== void 0) {
        // unwatch route if we don't have any QRouteTabs left
        if (tabDataList.every(tab => tab.routeData === void 0) === true) {
          unwatchRoute();
        }

        // then update model
        verifyRouteModel();
      }
    }

    const $tabs = {
      currentModel,
      tabProps,
      hasFocus,
      hasActiveTab,

      registerTab,
      unregisterTab,

      verifyRouteModel,
      updateModel,
      onKbdNavigate,

      avoidRouteWatcher: false // false | string (uid)
    };

    provide(tabsKey, $tabs);

    function cleanup () {
      animateTimer !== null && clearTimeout(animateTimer);
      stopAnimScroll();
      unwatchRoute !== void 0 && unwatchRoute();
    }

    let hadRouteWatcher, hadActivated;

    onBeforeUnmount(cleanup);

    onDeactivated(() => {
      hadRouteWatcher = unwatchRoute !== void 0;
      cleanup();
    });

    onActivated(() => {
      if (hadRouteWatcher === true) {
        watchRoute();
        hadActivated = true;
        verifyRouteModel();
      }

      recalculateScroll();
    });

    return () => {
      return h('div', {
        ref: rootRef,
        class: classes.value,
        role: 'tablist',
        onFocusin,
        onFocusout
      }, [
        h(QResizeObserver, { onResize: updateContainer }),

        h('div', {
          ref: contentRef,
          class: innerClass.value,
          onScroll: updateArrows
        }, hSlot(slots.default)),

        h(QIcon, {
          class: 'q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon'
            + (leftArrow.value === true ? '' : ' q-tabs__arrow--faded'),
          name: props.leftIcon || $q.iconSet.tabs[ props.vertical === true ? 'up' : 'left' ],
          onMousedownPassive: scrollToStart,
          onTouchstartPassive: scrollToStart,
          onMouseupPassive: stopAnimScroll,
          onMouseleavePassive: stopAnimScroll,
          onTouchendPassive: stopAnimScroll
        }),

        h(QIcon, {
          class: 'q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon'
            + (rightArrow.value === true ? '' : ' q-tabs__arrow--faded'),
          name: props.rightIcon || $q.iconSet.tabs[ props.vertical === true ? 'down' : 'right' ],
          onMousedownPassive: scrollToEnd,
          onTouchstartPassive: scrollToEnd,
          onMouseupPassive: stopAnimScroll,
          onMouseleavePassive: stopAnimScroll,
          onTouchendPassive: stopAnimScroll
        })
      ])
    }
  }
});

let id = 0;

const useTabEmits = [ 'click', 'keydown' ];

const useTabProps = {
  icon: String,
  label: [ Number, String ],

  alert: [ Boolean, String ],
  alertIcon: String,

  name: {
    type: [ Number, String ],
    default: () => `t_${ id++ }`
  },

  noCaps: Boolean,

  tabindex: [ String, Number ],
  disable: Boolean,

  contentClass: String,

  ripple: {
    type: [ Boolean, Object ],
    default: true
  }
};

function useTab (props, slots, emit, routeData) {
  const $tabs = inject(tabsKey, emptyRenderFn);
  if ($tabs === emptyRenderFn) {
    console.error('QTab/QRouteTab component needs to be child of QTabs');
    return emptyRenderFn
  }

  const { proxy } = getCurrentInstance();

  const blurTargetRef = ref(null);
  const rootRef = ref(null);
  const tabIndicatorRef = ref(null);

  const ripple = computed(() => (
    props.disable === true || props.ripple === false
      ? false
      : Object.assign(
        { keyCodes: [ 13, 32 ], early: true },
        props.ripple === true ? {} : props.ripple
      )
  ));

  const isActive = computed(() => $tabs.currentModel.value === props.name);

  const classes = computed(() =>
    'q-tab relative-position self-stretch flex flex-center text-center'
    + (
      isActive.value === true
        ? (
            ' q-tab--active'
            + ($tabs.tabProps.value.activeClass ? ' ' + $tabs.tabProps.value.activeClass : '')
            + ($tabs.tabProps.value.activeColor ? ` text-${ $tabs.tabProps.value.activeColor }` : '')
            + ($tabs.tabProps.value.activeBgColor ? ` bg-${ $tabs.tabProps.value.activeBgColor }` : '')
          )
        : ' q-tab--inactive'
    )
    + (props.icon && props.label && $tabs.tabProps.value.inlineLabel === false ? ' q-tab--full' : '')
    + (props.noCaps === true || $tabs.tabProps.value.noCaps === true ? ' q-tab--no-caps' : '')
    + (props.disable === true ? ' disabled' : ' q-focusable q-hoverable cursor-pointer')
    + ('')
  );

  const innerClass = computed(() =>
    'q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable '
    + ($tabs.tabProps.value.inlineLabel === true ? 'row no-wrap q-tab__content--inline' : 'column')
    + (props.contentClass !== void 0 ? ` ${ props.contentClass }` : '')
  );

  const tabIndex = computed(() => (
    (
      props.disable === true
      || $tabs.hasFocus.value === true
      || (isActive.value === false && $tabs.hasActiveTab.value === true)
    )
      ? -1
      : props.tabindex || 0
  ));

  function onClick (e, keyboard) {
    if (keyboard !== true && blurTargetRef.value !== null) {
      blurTargetRef.value.focus();
    }

    if (props.disable === true) {
      return
    }

    // do we have a QTab?
    {
      $tabs.updateModel({ name: props.name });
      emit('click', e);
      return
    }
  }

  function onKeydown (e) {
    if (isKeyCode(e, [ 13, 32 ])) {
      onClick(e, true);
    }
    else if (
      shouldIgnoreKey(e) !== true
      && e.keyCode >= 35
      && e.keyCode <= 40
      && e.altKey !== true
      && e.metaKey !== true
    ) {
      $tabs.onKbdNavigate(e.keyCode, proxy.$el) === true && stopAndPrevent(e);
    }

    emit('keydown', e);
  }

  function getContent () {
    const
      narrow = $tabs.tabProps.value.narrowIndicator,
      content = [],
      indicator = h('div', {
        ref: tabIndicatorRef,
        class: [
          'q-tab__indicator',
          $tabs.tabProps.value.indicatorClass
        ]
      });

    props.icon !== void 0 && content.push(
      h(QIcon, {
        class: 'q-tab__icon',
        name: props.icon
      })
    );

    props.label !== void 0 && content.push(
      h('div', { class: 'q-tab__label' }, props.label)
    );

    props.alert !== false && content.push(
      props.alertIcon !== void 0
        ? h(QIcon, {
          class: 'q-tab__alert-icon',
          color: props.alert !== true
            ? props.alert
            : void 0,
          name: props.alertIcon
        })
        : h('div', {
          class: 'q-tab__alert'
            + (props.alert !== true ? ` text-${ props.alert }` : '')
        })
    );

    narrow === true && content.push(indicator);

    const node = [
      h('div', { class: 'q-focus-helper', tabindex: -1, ref: blurTargetRef }),
      h('div', { class: innerClass.value }, hMergeSlot(slots.default, content))
    ];

    narrow === false && node.push(indicator);

    return node
  }

  const tabData = {
    name: computed(() => props.name),
    rootRef,
    tabIndicatorRef,
    routeData
  };

  onBeforeUnmount(() => {
    $tabs.unregisterTab(tabData);
  });

  onMounted(() => {
    $tabs.registerTab(tabData);
  });

  function renderTab (tag, customData) {
    const data = {
      ref: rootRef,
      class: classes.value,
      tabindex: tabIndex.value,
      role: 'tab',
      'aria-selected': isActive.value === true ? 'true' : 'false',
      'aria-disabled': props.disable === true ? 'true' : void 0,
      onClick,
      onKeydown,
      ...customData
    };

    return withDirectives(
      h(tag, data, getContent()),
      [ [ Ripple, ripple.value ] ]
    )
  }

  return { renderTab, $tabs }
}

const __nuxt_component_5 = createComponent({
  name: 'QTab',

  props: useTabProps,

  emits: useTabEmits,

  setup (props, { slots, emit }) {
    const { renderTab } = useTab(props, slots, emit);
    return () => renderTab('div')
  }
});

const TouchSwipe = createDirective({ name: 'touch-swipe', getSSRProps }
  
);

function useRenderCache () {
  let cache = Object.create(null);

  return {
    getCache: (_, defaultValue) => (
          typeof defaultValue === 'function'
            ? defaultValue()
            : defaultValue
        )
      ,

    setCache (key, obj) {
      cache[ key ] = obj;
    },

    hasCache (key) {
      return Object.hasOwnProperty.call(cache, key)
    },

    clearCache (key) {
      if (key !== void 0) {
        delete cache[ key ];
      }
      else {
        cache = Object.create(null);
      }
    }
  }
}

const usePanelChildProps = {
  name: { required: true },
  disable: Boolean
};

const PanelWrapper = {
  setup (_, { slots }) {
    return () => h('div', {
      class: 'q-panel scroll',
      role: 'tabpanel'
    }, hSlot(slots.default))
  }
};

const usePanelProps = {
  modelValue: {
    required: true
  },

  animated: Boolean,
  infinite: Boolean,
  swipeable: Boolean,
  vertical: Boolean,

  transitionPrev: String,
  transitionNext: String,
  transitionDuration: {
    type: [ String, Number ],
    default: 300
  },

  keepAlive: Boolean,
  keepAliveInclude: [ String, Array, RegExp ],
  keepAliveExclude: [ String, Array, RegExp ],
  keepAliveMax: Number
};

const usePanelEmits = [ 'update:modelValue', 'beforeTransition', 'transition' ];

function usePanel () {
  const { props, emit, proxy } = getCurrentInstance();
  const { getCache } = useRenderCache();
  const { registerTimeout } = useTimeout();

  let panels, forcedPanelTransition;

  const panelIndex = ref(null);
  const panelTransition = ref(null);

  function onSwipe (evt) {
    const dir = props.vertical === true ? 'up' : 'left';
    goToPanelByOffset((proxy.$q.lang.rtl === true ? -1 : 1) * (evt.direction === dir ? 1 : -1));
  }

  const panelDirectives = computed(() => {
    // if props.swipeable
    return [ [
      TouchSwipe,
      onSwipe,
      void 0,
      {
        horizontal: props.vertical !== true,
        vertical: props.vertical,
        mouse: true
      }
    ] ]
  });

  const transitionPrev = computed(() =>
    props.transitionPrev || `slide-${ props.vertical === true ? 'down' : 'right' }`
  );

  const transitionNext = computed(() =>
    props.transitionNext || `slide-${ props.vertical === true ? 'up' : 'left' }`
  );

  const transitionStyle = computed(
    () => `--q-transition-duration: ${ props.transitionDuration }ms`
  );

  const contentKey = computed(() => (
    typeof props.modelValue === 'string' || typeof props.modelValue === 'number'
      ? props.modelValue
      : String(props.modelValue)
  ));

  const keepAliveProps = computed(() => ({
    include: props.keepAliveInclude,
    exclude: props.keepAliveExclude,
    max: props.keepAliveMax
  }));

  const needsUniqueKeepAliveWrapper = computed(() =>
    props.keepAliveInclude !== void 0
    || props.keepAliveExclude !== void 0
  );

  watch(() => props.modelValue, (newVal, oldVal) => {
    const index = isValidPanelName(newVal) === true
      ? getPanelIndex(newVal)
      : -1;

    if (forcedPanelTransition !== true) {
      updatePanelTransition(
        index === -1 ? 0 : (index < getPanelIndex(oldVal) ? -1 : 1)
      );
    }

    if (panelIndex.value !== index) {
      panelIndex.value = index;
      emit('beforeTransition', newVal, oldVal);
      registerTimeout(() => {
        emit('transition', newVal, oldVal);
      }, props.transitionDuration);
    }
  });

  function nextPanel () { goToPanelByOffset(1); }
  function previousPanel () { goToPanelByOffset(-1); }

  function goToPanel (name) {
    emit('update:modelValue', name);
  }

  function isValidPanelName (name) {
    return name !== void 0 && name !== null && name !== ''
  }

  function getPanelIndex (name) {
    return panels.findIndex(panel => {
      return panel.props.name === name
        && panel.props.disable !== ''
        && panel.props.disable !== true
    })
  }

  function getEnabledPanels () {
    return panels.filter(panel => {
      return panel.props.disable !== ''
        && panel.props.disable !== true
    })
  }

  function updatePanelTransition (direction) {
    const val = direction !== 0 && props.animated === true && panelIndex.value !== -1
      ? 'q-transition--' + (direction === -1 ? transitionPrev.value : transitionNext.value)
      : null;

    if (panelTransition.value !== val) {
      panelTransition.value = val;
    }
  }

  function goToPanelByOffset (direction, startIndex = panelIndex.value) {
    let index = startIndex + direction;

    while (index !== -1 && index < panels.length) {
      const opt = panels[ index ];

      if (
        opt !== void 0
        && opt.props.disable !== ''
        && opt.props.disable !== true
      ) {
        updatePanelTransition(direction);
        forcedPanelTransition = true;
        emit('update:modelValue', opt.props.name);
        setTimeout(() => {
          forcedPanelTransition = false;
        });
        return
      }

      index += direction;
    }

    if (props.infinite === true && panels.length !== 0 && startIndex !== -1 && startIndex !== panels.length) {
      goToPanelByOffset(direction, direction === -1 ? panels.length : -1);
    }
  }

  function updatePanelIndex () {
    const index = getPanelIndex(props.modelValue);

    if (panelIndex.value !== index) {
      panelIndex.value = index;
    }

    return true
  }

  function getPanelContentChild () {
    const panel = isValidPanelName(props.modelValue) === true
      && updatePanelIndex()
      && panels[ panelIndex.value ];

    return props.keepAlive === true
      ? [
          h(KeepAlive, keepAliveProps.value, [
            h(
              needsUniqueKeepAliveWrapper.value === true
                ? getCache(contentKey.value, () => ({ ...PanelWrapper, name: contentKey.value }))
                : PanelWrapper,
              { key: contentKey.value, style: transitionStyle.value },
              () => panel
            )
          ])
        ]
      : [
          h('div', {
            class: 'q-panel scroll',
            style: transitionStyle.value,
            key: contentKey.value,
            role: 'tabpanel'
          }, [ panel ])
        ]
  }

  function getPanelContent () {
    if (panels.length === 0) {
      return
    }

    return props.animated === true
      ? [ h(Transition, { name: panelTransition.value }, getPanelContentChild) ]
      : getPanelContentChild()
  }

  function updatePanelsList (slots) {
    panels = getNormalizedVNodes(
      hSlot(slots.default, [])
    ).filter(
      panel => panel.props !== null
        && panel.props.slot === void 0
        && isValidPanelName(panel.props.name) === true
    );

    return panels.length
  }

  function getPanels () {
    return panels
  }

  // expose public methods
  Object.assign(proxy, {
    next: nextPanel,
    previous: previousPanel,
    goTo: goToPanel
  });

  return {
    panelIndex,
    panelDirectives,

    updatePanelsList,
    updatePanelIndex,

    getPanelContent,
    getEnabledPanels,
    getPanels,

    isValidPanelName,

    keepAliveProps,
    needsUniqueKeepAliveWrapper,

    goToPanelByOffset,
    goToPanel,

    nextPanel,
    previousPanel
  }
}

const __nuxt_component_7 = createComponent({
  name: 'QTabPanels',

  props: {
    ...usePanelProps,
    ...useDarkProps
  },

  emits: usePanelEmits,

  setup (props, { slots }) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);

    const { updatePanelsList, getPanelContent, panelDirectives } = usePanel();

    const classes = computed(() =>
      'q-tab-panels q-panel-parent'
      + (isDark.value === true ? ' q-tab-panels--dark q-dark' : '')
    );

    return () => {
      updatePanelsList(slots);

      return hDir(
        'div',
        { class: classes.value },
        getPanelContent(),
        'pan',
        props.swipeable,
        () => panelDirectives.value
      )
    }
  }
});

const __nuxt_component_8 = createComponent({
  name: 'QTabPanel',

  props: usePanelChildProps,

  setup (_, { slots }) {
    return () => h('div', { class: 'q-tab-panel', role: 'tabpanel' }, hSlot(slots.default))
  }
});

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CardProposal",
  __ssrInlineRender: true,
  props: {
    class: {},
    id: {},
    rating: {},
    amount: {},
    deliveryDays: {},
    selected: { type: Boolean },
    img: {}
  },
  emits: ["onSelectProposal"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const props = __props;
    function handleSelectProposal() {
      emits("onSelectProposal", props.id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = _sfc_main$2$1;
      const _component_CardTitle = _sfc_main$3;
      const _component_RatingIndicator = _sfc_main$4;
      const _component_CardFooter = _sfc_main$1$1;
      _push(ssrRenderComponent(_component_Card, mergeProps({
        class: unref(cn)(
          props.class,
          "tw-mb-2 tw-cursor-pointer proposal-card",
          props.selected ? "proposal-selected" : ""
        ),
        onClick: handleSelectProposal
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="tw-p-5" data-v-67e4dd9f${_scopeId}><div class="tw-flex tw-mb-10" data-v-67e4dd9f${_scopeId}><div class="user-img tw-rounded tw-w-20 tw-h-20 tw-bg-secondary" data-v-67e4dd9f${_scopeId}><div style="${ssrRenderStyle(
              _ctx.img ? {
                backgroundImage: `url(${_ctx.img})`
              } : {}
            )}" data-v-67e4dd9f${_scopeId}></div></div><div class="tw-pl-7 tw-grow" data-v-67e4dd9f${_scopeId}><div class="tw-flex tw-mb-1" data-v-67e4dd9f${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CardTitle, { class: "tw-font-bold tw-text-xl" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "name", {}, () => {
                    _push3(`Titulo de ejemplo`);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`<span class="tw-ml-3 tw-font-light tw-text-blue-500" data-v-67e4dd9f${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "username", {}, () => {
                    _push3(`@titulo_de_ejemplo`);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</span>`);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "name", {}, () => [
                      createTextVNode("Titulo de ejemplo")
                    ], true),
                    createVNode("span", { class: "tw-ml-3 tw-font-light tw-text-blue-500" }, [
                      renderSlot(_ctx.$slots, "username", {}, () => [
                        createTextVNode("@titulo_de_ejemplo")
                      ], true)
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(`<div class="tw-grow" data-v-67e4dd9f${_scopeId}></div><p class="tw-font-bold tw-text-xl tw-mb-0" data-v-67e4dd9f${_scopeId}> $${ssrInterpolate(props.amount)} USD </p></div><div class="tw-flex tw-gap-3 tw-mb-1" data-v-67e4dd9f${_scopeId}><div class="tw-flex" data-v-67e4dd9f${_scopeId}>`);
            _push2(ssrRenderComponent(_component_RatingIndicator, {
              starClass: "tw-text-base tw-mr-1",
              rating: props.rating
            }, null, _parent2, _scopeId));
            _push2(`<p class="tw-mb-0 tw-ml-3 tw-text-sm" data-v-67e4dd9f${_scopeId}>${ssrInterpolate((_a = props.rating) == null ? void 0 : _a.toFixed(1))}</p></div><div class="tw-flex" data-v-67e4dd9f${_scopeId}>`);
            _push2(ssrRenderComponent(unref(MessageSquareTextIcon), {
              class: "comment-icon tw-mr-2",
              size: 20
            }, null, _parent2, _scopeId));
            _push2(`<p data-v-67e4dd9f${_scopeId}>50</p></div><div class="tw-flex" data-v-67e4dd9f${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CircleDollarSignIcon), {
              class: "circle-dollar-icon tw-mr-2",
              size: 20
            }, null, _parent2, _scopeId));
            _push2(`<p data-v-67e4dd9f${_scopeId}>50</p></div><div class="tw-flex" data-v-67e4dd9f${_scopeId}><div class="comment-icon tw-rounded-full tw-border-dashed tw-border-blue-500 tw-border-spacing-80 tw-border-2 tw-h-5 tw-w-5 tw-mr-2"${ssrRenderAttr("size", 20)} data-v-67e4dd9f${_scopeId}></div><p data-v-67e4dd9f${_scopeId}>50</p></div><div class="tw-flex" data-v-67e4dd9f${_scopeId}>`);
            _push2(ssrRenderComponent(unref(FlagIcon), {
              class: "flag-icon tw-mr-2",
              size: 20
            }, null, _parent2, _scopeId));
            _push2(`<p data-v-67e4dd9f${_scopeId}>50</p></div><div class="tw-grow" data-v-67e4dd9f${_scopeId}></div><p data-v-67e4dd9f${_scopeId}>En ${ssrInterpolate(props.deliveryDays)} Dia(s)</p></div><p class="tw-text-base tw-font-semibold" data-v-67e4dd9f${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "subtitle", {}, () => {
              _push2(` We are a team that is passionate about technology! `);
            }, _push2, _parent2, _scopeId);
            _push2(`</p></div></div><p class="lg:tw-w-2/3" data-v-67e4dd9f${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "description", {}, null, _push2, _parent2, _scopeId);
            _push2(`</p></div>`);
            _push2(ssrRenderComponent(_component_CardFooter, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="tw-flex" data-v-67e4dd9f${_scopeId2}><div class="tw-flex" data-v-67e4dd9f${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "tw-flex" }, [
                      createVNode("div", { class: "tw-flex" })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "tw-p-5" }, [
                createVNode("div", { class: "tw-flex tw-mb-10" }, [
                  createVNode("div", { class: "user-img tw-rounded tw-w-20 tw-h-20 tw-bg-secondary" }, [
                    createVNode("div", {
                      style: _ctx.img ? {
                        backgroundImage: `url(${_ctx.img})`
                      } : {}
                    }, null, 4)
                  ]),
                  createVNode("div", { class: "tw-pl-7 tw-grow" }, [
                    createVNode("div", { class: "tw-flex tw-mb-1" }, [
                      createVNode(_component_CardTitle, { class: "tw-font-bold tw-text-xl" }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "name", {}, () => [
                            createTextVNode("Titulo de ejemplo")
                          ], true),
                          createVNode("span", { class: "tw-ml-3 tw-font-light tw-text-blue-500" }, [
                            renderSlot(_ctx.$slots, "username", {}, () => [
                              createTextVNode("@titulo_de_ejemplo")
                            ], true)
                          ])
                        ]),
                        _: 3
                      }),
                      createVNode("div", { class: "tw-grow" }),
                      createVNode("p", { class: "tw-font-bold tw-text-xl tw-mb-0" }, " $" + toDisplayString(props.amount) + " USD ", 1)
                    ]),
                    createVNode("div", { class: "tw-flex tw-gap-3 tw-mb-1" }, [
                      createVNode("div", { class: "tw-flex" }, [
                        createVNode(_component_RatingIndicator, {
                          starClass: "tw-text-base tw-mr-1",
                          rating: props.rating
                        }, null, 8, ["rating"]),
                        createVNode("p", { class: "tw-mb-0 tw-ml-3 tw-text-sm" }, toDisplayString((_b = props.rating) == null ? void 0 : _b.toFixed(1)), 1)
                      ]),
                      createVNode("div", { class: "tw-flex" }, [
                        createVNode(unref(MessageSquareTextIcon), {
                          class: "comment-icon tw-mr-2",
                          size: 20
                        }),
                        createVNode("p", null, "50")
                      ]),
                      createVNode("div", { class: "tw-flex" }, [
                        createVNode(unref(CircleDollarSignIcon), {
                          class: "circle-dollar-icon tw-mr-2",
                          size: 20
                        }),
                        createVNode("p", null, "50")
                      ]),
                      createVNode("div", { class: "tw-flex" }, [
                        createVNode("div", {
                          class: "comment-icon tw-rounded-full tw-border-dashed tw-border-blue-500 tw-border-spacing-80 tw-border-2 tw-h-5 tw-w-5 tw-mr-2",
                          size: 20
                        }),
                        createVNode("p", null, "50")
                      ]),
                      createVNode("div", { class: "tw-flex" }, [
                        createVNode(unref(FlagIcon), {
                          class: "flag-icon tw-mr-2",
                          size: 20
                        }),
                        createVNode("p", null, "50")
                      ]),
                      createVNode("div", { class: "tw-grow" }),
                      createVNode("p", null, "En " + toDisplayString(props.deliveryDays) + " Dia(s)", 1)
                    ]),
                    createVNode("p", { class: "tw-text-base tw-font-semibold" }, [
                      renderSlot(_ctx.$slots, "subtitle", {}, () => [
                        createTextVNode(" We are a team that is passionate about technology! ")
                      ], true)
                    ])
                  ])
                ]),
                createVNode("p", { class: "lg:tw-w-2/3" }, [
                  renderSlot(_ctx.$slots, "description", {}, void 0, true)
                ])
              ]),
              createVNode(_component_CardFooter, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "tw-flex" }, [
                    createVNode("div", { class: "tw-flex" })
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/card/layouts/CardProposal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_15 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-67e4dd9f"]]);
const projectExample1 = {
  bids: [
    {
      adId: 16,
      amount: 50,
      createdAt: /* @__PURE__ */ new Date("2024-10-24 09:17:24"),
      createdBy: 1,
      currency: "USD",
      deletedAt: null,
      deletedBy: null,
      deliveryDays: 0,
      description: "Estoy corrigiendo la descripcion de la propuesta",
      id: 2,
      options: null,
      organizationId: null,
      selected: 1,
      statusId: 0,
      statusLabel: {
        title: "Pendiente"
      },
      updatedAt: /* @__PURE__ */ new Date("2024-10-24 09:46:59"),
      updatedBy: 1
    },
    {
      adId: 16,
      amount: 150,
      createdAt: /* @__PURE__ */ new Date("2024-10-24 09:26:03"),
      createdBy: 1,
      currency: "USD",
      deletedAt: null,
      deletedBy: null,
      deliveryDays: 5,
      description: "Esta es una descripcion de la propuesta",
      id: 3,
      options: null,
      organizationId: null,
      selected: 0,
      statusId: 0,
      statusLabel: {
        title: "Pendiente"
      },
      updatedAt: /* @__PURE__ */ new Date("2024-10-24 09:46:59"),
      updatedBy: 1
    },
    {
      adId: 16,
      amount: 200,
      createdAt: /* @__PURE__ */ new Date("2024-10-24 15:30:23"),
      createdBy: 1,
      currency: "USD",
      deletedAt: null,
      deletedBy: null,
      deliveryDays: 5,
      description: "Esta es una descripcion de la propuesta XN",
      id: 5,
      options: null,
      organizationId: null,
      selected: 0,
      statusId: 0,
      statusLabel: {
        title: "Pendiente"
      },
      updatedAt: /* @__PURE__ */ new Date("2024-10-24 15:30:23"),
      updatedBy: 1
    }
  ],
  categories: [
    {
      createdAt: /* @__PURE__ */ new Date("2024-10-21 11:46:41"),
      createdBy: 1,
      deletedAt: null,
      deletedBy: null,
      depth: null,
      description: "<p>Python</p>",
      id: 38,
      lft: 29,
      options: null,
      organizationId: null,
      parentId: 6,
      pivot: {
        adId: 16,
        categoryId: 38
      },
      rgt: 30,
      slug: "python",
      sortOrder: 0,
      status: 1,
      title: "Python",
      updatedAt: /* @__PURE__ */ new Date("2024-10-21 11:46:41"),
      updatedBy: 1,
      url: "https://dev-clustertic.ozonohosting.com/anuncios/c/python"
    },
    {
      createdAt: /* @__PURE__ */ new Date("2024-10-21 11:47:00"),
      createdBy: 1,
      deletedAt: null,
      deletedBy: null,
      depth: null,
      description: "<p>Bash</p>",
      id: 39,
      lft: 31,
      options: null,
      organizationId: null,
      parentId: 6,
      pivot: {
        adId: 16,
        categoryId: 39
      },
      rgt: 32,
      slug: "bash",
      sortOrder: 0,
      status: 1,
      title: "Bash",
      updatedAt: /* @__PURE__ */ new Date("2024-10-21 11:47:00"),
      updatedBy: 1,
      url: "https://dev-clustertic.ozonohosting.com/anuncios/c/bash"
    }
  ],
  checked: "0",
  cityId: 1,
  countryId: 48,
  createdAt: /* @__PURE__ */ new Date("2024-10-23 15:39:02"),
  createdBy: 1,
  defaultPrice: 100,
  deletedAt: null,
  deletedBy: null,
  description: "Esta es la descripcion",
  entityTitle: "Test entity name",
  featured: 0,
  fields: [],
  files: [
    {
      id: 9,
      filename: "slider-test-3.png",
      mimeType: "image/png",
      fileSize: "155085",
      path: "https://s3.wasabisys.com/assets.cluster/assets/media/slider-test-3.png?u=1730843147",
      relativePath: "/assets/media/slider-test-3.png",
      isImage: true,
      isVideo: false,
      isFolder: false,
      mediaType: "image",
      folderId: "0",
      description: null,
      alt: null,
      keywords: null,
      createdBy: 1,
      createdAt: /* @__PURE__ */ new Date("2024-10-23 14:53:51"),
      updatedAt: /* @__PURE__ */ new Date("2024-11-05 16:45:47"),
      faIcon: "fa-file",
      disk: "s3",
      extension: "png",
      zone: "gallery",
      url: "https://s3.wasabisys.com/assets.cluster/assets/media/slider-test-3.png",
      tags: [],
      thumbnails: [
        {
          name: "smallThumb",
          path: "https://s3.wasabisys.com/assets.cluster/assets/media/slider-test-3_smallThumb.webp",
          size: "300x"
        },
        {
          name: "mediumThumb",
          path: "https://s3.wasabisys.com/assets.cluster/assets/media/slider-test-3_mediumThumb.webp",
          size: "600x"
        },
        {
          name: "largeThumb",
          path: "https://s3.wasabisys.com/assets.cluster/assets/media/slider-test-3_largeThumb.webp",
          size: "900x"
        },
        {
          name: "extraLargeThumb",
          path: "https://s3.wasabisys.com/assets.cluster/assets/media/slider-test-3_extraLargeThumb.webp",
          size: "1920x"
        }
      ],
      smallThumb: "https://s3.wasabisys.com/assets.cluster/assets/media/slider-test-3_smallThumb.webp",
      relativeSmallThumb: "https://s3.wasabisys.com/assets.cluster/assets/media/slider-test-3_smallThumb.webp",
      mediumThumb: "https://s3.wasabisys.com/assets.cluster/assets/media/slider-test-3_mediumThumb.webp",
      relativeMediumThumb: "https://s3.wasabisys.com/assets.cluster/assets/media/slider-test-3_mediumThumb.webp",
      largeThumb: "https://s3.wasabisys.com/assets.cluster/assets/media/slider-test-3_largeThumb.webp",
      relativeLargeThumb: "https://s3.wasabisys.com/assets.cluster/assets/media/slider-test-3_largeThumb.webp",
      extraLargeThumb: "https://s3.wasabisys.com/assets.cluster/assets/media/slider-test-3_extraLargeThumb.webp",
      relativeExtraLargeThumb: "https://s3.wasabisys.com/assets.cluster/assets/media/slider-test-3_extraLargeThumb.webp"
    }
  ],
  id: 16,
  lat: null,
  lng: null,
  maxPrice: 250,
  mediaFiles: {
    mainimage: {
      id: null,
      filename: null,
      mimeType: null,
      fileSize: null,
      path: "https://s3.wasabisys.com/assets.cluster/modules/media/img/file/default.jpg?u=",
      relativePath: "modules/media/img/file/default.jpg",
      isImage: true,
      isVideo: false,
      isFolder: false,
      mediaType: "",
      folderId: null,
      description: null,
      alt: null,
      keywords: null,
      createdBy: null,
      createdAt: null,
      updatedAt: null,
      faIcon: "fa-file",
      disk: null,
      extension: null,
      url: "https://s3.wasabisys.com/assets.cluster/modules/media/img/file/default.jpg",
      tags: [],
      thumbnails: [
        {
          name: "smallThumb",
          path: "https://s3.wasabisys.com/assets.cluster/modules/media/img/file/default.jpg?u=",
          size: "300x"
        },
        {
          name: "mediumThumb",
          path: "https://s3.wasabisys.com/assets.cluster/modules/media/img/file/default.jpg?u=",
          size: "600x"
        },
        {
          name: "largeThumb",
          path: "https://s3.wasabisys.com/assets.cluster/modules/media/img/file/default.jpg?u=",
          size: "900x"
        },
        {
          name: "extraLargeThumb",
          path: "https://s3.wasabisys.com/assets.cluster/modules/media/img/file/default.jpg?u=",
          size: "1920x"
        }
      ],
      smallThumb: "https://s3.wasabisys.com/assets.cluster/modules/media/img/file/default.jpg?u=",
      relativeSmallThumb: "https://s3.wasabisys.com/assets.cluster/modules/media/img/file/default.jpg?u=",
      mediumThumb: "https://s3.wasabisys.com/assets.cluster/modules/media/img/file/default.jpg?u=",
      relativeMediumThumb: "https://s3.wasabisys.com/assets.cluster/modules/media/img/file/default.jpg?u=",
      largeThumb: "https://s3.wasabisys.com/assets.cluster/modules/media/img/file/default.jpg?u=",
      relativeLargeThumb: "https://s3.wasabisys.com/assets.cluster/modules/media/img/file/default.jpg?u=",
      extraLargeThumb: "https://s3.wasabisys.com/assets.cluster/modules/media/img/file/default.jpg?u=",
      relativeExtraLargeThumb: "https://s3.wasabisys.com/assets.cluster/modules/media/img/file/default.jpg?u="
    },
    secondaryimage: {
      id: null,
      filename: null,
      mimeType: null,
      fileSize: null,
      path: "https://s3.wasabisys.com/assets.cluster/modules/media/img/file/default.jpg?u=",
      relativePath: "modules/media/img/file/default.jpg",
      isImage: true,
      isVideo: false,
      isFolder: false,
      mediaType: "",
      folderId: null,
      description: null,
      alt: null,
      keywords: null,
      createdBy: null,
      createdAt: null,
      updatedAt: null,
      faIcon: "fa-file",
      disk: null,
      extension: null,
      url: "https://s3.wasabisys.com/assets.cluster/modules/media/img/file/default.jpg",
      tags: [],
      thumbnails: [
        {
          name: "smallThumb",
          path: "https://s3.wasabisys.com/assets.cluster/modules/media/img/file/default.jpg?u=",
          size: "300x"
        },
        {
          name: "mediumThumb",
          path: "https://s3.wasabisys.com/assets.cluster/modules/media/img/file/default.jpg?u=",
          size: "600x"
        },
        {
          name: "largeThumb",
          path: "https://s3.wasabisys.com/assets.cluster/modules/media/img/file/default.jpg?u=",
          size: "900x"
        },
        {
          name: "extraLargeThumb",
          path: "https://s3.wasabisys.com/assets.cluster/modules/media/img/file/default.jpg?u=",
          size: "1920x"
        }
      ],
      smallThumb: "https://s3.wasabisys.com/assets.cluster/modules/media/img/file/default.jpg?u=",
      relativeSmallThumb: "https://s3.wasabisys.com/assets.cluster/modules/media/img/file/default.jpg?u=",
      mediumThumb: "https://s3.wasabisys.com/assets.cluster/modules/media/img/file/default.jpg?u=",
      relativeMediumThumb: "https://s3.wasabisys.com/assets.cluster/modules/media/img/file/default.jpg?u=",
      largeThumb: "https://s3.wasabisys.com/assets.cluster/modules/media/img/file/default.jpg?u=",
      relativeLargeThumb: "https://s3.wasabisys.com/assets.cluster/modules/media/img/file/default.jpg?u=",
      extraLargeThumb: "https://s3.wasabisys.com/assets.cluster/modules/media/img/file/default.jpg?u=",
      relativeExtraLargeThumb: "https://s3.wasabisys.com/assets.cluster/modules/media/img/file/default.jpg?u="
    },
    gallery: [
      {
        id: 9,
        filename: "slider-test-3.png",
        mimeType: "image/png",
        fileSize: "155085",
        path: "https://s3.wasabisys.com/assets.cluster/assets/media/slider-test-3.png?u=1730843147",
        relativePath: "/assets/media/slider-test-3.png",
        isImage: true,
        isVideo: false,
        isFolder: false,
        mediaType: "image",
        folderId: "0",
        description: null,
        alt: null,
        keywords: null,
        createdBy: 1,
        createdAt: /* @__PURE__ */ new Date("2024-10-23 14:53:51"),
        updatedAt: /* @__PURE__ */ new Date("2024-11-05 16:45:47"),
        faIcon: "fa-file",
        disk: "s3",
        extension: "png",
        zone: "gallery",
        url: "https://s3.wasabisys.com/assets.cluster/assets/media/slider-test-3.png",
        tags: [],
        thumbnails: [
          {
            name: "smallThumb",
            path: "https://s3.wasabisys.com/assets.cluster/assets/media/slider-test-3_smallThumb.webp",
            size: "300x"
          },
          {
            name: "mediumThumb",
            path: "https://s3.wasabisys.com/assets.cluster/assets/media/slider-test-3_mediumThumb.webp",
            size: "600x"
          },
          {
            name: "largeThumb",
            path: "https://s3.wasabisys.com/assets.cluster/assets/media/slider-test-3_largeThumb.webp",
            size: "900x"
          },
          {
            name: "extraLargeThumb",
            path: "https://s3.wasabisys.com/assets.cluster/assets/media/slider-test-3_extraLargeThumb.webp",
            size: "1920x"
          }
        ],
        smallThumb: "https://s3.wasabisys.com/assets.cluster/assets/media/slider-test-3_smallThumb.webp",
        relativeSmallThumb: "https://s3.wasabisys.com/assets.cluster/assets/media/slider-test-3_smallThumb.webp",
        mediumThumb: "https://s3.wasabisys.com/assets.cluster/assets/media/slider-test-3_mediumThumb.webp",
        relativeMediumThumb: "https://s3.wasabisys.com/assets.cluster/assets/media/slider-test-3_mediumThumb.webp",
        largeThumb: "https://s3.wasabisys.com/assets.cluster/assets/media/slider-test-3_largeThumb.webp",
        relativeLargeThumb: "https://s3.wasabisys.com/assets.cluster/assets/media/slider-test-3_largeThumb.webp",
        extraLargeThumb: "https://s3.wasabisys.com/assets.cluster/assets/media/slider-test-3_extraLargeThumb.webp",
        relativeExtraLargeThumb: "https://s3.wasabisys.com/assets.cluster/assets/media/slider-test-3_extraLargeThumb.webp"
      }
    ],
    videos: []
  },
  mediasMulti: {
    gallery: {
      files: [9]
    },
    videos: {
      files: []
    }
  },
  mediasSingle: [],
  minPrice: 100,
  neighborhoodId: null,
  options: null,
  organizationId: null,
  provinceId: 694,
  slug: "proyecto-5",
  sortOrder: 0,
  status: 2,
  statusName: "Publicado",
  title: "Proyecto 5",
  updatedAt: /* @__PURE__ */ new Date("2024-10-23 15:39:02"),
  updatedBy: 1,
  uploadedAt: /* @__PURE__ */ new Date("2024-10-23 20:39:02"),
  url: "https://dev-clustertic.ozonohosting.com/anuncios/proyecto-5",
  user: {
    createdAt: /* @__PURE__ */ new Date("2024-06-18 18:24:24"),
    createdBy: 1,
    deletedAt: null,
    deletedBy: null,
    email: "soporte@imaginacolombia.com",
    firstName: "Imagina",
    id: 1,
    isGuest: 0,
    language: null,
    lastLogin: /* @__PURE__ */ new Date("2024-11-07 11:20:11"),
    lastName: "Colombia",
    organizationId: null,
    permissions: [],
    phone: "57null",
    timezone: null,
    updatedAt: /* @__PURE__ */ new Date("2024-11-07 11:20:11"),
    updatedBy: 1,
    userName: null
  },
  userId: 1
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const tab = ref("details");
    const refForm = ref();
    const projectsStore = useProjectsStore();
    const authStore = useAuthStore();
    useRoute();
    const project = computed(
      () => {
        var _a;
        return (_a = projectsStore.selected) != null ? _a : projectExample1;
      }
    );
    const isMyProject = computed(
      () => {
        var _a, _b;
        return ((_a = projectsStore.selected) == null ? void 0 : _a.createdBy) === ((_b = authStore.user) == null ? void 0 : _b.id);
      }
    );
    const memberSince = computed(() => {
      var _a, _b, _c, _d, _e;
      if (!((_a = projectsStore.selected) == null ? void 0 : _a.user) || !((_b = projectsStore.selected.user) == null ? void 0 : _b.createdAt))
        return /* @__PURE__ */ new Date();
      return typeof ((_c = projectsStore.selected.user) == null ? void 0 : _c.createdAt) == "string" ? Helper.parseStringToDate((_d = projectsStore.selected.user) == null ? void 0 : _d.createdAt) : (_e = projectsStore.selected.user) == null ? void 0 : _e.createdAt;
    });
    const proposalData = reactive({
      amount: 0,
      days: 7,
      description: "",
      files: null
    });
    async function sendProposal() {
      try {
        const validateRegister = await refForm.value.validate();
        if (!validateRegister) return;
        const data = {
          ad_id: project.value.id,
          amount: proposalData.amount,
          currency: "USD",
          delivery_days: proposalData.days,
          description: proposalData.description
        };
        if (proposalData.files) {
          data.files = proposalData.files;
        }
        projectsStore.addProposal(data);
      } catch (erro) {
        console.log(erro);
      }
    }
    function handleSelectProposal(proposal) {
      if (!project.value.bids || !isMyProject.value) return;
      if (project.value.bids.find((value) => value.selected === 1)) {
        Swal.fire({
          title: "El proyecto ya cuenta con un proyecto seleccionado",
          icon: "error",
          showCloseButton: true
        });
      } else {
        Swal.fire({
          title: "Desea seleccionar esta propuesta",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Seleccionar",
          cancelButtonText: "Cancelar"
        }).then((result) => {
          if (result.isConfirmed) {
            projectsStore.selectProposal(proposal);
          }
        });
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_SearchProject = __nuxt_component_0;
      const _component_Card = _sfc_main$2$1;
      const _component_CardHeader = _sfc_main$1$2;
      const _component_CardTitle = _sfc_main$3;
      const _component_q_tabs = __nuxt_component_4;
      const _component_q_tab = __nuxt_component_5;
      const _component_q_separator = __nuxt_component_6;
      const _component_q_tab_panels = __nuxt_component_7;
      const _component_q_tab_panel = __nuxt_component_8;
      const _component_CardContent = _sfc_main$5;
      const _component_q_form = __nuxt_component_1;
      const _component_InputCPA = __nuxt_component_2;
      const _component_Textarea = __nuxt_component_3;
      const _component_Dropzone = __nuxt_component_5$1;
      const _component_Button = _sfc_main$6;
      const _component_CardProposal = __nuxt_component_15;
      const _component_RatingIndicator = _sfc_main$4;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$2, {
        loading: unref(projectsStore).loading
      }, null, _parent));
      _push(ssrRenderComponent(_component_SearchProject, { class: "tw-mt-20" }, null, _parent));
      _push(`<div class="tw-container lg:tw-px-20 tw-mt-10" data-v-31352e4b><div class="tw-flex tw-flex-wrap tw-mb-5" data-v-31352e4b>`);
      _push(ssrRenderComponent(_component_Card, { class: "tw-basis-full lg:tw-flex-1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, { class: "tw-h-full tw-justify-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, { class: "!tw-leading-normal tw-font-bold" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="tw-mr-5" data-v-31352e4b${_scopeId3}>${ssrInterpolate(unref(project).title)}</span><span class="tw-bg-primary tw-bg-opacity-50 tw-px-5 tw-py-1 tw-font-normal tw-rounded-md" data-v-31352e4b${_scopeId3}>${ssrInterpolate(unref(project).status === 2 ? "Abierto" : "Cerrado")}</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "tw-mr-5" }, toDisplayString(unref(project).title), 1),
                          createVNode("span", { class: "tw-bg-primary tw-bg-opacity-50 tw-px-5 tw-py-1 tw-font-normal tw-rounded-md" }, toDisplayString(unref(project).status === 2 ? "Abierto" : "Cerrado"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, { class: "!tw-leading-normal tw-font-bold" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "tw-mr-5" }, toDisplayString(unref(project).title), 1),
                        createVNode("span", { class: "tw-bg-primary tw-bg-opacity-50 tw-px-5 tw-py-1 tw-font-normal tw-rounded-md" }, toDisplayString(unref(project).status === 2 ? "Abierto" : "Cerrado"), 1)
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
              createVNode(_component_CardHeader, { class: "tw-h-full tw-justify-center" }, {
                default: withCtx(() => [
                  createVNode(_component_CardTitle, { class: "!tw-leading-normal tw-font-bold" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "tw-mr-5" }, toDisplayString(unref(project).title), 1),
                      createVNode("span", { class: "tw-bg-primary tw-bg-opacity-50 tw-px-5 tw-py-1 tw-font-normal tw-rounded-md" }, toDisplayString(unref(project).status === 2 ? "Abierto" : "Cerrado"), 1)
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
      _push(`<div class="tw-basis-full lg:tw-basis-80" data-v-31352e4b>`);
      _push(ssrRenderComponent(_component_Card, { class: "tw-flex-1 lg:tw-ml-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b3, _c, _d;
          var _a2, _b2;
          if (_push2) {
            _push2(`<div class="tw-flex tw-justify-between tw-py-4 tw-px-12" data-v-31352e4b${_scopeId}><div class="" data-v-31352e4b${_scopeId}><p class="tw-font-normal tw-text-sm tw-mb-2 tw-text-center" data-v-31352e4b${_scopeId}> Ofertas </p><p class="tw-text-2xl tw-font-semibold tw-mb-0 tw-text-center" data-v-31352e4b${_scopeId}>${ssrInterpolate((_a3 = (_a2 = unref(project).bids) == null ? void 0 : _a2.length) != null ? _a3 : 0)}</p></div><div class="" data-v-31352e4b${_scopeId}><p class="tw-font-normal tw-text-sm tw-mb-2 tw-text-center" data-v-31352e4b${_scopeId}> Ofertas media </p><p class="tw-text-2xl tw-font-semibold tw-mb-0 tw-text-center" data-v-31352e4b${_scopeId}> $ ${ssrInterpolate((_b3 = unref(project).defaultPrice) != null ? _b3 : 0)} USD </p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "tw-flex tw-justify-between tw-py-4 tw-px-12" }, [
                createVNode("div", { class: "" }, [
                  createVNode("p", { class: "tw-font-normal tw-text-sm tw-mb-2 tw-text-center" }, " Ofertas "),
                  createVNode("p", { class: "tw-text-2xl tw-font-semibold tw-mb-0 tw-text-center" }, toDisplayString((_c = (_b2 = unref(project).bids) == null ? void 0 : _b2.length) != null ? _c : 0), 1)
                ]),
                createVNode("div", { class: "" }, [
                  createVNode("p", { class: "tw-font-normal tw-text-sm tw-mb-2 tw-text-center" }, " Ofertas media "),
                  createVNode("p", { class: "tw-text-2xl tw-font-semibold tw-mb-0 tw-text-center" }, " $ " + toDisplayString((_d = unref(project).defaultPrice) != null ? _d : 0) + " USD ", 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_q_tabs, {
        modelValue: unref(tab),
        "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null,
        dense: "",
        class: "project-tabs text-grey",
        "active-color": "primary",
        "indicator-color": "primary",
        align: "justify"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_q_tab, {
              class: "tw-flex-initial",
              name: "details",
              label: "Detalles"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_q_tab, {
              class: "tw-flex-initial",
              name: "proposal",
              label: "Propuesta"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_q_tab, {
                class: "tw-flex-initial",
                name: "details",
                label: "Detalles"
              }),
              createVNode(_component_q_tab, {
                class: "tw-flex-initial",
                name: "proposal",
                label: "Propuesta"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_q_separator, null, null, _parent));
      _push(`<div class="tw-flex tw-flex-wrap tw-mb-5 tw-mt-10" data-v-31352e4b><div class="tw-basis-full lg:tw-flex-1 tw-w-full" data-v-31352e4b>`);
      _push(ssrRenderComponent(_component_q_tab_panels, {
        modelValue: unref(tab),
        "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null,
        animated: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_q_tab_panel, {
              class: "tw-p-0",
              name: "details"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Card, { class: "tw-overflow-scroll md:tw-overflow-hidden" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_CardHeader, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_CardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Detalles de proyecto`);
                                  } else {
                                    return [
                                      createTextVNode("Detalles de proyecto")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_CardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Detalles de proyecto")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_CardContent, { class: "tw-px-6 tw-pb-10" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p class="text-h6 tw-text-base" data-v-31352e4b${_scopeId4}>${ssrInterpolate(unref(project).description)}</p>`);
                              _push5(ssrRenderComponent(_component_CardTitle, { class: "tw-mt-10 tw-mb-7" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Habilidades necesarias `);
                                  } else {
                                    return [
                                      createTextVNode(" Habilidades necesarias ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<ul class="tw-flex tw-flex-wrap" data-v-31352e4b${_scopeId4}><!--[-->`);
                              ssrRenderList(unref(project).categories, (item, index) => {
                                _push5(`<li class="tw-border tw-border-secondary tw-rounded-md tw-flex tw-px-10 tw-py-2 tw-h-min tw-mr-3 tw-mb-1" data-v-31352e4b${_scopeId4}>${ssrInterpolate(item.title)}</li>`);
                              });
                              _push5(`<!--]--></ul><p class="tw-mb-0 tw-text-xs tw-mt-5" data-v-31352e4b${_scopeId4}> ID del proyecto: ${ssrInterpolate(unref(project).id)}</p>`);
                            } else {
                              return [
                                createVNode("p", { class: "text-h6 tw-text-base" }, toDisplayString(unref(project).description), 1),
                                createVNode(_component_CardTitle, { class: "tw-mt-10 tw-mb-7" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Habilidades necesarias ")
                                  ]),
                                  _: 1
                                }),
                                createVNode("ul", { class: "tw-flex tw-flex-wrap" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(project).categories, (item, index) => {
                                    return openBlock(), createBlock("li", {
                                      key: `skill_${index}`,
                                      class: "tw-border tw-border-secondary tw-rounded-md tw-flex tw-px-10 tw-py-2 tw-h-min tw-mr-3 tw-mb-1"
                                    }, toDisplayString(item.title), 1);
                                  }), 128))
                                ]),
                                createVNode("p", { class: "tw-mb-0 tw-text-xs tw-mt-5" }, " ID del proyecto: " + toDisplayString(unref(project).id), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_CardHeader, null, {
                            default: withCtx(() => [
                              createVNode(_component_CardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Detalles de proyecto")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_CardContent, { class: "tw-px-6 tw-pb-10" }, {
                            default: withCtx(() => [
                              createVNode("p", { class: "text-h6 tw-text-base" }, toDisplayString(unref(project).description), 1),
                              createVNode(_component_CardTitle, { class: "tw-mt-10 tw-mb-7" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Habilidades necesarias ")
                                ]),
                                _: 1
                              }),
                              createVNode("ul", { class: "tw-flex tw-flex-wrap" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(project).categories, (item, index) => {
                                  return openBlock(), createBlock("li", {
                                    key: `skill_${index}`,
                                    class: "tw-border tw-border-secondary tw-rounded-md tw-flex tw-px-10 tw-py-2 tw-h-min tw-mr-3 tw-mb-1"
                                  }, toDisplayString(item.title), 1);
                                }), 128))
                              ]),
                              createVNode("p", { class: "tw-mb-0 tw-text-xs tw-mt-5" }, " ID del proyecto: " + toDisplayString(unref(project).id), 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Card, { class: "tw-mt-10" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_CardHeader, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_CardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Detalles de proyecto`);
                                  } else {
                                    return [
                                      createTextVNode("Detalles de proyecto")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_CardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Detalles de proyecto")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_CardContent, { class: "tw-px-6 tw-pb-10" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_q_form, {
                                onSubmit: sendProposal,
                                ref_key: "refForm",
                                ref: refForm
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j;
                                  if (_push6) {
                                    _push6(`<p class="text-h6 tw-text-base tw-mb-10" data-v-31352e4b${_scopeId5}> Podr\xE1s editar tu oferta hasta que el proyecto sea adjudicado a alguien. </p><div class="tw-flex tw-flex-wrap" data-v-31352e4b${_scopeId5}><div class="tw-basis-1/2 md:tw-basis-1/3 xl:tw-basis-3/12 tw-mr-5" data-v-31352e4b${_scopeId5}><label class="tw-font-semibold tw-text-[.95rem] tw-mb-3 tw-block tw-text-base" data-v-31352e4b${_scopeId5}> Monto de la oferta* </label>`);
                                    _push6(ssrRenderComponent(_component_InputCPA, {
                                      outlined: "",
                                      type: "number",
                                      size: "sm",
                                      class: "tw-mb-3 tw-mt-2",
                                      modelValue: unref(proposalData).amount,
                                      "onUpdate:modelValue": ($event) => unref(proposalData).amount = $event,
                                      mask: "##0.00",
                                      "fill-mask": "",
                                      "reverse-fill-mask": "",
                                      rules: [(val) => !!val || "El valor es requerido"],
                                      disable: !!((_a2 = unref(authStore).user) == null ? void 0 : _a2.id)
                                    }, {
                                      prepend: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`$`);
                                        } else {
                                          return [
                                            createTextVNode("$")
                                          ];
                                        }
                                      }),
                                      append: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<span class="tw-text-sm" data-v-31352e4b${_scopeId6}>${ssrInterpolate(
                                            "USD"
                                            /**TODO: colocar currency de cada projecto */
                                          )}</span>`);
                                        } else {
                                          return [
                                            createVNode("span", { class: "tw-text-sm" }, toDisplayString(
                                              "USD"
                                              /**TODO: colocar currency de cada projecto */
                                            ))
                                          ];
                                        }
                                      }),
                                      hint: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        var _a3, _b3, _c2, _d2;
                                        if (_push7) {
                                          _push7(`<p class="tw-text-sm tw-text-black tw-whitespace-nowrap" data-v-31352e4b${_scopeId6}> Pagado a usted: $${ssrInterpolate(unref(proposalData).amount)} - $${ssrInterpolate((((_a3 = unref(proposalData).amount) != null ? _a3 : 0) * 0.05).toFixed(2))} tarifa = $${ssrInterpolate((((_b3 = unref(proposalData).amount) != null ? _b3 : 0) * 0.95).toFixed(2))}</p>`);
                                        } else {
                                          return [
                                            createVNode("p", { class: "tw-text-sm tw-text-black tw-whitespace-nowrap" }, " Pagado a usted: $" + toDisplayString(unref(proposalData).amount) + " - $" + toDisplayString((((_c2 = unref(proposalData).amount) != null ? _c2 : 0) * 0.05).toFixed(2)) + " tarifa = $" + toDisplayString((((_d2 = unref(proposalData).amount) != null ? _d2 : 0) * 0.95).toFixed(2)), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div><div class="tw-basis-1/2 md:tw-basis-1/3 xl:tw-basis-3/12 tw-mr-5" data-v-31352e4b${_scopeId5}><label class="tw-font-semibold tw-text-[.95rem] tw-mb-3 tw-block tw-text-base tw-whitespace-nowrap" data-v-31352e4b${_scopeId5}> Este proyecto se entregar\xE1 en* </label>`);
                                    _push6(ssrRenderComponent(_component_InputCPA, {
                                      outlined: "",
                                      size: "sm",
                                      type: "number",
                                      class: "tw-mb-3 tw-mt-2",
                                      modelValue: unref(proposalData).days,
                                      "onUpdate:modelValue": ($event) => unref(proposalData).days = $event,
                                      disable: !!((_b2 = unref(authStore).user) == null ? void 0 : _b2.id)
                                    }, {
                                      append: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<span class="tw-text-sm" data-v-31352e4b${_scopeId6}>Dias</span>`);
                                        } else {
                                          return [
                                            createVNode("span", { class: "tw-text-sm" }, "Dias")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div></div><label class="tw-font-semibold tw-text-[.95rem] tw-mb-3 tw-block tw-text-base tw-mt-10" data-v-31352e4b${_scopeId5}> Describe tu propuesta (m\xEDnimo 100 caracteres)* </label>`);
                                    _push6(ssrRenderComponent(_component_Textarea, {
                                      placeholder: "\xBFQu\xE9 le convierte en el mejor candidato para este proyecto?",
                                      modelValue: unref(proposalData).description,
                                      "onUpdate:modelValue": ($event) => unref(proposalData).description = $event,
                                      class: "tw-h-28",
                                      disable: !!((_c = unref(authStore).user) == null ? void 0 : _c.id)
                                    }, null, _parent6, _scopeId5));
                                    _push6(`<label class="tw-font-semibold tw-text-[.95rem] tw-mb-3 tw-block tw-text-base tw-mt-10" data-v-31352e4b${_scopeId5}> Adjunta los archivos que desee </label>`);
                                    _push6(ssrRenderComponent(_component_Dropzone, {
                                      disable: !!((_d = unref(authStore).user) == null ? void 0 : _d.id),
                                      modelValue: unref(proposalData).files,
                                      "onUpdate:modelValue": ($event) => unref(proposalData).files = $event
                                    }, {
                                      title: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="tw-flex tw-flex-col tw-items-center tw-justify-center" data-v-31352e4b${_scopeId6}>`);
                                          _push7(ssrRenderComponent(unref(Paperclip), {
                                            size: 50,
                                            class: "tw-mb-3"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`<p class="tw-text-base tw-mb-3" data-v-31352e4b${_scopeId6}>${ssrInterpolate(unref(proposalData).files ? ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.title") : ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.loadedMsg"))}</p></div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "tw-flex tw-flex-col tw-items-center tw-justify-center" }, [
                                              createVNode(unref(Paperclip), {
                                                size: 50,
                                                class: "tw-mb-3"
                                              }),
                                              createVNode("p", { class: "tw-text-base tw-mb-3" }, toDisplayString(unref(proposalData).files ? ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.title") : ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.loadedMsg")), 1)
                                            ])
                                          ];
                                        }
                                      }),
                                      subtitle: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          if (unref(proposalData).files) {
                                            _push7(`<p class="tw-text-xs tw-text-center" data-v-31352e4b${_scopeId6}><!--[-->`);
                                            ssrRenderList(unref(proposalData).files, (file, index) => {
                                              _push7(`<span class="tw-mr-2" data-v-31352e4b${_scopeId6}>${ssrInterpolate(file.name)}</span>`);
                                            });
                                            _push7(`<!--]--></p>`);
                                          } else {
                                            _push7(`<p class="tw-text-xs tw-text-center" data-v-31352e4b${_scopeId6}>${ssrInterpolate(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.description"))}</p>`);
                                          }
                                        } else {
                                          return [
                                            unref(proposalData).files ? (openBlock(), createBlock("p", {
                                              key: 0,
                                              class: "tw-text-xs tw-text-center"
                                            }, [
                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(proposalData).files, (file, index) => {
                                                return openBlock(), createBlock("span", {
                                                  class: "tw-mr-2",
                                                  key: index
                                                }, toDisplayString(file.name), 1);
                                              }), 128))
                                            ])) : (openBlock(), createBlock("p", {
                                              key: 1,
                                              class: "tw-text-xs tw-text-center"
                                            }, toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.description")), 1))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<div class="tw-flex tw-mt-10 tw-justify-end" data-v-31352e4b${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_Button, {
                                      disabled: !!((_e = unref(authStore).user) == null ? void 0 : _e.id),
                                      type: "submit",
                                      class: "tw-text-lg !tw-px-16 tw-py-6 tw-font-semibold"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Enviar propuesta `);
                                        } else {
                                          return [
                                            createTextVNode(" Enviar propuesta ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode("p", { class: "text-h6 tw-text-base tw-mb-10" }, " Podr\xE1s editar tu oferta hasta que el proyecto sea adjudicado a alguien. "),
                                      createVNode("div", { class: "tw-flex tw-flex-wrap" }, [
                                        createVNode("div", { class: "tw-basis-1/2 md:tw-basis-1/3 xl:tw-basis-3/12 tw-mr-5" }, [
                                          createVNode("label", { class: "tw-font-semibold tw-text-[.95rem] tw-mb-3 tw-block tw-text-base" }, " Monto de la oferta* "),
                                          createVNode(_component_InputCPA, {
                                            outlined: "",
                                            type: "number",
                                            size: "sm",
                                            class: "tw-mb-3 tw-mt-2",
                                            modelValue: unref(proposalData).amount,
                                            "onUpdate:modelValue": ($event) => unref(proposalData).amount = $event,
                                            mask: "##0.00",
                                            "fill-mask": "",
                                            "reverse-fill-mask": "",
                                            rules: [(val) => !!val || "El valor es requerido"],
                                            disable: !!((_f = unref(authStore).user) == null ? void 0 : _f.id)
                                          }, {
                                            prepend: withCtx(() => [
                                              createTextVNode("$")
                                            ]),
                                            append: withCtx(() => [
                                              createVNode("span", { class: "tw-text-sm" }, toDisplayString(
                                                "USD"
                                                /**TODO: colocar currency de cada projecto */
                                              ))
                                            ]),
                                            hint: withCtx(() => {
                                              var _a3, _b3;
                                              return [
                                                createVNode("p", { class: "tw-text-sm tw-text-black tw-whitespace-nowrap" }, " Pagado a usted: $" + toDisplayString(unref(proposalData).amount) + " - $" + toDisplayString((((_a3 = unref(proposalData).amount) != null ? _a3 : 0) * 0.05).toFixed(2)) + " tarifa = $" + toDisplayString((((_b3 = unref(proposalData).amount) != null ? _b3 : 0) * 0.95).toFixed(2)), 1)
                                              ];
                                            }),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue", "rules", "disable"])
                                        ]),
                                        createVNode("div", { class: "tw-basis-1/2 md:tw-basis-1/3 xl:tw-basis-3/12 tw-mr-5" }, [
                                          createVNode("label", { class: "tw-font-semibold tw-text-[.95rem] tw-mb-3 tw-block tw-text-base tw-whitespace-nowrap" }, " Este proyecto se entregar\xE1 en* "),
                                          createVNode(_component_InputCPA, {
                                            outlined: "",
                                            size: "sm",
                                            type: "number",
                                            class: "tw-mb-3 tw-mt-2",
                                            modelValue: unref(proposalData).days,
                                            "onUpdate:modelValue": ($event) => unref(proposalData).days = $event,
                                            disable: !!((_g = unref(authStore).user) == null ? void 0 : _g.id)
                                          }, {
                                            append: withCtx(() => [
                                              createVNode("span", { class: "tw-text-sm" }, "Dias")
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue", "disable"])
                                        ])
                                      ]),
                                      createVNode("label", { class: "tw-font-semibold tw-text-[.95rem] tw-mb-3 tw-block tw-text-base tw-mt-10" }, " Describe tu propuesta (m\xEDnimo 100 caracteres)* "),
                                      createVNode(_component_Textarea, {
                                        placeholder: "\xBFQu\xE9 le convierte en el mejor candidato para este proyecto?",
                                        modelValue: unref(proposalData).description,
                                        "onUpdate:modelValue": ($event) => unref(proposalData).description = $event,
                                        class: "tw-h-28",
                                        disable: !!((_h = unref(authStore).user) == null ? void 0 : _h.id)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disable"]),
                                      createVNode("label", { class: "tw-font-semibold tw-text-[.95rem] tw-mb-3 tw-block tw-text-base tw-mt-10" }, " Adjunta los archivos que desee "),
                                      createVNode(_component_Dropzone, {
                                        disable: !!((_i = unref(authStore).user) == null ? void 0 : _i.id),
                                        modelValue: unref(proposalData).files,
                                        "onUpdate:modelValue": ($event) => unref(proposalData).files = $event
                                      }, {
                                        title: withCtx(() => [
                                          createVNode("div", { class: "tw-flex tw-flex-col tw-items-center tw-justify-center" }, [
                                            createVNode(unref(Paperclip), {
                                              size: 50,
                                              class: "tw-mb-3"
                                            }),
                                            createVNode("p", { class: "tw-text-base tw-mb-3" }, toDisplayString(unref(proposalData).files ? ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.title") : ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.loadedMsg")), 1)
                                          ])
                                        ]),
                                        subtitle: withCtx(() => [
                                          unref(proposalData).files ? (openBlock(), createBlock("p", {
                                            key: 0,
                                            class: "tw-text-xs tw-text-center"
                                          }, [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(proposalData).files, (file, index) => {
                                              return openBlock(), createBlock("span", {
                                                class: "tw-mr-2",
                                                key: index
                                              }, toDisplayString(file.name), 1);
                                            }), 128))
                                          ])) : (openBlock(), createBlock("p", {
                                            key: 1,
                                            class: "tw-text-xs tw-text-center"
                                          }, toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.description")), 1))
                                        ]),
                                        _: 1
                                      }, 8, ["disable", "modelValue", "onUpdate:modelValue"]),
                                      createVNode("div", { class: "tw-flex tw-mt-10 tw-justify-end" }, [
                                        createVNode(_component_Button, {
                                          disabled: !!((_j = unref(authStore).user) == null ? void 0 : _j.id),
                                          type: "submit",
                                          class: "tw-text-lg !tw-px-16 tw-py-6 tw-font-semibold"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Enviar propuesta ")
                                          ]),
                                          _: 1
                                        }, 8, ["disabled"])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_q_form, {
                                  onSubmit: withModifiers(sendProposal, ["prevent", "stop"]),
                                  ref_key: "refForm",
                                  ref: refForm
                                }, {
                                  default: withCtx(() => {
                                    var _a2, _b2, _c, _d, _e;
                                    return [
                                      createVNode("p", { class: "text-h6 tw-text-base tw-mb-10" }, " Podr\xE1s editar tu oferta hasta que el proyecto sea adjudicado a alguien. "),
                                      createVNode("div", { class: "tw-flex tw-flex-wrap" }, [
                                        createVNode("div", { class: "tw-basis-1/2 md:tw-basis-1/3 xl:tw-basis-3/12 tw-mr-5" }, [
                                          createVNode("label", { class: "tw-font-semibold tw-text-[.95rem] tw-mb-3 tw-block tw-text-base" }, " Monto de la oferta* "),
                                          createVNode(_component_InputCPA, {
                                            outlined: "",
                                            type: "number",
                                            size: "sm",
                                            class: "tw-mb-3 tw-mt-2",
                                            modelValue: unref(proposalData).amount,
                                            "onUpdate:modelValue": ($event) => unref(proposalData).amount = $event,
                                            mask: "##0.00",
                                            "fill-mask": "",
                                            "reverse-fill-mask": "",
                                            rules: [(val) => !!val || "El valor es requerido"],
                                            disable: !!((_a2 = unref(authStore).user) == null ? void 0 : _a2.id)
                                          }, {
                                            prepend: withCtx(() => [
                                              createTextVNode("$")
                                            ]),
                                            append: withCtx(() => [
                                              createVNode("span", { class: "tw-text-sm" }, toDisplayString(
                                                "USD"
                                                /**TODO: colocar currency de cada projecto */
                                              ))
                                            ]),
                                            hint: withCtx(() => {
                                              var _a3, _b3;
                                              return [
                                                createVNode("p", { class: "tw-text-sm tw-text-black tw-whitespace-nowrap" }, " Pagado a usted: $" + toDisplayString(unref(proposalData).amount) + " - $" + toDisplayString((((_a3 = unref(proposalData).amount) != null ? _a3 : 0) * 0.05).toFixed(2)) + " tarifa = $" + toDisplayString((((_b3 = unref(proposalData).amount) != null ? _b3 : 0) * 0.95).toFixed(2)), 1)
                                              ];
                                            }),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue", "rules", "disable"])
                                        ]),
                                        createVNode("div", { class: "tw-basis-1/2 md:tw-basis-1/3 xl:tw-basis-3/12 tw-mr-5" }, [
                                          createVNode("label", { class: "tw-font-semibold tw-text-[.95rem] tw-mb-3 tw-block tw-text-base tw-whitespace-nowrap" }, " Este proyecto se entregar\xE1 en* "),
                                          createVNode(_component_InputCPA, {
                                            outlined: "",
                                            size: "sm",
                                            type: "number",
                                            class: "tw-mb-3 tw-mt-2",
                                            modelValue: unref(proposalData).days,
                                            "onUpdate:modelValue": ($event) => unref(proposalData).days = $event,
                                            disable: !!((_b2 = unref(authStore).user) == null ? void 0 : _b2.id)
                                          }, {
                                            append: withCtx(() => [
                                              createVNode("span", { class: "tw-text-sm" }, "Dias")
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue", "disable"])
                                        ])
                                      ]),
                                      createVNode("label", { class: "tw-font-semibold tw-text-[.95rem] tw-mb-3 tw-block tw-text-base tw-mt-10" }, " Describe tu propuesta (m\xEDnimo 100 caracteres)* "),
                                      createVNode(_component_Textarea, {
                                        placeholder: "\xBFQu\xE9 le convierte en el mejor candidato para este proyecto?",
                                        modelValue: unref(proposalData).description,
                                        "onUpdate:modelValue": ($event) => unref(proposalData).description = $event,
                                        class: "tw-h-28",
                                        disable: !!((_c = unref(authStore).user) == null ? void 0 : _c.id)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disable"]),
                                      createVNode("label", { class: "tw-font-semibold tw-text-[.95rem] tw-mb-3 tw-block tw-text-base tw-mt-10" }, " Adjunta los archivos que desee "),
                                      createVNode(_component_Dropzone, {
                                        disable: !!((_d = unref(authStore).user) == null ? void 0 : _d.id),
                                        modelValue: unref(proposalData).files,
                                        "onUpdate:modelValue": ($event) => unref(proposalData).files = $event
                                      }, {
                                        title: withCtx(() => [
                                          createVNode("div", { class: "tw-flex tw-flex-col tw-items-center tw-justify-center" }, [
                                            createVNode(unref(Paperclip), {
                                              size: 50,
                                              class: "tw-mb-3"
                                            }),
                                            createVNode("p", { class: "tw-text-base tw-mb-3" }, toDisplayString(unref(proposalData).files ? ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.title") : ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.loadedMsg")), 1)
                                          ])
                                        ]),
                                        subtitle: withCtx(() => [
                                          unref(proposalData).files ? (openBlock(), createBlock("p", {
                                            key: 0,
                                            class: "tw-text-xs tw-text-center"
                                          }, [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(proposalData).files, (file, index) => {
                                              return openBlock(), createBlock("span", {
                                                class: "tw-mr-2",
                                                key: index
                                              }, toDisplayString(file.name), 1);
                                            }), 128))
                                          ])) : (openBlock(), createBlock("p", {
                                            key: 1,
                                            class: "tw-text-xs tw-text-center"
                                          }, toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.description")), 1))
                                        ]),
                                        _: 1
                                      }, 8, ["disable", "modelValue", "onUpdate:modelValue"]),
                                      createVNode("div", { class: "tw-flex tw-mt-10 tw-justify-end" }, [
                                        createVNode(_component_Button, {
                                          disabled: !!((_e = unref(authStore).user) == null ? void 0 : _e.id),
                                          type: "submit",
                                          class: "tw-text-lg !tw-px-16 tw-py-6 tw-font-semibold"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Enviar propuesta ")
                                          ]),
                                          _: 1
                                        }, 8, ["disabled"])
                                      ])
                                    ];
                                  }),
                                  _: 1
                                }, 512)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_CardHeader, null, {
                            default: withCtx(() => [
                              createVNode(_component_CardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Detalles de proyecto")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_CardContent, { class: "tw-px-6 tw-pb-10" }, {
                            default: withCtx(() => [
                              createVNode(_component_q_form, {
                                onSubmit: withModifiers(sendProposal, ["prevent", "stop"]),
                                ref_key: "refForm",
                                ref: refForm
                              }, {
                                default: withCtx(() => {
                                  var _a2, _b2, _c, _d, _e;
                                  return [
                                    createVNode("p", { class: "text-h6 tw-text-base tw-mb-10" }, " Podr\xE1s editar tu oferta hasta que el proyecto sea adjudicado a alguien. "),
                                    createVNode("div", { class: "tw-flex tw-flex-wrap" }, [
                                      createVNode("div", { class: "tw-basis-1/2 md:tw-basis-1/3 xl:tw-basis-3/12 tw-mr-5" }, [
                                        createVNode("label", { class: "tw-font-semibold tw-text-[.95rem] tw-mb-3 tw-block tw-text-base" }, " Monto de la oferta* "),
                                        createVNode(_component_InputCPA, {
                                          outlined: "",
                                          type: "number",
                                          size: "sm",
                                          class: "tw-mb-3 tw-mt-2",
                                          modelValue: unref(proposalData).amount,
                                          "onUpdate:modelValue": ($event) => unref(proposalData).amount = $event,
                                          mask: "##0.00",
                                          "fill-mask": "",
                                          "reverse-fill-mask": "",
                                          rules: [(val) => !!val || "El valor es requerido"],
                                          disable: !!((_a2 = unref(authStore).user) == null ? void 0 : _a2.id)
                                        }, {
                                          prepend: withCtx(() => [
                                            createTextVNode("$")
                                          ]),
                                          append: withCtx(() => [
                                            createVNode("span", { class: "tw-text-sm" }, toDisplayString(
                                              "USD"
                                              /**TODO: colocar currency de cada projecto */
                                            ))
                                          ]),
                                          hint: withCtx(() => {
                                            var _a3, _b3;
                                            return [
                                              createVNode("p", { class: "tw-text-sm tw-text-black tw-whitespace-nowrap" }, " Pagado a usted: $" + toDisplayString(unref(proposalData).amount) + " - $" + toDisplayString((((_a3 = unref(proposalData).amount) != null ? _a3 : 0) * 0.05).toFixed(2)) + " tarifa = $" + toDisplayString((((_b3 = unref(proposalData).amount) != null ? _b3 : 0) * 0.95).toFixed(2)), 1)
                                            ];
                                          }),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue", "rules", "disable"])
                                      ]),
                                      createVNode("div", { class: "tw-basis-1/2 md:tw-basis-1/3 xl:tw-basis-3/12 tw-mr-5" }, [
                                        createVNode("label", { class: "tw-font-semibold tw-text-[.95rem] tw-mb-3 tw-block tw-text-base tw-whitespace-nowrap" }, " Este proyecto se entregar\xE1 en* "),
                                        createVNode(_component_InputCPA, {
                                          outlined: "",
                                          size: "sm",
                                          type: "number",
                                          class: "tw-mb-3 tw-mt-2",
                                          modelValue: unref(proposalData).days,
                                          "onUpdate:modelValue": ($event) => unref(proposalData).days = $event,
                                          disable: !!((_b2 = unref(authStore).user) == null ? void 0 : _b2.id)
                                        }, {
                                          append: withCtx(() => [
                                            createVNode("span", { class: "tw-text-sm" }, "Dias")
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue", "disable"])
                                      ])
                                    ]),
                                    createVNode("label", { class: "tw-font-semibold tw-text-[.95rem] tw-mb-3 tw-block tw-text-base tw-mt-10" }, " Describe tu propuesta (m\xEDnimo 100 caracteres)* "),
                                    createVNode(_component_Textarea, {
                                      placeholder: "\xBFQu\xE9 le convierte en el mejor candidato para este proyecto?",
                                      modelValue: unref(proposalData).description,
                                      "onUpdate:modelValue": ($event) => unref(proposalData).description = $event,
                                      class: "tw-h-28",
                                      disable: !!((_c = unref(authStore).user) == null ? void 0 : _c.id)
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disable"]),
                                    createVNode("label", { class: "tw-font-semibold tw-text-[.95rem] tw-mb-3 tw-block tw-text-base tw-mt-10" }, " Adjunta los archivos que desee "),
                                    createVNode(_component_Dropzone, {
                                      disable: !!((_d = unref(authStore).user) == null ? void 0 : _d.id),
                                      modelValue: unref(proposalData).files,
                                      "onUpdate:modelValue": ($event) => unref(proposalData).files = $event
                                    }, {
                                      title: withCtx(() => [
                                        createVNode("div", { class: "tw-flex tw-flex-col tw-items-center tw-justify-center" }, [
                                          createVNode(unref(Paperclip), {
                                            size: 50,
                                            class: "tw-mb-3"
                                          }),
                                          createVNode("p", { class: "tw-text-base tw-mb-3" }, toDisplayString(unref(proposalData).files ? ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.title") : ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.loadedMsg")), 1)
                                        ])
                                      ]),
                                      subtitle: withCtx(() => [
                                        unref(proposalData).files ? (openBlock(), createBlock("p", {
                                          key: 0,
                                          class: "tw-text-xs tw-text-center"
                                        }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(proposalData).files, (file, index) => {
                                            return openBlock(), createBlock("span", {
                                              class: "tw-mr-2",
                                              key: index
                                            }, toDisplayString(file.name), 1);
                                          }), 128))
                                        ])) : (openBlock(), createBlock("p", {
                                          key: 1,
                                          class: "tw-text-xs tw-text-center"
                                        }, toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.description")), 1))
                                      ]),
                                      _: 1
                                    }, 8, ["disable", "modelValue", "onUpdate:modelValue"]),
                                    createVNode("div", { class: "tw-flex tw-mt-10 tw-justify-end" }, [
                                      createVNode(_component_Button, {
                                        disabled: !!((_e = unref(authStore).user) == null ? void 0 : _e.id),
                                        type: "submit",
                                        class: "tw-text-lg !tw-px-16 tw-py-6 tw-font-semibold"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Enviar propuesta ")
                                        ]),
                                        _: 1
                                      }, 8, ["disabled"])
                                    ])
                                  ];
                                }),
                                _: 1
                              }, 512)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Card, { class: "tw-overflow-scroll md:tw-overflow-hidden" }, {
                      default: withCtx(() => [
                        createVNode(_component_CardHeader, null, {
                          default: withCtx(() => [
                            createVNode(_component_CardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Detalles de proyecto")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_CardContent, { class: "tw-px-6 tw-pb-10" }, {
                          default: withCtx(() => [
                            createVNode("p", { class: "text-h6 tw-text-base" }, toDisplayString(unref(project).description), 1),
                            createVNode(_component_CardTitle, { class: "tw-mt-10 tw-mb-7" }, {
                              default: withCtx(() => [
                                createTextVNode(" Habilidades necesarias ")
                              ]),
                              _: 1
                            }),
                            createVNode("ul", { class: "tw-flex tw-flex-wrap" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(project).categories, (item, index) => {
                                return openBlock(), createBlock("li", {
                                  key: `skill_${index}`,
                                  class: "tw-border tw-border-secondary tw-rounded-md tw-flex tw-px-10 tw-py-2 tw-h-min tw-mr-3 tw-mb-1"
                                }, toDisplayString(item.title), 1);
                              }), 128))
                            ]),
                            createVNode("p", { class: "tw-mb-0 tw-text-xs tw-mt-5" }, " ID del proyecto: " + toDisplayString(unref(project).id), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Card, { class: "tw-mt-10" }, {
                      default: withCtx(() => [
                        createVNode(_component_CardHeader, null, {
                          default: withCtx(() => [
                            createVNode(_component_CardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Detalles de proyecto")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_CardContent, { class: "tw-px-6 tw-pb-10" }, {
                          default: withCtx(() => [
                            createVNode(_component_q_form, {
                              onSubmit: withModifiers(sendProposal, ["prevent", "stop"]),
                              ref_key: "refForm",
                              ref: refForm
                            }, {
                              default: withCtx(() => {
                                var _a2, _b2, _c, _d, _e;
                                return [
                                  createVNode("p", { class: "text-h6 tw-text-base tw-mb-10" }, " Podr\xE1s editar tu oferta hasta que el proyecto sea adjudicado a alguien. "),
                                  createVNode("div", { class: "tw-flex tw-flex-wrap" }, [
                                    createVNode("div", { class: "tw-basis-1/2 md:tw-basis-1/3 xl:tw-basis-3/12 tw-mr-5" }, [
                                      createVNode("label", { class: "tw-font-semibold tw-text-[.95rem] tw-mb-3 tw-block tw-text-base" }, " Monto de la oferta* "),
                                      createVNode(_component_InputCPA, {
                                        outlined: "",
                                        type: "number",
                                        size: "sm",
                                        class: "tw-mb-3 tw-mt-2",
                                        modelValue: unref(proposalData).amount,
                                        "onUpdate:modelValue": ($event) => unref(proposalData).amount = $event,
                                        mask: "##0.00",
                                        "fill-mask": "",
                                        "reverse-fill-mask": "",
                                        rules: [(val) => !!val || "El valor es requerido"],
                                        disable: !!((_a2 = unref(authStore).user) == null ? void 0 : _a2.id)
                                      }, {
                                        prepend: withCtx(() => [
                                          createTextVNode("$")
                                        ]),
                                        append: withCtx(() => [
                                          createVNode("span", { class: "tw-text-sm" }, toDisplayString(
                                            "USD"
                                            /**TODO: colocar currency de cada projecto */
                                          ))
                                        ]),
                                        hint: withCtx(() => {
                                          var _a3, _b3;
                                          return [
                                            createVNode("p", { class: "tw-text-sm tw-text-black tw-whitespace-nowrap" }, " Pagado a usted: $" + toDisplayString(unref(proposalData).amount) + " - $" + toDisplayString((((_a3 = unref(proposalData).amount) != null ? _a3 : 0) * 0.05).toFixed(2)) + " tarifa = $" + toDisplayString((((_b3 = unref(proposalData).amount) != null ? _b3 : 0) * 0.95).toFixed(2)), 1)
                                          ];
                                        }),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue", "rules", "disable"])
                                    ]),
                                    createVNode("div", { class: "tw-basis-1/2 md:tw-basis-1/3 xl:tw-basis-3/12 tw-mr-5" }, [
                                      createVNode("label", { class: "tw-font-semibold tw-text-[.95rem] tw-mb-3 tw-block tw-text-base tw-whitespace-nowrap" }, " Este proyecto se entregar\xE1 en* "),
                                      createVNode(_component_InputCPA, {
                                        outlined: "",
                                        size: "sm",
                                        type: "number",
                                        class: "tw-mb-3 tw-mt-2",
                                        modelValue: unref(proposalData).days,
                                        "onUpdate:modelValue": ($event) => unref(proposalData).days = $event,
                                        disable: !!((_b2 = unref(authStore).user) == null ? void 0 : _b2.id)
                                      }, {
                                        append: withCtx(() => [
                                          createVNode("span", { class: "tw-text-sm" }, "Dias")
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue", "disable"])
                                    ])
                                  ]),
                                  createVNode("label", { class: "tw-font-semibold tw-text-[.95rem] tw-mb-3 tw-block tw-text-base tw-mt-10" }, " Describe tu propuesta (m\xEDnimo 100 caracteres)* "),
                                  createVNode(_component_Textarea, {
                                    placeholder: "\xBFQu\xE9 le convierte en el mejor candidato para este proyecto?",
                                    modelValue: unref(proposalData).description,
                                    "onUpdate:modelValue": ($event) => unref(proposalData).description = $event,
                                    class: "tw-h-28",
                                    disable: !!((_c = unref(authStore).user) == null ? void 0 : _c.id)
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "disable"]),
                                  createVNode("label", { class: "tw-font-semibold tw-text-[.95rem] tw-mb-3 tw-block tw-text-base tw-mt-10" }, " Adjunta los archivos que desee "),
                                  createVNode(_component_Dropzone, {
                                    disable: !!((_d = unref(authStore).user) == null ? void 0 : _d.id),
                                    modelValue: unref(proposalData).files,
                                    "onUpdate:modelValue": ($event) => unref(proposalData).files = $event
                                  }, {
                                    title: withCtx(() => [
                                      createVNode("div", { class: "tw-flex tw-flex-col tw-items-center tw-justify-center" }, [
                                        createVNode(unref(Paperclip), {
                                          size: 50,
                                          class: "tw-mb-3"
                                        }),
                                        createVNode("p", { class: "tw-text-base tw-mb-3" }, toDisplayString(unref(proposalData).files ? ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.title") : ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.loadedMsg")), 1)
                                      ])
                                    ]),
                                    subtitle: withCtx(() => [
                                      unref(proposalData).files ? (openBlock(), createBlock("p", {
                                        key: 0,
                                        class: "tw-text-xs tw-text-center"
                                      }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(proposalData).files, (file, index) => {
                                          return openBlock(), createBlock("span", {
                                            class: "tw-mr-2",
                                            key: index
                                          }, toDisplayString(file.name), 1);
                                        }), 128))
                                      ])) : (openBlock(), createBlock("p", {
                                        key: 1,
                                        class: "tw-text-xs tw-text-center"
                                      }, toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.description")), 1))
                                    ]),
                                    _: 1
                                  }, 8, ["disable", "modelValue", "onUpdate:modelValue"]),
                                  createVNode("div", { class: "tw-flex tw-mt-10 tw-justify-end" }, [
                                    createVNode(_component_Button, {
                                      disabled: !!((_e = unref(authStore).user) == null ? void 0 : _e.id),
                                      type: "submit",
                                      class: "tw-text-lg !tw-px-16 tw-py-6 tw-font-semibold"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Enviar propuesta ")
                                      ]),
                                      _: 1
                                    }, 8, ["disabled"])
                                  ])
                                ];
                              }),
                              _: 1
                            }, 512)
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_q_tab_panel, {
              class: "tw-p-0",
              name: "proposal"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="tw-mb-10" data-v-31352e4b${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(project).bids, (proposal) => {
                    var _a2;
                    _push3(ssrRenderComponent(_component_CardProposal, {
                      onOnSelectProposal: ($event) => handleSelectProposal(proposal),
                      selected: proposal.selected === 1,
                      key: `proposal_${proposal.id}`,
                      id: proposal.id,
                      rating: 0,
                      "delivery-days": proposal.deliveryDays,
                      amount: proposal.amount,
                      img: (_a2 = proposal.creator) == null ? void 0 : _a2.mediaFiles.profile.path
                    }, {
                      name: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a4, _b3;
                        var _a3, _b2, _c, _d;
                        if (_push4) {
                          _push4(`${ssrInterpolate((_a4 = (_a3 = proposal.creator.extraFields.companyName) == null ? void 0 : _a3.value) != null ? _a4 : (_b2 = proposal.creator) == null ? void 0 : _b2.fullName)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString((_b3 = (_c = proposal.creator.extraFields.companyName) == null ? void 0 : _c.value) != null ? _b3 : (_d = proposal.creator) == null ? void 0 : _d.fullName), 1)
                          ];
                        }
                      }),
                      username: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a3, _b2;
                        if (_push4) {
                          _push4(`${ssrInterpolate((_a3 = proposal.creator) == null ? void 0 : _a3.fullName)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString((_b2 = proposal.creator) == null ? void 0 : _b2.fullName), 1)
                          ];
                        }
                      }),
                      description: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(proposal.description)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(proposal.description), 1)
                          ];
                        }
                      }),
                      subtitle: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a4, _b3;
                        var _a3, _b2;
                        if (_push4) {
                          _push4(`${ssrInterpolate(`${(_a4 = (_a3 = proposal.creator.extraFields.description) == null ? void 0 : _a3.value) != null ? _a4 : ""}`.slice(0, 50))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(`${(_b3 = (_b2 = proposal.creator.extraFields.description) == null ? void 0 : _b2.value) != null ? _b3 : ""}`.slice(0, 50)), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "tw-mb-10" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(project).bids, (proposal) => {
                        var _a2;
                        return openBlock(), createBlock(_component_CardProposal, {
                          onOnSelectProposal: ($event) => handleSelectProposal(proposal),
                          selected: proposal.selected === 1,
                          key: `proposal_${proposal.id}`,
                          id: proposal.id,
                          rating: 0,
                          "delivery-days": proposal.deliveryDays,
                          amount: proposal.amount,
                          img: (_a2 = proposal.creator) == null ? void 0 : _a2.mediaFiles.profile.path
                        }, {
                          name: withCtx(() => {
                            var _a4;
                            var _a3, _b2;
                            return [
                              createTextVNode(toDisplayString((_a4 = (_a3 = proposal.creator.extraFields.companyName) == null ? void 0 : _a3.value) != null ? _a4 : (_b2 = proposal.creator) == null ? void 0 : _b2.fullName), 1)
                            ];
                          }),
                          username: withCtx(() => {
                            var _a3;
                            return [
                              createTextVNode(toDisplayString((_a3 = proposal.creator) == null ? void 0 : _a3.fullName), 1)
                            ];
                          }),
                          description: withCtx(() => [
                            createTextVNode(toDisplayString(proposal.description), 1)
                          ]),
                          subtitle: withCtx(() => {
                            var _a4;
                            var _a3;
                            return [
                              createTextVNode(toDisplayString(`${(_a4 = (_a3 = proposal.creator.extraFields.description) == null ? void 0 : _a3.value) != null ? _a4 : ""}`.slice(0, 50)), 1)
                            ];
                          }),
                          _: 2
                        }, 1032, ["onOnSelectProposal", "selected", "id", "delivery-days", "amount", "img"]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_q_tab_panel, {
                class: "tw-p-0",
                name: "details"
              }, {
                default: withCtx(() => [
                  createVNode(_component_Card, { class: "tw-overflow-scroll md:tw-overflow-hidden" }, {
                    default: withCtx(() => [
                      createVNode(_component_CardHeader, null, {
                        default: withCtx(() => [
                          createVNode(_component_CardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Detalles de proyecto")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_CardContent, { class: "tw-px-6 tw-pb-10" }, {
                        default: withCtx(() => [
                          createVNode("p", { class: "text-h6 tw-text-base" }, toDisplayString(unref(project).description), 1),
                          createVNode(_component_CardTitle, { class: "tw-mt-10 tw-mb-7" }, {
                            default: withCtx(() => [
                              createTextVNode(" Habilidades necesarias ")
                            ]),
                            _: 1
                          }),
                          createVNode("ul", { class: "tw-flex tw-flex-wrap" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(project).categories, (item, index) => {
                              return openBlock(), createBlock("li", {
                                key: `skill_${index}`,
                                class: "tw-border tw-border-secondary tw-rounded-md tw-flex tw-px-10 tw-py-2 tw-h-min tw-mr-3 tw-mb-1"
                              }, toDisplayString(item.title), 1);
                            }), 128))
                          ]),
                          createVNode("p", { class: "tw-mb-0 tw-text-xs tw-mt-5" }, " ID del proyecto: " + toDisplayString(unref(project).id), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Card, { class: "tw-mt-10" }, {
                    default: withCtx(() => [
                      createVNode(_component_CardHeader, null, {
                        default: withCtx(() => [
                          createVNode(_component_CardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Detalles de proyecto")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_CardContent, { class: "tw-px-6 tw-pb-10" }, {
                        default: withCtx(() => [
                          createVNode(_component_q_form, {
                            onSubmit: withModifiers(sendProposal, ["prevent", "stop"]),
                            ref_key: "refForm",
                            ref: refForm
                          }, {
                            default: withCtx(() => {
                              var _a2, _b2, _c, _d, _e;
                              return [
                                createVNode("p", { class: "text-h6 tw-text-base tw-mb-10" }, " Podr\xE1s editar tu oferta hasta que el proyecto sea adjudicado a alguien. "),
                                createVNode("div", { class: "tw-flex tw-flex-wrap" }, [
                                  createVNode("div", { class: "tw-basis-1/2 md:tw-basis-1/3 xl:tw-basis-3/12 tw-mr-5" }, [
                                    createVNode("label", { class: "tw-font-semibold tw-text-[.95rem] tw-mb-3 tw-block tw-text-base" }, " Monto de la oferta* "),
                                    createVNode(_component_InputCPA, {
                                      outlined: "",
                                      type: "number",
                                      size: "sm",
                                      class: "tw-mb-3 tw-mt-2",
                                      modelValue: unref(proposalData).amount,
                                      "onUpdate:modelValue": ($event) => unref(proposalData).amount = $event,
                                      mask: "##0.00",
                                      "fill-mask": "",
                                      "reverse-fill-mask": "",
                                      rules: [(val) => !!val || "El valor es requerido"],
                                      disable: !!((_a2 = unref(authStore).user) == null ? void 0 : _a2.id)
                                    }, {
                                      prepend: withCtx(() => [
                                        createTextVNode("$")
                                      ]),
                                      append: withCtx(() => [
                                        createVNode("span", { class: "tw-text-sm" }, toDisplayString(
                                          "USD"
                                          /**TODO: colocar currency de cada projecto */
                                        ))
                                      ]),
                                      hint: withCtx(() => {
                                        var _a3, _b3;
                                        return [
                                          createVNode("p", { class: "tw-text-sm tw-text-black tw-whitespace-nowrap" }, " Pagado a usted: $" + toDisplayString(unref(proposalData).amount) + " - $" + toDisplayString((((_a3 = unref(proposalData).amount) != null ? _a3 : 0) * 0.05).toFixed(2)) + " tarifa = $" + toDisplayString((((_b3 = unref(proposalData).amount) != null ? _b3 : 0) * 0.95).toFixed(2)), 1)
                                        ];
                                      }),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue", "rules", "disable"])
                                  ]),
                                  createVNode("div", { class: "tw-basis-1/2 md:tw-basis-1/3 xl:tw-basis-3/12 tw-mr-5" }, [
                                    createVNode("label", { class: "tw-font-semibold tw-text-[.95rem] tw-mb-3 tw-block tw-text-base tw-whitespace-nowrap" }, " Este proyecto se entregar\xE1 en* "),
                                    createVNode(_component_InputCPA, {
                                      outlined: "",
                                      size: "sm",
                                      type: "number",
                                      class: "tw-mb-3 tw-mt-2",
                                      modelValue: unref(proposalData).days,
                                      "onUpdate:modelValue": ($event) => unref(proposalData).days = $event,
                                      disable: !!((_b2 = unref(authStore).user) == null ? void 0 : _b2.id)
                                    }, {
                                      append: withCtx(() => [
                                        createVNode("span", { class: "tw-text-sm" }, "Dias")
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue", "disable"])
                                  ])
                                ]),
                                createVNode("label", { class: "tw-font-semibold tw-text-[.95rem] tw-mb-3 tw-block tw-text-base tw-mt-10" }, " Describe tu propuesta (m\xEDnimo 100 caracteres)* "),
                                createVNode(_component_Textarea, {
                                  placeholder: "\xBFQu\xE9 le convierte en el mejor candidato para este proyecto?",
                                  modelValue: unref(proposalData).description,
                                  "onUpdate:modelValue": ($event) => unref(proposalData).description = $event,
                                  class: "tw-h-28",
                                  disable: !!((_c = unref(authStore).user) == null ? void 0 : _c.id)
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "disable"]),
                                createVNode("label", { class: "tw-font-semibold tw-text-[.95rem] tw-mb-3 tw-block tw-text-base tw-mt-10" }, " Adjunta los archivos que desee "),
                                createVNode(_component_Dropzone, {
                                  disable: !!((_d = unref(authStore).user) == null ? void 0 : _d.id),
                                  modelValue: unref(proposalData).files,
                                  "onUpdate:modelValue": ($event) => unref(proposalData).files = $event
                                }, {
                                  title: withCtx(() => [
                                    createVNode("div", { class: "tw-flex tw-flex-col tw-items-center tw-justify-center" }, [
                                      createVNode(unref(Paperclip), {
                                        size: 50,
                                        class: "tw-mb-3"
                                      }),
                                      createVNode("p", { class: "tw-text-base tw-mb-3" }, toDisplayString(unref(proposalData).files ? ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.title") : ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.loadedMsg")), 1)
                                    ])
                                  ]),
                                  subtitle: withCtx(() => [
                                    unref(proposalData).files ? (openBlock(), createBlock("p", {
                                      key: 0,
                                      class: "tw-text-xs tw-text-center"
                                    }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(proposalData).files, (file, index) => {
                                        return openBlock(), createBlock("span", {
                                          class: "tw-mr-2",
                                          key: index
                                        }, toDisplayString(file.name), 1);
                                      }), 128))
                                    ])) : (openBlock(), createBlock("p", {
                                      key: 1,
                                      class: "tw-text-xs tw-text-center"
                                    }, toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.description")), 1))
                                  ]),
                                  _: 1
                                }, 8, ["disable", "modelValue", "onUpdate:modelValue"]),
                                createVNode("div", { class: "tw-flex tw-mt-10 tw-justify-end" }, [
                                  createVNode(_component_Button, {
                                    disabled: !!((_e = unref(authStore).user) == null ? void 0 : _e.id),
                                    type: "submit",
                                    class: "tw-text-lg !tw-px-16 tw-py-6 tw-font-semibold"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Enviar propuesta ")
                                    ]),
                                    _: 1
                                  }, 8, ["disabled"])
                                ])
                              ];
                            }),
                            _: 1
                          }, 512)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_q_tab_panel, {
                class: "tw-p-0",
                name: "proposal"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "tw-mb-10" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(project).bids, (proposal) => {
                      var _a2;
                      return openBlock(), createBlock(_component_CardProposal, {
                        onOnSelectProposal: ($event) => handleSelectProposal(proposal),
                        selected: proposal.selected === 1,
                        key: `proposal_${proposal.id}`,
                        id: proposal.id,
                        rating: 0,
                        "delivery-days": proposal.deliveryDays,
                        amount: proposal.amount,
                        img: (_a2 = proposal.creator) == null ? void 0 : _a2.mediaFiles.profile.path
                      }, {
                        name: withCtx(() => {
                          var _a4;
                          var _a3, _b2;
                          return [
                            createTextVNode(toDisplayString((_a4 = (_a3 = proposal.creator.extraFields.companyName) == null ? void 0 : _a3.value) != null ? _a4 : (_b2 = proposal.creator) == null ? void 0 : _b2.fullName), 1)
                          ];
                        }),
                        username: withCtx(() => {
                          var _a3;
                          return [
                            createTextVNode(toDisplayString((_a3 = proposal.creator) == null ? void 0 : _a3.fullName), 1)
                          ];
                        }),
                        description: withCtx(() => [
                          createTextVNode(toDisplayString(proposal.description), 1)
                        ]),
                        subtitle: withCtx(() => {
                          var _a4;
                          var _a3;
                          return [
                            createTextVNode(toDisplayString(`${(_a4 = (_a3 = proposal.creator.extraFields.description) == null ? void 0 : _a3.value) != null ? _a4 : ""}`.slice(0, 50)), 1)
                          ];
                        }),
                        _: 2
                      }, 1032, ["onOnSelectProposal", "selected", "id", "delivery-days", "amount", "img"]);
                    }), 128))
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><aside class="tw-mt-5 md:tw-mt-0 tw-basis-full md:tw-basis-80" data-v-31352e4b><div class="tw-bg-secondary tw-rounded-md !tw-text-white tw-p-6 tw-ml-5" data-v-31352e4b><h2 class="tw-text-xl tw-font-bold tw-mb-8" data-v-31352e4b>Acerca del Cliente</h2><div class="tw-flex tw-mb-4" data-v-31352e4b>`);
      _push(ssrRenderComponent(unref(MapPinIcon), {
        class: "tw-text-primary tw-inline-block tw-mr-3",
        size: 20
      }, null, _parent));
      _push(`<p data-v-31352e4b>${ssrInterpolate((_a = unref(project).city) == null ? void 0 : _a.name)}</p></div><div class="tw-flex tw-mb-4" data-v-31352e4b>`);
      _push(ssrRenderComponent(unref(FlagIcon), {
        class: "tw-text-primary tw-inline-block tw-mr-3",
        size: 20
      }, null, _parent));
      _push(`<p data-v-31352e4b>${ssrInterpolate((_b = unref(project).country) == null ? void 0 : _b.name)}</p></div><div class="tw-flex tw-mb-4" data-v-31352e4b>`);
      _push(ssrRenderComponent(unref(UserIcon), {
        class: "tw-text-primary tw-inline-block tw-mr-3",
        size: 20
      }, null, _parent));
      _push(ssrRenderComponent(_component_RatingIndicator, {
        starClass: "tw-text-lg tw-mr-1",
        rating: 4
      }, null, _parent));
      _push(`</div><div class="tw-flex tw-mb-4" data-v-31352e4b>`);
      _push(ssrRenderComponent(unref(Clock9Icon), {
        class: "tw-text-primary tw-inline-block tw-mr-3",
        size: 20
      }, null, _parent));
      _push(`<p data-v-31352e4b> Miembro desde el ${ssrInterpolate(unref(memberSince).getDate())}/${ssrInterpolate(unref(memberSince).getMonth() + 1)}/${ssrInterpolate(unref(memberSince).getFullYear())}</p></div><h4 class="tw-leading-none tw-text-lg tw-font-bold tw-h-min tw-flex-1 tw-mt-8 tw-mb-5" data-v-31352e4b> Verificaci\xF3n del cliente </h4><div class="tw-flex tw-mb-4" data-v-31352e4b>`);
      _push(ssrRenderComponent(unref(IdCardIcon), {
        class: "tw-text-primary tw-inline-block tw-mr-3",
        size: 20
      }, null, _parent));
      _push(`<p data-v-31352e4b>xxx-xxx</p></div><div class="tw-flex tw-mb-4" data-v-31352e4b>`);
      _push(ssrRenderComponent(unref(ShieldCheckIcon), {
        class: "tw-text-primary tw-inline-block tw-mr-3",
        size: 20
      }, null, _parent));
      _push(`<p data-v-31352e4b>xxx-xxx</p></div><div class="tw-flex tw-mb-4" data-v-31352e4b>`);
      _push(ssrRenderComponent(unref(WalletIcon), {
        class: "tw-text-primary tw-inline-block tw-mr-3",
        size: 20
      }, null, _parent));
      _push(`<p data-v-31352e4b>xxx-xxx</p></div><div class="tw-flex tw-mb-4" data-v-31352e4b>`);
      _push(ssrRenderComponent(unref(MailCheckIcon), {
        class: "tw-text-primary tw-inline-block tw-mr-3",
        size: 20
      }, null, _parent));
      _push(`<p data-v-31352e4b>xxx-xxx</p></div><div class="tw-flex tw-mb-4" data-v-31352e4b>`);
      _push(ssrRenderComponent(unref(UserCheck2Icon), {
        class: "tw-text-primary tw-inline-block tw-mr-3",
        size: 20
      }, null, _parent));
      _push(`<p data-v-31352e4b>xxx-xxx</p></div><div class="tw-flex tw-mb-4" data-v-31352e4b>`);
      _push(ssrRenderComponent(unref(PhoneIcon), {
        class: "tw-text-primary tw-inline-block tw-mr-3",
        size: 20
      }, null, _parent));
      _push(`<p data-v-31352e4b>xxx-xxx</p></div></div></aside></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-31352e4b"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-Ce5VTUyS.mjs.map
