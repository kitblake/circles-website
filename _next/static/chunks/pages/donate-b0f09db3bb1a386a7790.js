_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"+QRC":function(e,t,n){"use strict";var a=n("E9nw"),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,o,l,i,c,s,u=!1;t||(t={}),n=t.debug||!1;try{if(l=a(),i=document.createRange(),c=document.getSelection(),(s=document.createElement("span")).textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(a){if(a.stopPropagation(),t.format)if(a.preventDefault(),"undefined"===typeof a.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=r[t.format]||r.default;window.clipboardData.setData(o,e)}else a.clipboardData.clearData(),a.clipboardData.setData(t.format,e);t.onCopy&&(a.preventDefault(),t.onCopy(a.clipboardData))})),document.body.appendChild(s),i.selectNodeContents(s),c.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(d){n&&console.error("unable to copy using execCommand: ",d),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(d){n&&console.error("unable to copy using clipboardData: ",d),n&&console.error("falling back to prompt"),o=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(o,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(i):c.removeAllRanges()),s&&document.body.removeChild(s),l()}return u}},"6JoE":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return fe}));var a=n("HALo"),r=n("q1tI"),o=n.n(r),l=n("g4pe"),i=n.n(l),c=n("otPn"),s=n("ACV0"),u=n("t7s+"),d=n("T1Te"),f=n("du+u"),p=n("vOnD"),m=n("/Rk8"),g=n("cVt8"),h=n("+Wdg"),b=n("RFS5"),v=n("4LIN"),y=n("y90F"),w=n("P3Am"),O=n("ilUv"),C=n("fJJG"),j=n("ou28"),k=n("XDYV"),x=p.default.div.withConfig({displayName:"StyledSelect__StyledContainer",componentId:"znp66n-0"})(["@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:100%;}",";",";"],(function(e){return e.dropHeight?Object(m.n)("max-height",e.dropHeight,e.theme):"max-height: inherit;"}),(function(e){return e.theme.select.container&&e.theme.select.container.extend})),E=function e(t,n){if(void 0!==t)return"object"===typeof n?e(t,n.key):"function"===typeof n?n(t):void 0!==n?t[n]:t};function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var P=p.default.div.withConfig({displayName:"SelectContainer__OptionsBox",componentId:"sc-1wi0ul8-0"})(["position:relative;scroll-behavior:smooth;overflow:auto;outline:none;"]),A=Object(p.default)(c.a).withConfig({displayName:"SelectContainer__OptionBox",componentId:"sc-1wi0ul8-1"})(["",""],(function(e){return e.selected&&O.g})),D=Object(p.default)(d.a).withConfig({displayName:"SelectContainer__SelectOption",componentId:"sc-1wi0ul8-2"})(["display:block;width:100%;"]),I=function(e){var t=e.clear,n=e.onClear,a=e.name,r=e.theme,l=e.setFocus,i=t.label,s="bottom"!==t.position?"start":"center",u=i||"Clear "+(a||"selection");return o.a.createElement(d.a,{onClick:n,onFocus:function(){return l(!0)},onBlur:function(){return l(!1)}},o.a.createElement(c.a,S({},r.select.clear.container,{align:s}),o.a.createElement(k.a,r.select.clear.text,u)))},R=Object(r.forwardRef)((function(e,t){var n=e.clear,a=e.children,l=void 0===a?null:a,i=e.disabled,s=e.disabledKey,u=e.dropHeight,d=e.emptySearchMessage,f=void 0===d?"No matches found":d,m=e.id,g=e.labelKey,b=e.multiple,y=e.name,O=e.onChange,R=e.onKeyDown,N=e.onMore,z=e.onSearch,T=e.optionIndexesInValue,_=e.options,M=e.allOptions,W=e.searchPlaceholder,K=e.search,B=e.setSearch,F=e.selected,H=e.value,L=void 0===H?"":H,U=e.valueKey,V=e.replace,J=void 0===V||V,G=Object(r.useContext)(p.ThemeContext)||h.a.theme,q=Object(r.useState)(-1),Y=q[0],X=q[1],Q=Object(r.useState)(),Z=Q[0],$=Q[1],ee=Object(r.useState)(!1),te=ee[0],ne=ee[1],ae=Object(r.useRef)(),re=Object(r.useRef)();Object(r.useEffect)((function(){-1===Y&&K&&T.length&&X(T[0])}),[Y,T,K]),Object(r.useEffect)((function(){var e=setTimeout((function(){var e=re.current;if(z){var t=ae.current;t&&t.focus&&Object(C.j)(t)}else e&&Object(C.j)(e)}),100);return function(){return clearTimeout(e)}}),[z]),Object(r.useEffect)((function(){if(Z){var e=setTimeout((function(){return $(!1)}),100);return function(){return clearTimeout(e)}}}),[Z]);var oe=Object(r.useCallback)((function(e){return E(_[e],g)}),[g,_]),le=Object(r.useCallback)((function(e){return E(_[e],U)}),[_,U]),ie=Object(r.useCallback)((function(e){var t,n=_[e];if(s)t=E(n,s);else if(Array.isArray(i))if("number"===typeof i[0])t=-1!==i.indexOf(e);else{var a=le(e);t=-1!==i.indexOf(a)}return t}),[i,s,_,le]),ce=Object(r.useCallback)((function(e){var t;if(F)t=-1!==F.indexOf(e);else{var n=le(e);if(Array.isArray(L))0===L.length?t=!1:"object"!==typeof L[0]?t=-1!==L.indexOf(n):U&&(t=L.some((function(e){return("function"===typeof U?U(e):e[U])===n})));else if(U&&"object"===typeof L){t=("function"===typeof U?U(L):L[U])===n}else t=L===n}return t}),[le,F,L,U]),se=Object(r.useCallback)((function(e){return function(t){if(O){var n,a;if(b){var r=T.slice(0),o=M.indexOf(_[e]),l=T.indexOf(o);-1===l?r.push(o):r.splice(l,1),n=r.map((function(e){return U&&U.reduce?E(M[e],U):M[e]})),a=r}else n=U&&U.reduce?E(_[e],U):_[e],a=e;O(t,{option:_[e],value:n,selected:a})}}}),[b,O,T,_,M,U]),ue=Object(r.useCallback)((function(e){O(e,{option:void 0,value:"",selected:""})}),[O]),de=Object(r.useCallback)((function(e){e.preventDefault();for(var t=Y+1;t<_.length&&ie(t);)t+=1;t!==_.length&&(X(t),$(!0))}),[Y,ie,_]),fe=Object(r.useCallback)((function(e){e.preventDefault();for(var t=Y-1;t>=0&&ie(t);)t-=1;t>=0&&(X(t),$(!0))}),[Y,ie]),pe=Object(r.useCallback)((function(e){if(!z){e.preventDefault();var t=_.findIndex((function(t,n){return("object"===typeof t?t.label||E(t,g):t).charAt(0).toLowerCase()===e.key.toLowerCase()&&!ie(n)}));t>=0&&(X(t),$(!0))}R&&R(e)}),[R,_,ie,z,g]),me=Object(r.useCallback)((function(e){return function(){Z||X(e)}}),[Z]),ge=Object(r.useCallback)((function(e){Y>=0&&!te&&(e.preventDefault(),se(Y)(e))}),[Y,se,te]),he=G.select.searchInput,be=he||w.a,ve=G.select.options?S({},G.select.options.box,G.select.options.container):{};return o.a.createElement(v.a,{onEnter:ge,onUp:fe,onDown:de,onKeyDown:pe},o.a.createElement(x,{ref:t,as:c.a,id:m?m+"__select-drop":void 0,dropHeight:u},z&&o.a.createElement(c.a,{pad:he?void 0:"xsmall",flex:!1},o.a.createElement(be,{focusIndicator:!he,size:"small",ref:ae,type:"search",value:K||"",placeholder:W,onChange:function(e){var t=e.target.value;B(t),X(-1),z(t)}})),n&&"bottom"!==n.position&&L&&o.a.createElement(I,{clear:n,name:y,onClear:ue,theme:G,setFocus:ne}),o.a.createElement(P,{role:"menubar",tabIndex:"-1",ref:re},_.length>0?o.a.createElement(j.a,{items:_,step:G.select.step,onMore:N,replace:J,show:-1!==Y?Y:void 0},(function(e,t,n){var a,r=ie(t),i=ce(t),c=Y===t;return l?a=l(e,t,_,{active:c,disabled:r,selected:i}):G.select.options&&(a=o.a.createElement(A,S({},ve,{selected:i}),o.a.createElement(k.a,G.select.options.text,oe(t)))),o.a.createElement(D,{key:t,ref:n,tabIndex:"-1",role:"menuitem",plain:!!a||void 0,align:"start",kind:a?void 0:"option",hoverIndicator:a?"background":void 0,label:a?void 0:oe(t),disabled:r||void 0,active:c,selected:i,option:e,onMouseOver:r?void 0:me(t),onClick:r?void 0:se(t)},a)})):o.a.createElement(D,{key:"search_empty",tabIndex:"-1",role:"menuitem",hoverIndicator:"background",disabled:!0,option:f},o.a.createElement(A,ve,o.a.createElement(k.a,G.select.container.text,f)))),n&&"bottom"===n.position&&L&&o.a.createElement(I,{clear:n,name:y,onClear:ue,theme:G,setFocus:ne})))}));function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var z=Object(p.default)(w.a).withConfig({displayName:"Select__SelectTextInput",componentId:"sc-17idtfo-0"})(["cursor:",";"],(function(e){return e.defaultCursor?"default":"pointer"})),T=Object(p.default)(b.a).withConfig({displayName:"Select__StyledSelectDropButton",componentId:"sc-17idtfo-1"})(["",";",";",";"],(function(e){return!e.callerPlain&&m.b}),(function(e){return e.theme.select&&e.theme.select.control&&e.theme.select.control.extend}),(function(e){return e.open&&e.theme.select.control.open}));T.defaultProps={},Object.setPrototypeOf(T.defaultProps,h.a);var _={top:"bottom",left:"left"},M={multiple:"multiple"},W=Object(r.forwardRef)((function(e,t){var n=e.a11yTitle,a=e.alignSelf,l=e.children,i=e.clear,s=void 0!==i&&i,u=e.closeOnChange,d=void 0===u||u,f=e.defaultValue,m=e.disabled,b=e.disabledKey,w=e.dropAlign,O=void 0===w?_:w,C=e.dropHeight,j=e.dropProps,k=e.dropTarget,x=e.emptySearchMessage,S=e.focusIndicator,P=e.gridArea,A=e.id,D=e.icon,I=e.labelKey,W=e.margin,K=e.messages,B=void 0===K?M:K,F=e.multiple,H=e.name,L=e.onChange,U=e.onClick,V=e.onClose,J=e.onKeyDown,G=e.onMore,q=e.onOpen,Y=e.onSearch,X=e.open,Q=e.options,Z=e.placeholder,$=e.plain,ee=e.replace,te=e.searchPlaceholder,ne=e.selected,ae=e.size,re=e.value,oe=e.valueKey,le=e.valueLabel,ie=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["a11yTitle","alignSelf","children","clear","closeOnChange","defaultValue","disabled","disabledKey","dropAlign","dropHeight","dropProps","dropTarget","emptySearchMessage","focusIndicator","gridArea","id","icon","labelKey","margin","messages","multiple","name","onChange","onClick","onClose","onKeyDown","onMore","onOpen","onSearch","open","options","placeholder","plain","replace","searchPlaceholder","selected","size","value","valueKey","valueLabel"]),ce=Object(r.useContext)(p.ThemeContext)||h.a.theme,se=Object(r.useRef)(),ue=Object(r.useContext)(y.a).useFormInput(H,re,f||""),de=ue[0],fe=ue[1],pe=Object(r.useMemo)((function(){return Array.isArray(de)?de.map((function(e){return oe&&oe.reduce?e:E(e,oe)})):oe&&oe.reduce?de:E(de,oe)}),[de,oe]),me=Object(r.useState)(),ge=me[0],he=me[1],be=Object(r.useState)(Q),ve=be[0],ye=be[1];Object(r.useEffect)((function(){ge||ye(Q)}),[Q,ge]);var we=Object(r.useMemo)((function(){var e=[];return ve.forEach((function(t,n){void 0!==ne?Array.isArray(ne)?-1!==ne.indexOf(n)&&e.push(n):n===ne&&e.push(n):Array.isArray(pe)?pe.some((function(e){return e===E(t,oe)}))&&e.push(n):pe===E(t,oe)&&e.push(n)})),e}),[ve,ne,oe,pe]),Oe=Object(r.useState)(X),Ce=Oe[0],je=Oe[1];Object(r.useEffect)((function(){return je(X)}),[X]);var ke,xe=Object(r.useCallback)((function(){Ce||(je(!0),q&&q())}),[q,Ce]),Ee=Object(r.useCallback)((function(){je(!1),V&&V()}),[V]),Se=Object(r.useCallback)((function(e,t){var n=t.option,a=t.value,r=t.selected;if(d&&Ee(),fe(a),L){e.persist();var o=e;o.target=se.current,o.value=a,o.option=n,o.selected=r,L(o)}he()}),[d,L,Ee,fe]);switch(D){case!1:break;case!0:case void 0:ke=Ce&&ce.select.icons.up?ce.select.icons.up:ce.select.icons.down;break;default:ke=D}var Pe=Object(r.useMemo)((function(){return le||(o.a.isValidElement(de)?de:void 0)}),[de,le]),Ae=Object(r.useMemo)((function(){if(!Pe)return 0===we.length?"":1===we.length?E(ve[we[0]],I):B.multiple}),[I,B,we,ve,Pe]),De=Object(g.c)(ce.select.icons.color||"control",ce);return o.a.createElement(v.a,{onDown:xe,onUp:xe},o.a.createElement(T,{ref:t,id:A,disabled:!0===m||void 0,dropAlign:O,dropTarget:k,open:Ce,alignSelf:a,focusIndicator:S,gridArea:P,margin:W,onOpen:xe,onClose:Ee,onClick:U,dropContent:o.a.createElement(R,{clear:s,disabled:m,disabledKey:b,dropHeight:C,emptySearchMessage:x,id:A,labelKey:I,multiple:F,name:H,onChange:Se,onKeyDown:J,onMore:G,onSearch:Y,options:Q,allOptions:ve,optionIndexesInValue:we,replace:ee,searchPlaceholder:te,search:ge,setSearch:he,selected:ne,value:de,valueKey:oe},l),callerPlain:$,plain:!0,dropProps:j,theme:ce},o.a.createElement(c.a,{align:"center",direction:"row",justify:"between",background:ce.select.background},o.a.createElement(c.a,{direction:"row",flex:!0,basis:"auto"},Pe||o.a.createElement(z,N({a11yTitle:n&&n+(de&&"string"===typeof de?", "+de:""),defaultCursor:!0===m||void 0,focusIndicator:!1,id:A?A+"__input":void 0,name:H,ref:se},ie,{tabIndex:"-1",type:"text",placeholder:Z,plain:!0,readOnly:!0,value:Ae,size:ae,theme:ce}))),ke&&o.a.createElement(c.a,{margin:ce.select.icons.margin,flex:!1,style:{minWidth:"auto"}},Object(r.isValidElement)(ke)?ke:o.a.createElement(ke,{color:De,size:ae})))))}));W.defaultProps=N({},h.a),W.displayName="Select";var K=W,B=n("463D"),F=n("jCe7");function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var L=function(e){return o.a.createElement(F.a,H({viewBox:"0 0 24 24",a11yTitle:"CircleInformation"},e),o.a.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"2",d:"M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,10 L12,18 M12,6 L12,8"}))},U=n("ebn3"),V=n("+QRC"),J=n.n(V),G=n("Qetd"),q=n.n(G),Y=function(){return(Y=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},X=function(e){for(var t=e.url,n=e.allowFullScreen,a=e.position,r=e.display,l=e.height,i=e.width,c=e.overflow,s=e.styles,u=e.onLoad,d=e.onMouseOver,f=e.onMouseOut,p=e.scrolling,m=e.id,g=e.frameBorder,h=e.ariaHidden,b=e.sandbox,v=e.allow,y=e.className,w=e.title,O=e.ariaLabel,C=e.ariaLabelledby,j=e.name,k=e.target,x=e.loading,E=e.importance,S=e.referrerpolicy,P=e.allowpaymentrequest,A=e.src,D=q()({src:A||t,target:k||null,style:{position:a||null,display:r||"block",overflow:c||null},scrolling:p||null,allowpaymentrequest:P||null,importance:E||null,sandbox:b||null,loading:x||null,styles:s||null,name:j||null,className:y||null,referrerpolicy:S||null,title:w||null,allow:v||null,id:m||null,"aria-labelledby":C||null,"aria-hidden":h||null,"aria-label":O||null,width:i||null,height:l||null,onLoad:u||null,onMouseOver:d||null,onMouseOut:f||null}),I=Object.create(null),R=0,N=Object.keys(D);R<N.length;R++){var z=N[R];null!=D[z]&&(I[z]=D[z])}for(var T=0,_=Object.keys(I.style);T<_.length;T++){var M=_[T];null==I.style[M]&&delete I.style[M]}if(n)if("allow"in I){var W=I.allow.replace("fullscreen","");I.allow=("fullscreen "+W.trim()).trim()}else I.allow="fullscreen";return g>=0&&(I.style.hasOwnProperty("border")||(I.style.border=g)),o.a.createElement("iframe",Y({},I))},Q=n("wBNj"),Z=n("5Yp1"),$=n("uUoN"),ee="0x7415EfD9D908281ea0279c49A6c23011D9d9A0a4",te="1P8oaMk65aE5PqJfsfzAzgRwqdPSHoXhw1",ne=o.a.createElement,ae=ee,re=te,oe=["Since launching last year the Circles community has grown to 200k users around the globe. Interest in the project led to rapid scaling, which overloaded our servers, and after overhauling our infrastructure we are at the end of our budget.","We need your support to continue!","We need your help to make basic income a reality worldwide!","We are looking for committed, regular donors who support bringing Circles to a fully thriving life.","Your donation is crucial!","Supports the creation of a basic income for all people, and make sustainable, local economies worldwide."],le=["Your Donation supports the IT development, the European and Asian pilots, the tests, the research, the community building, the mentoring for the pilot community, and many other works.","Your contribution is crucial, please be a part of Partons of Circles!","Let's create together a new world for ourselves!"],ie=["Our legal entity is a cooperative: The Circles Coop eG (in Gr\xfcndung). It is founded by the team who have been most busy during the last years working on implementing varying features that compose Circles ecosystem.","We are dedicated to continually improving Circles; with motivations to provide access to a community-based basic income for many, around the entire globe.","Therefore this huge and long work needs your support too."],ce=["Develop Circles to be an alternative for every basic income\n  advocate","Global Support Centre (for support and research, knowledge\n  centre)","Flagship pilot in every continent","Strong network between Hubs and communities"],se={background:{color:"dark-1",opacity:.6},style:{borderRadius:8,maxWidth:480},flex:{shrink:0,grow:0},margin:{vertical:"medium"}},ue={background:{color:"accent-3",opacity:.1},style:{borderRadius:8},width:"900px"},de={level:1,textAlign:"center",color:"#fff",margin:{bottom:"small",top:"medium"}};function fe(){var e=Object(r.useState)(!1),t=e[0],n=e[1],o=Object(r.useState)(!1),l=o[0],p=o[1],m=Object(r.useState)(!1),g=m[0],h=m[1],b=Object(r.useState)("USD"),v=b[0],y=b[1];return ne("div",{className:"page"},ne(i.a,null,ne("title",null,"CirclesUBI | Donate to CirclesUBI"),ne("script",{src:"https://donorbox.org/widget.js",paypalexpress:"false"})),ne(Z.a,null,(function(e){return ne(r.Fragment,null,ne(c.a,{pad:{vertical:"xlarge"}},ne(Q.Row,{style:{backgroundImage:"url('/images/donate-image.jpg')",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",padding:e?24:0,justifyContent:"space-between"}},ne(Q.Col,{lg:5,style:{display:"flex",justifyContent:"center"}},ne(c.a,Object(a.a)({},se,{pad:"large",basis:e?"large":"full"}),ne(s.a,de,"Circles needs you!"),e?ne(c.a,null,oe.map((function(e){return ne(u.a,{key:e.substring(0,30)},e)}))):ne(c.a,null,ne(d.a,{icon:ne(L,{size:"large"}),onClick:function(){return n(!0)},alignSelf:"center"}),t&&ne(f.a,{onEsc:function(){return n(!1)},onClickOutside:function(){return n(!1)},full:!0},ne(c.a,{pad:"large",background:"light-1"},ne(c.a,{direction:"row",justify:"between"},ne(s.a,{level:2,margin:"none"},"Circles needs you!"),ne(d.a,{icon:ne(U.a,null),onClick:function(){return n(!1)},margin:{top:"-24px"}})),ne(c.a,null,oe.map((function(e){return ne(u.a,{key:e.substring(0,10)},e)})))))))),ne(Q.Col,{lg:5,style:{display:"flex",justifyContent:"center"}},ne(c.a,Object(a.a)({},se,{basis:e?"large":"full",className:"donate-payment-holder"}),ne(s.a,de,"Give Monthly. or Give Once"),ne(c.a,{margin:{horizontal:"medium"},background:"dark-1"},ne(K,{size:"large",options:["EUR","USD"],value:v,onChange:function(e){var t=e.value;return y(t)}})),ne(c.a,{alignSelf:"center",background:"dark-1"},ne(X,{allowpaymentrequest:"",frameBorder:"0",height:"900px",name:"donorbox",scrolling:"no",seamless:"seamless",src:"USD"===v?"https://donorbox.org/embed/circlesubi":"https://donorbox.org/embed/circlesubi-2",style:{maxWidth:500,minWidth:250,maxHeight:"none !important"},width:e?400:320}))))),ne(c.a,{direction:"row",justify:"center",margin:{bottom:"large",top:"large"}},ne(c.a,Object(a.a)({align:"center",pad:"large"},ue),le.map((function(e){return ne(u.a,{textAlign:"center",style:{maxWidth:"700px"},key:e.substring(0,10)},e)})))),ne(c.a,{direction:"row",justify:"center",margin:{bottom:"large"}},ne(c.a,{width:"large",pad:"large"},ne(s.a,Object(a.a)({},de,{color:"dark-1"}),"GOALS FOR 2021"),ne("ul",null,ce.map((function(e){return ne("li",{key:e.substr(0,20)},ne(c.a,{pad:"small"},ne(k.a,null,e)))}))))),ne(c.a,{direction:"row",justify:"center"},ne(c.a,{width:"large",pad:"large"},ne(s.a,Object(a.a)({},de,{color:"dark-1"}),"Other Ways to Donate"),ne(k.a,{size:"medium",margin:"small"},"Your donation supports the creation of a basic income for all people, and the creation of sustainable, local economis worldwide."),ne(c.a,{pad:"medium",margin:{vertical:"medium"},align:"center",elevation:"small"},ne(w,{title:"BITCOIN",address:re,action:function(){return p(!1),J()(re),void h(!0)},copied:g}),ne(w,{title:"ETHEREUM",address:ae,action:function(){return h(!1),J()(ae),void p(!0)},copied:l})),ne(c.a,{margin:{vertical:"medium"}},ne(k.a,{textAlign:"center"},"We also have non-profit status via"," ",ne(B.a,{href:"https://opencollective.com/circles",target:"_blank"},"Open Collective"))),ne(c.a,null,ne(k.a,{textAlign:"center"},"And you can support our work on"," ",ne(B.a,{href:"https://gitcoin.co/grants/331/circles-ubi",target:"_blank"},"GitCoin"))))),ne(c.a,{direction:"row",justify:"center",margin:{bottom:"large",top:"large"}},ne(c.a,Object(a.a)({align:"center",pad:"large"},ue),ie.map((function(e){return ne(u.a,{textAlign:"center",style:{maxWidth:"700px"},key:e.substring(0,20)},e)}))))),ne($.a,null))})));function w(e){var t=e.title,n=e.subtitle,a=e.address,r=e.action,o=e.copied;return ne(c.a,{margin:{vertical:"small"},gap:"xsmall"},ne(s.a,{level:3,margin:"none"},t),n&&ne(k.a,{size:"small"},"Circles Coop eG. at GLS BANK"),ne(c.a,{direction:"row",gap:"small",margin:{bottom:"medium"},align:"center"},ne(k.a,{size:"small",weight:"bold",style:{fontFamily:"monospace",background:"#eee",padding:4,borderRadius:4,wordBreak:"break-all",width:220}},a),ne(d.a,{plain:!1,size:"small",style:{borderRadius:8,borderColor:"#D12D5F",borderWidth:1},onClick:r,label:o?"COPIED!":"COPY"})))}}},ACV0:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n("q1tI"),r=n.n(a),o=n("vOnD"),l=n("F5WI"),i=n("cVt8"),c=n("/Rk8"),s=n("+Wdg"),u=Object(o.css)(["color:",";"],(function(e){return Object(i.c)(e.colorProp||e.theme.heading.color,e.theme)})),d=o.default.h1.withConfig({displayName:"StyledHeading",componentId:"sc-1rdh4aw-0"})([""," "," "," "," "," "," ",""],c.g,(function(e){return function(e){var t=(e.theme.heading.level[e.level]||{}).font;return t&&t.family?Object(o.css)(["font-family:",";"],t.family):e.theme.heading.font?Object(o.css)(["font-family:",";"],e.theme.heading.font.family):""}(e)}),(function(e){return function(e){var t=e.size||"medium",n=e.theme.heading,a=n.level[e.level];if(a){var r=a[t],i=[Object(o.css)(["font-size:",";line-height:",";max-width:",";font-weight:",";"],r?r.size:t,r?r.height:"normal",(e.fillProp?"none":r&&r.maxWidth)||a.medium.maxWidth,a.font.weight||n.weight)];if(e.responsive&&n.responsiveBreakpoint){var c=e.theme.global.breakpoints[n.responsiveBreakpoint];if(c){var s=n.level[e.level+1]?n.level[e.level+1][t]:n.level[e.level][t];s&&i.push(Object(l.a)(c,"\n            font-size: "+s.size+";\n            line-height: "+s.height+";\n            max-width: "+(e.fillProp?"none":s.maxWidth)+";\n          "))}}return i}return console.warn("Heading level "+e.level+" is not defined in your theme."),""}(e)}),(function(e){return e.textAlign&&c.o}),(function(e){return e.truncate&&"\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"}),(function(e){return(e.colorProp||e.theme.heading.color)&&u}),(function(e){return e.theme.heading&&e.theme.heading.extend}));function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}d.defaultProps={},Object.setPrototypeOf(d.defaultProps,s.a);var p=Object(a.forwardRef)((function(e,t){var n=e.color,a=e.fill,o=e.level,l=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["color","fill","level"]);return r.a.createElement(d,f({as:"h"+o,colorProp:n,fillProp:a,level:+o},l,{ref:t}))}));p.displayName="Heading",p.defaultProps={level:1,responsive:!0};var m=p},E9nw:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],a=0;a<e.rangeCount;a++)n.push(e.getRangeAt(a));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},NVRb:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/donate",function(){return n("6JoE")}])},"t7s+":function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n("q1tI"),r=n.n(a),o=n("vOnD"),l=n("cVt8"),i=n("/Rk8"),c=n("+Wdg"),s=Object(o.css)(["color:",";"],(function(e){return Object(l.c)(e.colorProp,e.theme)})),u=Object(o.css)(["font-family:",";"],(function(e){return e.theme.paragraph.font.family})),d=o.default.p.withConfig({displayName:"StyledParagraph",componentId:"tbetod-0"})([""," "," "," "," "," ",""],i.g,(function(e){return function(e){var t=e.size||"medium",n=e.theme.paragraph[t];return Object(o.css)(["font-size:",";line-height:",";max-width:",";"],n.size,n.height,e.fillProp?"none":n.maxWidth)}(e)}),(function(e){return e.textAlign&&i.o}),(function(e){return e.colorProp&&s}),(function(e){return e.theme.paragraph.font&&e.theme.paragraph.font.family&&u}),(function(e){return e.theme.paragraph&&e.theme.paragraph.extend}));function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}d.defaultProps={},Object.setPrototypeOf(d.defaultProps,c.a);var p=Object(a.forwardRef)((function(e,t){var n=e.color,a=e.fill,o=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["color","fill"]);return r.a.createElement(d,f({ref:t,colorProp:n,fillProp:a},o))}));p.displayName="Paragraph";var m=p},uUoN:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("otPn"),l=n("ACV0"),i=n("XDYV"),c=n("omfP"),s=(n("oqc9"),n("k7Sn")),u=n("wBNj"),d=(n("CG+B"),r.a.createElement),f=[{name:"Sarah Friend",image:"images/team/sarahf.png"},{name:"Blanka Vay",image:"images/team/blankav.png"},{name:"Julio Linares",image:"images/team/juliol.png"},{name:"@adz",image:"images/team/adz.png"},{name:"Martin K\xf6ppelmann",image:"images/team/martink.png"},{name:"Saraswathi Subbaraman",image:"images/team/swathi.png"}],p=["Andy Milenius","Anne Walther","Ashoka Finley","David Terry","Ed Murphy","Emin Durak","Franziska B\xf6rner-Zobel","Harriet von Froreich","Jacob H\xfchn","Javier Alaves","Justyna Trivedi","Karenina Schr\xf6der","Malthus John","Martin Lundfall","Ronit Kory","Wouter Kampmann"];t.a=Object(s.withTranslation)("team")((function(e){var t=e.t;return d(o.a,{id:"team",margin:{top:"large"},style:{background:"linear-gradient(180deg, #fff 0%, rgb(243, 208, 223) 20%, #fff 40%, #fff 50%, rgb(243, 208, 223)) 100%",position:"relative"}},d(l.a,{level:1,textAlign:"center",color:"dark-1",margin:{top:"large",bottom:"small"}},t("team-title")),d(i.a,{textAlign:"center",margin:{bottom:"medium"}},d("em",null,t("team-subtitle"))),d(o.a,{margin:{left:"large",right:"large",bottom:"large"}},d(u.Row,null,f.map((function(e){return d(u.Col,{md:4,key:e.name},d(o.a,{pad:"medium",gap:"small",align:"center",alignSelf:"center"},d(o.a,null,d(c.a,{width:"220px",src:e.image,alt:e.name})),d(o.a,{alignSelf:"center"},d(i.a,{textAlign:"center"},e.name),d(i.a,{textAlign:"center"},d("em",null,t("".concat(e.name," title")))))))})))),d(o.a,{pad:"medium",width:"100%",style:{backgroundImage:"url('/images/team-back-left.svg'), url('/images/team-back-right.svg')",backgroundRepeat:"no-repeat, no-repeat",backgroundPosition:"bottom left, bottom right",backgroundSize:"50% 50%"}},d(i.a,{textAlign:"center",margin:{top:"xlarge",bottom:"large"}},d("em",null,t("team-extra-subtitle"))),d(o.a,{size:"large",alignSelf:"center",direction:"row",margin:{bottom:"large"}},d(o.a,{pad:{horizontal:"large"},gap:"small"},p.filter((function(e,t){return t<p.length/2})).map((function(e){return d(i.a,{key:e},e)}))),d(o.a,{pad:{horizontal:"large"},gap:"small"},p.filter((function(e,t){return t>=p.length/2})).map((function(e){return d(i.a,{key:e},e)}))))))}))}},[["NVRb",0,1,2,3,4]]]);