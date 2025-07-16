import gsap from 'gsap';

class FAQ {
  private component: HTMLElement;
  private items: HTMLElement[];
  private answers: HTMLElement[];
  constructor() {
    this.component = document.querySelector('[data-faq-section]') as HTMLElement;
    // if (!this.component) return;

    this.items = [...this.component.querySelectorAll('.faq_item')] as HTMLElement[];
    this.answers = [...this.component.querySelectorAll('.faq_item-a')] as HTMLElement[];

    this.initUI();
    this.setListeners();
  }

  private initUI() {
    gsap.set(this.answers, { height: 0 });
  }

  private setListeners() {
    this.items.forEach((item) => {
      let isOpen = false;

      console.log('FAQ', item);
      item.addEventListener('click', () => {
        const getAnswer = item.querySelector('.faq_item-a');
        const getIcon = item.querySelector('.faq_icon');

        if (isOpen) {
          gsap.to(getAnswer, { height: '0', ease: 'power3.inOut' });
          gsap.to(getIcon, { rotate: 180, ease: 'power3.inOut' });
        } else {
          gsap.to(getAnswer, { height: 'auto', ease: 'power3.inOut' });
          gsap.to(getIcon, { rotate: 0, ease: 'power3.inOut' });
        }
        isOpen = !isOpen;
      });
    });
  }
}

export const faq = () => {
  new FAQ();
};
export default faq;
