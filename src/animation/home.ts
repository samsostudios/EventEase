import gsap from 'gsap';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

export const heroReveal = () => {
  const component = document.querySelector('.section_hero') as HTMLElement;
  const header = component.querySelector('.hero_header') as HTMLElement;

  const title = header.children[0];

  const split = SplitText.create(title);

  const tl = gsap.timeline();
  tl.fromTo(split.words, { y: '100%', opacity: 0 }, { y: '0%', opacity: 1, stagger: 0.1 });
};
