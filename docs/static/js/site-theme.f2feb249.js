(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"./site/theme.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return d});var o=t("./node_modules/react/index.js"),r=t.n(o),a=t("./node_modules/@mdx-js/tag/dist/index.js"),i=t("./node_modules/docz/dist/index.m.js"),c=t("./src/index.js");function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function p(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,n){return!n||"object"!==s(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,n){return(f=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var d=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=l(this,m(n).call(this,e))).layout=null,t}var t,o,s;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&f(e,n)}(n,r.a.Component),t=n,(o=[{key:"render",value:function(){var e=this.props,n=e.components,t=u(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:n},r.a.createElement(a.MDXTag,{name:"h1",components:n,props:{id:"theme"}},"Theme"),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"default"}},"Default"),r.a.createElement(a.MDXTag,{name:"pre",components:n},r.a.createElement(a.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},'{\n  "space": [0, 4, 8, 16, 32, 64, 128, 256, 512],\n  "fontSizes": [12, 14, 16, 20, 24, 32, 48, 64, 72],\n  "avatarSizes": [18, 24, 32, 56, 84],\n  "fontWeight": {\n    "normal": 400,\n    "bold": 700\n  },\n  "colors": {\n    "default": ["#ebedf0", "#d8dce1", "#c4cad3"],\n    "primary": ["#217EE7", "#166dd0", "#135db1"],\n    "danger": ["#b5202c", "#981b25"],\n    "transparent": "transparent",\n    "grey": ["#576374"],\n    "black": "#000",\n    "white": "#fff"\n  },\n  "fonts": {\n    "mono": ""SF Mono", "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono", Menlo, Courier, monospace",\n    "sans": "-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif"\n  }\n}\n')),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"customizing"}},"Customizing"),r.a.createElement(i.e,{__position:0,__code:"<ThemeProvider theme={{ colors: { primary: ['#333', '#222', '#111'] } }}>\n  <Button variant=\"primary\">Button</Button>\n</ThemeProvider>",__scope:{props:this?this.props:t,ThemeProvider:c.i,Button:c.b}},r.a.createElement(c.i,{theme:{colors:{primary:["#333","#222","#111"]}}},r.a.createElement(c.b,{variant:"primary"},"Button"))))}}])&&p(t.prototype,o),s&&p(t,s),n}();d.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=site-theme.4ae52cfab9dfd006df80.js.map