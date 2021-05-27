(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{70073:function(e,t,n){"use strict";n.d(t,{X:function(){return p}});var r=n(67294),o=n(29163),a=n(89207),i=n(46808),l=n(80363),u=n(51755),f=(0,o.css)(["color:",";"],(function(e){return(0,i.ut)(e.colorProp||e.theme.heading.color,e.theme)})),c=o.default.h1.withConfig({displayName:"StyledHeading",componentId:"sc-1rdh4aw-0"})([""," "," "," "," "," "," ",""],l.$G,(function(e){return function(e){var t=(e.theme.heading.level[e.level]||{}).font;return t&&t.family?(0,o.css)(["font-family:",";"],t.family):e.theme.heading.font?(0,o.css)(["font-family:",";"],e.theme.heading.font.family):""}(e)}),(function(e){return function(e){var t=e.size||"medium",n=e.theme.heading,r=n.level[e.level];if(r){var i=r[t],l=[(0,o.css)(["font-size:",";line-height:",";max-width:",";font-weight:",";"],i?i.size:t,i?i.height:"normal",(e.fillProp?"none":i&&i.maxWidth)||r.medium.maxWidth,r.font.weight||n.weight)];if(e.responsive&&n.responsiveBreakpoint){var u=e.theme.global.breakpoints[n.responsiveBreakpoint];if(u){var f=n.level[e.level+1]?n.level[e.level+1][t]:n.level[e.level][t];f&&l.push((0,a.bk)(u,"\n            font-size: "+f.size+";\n            line-height: "+f.height+";\n            max-width: "+(e.fillProp?"none":f.maxWidth)+";\n          "))}}return l}return console.warn("Heading level "+e.level+" is not defined in your theme."),""}(e)}),(function(e){return e.textAlign&&l.jt}),(function(e){return e.truncate&&"\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"}),(function(e){return(e.colorProp||e.theme.heading.color)&&f}),(function(e){return e.theme.heading&&e.theme.heading.extend}));function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}c.defaultProps={},Object.setPrototypeOf(c.defaultProps,u.l);var h=(0,r.forwardRef)((function(e,t){var n=e.color,o=e.fill,a=e.level,i=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["color","fill","level"]);return r.createElement(c,s({as:"h"+a,colorProp:n,fillProp:o,level:+a},i,{ref:t}))}));h.displayName="Heading",h.defaultProps={level:1,responsive:!0};var p=h},60018:function(e,t,n){"use strict";n.d(t,{n:function(){return p}});var r=n(67294),o=n(29163),a=n(46808),i=n(80363),l=n(51755),u=(0,o.css)(["color:",";"],(function(e){return(0,a.ut)(e.colorProp,e.theme)})),f=(0,o.css)(["font-family:",";"],(function(e){return e.theme.paragraph.font.family})),c=o.default.p.withConfig({displayName:"StyledParagraph",componentId:"tbetod-0"})([""," "," "," "," "," ",""],i.$G,(function(e){return function(e){var t=e.size||"medium",n=e.theme.paragraph[t];return(0,o.css)(["font-size:",";line-height:",";max-width:",";"],n.size,n.height,e.fillProp?"none":n.maxWidth)}(e)}),(function(e){return e.textAlign&&i.jt}),(function(e){return e.colorProp&&u}),(function(e){return e.theme.paragraph.font&&e.theme.paragraph.font.family&&f}),(function(e){return e.theme.paragraph&&e.theme.paragraph.extend}));function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}c.defaultProps={},Object.setPrototypeOf(c.defaultProps,l.l);var h=(0,r.forwardRef)((function(e,t){var n=e.color,o=e.fill,a=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["color","fill"]);return r.createElement(c,s({ref:t,colorProp:n,fillProp:o},a))}));h.displayName="Paragraph";var p=h},61674:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(67294),o=n(9008),a=n(40131),i=n(58673),l=n(29163),u=n(80363),f=n(51755),c=(0,l.css)(["outline:none;border:none;width:100%;-webkit-appearance:none;"]),s=l.default.textarea.withConfig({displayName:"StyledTextArea",componentId:"sc-17i3mwp-0"})([""," "," "," "," "," ",";"],u.hG,(function(e){return void 0!==e.resize&&("horizontal"===(t=e.resize)?"resize: horizontal;":"vertical"===t?"resize: vertical;":t?"resize: both;":"resize: none;");var t}),(function(e){return e.fillArg&&"height: 100%;"}),(function(e){return e.plain&&c}),(function(e){return e.disabled&&(0,u.Cv)(e.theme.textArea.disabled&&e.theme.textArea.disabled.opacity)}),(function(e){return e.theme.textArea&&e.theme.textArea.extend}));function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}s.defaultProps={},Object.setPrototypeOf(s.defaultProps,f.l);var p=(0,r.forwardRef)((function(e,t){var n=e.a11yTitle,o=e.fill,l=e.focusIndicator,u=void 0===l||l,f=e.name,c=e.onBlur,p=e.onChange,d=e.onFocus,m=e.onKeyDown,v=e.value,g=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["a11yTitle","fill","focusIndicator","name","onBlur","onChange","onFocus","onKeyDown","value"]),y=(0,r.useContext)(a.q).useFormInput(f,v),b=y[0],w=y[1],x=(0,r.useState)(),P=x[0],O=x[1];return r.createElement(i.N,{onEsc:function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},onKeyDown:m},r.createElement(s,h({"aria-label":n,ref:t,name:f,fillArg:o,focus:P,value:b,focusIndicator:u},g,{onFocus:function(e){O(!0),d&&d(e)},onBlur:function(e){O(!1),c&&c(e)},onChange:function(e){w(e.target.value),p&&p(e)}})))}));p.displayName="TextArea";var d=p,m=n(48585),v=n(70073),g=n(60018),y=n(54281),b=n(62296),w=n(47588),x=n(86895),P=n(16042),O=r.createElement,z={global:{colors:{border:"#E36567"},focus:{border:{color:"#CC1E66"}}},textInput:{extend:{fontWeight:300,fontSize:16}},textArea:{extend:{fontWeight:300,fontSize:16}}};function j(){return O("div",{className:"page"},O(o.default,null,O("title",null,"CirclesUBI | Contact Us")),O(P.Z,null,(function(e){return O(m.x,{pad:{vertical:"medium",horizontal:e?"150px":"large"},width:"large",alignSelf:"center",className:"page-wrapper",elevation:"medium"},O(v.X,{level:1},"Contact Us"),O(g.n,{margin:{bottom:"medium"}},"We will be happy to hear from you whether you have an inquiry, a question, feedback, or a love letter to share! Thank you!"),O(y.p,{theme:z},O(m.x,{pad:{vertical:"large"}},O("form",{action:"https://formspree.io/f/xrgoljya",method:"post"},O(b.W,{label:"Your email address"},O(w.o,{name:"email",type:"email"})),O(b.W,{label:"Subject"},O(w.o,{name:"subject"})),O(b.W,{label:"Message"},O(d,{name:"message"})),O(m.x,{pad:{top:"medium"}},O(x.z,{primary:!0,type:"submit",label:"Send",alignSelf:"end"}))))))})))}},36849:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n(61674)}])}},function(e){e.O(0,[425,42,774,888,179],(function(){return t=36849,e(e.s=t);var t}));var t=e.O();_N_E=t}]);