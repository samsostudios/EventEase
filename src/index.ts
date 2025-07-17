import { heroReveal } from '$animation/home';
import loadComponent from '$utils/loadComponent';
import { initSmoothScroll } from '$utils/smoothScroll';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('/// mainJS ///');

  initSmoothScroll();
  heroReveal();

  loadComponent('.component_preloader', () => import('$components/preloader'));
  loadComponent('[data-faq-section]', () => import('$components/faq'));
});
