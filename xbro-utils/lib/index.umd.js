!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports):"function"==typeof define&&define.amd?define(["exports"],o):o((e="undefined"!=typeof globalThis?globalThis:e||self).XbroUtils={})}(this,(function(e){"use strict";function o(e,o,r){if(r||2===arguments.length)for(var t,i=0,n=o.length;i<n;i++)!t&&i in o||(t||(t=Array.prototype.slice.call(o,0,i)),t[i]=o[i]);return e.concat(t||Array.prototype.slice.call(o))}"function"==typeof SuppressedError&&SuppressedError,e.walk=function e(r,t,i,n,f){var l;if(void 0===i&&(i=[]),void 0===n&&(n={stop:!1}),void 0===f&&(f="children"),Array.isArray(r))for(var p=0,s=r.length;p<s&&(t(r[p],p,i,n),!n.stop);p++){var d=(null===(l=r[p])||void 0===l?void 0:l[f])||[],a=r[p];i.push(a),d&&d.length&&e(d,t,o([],i,!0),n),i.pop()}}}));