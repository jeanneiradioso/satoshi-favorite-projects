"use strict";(self.webpackChunksatoshi_favorite_projects=self.webpackChunksatoshi_favorite_projects||[]).push([[727],{1458:(e,t,n)=>{n.d(t,{A:()=>L});var o=n(6540),r=n(4164),i=n(5659);function s(e){try{return e.matches(":focus-visible")}catch(e){}return!1}var l=n(7552),a=n(5607),u=n(6852);const c=n(1547).A;var p=n(2295);class d{static create(){return new d}static use(){const e=(0,p.A)(d.create).current,[t,n]=o.useState(!1);return e.shouldMount=t,e.setShouldMount=n,o.useEffect(e.mountEffect,[t]),e}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=function(){let e,t;const n=new Promise(((n,o)=>{e=n,t=o}));return n.resolve=e,n.reject=t,n}(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&null!==this.ref.current&&(this.didMount=!0,this.mounted.resolve())};start(...e){this.mount().then((()=>this.ref.current?.start(...e)))}stop(...e){this.mount().then((()=>this.ref.current?.stop(...e)))}pulsate(...e){this.mount().then((()=>this.ref.current?.pulsate(...e)))}}var h=n(8587),f=n(8168),m=n(5540),v=n(7241);function b(e,t){var n=Object.create(null);return e&&o.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,o.isValidElement)(e)?t(e):e}(e)})),n}function g(e,t,n){return null!=n[t]?n[t]:e.props[t]}function y(e,t,n){var r=b(e.children),i=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var o,r=Object.create(null),i=[];for(var s in e)s in t?i.length&&(r[s]=i,i=[]):i.push(s);var l={};for(var a in t){if(r[a])for(o=0;o<r[a].length;o++){var u=r[a][o];l[r[a][o]]=n(u)}l[a]=n(a)}for(o=0;o<i.length;o++)l[i[o]]=n(i[o]);return l}(t,r);return Object.keys(i).forEach((function(s){var l=i[s];if((0,o.isValidElement)(l)){var a=s in t,u=s in r,c=t[s],p=(0,o.isValidElement)(c)&&!c.props.in;!u||a&&!p?u||!a||p?u&&a&&(0,o.isValidElement)(c)&&(i[s]=(0,o.cloneElement)(l,{onExited:n.bind(null,l),in:c.props.in,exit:g(l,"exit",e),enter:g(l,"enter",e)})):i[s]=(0,o.cloneElement)(l,{in:!1}):i[s]=(0,o.cloneElement)(l,{onExited:n.bind(null,l),in:!0,exit:g(l,"exit",e),enter:g(l,"enter",e)})}})),i}var x=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},S=function(e){function t(t,n){var o,r=(o=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(o));return o.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},o}(0,m.A)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,i=t.children,s=t.handleExited;return{children:t.firstRender?(n=e,r=s,b(n.children,(function(e){return(0,o.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:g(e,"appear",n),enter:g(e,"enter",n),exit:g(e,"exit",n)})}))):y(e,i,s),firstRender:!1}},n.handleExited=function(e,t){var n=b(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,f.A)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=(0,h.A)(e,["component","childFactory"]),i=this.state.contextValue,s=x(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?o.createElement(v.A.Provider,{value:i},s):o.createElement(v.A.Provider,{value:i},o.createElement(t,r,s))},t}(o.Component);S.propTypes={},S.defaultProps={component:"div",childFactory:function(e){return e}};const A=S;var M=n(9787),R=n(7437),E=n(4848);var w=n(8413);const k=(0,w.A)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),z=R.i7`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,C=R.i7`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,T=R.i7`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,V=(0,l.Ay)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),j=(0,l.Ay)((function(e){const{className:t,classes:n,pulsate:i=!1,rippleX:s,rippleY:l,rippleSize:a,in:u,onExited:c,timeout:p}=e,[d,h]=o.useState(!1),f=(0,r.A)(t,n.ripple,n.rippleVisible,i&&n.ripplePulsate),m={width:a,height:a,top:-a/2+l,left:-a/2+s},v=(0,r.A)(n.child,d&&n.childLeaving,i&&n.childPulsate);return u||d||h(!0),o.useEffect((()=>{if(!u&&null!=c){const e=setTimeout(c,p);return()=>{clearTimeout(e)}}}),[c,u,p]),(0,E.jsx)("span",{className:f,style:m,children:(0,E.jsx)("span",{className:v})})}),{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${k.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${z};
    animation-duration: ${550}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  &.${k.ripplePulsate} {
    animation-duration: ${({theme:e})=>e.transitions.duration.shorter}ms;
  }

  & .${k.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${k.childLeaving} {
    opacity: 0;
    animation-name: ${C};
    animation-duration: ${550}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${k.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${T};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,P=o.forwardRef((function(e,t){const n=(0,a.b)({props:e,name:"MuiTouchRipple"}),{center:i=!1,classes:s={},className:l,...u}=n,[c,p]=o.useState([]),d=o.useRef(0),h=o.useRef(null);o.useEffect((()=>{h.current&&(h.current(),h.current=null)}),[c]);const f=o.useRef(!1),m=(0,M.A)(),v=o.useRef(null),b=o.useRef(null),g=o.useCallback((e=>{const{pulsate:t,rippleX:n,rippleY:o,rippleSize:i,cb:l}=e;p((e=>[...e,(0,E.jsx)(j,{classes:{ripple:(0,r.A)(s.ripple,k.ripple),rippleVisible:(0,r.A)(s.rippleVisible,k.rippleVisible),ripplePulsate:(0,r.A)(s.ripplePulsate,k.ripplePulsate),child:(0,r.A)(s.child,k.child),childLeaving:(0,r.A)(s.childLeaving,k.childLeaving),childPulsate:(0,r.A)(s.childPulsate,k.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:o,rippleSize:i},d.current)])),d.current+=1,h.current=l}),[s]),y=o.useCallback(((e={},t={},n=()=>{})=>{const{pulsate:o=!1,center:r=i||t.pulsate,fakeElement:s=!1}=t;if("mousedown"===e?.type&&f.current)return void(f.current=!1);"touchstart"===e?.type&&(f.current=!0);const l=s?null:b.current,a=l?l.getBoundingClientRect():{width:0,height:0,left:0,top:0};let u,c,p;if(r||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)u=Math.round(a.width/2),c=Math.round(a.height/2);else{const{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;u=Math.round(t-a.left),c=Math.round(n-a.top)}if(r)p=Math.sqrt((2*a.width**2+a.height**2)/3),p%2==0&&(p+=1);else{const e=2*Math.max(Math.abs((l?l.clientWidth:0)-u),u)+2,t=2*Math.max(Math.abs((l?l.clientHeight:0)-c),c)+2;p=Math.sqrt(e**2+t**2)}e?.touches?null===v.current&&(v.current=()=>{g({pulsate:o,rippleX:u,rippleY:c,rippleSize:p,cb:n})},m.start(80,(()=>{v.current&&(v.current(),v.current=null)}))):g({pulsate:o,rippleX:u,rippleY:c,rippleSize:p,cb:n})}),[i,g,m]),x=o.useCallback((()=>{y({},{pulsate:!0})}),[y]),S=o.useCallback(((e,t)=>{if(m.clear(),"touchend"===e?.type&&v.current)return v.current(),v.current=null,void m.start(0,(()=>{S(e,t)}));v.current=null,p((e=>e.length>0?e.slice(1):e)),h.current=t}),[m]);return o.useImperativeHandle(t,(()=>({pulsate:x,start:y,stop:S})),[x,y,S]),(0,E.jsx)(V,{className:(0,r.A)(k.root,s.root,l),ref:b,...u,children:(0,E.jsx)(A,{component:null,exit:!0,children:c})})}));var $=n(2288);function I(e){return(0,$.Ay)("MuiButtonBase",e)}const B=(0,w.A)("MuiButtonBase",["root","disabled","focusVisible"]),N=(0,l.Ay)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${B.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}});function D(e,t,n,o=!1){return c((r=>(n&&n(r),o||e[t](r),!0)))}const L=o.forwardRef((function(e,t){const n=(0,a.b)({props:e,name:"MuiButtonBase"}),{action:l,centerRipple:p=!1,children:h,className:f,component:m="button",disabled:v=!1,disableRipple:b=!1,disableTouchRipple:g=!1,focusRipple:y=!1,focusVisibleClassName:x,LinkComponent:S="a",onBlur:A,onClick:M,onContextMenu:R,onDragLeave:w,onFocus:k,onFocusVisible:z,onKeyDown:C,onKeyUp:T,onMouseDown:V,onMouseLeave:j,onMouseUp:$,onTouchEnd:B,onTouchMove:L,onTouchStart:O,tabIndex:F=0,TouchRippleProps:X,touchRippleRef:Y,type:U,...H}=n,K=o.useRef(null),W=d.use(),_=(0,u.A)(W.ref,Y),[q,G]=o.useState(!1);v&&q&&G(!1),o.useImperativeHandle(l,(()=>({focusVisible:()=>{G(!0),K.current.focus()}})),[]);const J=W.shouldMount&&!b&&!v;o.useEffect((()=>{q&&y&&!b&&W.pulsate()}),[b,y,q,W]);const Q=D(W,"start",V,g),Z=D(W,"stop",R,g),ee=D(W,"stop",w,g),te=D(W,"stop",$,g),ne=D(W,"stop",(e=>{q&&e.preventDefault(),j&&j(e)}),g),oe=D(W,"start",O,g),re=D(W,"stop",B,g),ie=D(W,"stop",L,g),se=D(W,"stop",(e=>{s(e.target)||G(!1),A&&A(e)}),!1),le=c((e=>{K.current||(K.current=e.currentTarget),s(e.target)&&(G(!0),z&&z(e)),k&&k(e)})),ae=()=>{const e=K.current;return m&&"button"!==m&&!("A"===e.tagName&&e.href)},ue=c((e=>{y&&!e.repeat&&q&&" "===e.key&&W.stop(e,(()=>{W.start(e)})),e.target===e.currentTarget&&ae()&&" "===e.key&&e.preventDefault(),C&&C(e),e.target===e.currentTarget&&ae()&&"Enter"===e.key&&!v&&(e.preventDefault(),M&&M(e))})),ce=c((e=>{y&&" "===e.key&&q&&!e.defaultPrevented&&W.stop(e,(()=>{W.pulsate(e)})),T&&T(e),M&&e.target===e.currentTarget&&ae()&&" "===e.key&&!e.defaultPrevented&&M(e)}));let pe=m;"button"===pe&&(H.href||H.to)&&(pe=S);const de={};"button"===pe?(de.type=void 0===U?"button":U,de.disabled=v):(H.href||H.to||(de.role="button"),v&&(de["aria-disabled"]=v));const he=(0,u.A)(t,K),fe={...n,centerRipple:p,component:m,disabled:v,disableRipple:b,disableTouchRipple:g,focusRipple:y,tabIndex:F,focusVisible:q},me=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:o,classes:r}=e,s={root:["root",t&&"disabled",n&&"focusVisible"]},l=(0,i.A)(s,I,r);return n&&o&&(l.root+=` ${o}`),l})(fe);return(0,E.jsxs)(N,{as:pe,className:(0,r.A)(me.root,f),ownerState:fe,onBlur:se,onClick:M,onContextMenu:Z,onFocus:le,onKeyDown:ue,onKeyUp:ce,onMouseDown:Q,onMouseLeave:ne,onMouseUp:te,onDragLeave:ee,onTouchEnd:re,onTouchMove:ie,onTouchStart:oe,ref:he,tabIndex:v?-1:F,type:U,...de,...H,children:[h,J?(0,E.jsx)(P,{ref:_,center:p,...X}):null]})}))},5003:(e,t,n)=>{n.d(t,{A:()=>b});var o=n(6540),r=n(4164),i=n(5659),s=n(8466),l=n(7552),a=n(9077),u=n(5607),c=n(8413),p=n(2288);function d(e){return(0,p.Ay)("MuiSvgIcon",e)}(0,c.A)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var h=n(4848);const f=(0,l.Ay)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,"inherit"!==n.color&&t[`color${(0,s.A)(n.color)}`],t[`fontSize${(0,s.A)(n.fontSize)}`]]}})((0,a.A)((({theme:e})=>({userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:e.transitions?.create?.("fill",{duration:(e.vars??e).transitions?.duration?.shorter}),variants:[{props:e=>!e.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:e.typography?.pxToRem?.(20)||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:e.typography?.pxToRem?.(24)||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:e.typography?.pxToRem?.(35)||"2.1875rem"}},...Object.entries((e.vars??e).palette).filter((([,e])=>e&&e.main)).map((([t])=>({props:{color:t},style:{color:(e.vars??e).palette?.[t]?.main}}))),{props:{color:"action"},style:{color:(e.vars??e).palette?.action?.active}},{props:{color:"disabled"},style:{color:(e.vars??e).palette?.action?.disabled}},{props:{color:"inherit"},style:{color:void 0}}]})))),m=o.forwardRef((function(e,t){const n=(0,u.b)({props:e,name:"MuiSvgIcon"}),{children:l,className:a,color:c="inherit",component:p="svg",fontSize:m="medium",htmlColor:v,inheritViewBox:b=!1,titleAccess:g,viewBox:y="0 0 24 24",...x}=n,S=o.isValidElement(l)&&"svg"===l.type,A={...n,color:c,component:p,fontSize:m,instanceFontSize:e.fontSize,inheritViewBox:b,viewBox:y,hasSvgAsChild:S},M={};b||(M.viewBox=y);const R=(e=>{const{color:t,fontSize:n,classes:o}=e,r={root:["root","inherit"!==t&&`color${(0,s.A)(t)}`,`fontSize${(0,s.A)(n)}`]};return(0,i.A)(r,d,o)})(A);return(0,h.jsxs)(f,{as:p,className:(0,r.A)(R.root,a),focusable:"false",color:v,"aria-hidden":!g||void 0,role:g?"img":void 0,ref:t,...M,...x,...S&&l.props,ownerState:A,children:[S?l.props.children:l,g?(0,h.jsx)("title",{children:g}):null]})}));m.muiName="SvgIcon";const v=m;function b(e,t){function n(n,o){return(0,h.jsx)(v,{"data-testid":`${t}Icon`,ref:o,...n,children:e})}return n.muiName=v.muiName,o.memo(o.forwardRef(n))}},1529:(e,t,n)=>{n.d(t,{A:()=>r});var o=n(6540);const r="undefined"!=typeof window?o.useLayoutEffect:o.useEffect},1547:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(6540),r=n(1529);const i=function(e){const t=o.useRef(e);return(0,r.A)((()=>{t.current=e})),o.useRef(((...e)=>(0,t.current)(...e))).current}}}]);