var XbroUtils=function(r){"use strict";function o(r,o,t){if(t||2===arguments.length)for(var i,n=0,e=o.length;n<e;n++)!i&&n in o||(i||(i=Array.prototype.slice.call(o,0,n)),i[n]=o[n]);return r.concat(i||Array.prototype.slice.call(o))}return"function"==typeof SuppressedError&&SuppressedError,r.walk=function r(t,i,n,e,l){var p;if(void 0===n&&(n=[]),void 0===e&&(e={stop:!1}),void 0===l&&(l="children"),Array.isArray(t))for(var a=0,s=t.length;a<s&&(i(t[a],a,n,e),!e.stop);a++){var c=(null===(p=t[a])||void 0===p?void 0:p[l])||[],u=t[a];n.push(u),c&&c.length&&r(c,i,o([],n,!0),e),n.pop()}},r}({});
