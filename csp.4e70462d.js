!function(e,t,r,n){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof o.parcelRequire&&o.parcelRequire,s="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(r,n){if(!t[r]){if(!e[r]){var o="function"==typeof parcelRequire&&parcelRequire;if(!n&&o)return o(r,!0);if(i)return i(r,!0);if(s&&"string"==typeof r)return s(r);var f=new Error("Cannot find module '"+r+"'");throw f.code="MODULE_NOT_FOUND",f}a.resolve=function(t){return e[r][1][t]||t},a.cache={};var c=t[r]=new u.Module(r);e[r][0].call(c.exports,a,c,c.exports,this)}return t[r].exports;function a(e){return u(a.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=t,u.parent=i,u.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},o.parcelRequire=u;for(var f=0;f<r.length;f++)u(r[f]);if(r.length){var c=u(r[r.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd&&define((function(){return c}))}}({"06741ddc478305cae421f621c851661c":[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.language=r.conf=void 0;r.conf={brackets:[],autoClosingPairs:[],surroundingPairs:[]};r.language={keywords:[],typeKeywords:[],tokenPostfix:".csp",operators:[],symbols:/[=><!~?:&|+\-*\/\^%]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[[/child-src/,"string.quote"],[/connect-src/,"string.quote"],[/default-src/,"string.quote"],[/font-src/,"string.quote"],[/frame-src/,"string.quote"],[/img-src/,"string.quote"],[/manifest-src/,"string.quote"],[/media-src/,"string.quote"],[/object-src/,"string.quote"],[/script-src/,"string.quote"],[/style-src/,"string.quote"],[/worker-src/,"string.quote"],[/base-uri/,"string.quote"],[/plugin-types/,"string.quote"],[/sandbox/,"string.quote"],[/disown-opener/,"string.quote"],[/form-action/,"string.quote"],[/frame-ancestors/,"string.quote"],[/report-uri/,"string.quote"],[/report-to/,"string.quote"],[/upgrade-insecure-requests/,"string.quote"],[/block-all-mixed-content/,"string.quote"],[/require-sri-for/,"string.quote"],[/reflected-xss/,"string.quote"],[/referrer/,"string.quote"],[/policy-uri/,"string.quote"],[/'self'/,"string.quote"],[/'unsafe-inline'/,"string.quote"],[/'unsafe-eval'/,"string.quote"],[/'strict-dynamic'/,"string.quote"],[/'unsafe-hashed-attributes'/,"string.quote"]]}}},{}]},{},[]);