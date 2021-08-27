/* eslint
"no-param-reassign": ["error", { "props": false }]
"no-console": ["error", { allow: ["warn", "error"] }]
*/

import Vue from 'vue';

// Directive
Vue.directive('vpshow-scroll', {
  inViewport(el) {
    const rect = el.getBoundingClientRect();
    return !(
      rect.bottom < 0
      || rect.right < 0
      || rect.left > window.innerWidth
      || rect.top > window.innerHeight
    );
  },
  bind(el, binding) {
    const transitionStyle = binding.value || 'fade';
    const onEnterTransition = `vp-show-${transitionStyle}-enter`;
    const beforeEnterClass = `vp-show-${transitionStyle}-before-enter`;
    el.classList.add(beforeEnterClass);
    el.$onScroll = () => {
      if (binding.def.inViewport(el)) {
        el.classList.add(onEnterTransition);
        el.classList.remove(beforeEnterClass);
        binding.def.unbind(el, binding);
      }
    };
    document.addEventListener('scroll', el.$onScroll);
  },
  inserted(el) {
    el.$onScroll();
  },
  unbind(el) {
    document.removeEventListener('scroll', el.$onScroll);
    delete el.$onScroll;
  },
});
