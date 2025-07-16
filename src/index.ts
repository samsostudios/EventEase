import loadComponent from '$utils/loadComponent';
import { initSmoothScroll } from '$utils/smoothScroll';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('/// mainJS ///');

  initSmoothScroll();

  loadComponent('[data-faq-section]', () => import('$components/faq'));
});
