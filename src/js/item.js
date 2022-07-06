import { gsap } from 'gsap';

/**
 * Class representing a Grid Item
 */
 export class Item {
    // DOM elements
	DOM = {
		// main element (.item)
		el: null,
        // image element (.item__img)
        image: null,
        // image inner element (.item__img-inner)
        imageInner: null,
        // item link (.item__link)
        link: null,
        // item meta (.item__meta)
        meta: null,
        // item link (.item__title)
        title: null,
        // item link (.item__desc)
        desc: null,
	}
    
    /**
	 * Constructor.
	 * @param {Element} DOM_el - main element (.item)
     * @param {Preview} previewEl - the Preview element
	 */
	constructor(DOM_el, previewEl) {
		this.DOM.el = DOM_el;
        this.preview = previewEl;
        this.DOM.image = this.DOM.el.querySelector('.item__img');
        this.DOM.imageInner = this.DOM.el.querySelector('.item__img-inner');
        this.DOM.link = this.DOM.el.querySelector('.item__link');
        this.DOM.meta = this.DOM.el.querySelector('.item__meta');
        this.DOM.title = this.DOM.el.querySelector('.item__title');
        this.DOM.desc = this.DOM.el.querySelector('.item__desc');

        this.DOM.link.addEventListener('mouseenter', () => {
            gsap.killTweensOf(this.DOM.imageInner);
            gsap.to(this.DOM.imageInner, {
                duration: 2,
                ease: 'power4',
                scale: 1.2
            });
        });
        this.DOM.link.addEventListener('mouseleave', () => {
            gsap.killTweensOf(this.DOM.imageInner);
            gsap.to(this.DOM.imageInner, {
                duration: 0.7,
                ease: 'expo',
                scale: 1
            });
        });
	}
}