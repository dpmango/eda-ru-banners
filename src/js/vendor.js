import $ from 'jquery';
import svg4everybody from 'svg4everybody';
import picturefill from 'picturefill';
import viewportUnitsBuggyfill from 'viewport-units-buggyfill';
import objectFitImages from 'object-fit-images/dist/ofi.es-modules.js';
import AOS from 'aos';

// expose imports to window to use in app.js
// (jquery is exposed in expose-loader)
window.jQuery = $;
window.$ = $;
window.svg4everybody = svg4everybody;
window.picturefill = picturefill;
window.objectFitImages = objectFitImages;
window.viewportUnitsBuggyfill = viewportUnitsBuggyfill;
window.AOS = AOS;
