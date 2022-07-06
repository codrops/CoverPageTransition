import { TextLinesReveal } from './textLinesReveal';

/**
 * Class representing a Preview
 */
export class Preview {
	// DOM elements
	DOM = {
		// main element (.preview)
		el: null,
		// image element (.preview__img)
		image: null,
		// image inner element (.preview__img-inner)
		imageInner: null,
		// title
		title: null,
		// backCtrl
		backCtrl: null,

		// oh__inner elements
		innerElements: null,
		multiLineWrap: null,
	};
	multiLines = [];
	
	/**
	 * Constructor.
	 * @param {Element} DOM_el - main element (.preview)
	 */
	constructor(DOM_el) {
		this.DOM.el = DOM_el;
		this.DOM.image = this.DOM.el.querySelector('.preview__img');
		this.DOM.imageInner = this.DOM.el.querySelector('.preview__img-inner');
		this.DOM.title = this.DOM.el.querySelector('.preview__title');
		this.DOM.backCtrl = this.DOM.el.querySelector('.preview__back');

		this.DOM.innerElements = [...this.DOM.el.querySelectorAll('.oh__inner')];
		// the TextLinesReveal instance (animate each text line using the SplitText library)
		this.DOM.multiLineWrap = [...this.DOM.el.querySelectorAll('.preview__column > p')];
		this.DOM.multiLineWrap.forEach(line => this.multiLines.push(new TextLinesReveal(line)));
	}
}