function r(r,o,t){if(t||2===arguments.length)for(var e,i=0,n=o.length;i<n;i++)!e&&i in o||(e||(e=Array.prototype.slice.call(o,0,i)),e[i]=o[i]);return r.concat(e||Array.prototype.slice.call(o))}function o(t,e,i,n,p){var l;if(void 0===i&&(i=[]),void 0===n&&(n={stop:!1}),void 0===p&&(p="children"),Array.isArray(t))for(var a=0,c=t.length;a<c&&(e(t[a],a,i,n),!n.stop);a++){var s=(null===(l=t[a])||void 0===l?void 0:l[p])||[],v=t[a];i.push(v),s&&s.length&&o(s,e,r([],i,!0),n),i.pop()}}"function"==typeof SuppressedError&&SuppressedError;export{o as walk};
