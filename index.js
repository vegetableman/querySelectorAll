var isDom = require('is-dom');

function querySelectorAll(selector) {
    if (isDom(selector)) return [selector];
    else if (typeof selector === "string") return [].slice.call(document.querySelectorAll(selector));
}

module.exports = querySelectorAll;
