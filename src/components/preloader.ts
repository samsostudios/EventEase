import gsap from 'gsap';

import { startSmoothScroll, stopSmoothScroll } from '$utils/smoothScroll';

class Preloader {
  private component: HTMLElement;
  private loader: HTMLElement;
  private loaderBar: HTMLElement;
  private text: HTMLElement;

  constructor() {
    this.component = document.querySelector('.component_preloader') as HTMLElement;
    this.loader = this.component.querySelector('.preloader_loader') as HTMLElement;
    this.loaderBar = this.component.querySelector('.preloader_loader-bar') as HTMLElement;
    this.text = this.component.querySelector('.preloader_text') as HTMLElement;

    stopSmoothScroll();
    this.animate();
  }

  private animate() {
    const tl = gsap.timeline({
      onComplete: () => {
        this.reveal();
      },
    });
    tl.to(this.loaderBar, { x: '0%', duration: 1, ease: 'power3.inOut' });
  }

  private reveal() {
    const tl = gsap.timeline();
    tl.to(this.loaderBar, { delay: 0.2, x: '100%', duration: 1, ease: 'power3.inOut' });
    tl.to(this.loader, { opacity: 0, ease: 'power1.out' });
    tl.to(this.text, { opacity: 0, ease: 'power1.out' }, '<');
    tl.to(this.component, { opacity: 0, ease: 'power1.out' });

    tl.set(this.component, { display: 'none' });

    const dur = tl.duration();
    const calcOffset = dur - 0.6;

    setTimeout(() => {
      startSmoothScroll();
    }, calcOffset);
  }
}
export const preloader = () => {
  new Preloader();
};
export default preloader;
