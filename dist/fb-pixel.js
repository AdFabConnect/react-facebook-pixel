!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ReactPixel=t():e.ReactPixel=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t){var n=!1,o=function(){return n||console.warn("Pixel not initialized before using call ReactPixel.init with required params"),n},r={init:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(e,t,n,o,r,i,c){e.fbq||(r=e.fbq=function(){r.callMethod?r.callMethod.apply(r,arguments):r.queue.push(arguments)},e._fbq||(e._fbq=r),r.push=r,r.loaded=!0,r.version="2.0",r.queue=[],i=t.createElement(n),i.async=!0,i.src=o,c=t.getElementsByTagName(n)[0],c.parentNode.insertBefore(i,c))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js"),e?(console.log("params",t),fbq("init",e,t),n=!0):console.warn("Please insert pixel id for initializing")},pageView:function(){o()&&fbq("track","PageView")},track:function(e,t){o()&&fbq("track",e,t)},trackCustom:function(e,t){o()&&fbq("trackCustom",e,t)},fbq:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){if(o())return fbq})};e.exports=r},function(e,t,n){e.exports=n(0)}])});
//# sourceMappingURL=fb-pixel.js.map