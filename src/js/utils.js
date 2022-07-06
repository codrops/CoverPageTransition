const imagesLoaded = require('imagesloaded');

/**
 * Preload images
 * @param {String} selector - Selector/scope from where images need to be preloaded. Default is 'img'
 */
const preloadImages = (selector = 'img') => {
    return new Promise((resolve) => {
        imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
    });
};

/**
 * Wraps the elements of an array.
 * @param {Array} arr - the array of elements to be wrapped
 * @param {String} wrapType - the type of the wrap element ('div', 'span' etc)
 * @param {String} wrapClass - the wrap class(es)
 */
const wrapLines = (arr, wrapType, wrapClass) => {
    arr.forEach(el => {
        const wrapEl = document.createElement(wrapType);
        wrapEl.classList = wrapClass;
        el.parentNode.appendChild(wrapEl);
        wrapEl.appendChild(el);
    });
}

export {
    preloadImages,
    wrapLines
};