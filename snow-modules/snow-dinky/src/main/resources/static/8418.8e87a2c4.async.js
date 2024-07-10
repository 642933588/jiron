"use strict";(self.webpackChunkdinky_web=self.webpackChunkdinky_web||[]).push([[8418],{31484:function(ie,N,r){r.d(N,{Z:function(){return K}});var P=r(87462),n=r(67294),V={icon:function(j,H){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M292.7 840h438.6l24.2-512h-487z",fill:H}},{tag:"path",attrs:{d:"M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-504-72h304v72H360v-72zm371.3 656H292.7l-24.2-512h487l-24.2 512z",fill:j}}]}},name:"delete",theme:"twotone"},O=V,F=r(13401),w=function(j,H){return n.createElement(F.Z,(0,P.Z)({},j,{ref:H,icon:O}))},L=n.forwardRef(w),K=L},16894:function(ie,N,r){var P=r(88028);N.ZP=P.Z},2487:function(ie,N,r){r.d(N,{Z:function(){return Pe}});var P=r(74902),n=r(67294),V=r(93967),O=r.n(V),F=r(38780),w=r(74443),L=r(53124),K=r(88258),J=r(98675),j=r(92820),H=r(25378),me=r(64841),ge=r(57953);const U=n.createContext({}),Re=U.Consumer;var fe=r(96159),pe=r(21584),ae=function(t,e){var i={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(i[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(t);o<a.length;o++)e.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(i[a[o]]=t[a[o]]);return i};const $e=t=>{var{prefixCls:e,className:i,avatar:a,title:o,description:d}=t,u=ae(t,["prefixCls","className","avatar","title","description"]);const{getPrefixCls:v}=(0,n.useContext)(L.E_),$=v("list",e),y=O()(`${$}-item-meta`,i),x=n.createElement("div",{className:`${$}-item-meta-content`},o&&n.createElement("h4",{className:`${$}-item-meta-title`},o),d&&n.createElement("div",{className:`${$}-item-meta-description`},d));return n.createElement("div",Object.assign({},u,{className:y}),a&&n.createElement("div",{className:`${$}-item-meta-avatar`},a),(o||d)&&x)},oe=n.forwardRef((t,e)=>{const{prefixCls:i,children:a,actions:o,extra:d,className:u,colStyle:v}=t,$=ae(t,["prefixCls","children","actions","extra","className","colStyle"]),{grid:y,itemLayout:x}=(0,n.useContext)(U),{getPrefixCls:I}=(0,n.useContext)(L.E_),c=()=>{let h;return n.Children.forEach(a,b=>{typeof b=="string"&&(h=!0)}),h&&n.Children.count(a)>1},E=()=>x==="vertical"?!!d:!c(),g=I("list",i),C=o&&o.length>0&&n.createElement("ul",{className:`${g}-item-action`,key:"actions"},o.map((h,b)=>n.createElement("li",{key:`${g}-item-action-${b}`},h,b!==o.length-1&&n.createElement("em",{className:`${g}-item-action-split`})))),z=y?"div":"li",B=n.createElement(z,Object.assign({},$,y?{}:{ref:e},{className:O()(`${g}-item`,{[`${g}-item-no-flex`]:!E()},u)}),x==="vertical"&&d?[n.createElement("div",{className:`${g}-item-main`,key:"content"},a,C),n.createElement("div",{className:`${g}-item-extra`,key:"extra"},d)]:[a,C,(0,fe.Tm)(d,{key:"extra"})]);return y?n.createElement(pe.Z,{ref:e,flex:1,style:v},B):B});oe.Meta=$e;var ue=oe,s=r(39302),ve=r(14747),he=r(91945),Se=r(45503);const ye=t=>{const{listBorderedCls:e,componentCls:i,paddingLG:a,margin:o,itemPaddingSM:d,itemPaddingLG:u,marginLG:v,borderRadiusLG:$}=t;return{[`${e}`]:{border:`${(0,s.unit)(t.lineWidth)} ${t.lineType} ${t.colorBorder}`,borderRadius:$,[`${i}-header,${i}-footer,${i}-item`]:{paddingInline:a},[`${i}-pagination`]:{margin:`${(0,s.unit)(o)} ${(0,s.unit)(v)}`}},[`${e}${i}-sm`]:{[`${i}-item,${i}-header,${i}-footer`]:{padding:d}},[`${e}${i}-lg`]:{[`${i}-item,${i}-header,${i}-footer`]:{padding:u}}}},xe=t=>{const{componentCls:e,screenSM:i,screenMD:a,marginLG:o,marginSM:d,margin:u}=t;return{[`@media screen and (max-width:${a}px)`]:{[`${e}`]:{[`${e}-item`]:{[`${e}-item-action`]:{marginInlineStart:o}}},[`${e}-vertical`]:{[`${e}-item`]:{[`${e}-item-extra`]:{marginInlineStart:o}}}},[`@media screen and (max-width: ${i}px)`]:{[`${e}`]:{[`${e}-item`]:{flexWrap:"wrap",[`${e}-action`]:{marginInlineStart:d}}},[`${e}-vertical`]:{[`${e}-item`]:{flexWrap:"wrap-reverse",[`${e}-item-main`]:{minWidth:t.contentWidth},[`${e}-item-extra`]:{margin:`auto auto ${(0,s.unit)(u)}`}}}}}},Ce=t=>{const{componentCls:e,antCls:i,controlHeight:a,minHeight:o,paddingSM:d,marginLG:u,padding:v,itemPadding:$,colorPrimary:y,itemPaddingSM:x,itemPaddingLG:I,paddingXS:c,margin:E,colorText:g,colorTextDescription:C,motionDurationSlow:z,lineWidth:B,headerBg:h,footerBg:b,emptyTextPadding:W,metaMarginBottom:Y,avatarMarginRight:Z,titleMarginBottom:Q,descriptionFontSize:k}=t,D={};return["start","center","end"].forEach(G=>{D[`&-align-${G}`]={textAlign:G}}),{[`${e}`]:Object.assign(Object.assign({},(0,ve.Wf)(t)),{position:"relative","*":{outline:"none"},[`${e}-header`]:{background:h},[`${e}-footer`]:{background:b},[`${e}-header, ${e}-footer`]:{paddingBlock:d},[`${e}-pagination`]:Object.assign(Object.assign({marginBlockStart:u},D),{[`${i}-pagination-options`]:{textAlign:"start"}}),[`${e}-spin`]:{minHeight:o,textAlign:"center"},[`${e}-items`]:{margin:0,padding:0,listStyle:"none"},[`${e}-item`]:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:$,color:g,[`${e}-item-meta`]:{display:"flex",flex:1,alignItems:"flex-start",maxWidth:"100%",[`${e}-item-meta-avatar`]:{marginInlineEnd:Z},[`${e}-item-meta-content`]:{flex:"1 0",width:0,color:g},[`${e}-item-meta-title`]:{margin:`0 0 ${(0,s.unit)(t.marginXXS)} 0`,color:g,fontSize:t.fontSize,lineHeight:t.lineHeight,"> a":{color:g,transition:`all ${z}`,["&:hover"]:{color:y}}},[`${e}-item-meta-description`]:{color:C,fontSize:k,lineHeight:t.lineHeight}},[`${e}-item-action`]:{flex:"0 0 auto",marginInlineStart:t.marginXXL,padding:0,fontSize:0,listStyle:"none",["& > li"]:{position:"relative",display:"inline-block",padding:`0 ${(0,s.unit)(c)}`,color:C,fontSize:t.fontSize,lineHeight:t.lineHeight,textAlign:"center",["&:first-child"]:{paddingInlineStart:0}},[`${e}-item-action-split`]:{position:"absolute",insetBlockStart:"50%",insetInlineEnd:0,width:B,height:t.calc(t.fontHeight).sub(t.calc(t.marginXXS).mul(2)).equal(),transform:"translateY(-50%)",backgroundColor:t.colorSplit}}},[`${e}-empty`]:{padding:`${(0,s.unit)(v)} 0`,color:C,fontSize:t.fontSizeSM,textAlign:"center"},[`${e}-empty-text`]:{padding:W,color:t.colorTextDisabled,fontSize:t.fontSize,textAlign:"center"},[`${e}-item-no-flex`]:{display:"block"}}),[`${e}-grid ${i}-col > ${e}-item`]:{display:"block",maxWidth:"100%",marginBlockEnd:E,paddingBlock:0,borderBlockEnd:"none"},[`${e}-vertical ${e}-item`]:{alignItems:"initial",[`${e}-item-main`]:{display:"block",flex:1},[`${e}-item-extra`]:{marginInlineStart:u},[`${e}-item-meta`]:{marginBlockEnd:Y,[`${e}-item-meta-title`]:{marginBlockStart:0,marginBlockEnd:Q,color:g,fontSize:t.fontSizeLG,lineHeight:t.lineHeightLG}},[`${e}-item-action`]:{marginBlockStart:v,marginInlineStart:"auto","> li":{padding:`0 ${(0,s.unit)(v)}`,["&:first-child"]:{paddingInlineStart:0}}}},[`${e}-split ${e}-item`]:{borderBlockEnd:`${(0,s.unit)(t.lineWidth)} ${t.lineType} ${t.colorSplit}`,["&:last-child"]:{borderBlockEnd:"none"}},[`${e}-split ${e}-header`]:{borderBlockEnd:`${(0,s.unit)(t.lineWidth)} ${t.lineType} ${t.colorSplit}`},[`${e}-split${e}-empty ${e}-footer`]:{borderTop:`${(0,s.unit)(t.lineWidth)} ${t.lineType} ${t.colorSplit}`},[`${e}-loading ${e}-spin-nested-loading`]:{minHeight:a},[`${e}-split${e}-something-after-last-item ${i}-spin-container > ${e}-items > ${e}-item:last-child`]:{borderBlockEnd:`${(0,s.unit)(t.lineWidth)} ${t.lineType} ${t.colorSplit}`},[`${e}-lg ${e}-item`]:{padding:I},[`${e}-sm ${e}-item`]:{padding:x},[`${e}:not(${e}-vertical)`]:{[`${e}-item-no-flex`]:{[`${e}-item-action`]:{float:"right"}}}}},be=t=>({contentWidth:220,itemPadding:`${(0,s.unit)(t.paddingContentVertical)} 0`,itemPaddingSM:`${(0,s.unit)(t.paddingContentVerticalSM)} ${(0,s.unit)(t.paddingContentHorizontal)}`,itemPaddingLG:`${(0,s.unit)(t.paddingContentVerticalLG)} ${(0,s.unit)(t.paddingContentHorizontalLG)}`,headerBg:"transparent",footerBg:"transparent",emptyTextPadding:t.padding,metaMarginBottom:t.padding,avatarMarginRight:t.padding,titleMarginBottom:t.paddingSM,descriptionFontSize:t.fontSize});var Ee=(0,he.I$)("List",t=>{const e=(0,Se.TS)(t,{listBorderedCls:`${t.componentCls}-bordered`,minHeight:t.controlHeightLG});return[Ce(e),ye(e),xe(e)]},be),ze=function(t,e){var i={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(i[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(t);o<a.length;o++)e.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(i[a[o]]=t[a[o]]);return i};function re(t){var e,{pagination:i=!1,prefixCls:a,bordered:o=!1,split:d=!0,className:u,rootClassName:v,style:$,children:y,itemLayout:x,loadMore:I,grid:c,dataSource:E=[],size:g,header:C,footer:z,loading:B=!1,rowKey:h,renderItem:b,locale:W}=t,Y=ze(t,["pagination","prefixCls","bordered","split","className","rootClassName","style","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]);const Z=i&&typeof i=="object"?i:{},[Q,k]=n.useState(Z.defaultCurrent||1),[D,G]=n.useState(Z.defaultPageSize||10),{getPrefixCls:Oe,renderEmpty:q,direction:Ie,list:T}=n.useContext(L.E_),Be={current:1,total:0},le=l=>(f,S)=>{var ne;k(f),G(S),i&&i[l]&&((ne=i==null?void 0:i[l])===null||ne===void 0||ne.call(i,f,S))},Te=le("onChange"),Me=le("onShowSizeChange"),Ne=(l,f)=>{if(!b)return null;let S;return typeof h=="function"?S=h(l):h?S=l[h]:S=l.key,S||(S=`list-item-${f}`),n.createElement(n.Fragment,{key:S},b(l,f))},Le=()=>!!(I||i||z),m=Oe("list",a),[je,He,we]=Ee(m);let M=B;typeof M=="boolean"&&(M={spinning:M});const _=M&&M.spinning,We=(0,J.Z)(g);let A="";switch(We){case"large":A="lg";break;case"small":A="sm";break;default:break}const Ze=O()(m,{[`${m}-vertical`]:x==="vertical",[`${m}-${A}`]:A,[`${m}-split`]:d,[`${m}-bordered`]:o,[`${m}-loading`]:_,[`${m}-grid`]:!!c,[`${m}-something-after-last-item`]:Le(),[`${m}-rtl`]:Ie==="rtl"},T==null?void 0:T.className,u,v,He,we),p=(0,F.Z)(Be,{total:E.length,current:Q,pageSize:D},i||{}),se=Math.ceil(p.total/p.pageSize);p.current>se&&(p.current=se);const ce=i?n.createElement("div",{className:O()(`${m}-pagination`,`${m}-pagination-align-${(e=p==null?void 0:p.align)!==null&&e!==void 0?e:"end"}`)},n.createElement(me.Z,Object.assign({},p,{onChange:Te,onShowSizeChange:Me}))):null;let ee=(0,P.Z)(E);i&&E.length>(p.current-1)*p.pageSize&&(ee=(0,P.Z)(E).splice((p.current-1)*p.pageSize,p.pageSize));const De=Object.keys(c||{}).some(l=>["xs","sm","md","lg","xl","xxl"].includes(l)),de=(0,H.Z)(De),R=n.useMemo(()=>{for(let l=0;l<w.c4.length;l+=1){const f=w.c4[l];if(de[f])return f}},[de]),Ge=n.useMemo(()=>{if(!c)return;const l=R&&c[R]?c[R]:c.column;if(l)return{width:`${100/l}%`,maxWidth:`${100/l}%`}},[c==null?void 0:c.column,R]);let te=_&&n.createElement("div",{style:{minHeight:53}});if(ee.length>0){const l=ee.map((f,S)=>Ne(f,S));te=c?n.createElement(j.Z,{gutter:c.gutter},n.Children.map(l,f=>n.createElement("div",{key:f==null?void 0:f.key,style:Ge},f))):n.createElement("ul",{className:`${m}-items`},l)}else!y&&!_&&(te=n.createElement("div",{className:`${m}-empty-text`},W&&W.emptyText||(q==null?void 0:q("List"))||n.createElement(K.Z,{componentName:"List"})));const X=p.position||"bottom",Ae=n.useMemo(()=>({grid:c,itemLayout:x}),[JSON.stringify(c),x]);return je(n.createElement(U.Provider,{value:Ae},n.createElement("div",Object.assign({style:Object.assign(Object.assign({},T==null?void 0:T.style),$),className:Ze},Y),(X==="top"||X==="both")&&ce,C&&n.createElement("div",{className:`${m}-header`},C),n.createElement(ge.Z,Object.assign({},M),te,y),z&&n.createElement("div",{className:`${m}-footer`},z),I||(X==="bottom"||X==="both")&&ce)))}re.Item=ue;var Pe=re}}]);