"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[399],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[f]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8233:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l}});var r=n(3117),o=(n(7294),n(3905));const a={title:"test",author:"Hsiang Nianian",type:"post",date:new Date("2023-01-23T10:29:34.197Z"),lastmod:"",featured:"/img/post/logo.png",featuredpath:"img/post",draft:!1,showtoc:!0},i=void 0,c={permalink:"/blog/test",editUrl:"https://github.com/retrofor/retrofor.github.io/blob/master/blog/test.md",source:"@site/blog/test.md",title:"test",description:"T\ufeffest",date:"2023-01-23T10:29:34.197Z",formattedDate:"January 23, 2023",tags:[],readingTime:.225,hasTruncateMarker:!1,authors:[{name:"Hsiang Nianian"}],frontMatter:{title:"test",author:"Hsiang Nianian",type:"post",date:"2023-01-23T10:29:34.197Z",lastmod:"",featured:"/img/post/logo.png",featuredpath:"img/post",draft:!1,showtoc:!0},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},u={authorsImageUrls:[void 0]},l=[{value:"T\ufeffest",id:"test",level:2}],s={toc:l};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"test"},"T\ufeffest"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function Clock(props) {\n  const [date, setDate] = useState(new Date());\n  useEffect(() => {\n    const timerID = setInterval(() => tick(), 1000);\n\n    return function cleanup() {\n      clearInterval(timerID);\n    };\n  });\n\n  function tick() {\n    setDate(new Date());\n  }\n\n  return (\n    <div>\n      <h2>It is {date.toLocaleTimeString()}.</h2>\n    </div>\n  );\n}\n")))}f.isMDXComponent=!0}}]);