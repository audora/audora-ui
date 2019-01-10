(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./site/components/input.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return f});var o=t("./node_modules/react/index.js"),r=t.n(o),a=t("./node_modules/@mdx-js/tag/dist/index.js"),l=t("./node_modules/docz/dist/index.m.js"),p=t("./src/index.js");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function c(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,n){return!n||"object"!==i(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,n){return(d=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var f=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=u(this,m(n).call(this,e))).layout=null,t}var t,o,i;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&d(e,n)}(n,r.a.Component),t=n,(o=[{key:"render",value:function(){var e=this.props,n=e.components,t=s(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:n},r.a.createElement(a.MDXTag,{name:"h1",components:n,props:{id:"input"}},"Input"),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"default"}},"Default"),r.a.createElement(l.e,{__position:0,__code:'<Input placeholder="Standard input" />',__scope:{props:this?this.props:t,Input:p.f,Flex:p.d,Link:p.g,Button:p.b}},r.a.createElement(p.f,{placeholder:"Standard input"})),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"label"}},"Label"),r.a.createElement(l.e,{__position:1,__code:'<Input label="Username" name="username" placeholder="Username" />',__scope:{props:this?this.props:t,Input:p.f,Flex:p.d,Link:p.g,Button:p.b}},r.a.createElement(p.f,{label:"Username",name:"username",placeholder:"Username"})),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"info"}},"Info"),r.a.createElement(l.e,{__position:2,__code:'<Input\n  label="Email"\n  name="email"\n  placeholder="Email"\n  info="Your account email"\n/>',__scope:{props:this?this.props:t,Input:p.f,Flex:p.d,Link:p.g,Button:p.b}},r.a.createElement(p.f,{label:"Email",name:"email",placeholder:"Email",info:"Your account email"})),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"disabled"}},"Disabled"),r.a.createElement(l.e,{__position:3,__code:'<Input placeholder="Disabled input" disabled />',__scope:{props:this?this.props:t,Input:p.f,Flex:p.d,Link:p.g,Button:p.b}},r.a.createElement(p.f,{placeholder:"Disabled input",disabled:!0})),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"error"}},"Error"),r.a.createElement(l.e,{__position:4,__code:'<Input placeholder="Error input" error />',__scope:{props:this?this.props:t,Input:p.f,Flex:p.d,Link:p.g,Button:p.b}},r.a.createElement(p.f,{placeholder:"Error input",error:!0})),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"full"}},"Full"),r.a.createElement(l.e,{__position:5,__code:'<Input placeholder="Full input" full />',__scope:{props:this?this.props:t,Input:p.f,Flex:p.d,Link:p.g,Button:p.b}},r.a.createElement(p.f,{placeholder:"Full input",full:!0})),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"sizes"}},"Sizes"),r.a.createElement(l.e,{__position:6,__code:'<Flex>\n  <Input placeholder="Small input" size="small" />\n  <Input placeholder="Medium input" mx={10} />\n  <Input placeholder="Large input" size="large" />\n</Flex>',__scope:{props:this?this.props:t,Input:p.f,Flex:p.d,Link:p.g,Button:p.b}},r.a.createElement(p.d,null,r.a.createElement(p.f,{placeholder:"Small input",size:"small"}),r.a.createElement(p.f,{placeholder:"Medium input",mx:10}),r.a.createElement(p.f,{placeholder:"Large input",size:"large"}))),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"login"}},"Login"),r.a.createElement(l.e,{__position:7,__code:'<Flex flexDirection="column" width={300} alignItems="flex-end">\n  <Input placeholder="Username" mb={10} full />\n  <Input placeholder="Password" type="password" full />\n  <Link href="#link" my={20}>\n    I forgot the password\n  </Link>\n  <Button variant="primary" full>\n    Login\n  </Button>\n</Flex>',__scope:{props:this?this.props:t,Input:p.f,Flex:p.d,Link:p.g,Button:p.b}},r.a.createElement(p.d,{flexDirection:"column",width:300,alignItems:"flex-end"},r.a.createElement(p.f,{placeholder:"Username",mb:10,full:!0}),r.a.createElement(p.f,{placeholder:"Password",type:"password",full:!0}),r.a.createElement(p.g,{href:"#link",my:20},"I forgot the password"),r.a.createElement(p.b,{variant:"primary",full:!0},"Login"))))}}])&&c(t.prototype,o),i&&c(t,i),n}();f.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=site-components-input.c8e96c66a4887e751481.js.map