"use strict";(self.webpackChunkdinky_web=self.webpackChunkdinky_web||[]).push([[784],{40784:function(Yt,Fe,m){m.d(Fe,{Z:function(){return Et}});var le=m(74902),n=m(67294),We=m(93967),oe=m.n(We),Ie=m(25132),Ee=m(9708);const re=t=>{const e=new Map;return t.forEach((s,o)=>{e.set(s,o)}),e},Ve=t=>{const e=new Map;return t.forEach((s,o)=>{let{disabled:a,key:c}=s;a&&e.set(c,o)}),e};var Xe=m(53124),Ge=m(88258),Ue=m(65223),Te=m(10110),Le=m(40378),Ye=(t,e,s)=>{const o=n.useMemo(()=>(t||[]).map(r=>(e&&(r=Object.assign(Object.assign({},r),{key:e(r)})),r)),[t,e]),[a,c]=n.useMemo(()=>{const r=[],f=new Array((s||[]).length),h=re(s||[]);return o.forEach(g=>{h.has(g.key)?f[h.get(g.key)]=g:r.push(g)}),[r,f]},[o,s,e]);return[o,a,c]};const Je=[];function _(t,e){const s=t.filter(o=>e.has(o));return t.length===s.length?t:s}function Ae(t){return Array.from(t).join(";")}function Qe(t,e){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Je;const[o,a]=n.useMemo(()=>[new Set(t.map(g=>g.key)),new Set(e.map(g=>g.key))],[t,e]),[c,r]=n.useState(()=>_(s,o)),[f,h]=n.useState(()=>_(s,a));return n.useEffect(()=>{r(_(s,o)),h(_(s,a))},[s]),n.useEffect(()=>{r(_(c,o)),h(_(f,a))},[Ae(o),Ae(a)]),[c,f,r,h]}var qe=m(80882),_e=m(98423),Oe=m(84567),et=m(85418),tt=m(21770),nt=m(64841),lt=m(48689),ot=m(34952);const st=t=>{const{renderedText:e,renderedEl:s,item:o,checked:a,disabled:c,prefixCls:r,onClick:f,onRemove:h,showRemove:g}=t,b=oe()(`${r}-content-item`,{[`${r}-content-item-disabled`]:c||o.disabled,[`${r}-content-item-checked`]:a});let x;(typeof e=="string"||typeof e=="number")&&(x=String(e));const[R]=(0,Te.Z)("Transfer",Le.Z.Transfer),y={className:b,title:x},I=n.createElement("span",{className:`${r}-content-item-text`},s);return g?n.createElement("li",Object.assign({},y),I,n.createElement(ot.Z,{disabled:c||o.disabled,className:`${r}-content-item-remove`,"aria-label":R==null?void 0:R.remove,onClick:()=>{h==null||h(o)}},n.createElement(lt.Z,null))):(y.onClick=c||o.disabled?void 0:W=>f(o,W),n.createElement("li",Object.assign({},y),n.createElement(Oe.Z,{className:`${r}-checkbox`,checked:a,disabled:c||o.disabled}),I))};var at=n.memo(st);const it=["handleFilter","handleClear","checkedKeys"],rt=t=>Object.assign(Object.assign({},{simple:!0,showSizeChanger:!1,showLessItems:!1}),t),ct=(t,e)=>{const{prefixCls:s,filteredRenderItems:o,selectedKeys:a,disabled:c,showRemove:r,pagination:f,onScroll:h,onItemSelect:g,onItemRemove:b}=t,[x,R]=n.useState(1),y=n.useMemo(()=>f?rt(typeof f=="object"?f:{}):null,[f]),[I,W]=(0,tt.Z)(10,{value:y==null?void 0:y.pageSize});n.useEffect(()=>{if(y){const S=Math.ceil(o.length/I);R(Math.min(x,S))}},[o,y,I]);const D=(S,E)=>{g(S.key,!a.includes(S.key),E)},w=S=>{b==null||b([S.key])},H=S=>{R(S)},Q=(S,E)=>{R(S),W(E)},Z=n.useMemo(()=>y?o.slice((x-1)*I,x*I):o,[x,o,y,I]);n.useImperativeHandle(e,()=>({items:Z}));const N=y?n.createElement(nt.Z,{size:"small",disabled:c,simple:y.simple,pageSize:I,showLessItems:y.showLessItems,showSizeChanger:y.showSizeChanger,className:`${s}-pagination`,total:o.length,current:x,onChange:H,onShowSizeChange:Q}):null,B=oe()(`${s}-content`,{[`${s}-content-show-remove`]:r});return n.createElement(n.Fragment,null,n.createElement("ul",{className:B,onScroll:h},(Z||[]).map(S=>{let{renderedEl:E,renderedText:C,item:$}=S;return n.createElement(at,{key:$.key,item:$,renderedText:C,renderedEl:E,prefixCls:s,showRemove:r,onClick:D,onRemove:w,checked:a.includes($.key),disabled:c||$.disabled})})),N)};var dt=n.forwardRef(ct),ut=m(48296),mt=m(35653),Re=t=>{const{placeholder:e="",value:s,prefixCls:o,disabled:a,onChange:c,handleClear:r}=t,f=n.useCallback(h=>{c==null||c(h),h.target.value===""&&(r==null||r())},[c]);return n.createElement(mt.Z,{placeholder:e,className:o,value:s,onChange:f,disabled:a,allowClear:!0,prefix:n.createElement(ut.Z,null)})};const ft=()=>null;function ht(t){return!!(t&&!n.isValidElement(t)&&Object.prototype.toString.call(t)==="[object Object]")}function se(t){return t.filter(e=>!e.disabled).map(e=>e.key)}const gt=t=>t!==void 0;var ue=t=>{const{prefixCls:e,dataSource:s=[],titleText:o="",checkedKeys:a,disabled:c,showSearch:r=!1,style:f,searchPlaceholder:h,notFoundContent:g,selectAll:b,selectCurrent:x,selectInvert:R,removeAll:y,removeCurrent:I,showSelectAll:W=!0,showRemove:D,pagination:w,direction:H,itemsUnit:Q,itemUnit:Z,selectAllLabel:N,selectionsIcon:B,footer:S,renderList:E,onItemSelectAll:C,onItemRemove:$,handleFilter:U,handleClear:L,filterOption:V,render:me=ft}=t,[F,q]=(0,n.useState)(""),A=(0,n.useRef)({}),P=i=>{q(i.target.value),U(i)},fe=()=>{q(""),L()},he=(i,u)=>V?V(F,u,H):i.includes(F),ge=i=>{let u=E?E(Object.assign(Object.assign({},i),{onItemSelect:(T,G)=>i.onItemSelect(T,G)})):null;const p=!!u;return p||(u=n.createElement(dt,Object.assign({ref:A},i))),{customize:p,bodyContent:u}},ve=i=>{const u=me(i),p=ht(u);return{item:i,renderedEl:p?u.label:u,renderedText:p?u.value:u}},ee=(0,n.useMemo)(()=>Array.isArray(g)?g[H==="left"?0:1]:g,[g,H]),[K,z]=(0,n.useMemo)(()=>{const i=[],u=[];return s.forEach(p=>{const T=ve(p);F&&!he(T.renderedText,p)||(i.push(p),u.push(T))}),[i,u]},[s,F]),k=(0,n.useMemo)(()=>{if(a.length===0)return"none";const i=re(a);return K.every(u=>i.has(u.key)||!!u.disabled)?"all":"part"},[a,K]),Se=(0,n.useMemo)(()=>{const i=r?n.createElement("div",{className:`${e}-body-search-wrapper`},n.createElement(Re,{prefixCls:`${e}-search`,onChange:P,handleClear:fe,placeholder:h,value:F,disabled:c})):null,{customize:u,bodyContent:p}=ge(Object.assign(Object.assign({},(0,_e.Z)(t,it)),{filteredItems:K,filteredRenderItems:z,selectedKeys:a}));let T;return u?T=n.createElement("div",{className:`${e}-body-customize-wrapper`},p):T=K.length?p:n.createElement("div",{className:`${e}-body-not-found`},ee),n.createElement("div",{className:oe()(r?`${e}-body ${e}-body-with-search`:`${e}-body`)},i,T)},[r,e,h,F,c,a,K,z,ee]),pe=n.createElement(Oe.Z,{disabled:s.length===0||c,checked:k==="all",indeterminate:k==="part",className:`${e}-checkbox`,onChange:()=>{C==null||C(K.filter(i=>!i.disabled).map(i=>{let{key:u}=i;return u}),k!=="all")}}),ye=(i,u)=>{if(N)return typeof N=="function"?N({selectedCount:i,totalCount:u}):N;const p=u>1?Q:Z;return n.createElement(n.Fragment,null,(i>0?`${i}/`:"")+u," ",p)},ae=S&&(S.length<2?S(t):S(t,{direction:H})),be=oe()(e,{[`${e}-with-pagination`]:!!w,[`${e}-with-footer`]:!!ae}),Ce=ae?n.createElement("div",{className:`${e}-footer`},ae):null,te=!D&&!w&&pe;let X;D?X=[w?{key:"removeCurrent",label:I,onClick(){var i;const u=se((((i=A.current)===null||i===void 0?void 0:i.items)||[]).map(p=>p.item));$==null||$(u)}}:null,{key:"removeAll",label:y,onClick(){$==null||$(se(K))}}].filter(Boolean):X=[{key:"selectAll",label:b,onClick(){const i=se(K);C==null||C(i,i.length!==a.length)}},w?{key:"selectCurrent",label:x,onClick(){var i;const u=((i=A.current)===null||i===void 0?void 0:i.items)||[];C==null||C(se(u.map(p=>p.item)),!0)}}:null,{key:"selectInvert",label:R,onClick(){var i;const u=se((((i=A.current)===null||i===void 0?void 0:i.items)||[]).map(G=>G.item)),p=new Set(a),T=new Set(p);u.forEach(G=>{p.has(G)?T.delete(G):T.add(G)}),C==null||C(Array.from(T),"replace")}}];const ie=n.createElement(et.Z,{className:`${e}-header-dropdown`,menu:{items:X},disabled:c},gt(B)?B:n.createElement(qe.Z,null));return n.createElement("div",{className:be,style:f},n.createElement("div",{className:`${e}-header`},W?n.createElement(n.Fragment,null,te,ie):null,n.createElement("span",{className:`${e}-header-selected`},ye(a.length,K.length)),n.createElement("span",{className:`${e}-header-title`},o)),Se,Ce)},we=m(6171),Ke=m(90814),je=m(14726),Me=t=>{const{disabled:e,moveToLeft:s,moveToRight:o,leftArrowText:a="",rightArrowText:c="",leftActive:r,rightActive:f,className:h,style:g,direction:b,oneWay:x}=t;return n.createElement("div",{className:h,style:g},n.createElement(je.ZP,{type:"primary",size:"small",disabled:e||!f,onClick:o,icon:b!=="rtl"?n.createElement(Ke.Z,null):n.createElement(we.Z,null)},c),!x&&n.createElement(je.ZP,{type:"primary",size:"small",disabled:e||!r,onClick:s,icon:b!=="rtl"?n.createElement(we.Z,null):n.createElement(Ke.Z,null)},a))},O=m(39302),ce=m(14747),vt=m(91945),St=m(45503);const pt=t=>{const{antCls:e,componentCls:s,listHeight:o,controlHeightLG:a}=t,c=`${e}-table`,r=`${e}-input`;return{[`${s}-customize-list`]:{[`${s}-list`]:{flex:"1 1 50%",width:"auto",height:"auto",minHeight:o},[`${c}-wrapper`]:{[`${c}-small`]:{border:0,borderRadius:0,[`${c}-selection-column`]:{width:a,minWidth:a}},[`${c}-pagination${c}-pagination`]:{margin:0,padding:t.paddingXS}},[`${r}[disabled]`]:{backgroundColor:"transparent"}}}},ke=(t,e)=>{const{componentCls:s,colorBorder:o}=t;return{[`${s}-list`]:{borderColor:e,"&-search:not([disabled])":{borderColor:o}}}},yt=t=>{const{componentCls:e}=t;return{[`${e}-status-error`]:Object.assign({},ke(t,t.colorError)),[`${e}-status-warning`]:Object.assign({},ke(t,t.colorWarning))}},bt=t=>{const{componentCls:e,colorBorder:s,colorSplit:o,lineWidth:a,itemHeight:c,headerHeight:r,transferHeaderVerticalPadding:f,itemPaddingBlock:h,controlItemBgActive:g,colorTextDisabled:b,listHeight:x,listWidth:R,listWidthLG:y,fontSizeIcon:I,marginXS:W,paddingSM:D,lineType:w,antCls:H,iconCls:Q,motionDurationSlow:Z,controlItemBgHover:N,borderRadiusLG:B,colorBgContainer:S,colorText:E,controlItemBgActiveHover:C}=t;return{display:"flex",flexDirection:"column",width:R,height:x,border:`${(0,O.unit)(a)} ${w} ${s}`,borderRadius:t.borderRadiusLG,"&-with-pagination":{width:y,height:"auto"},"&-search":{[`${Q}-search`]:{color:b}},"&-header":{display:"flex",flex:"none",alignItems:"center",height:r,padding:`${(0,O.unit)(t.calc(f).sub(a).equal())} ${(0,O.unit)(D)} ${(0,O.unit)(f)}`,color:E,background:S,borderBottom:`${(0,O.unit)(a)} ${w} ${o}`,borderRadius:`${(0,O.unit)(B)} ${(0,O.unit)(B)} 0 0`,"> *:not(:last-child)":{marginInlineEnd:4},"> *":{flex:"none"},"&-title":Object.assign(Object.assign({},ce.vS),{flex:"auto",textAlign:"end"}),"&-dropdown":Object.assign(Object.assign({},(0,ce.Ro)()),{fontSize:I,transform:"translateY(10%)",cursor:"pointer","&[disabled]":{cursor:"not-allowed"}})},"&-body":{display:"flex",flex:"auto",flexDirection:"column",fontSize:t.fontSize,minHeight:0,"&-search-wrapper":{position:"relative",flex:"none",padding:D}},"&-content":{flex:"auto",margin:0,padding:0,overflow:"auto",listStyle:"none","&-item":{display:"flex",alignItems:"center",minHeight:c,padding:`${(0,O.unit)(h)} ${(0,O.unit)(D)}`,transition:`all ${Z}`,"> *:not(:last-child)":{marginInlineEnd:W},"> *":{flex:"none"},"&-text":Object.assign(Object.assign({},ce.vS),{flex:"auto"}),"&-remove":{position:"relative",color:s,cursor:"pointer",transition:`all ${Z}`,"&:hover":{color:t.colorLinkHover},"&::after":{position:"absolute",inset:`-${(0,O.unit)(h)} -50%`,content:'""'}},[`&:not(${e}-list-content-item-disabled)`]:{"&:hover":{backgroundColor:N,cursor:"pointer"},[`&${e}-list-content-item-checked:hover`]:{backgroundColor:C}},"&-checked":{backgroundColor:g},"&-disabled":{color:b,cursor:"not-allowed"}},[`&-show-remove ${e}-list-content-item:not(${e}-list-content-item-disabled):hover`]:{background:"transparent",cursor:"default"}},"&-pagination":{padding:t.paddingXS,textAlign:"end",borderTop:`${(0,O.unit)(a)} ${w} ${o}`,[`${H}-pagination-options`]:{paddingInlineEnd:t.paddingXS}},"&-body-not-found":{flex:"none",width:"100%",margin:"auto 0",color:b,textAlign:"center"},"&-footer":{borderTop:`${(0,O.unit)(a)} ${w} ${o}`},"&-checkbox":{lineHeight:1}}},Ct=t=>{const{antCls:e,iconCls:s,componentCls:o,marginXS:a,marginXXS:c,fontSizeIcon:r,colorBgContainerDisabled:f}=t;return{[o]:Object.assign(Object.assign({},(0,ce.Wf)(t)),{position:"relative",display:"flex",alignItems:"stretch",[`${o}-disabled`]:{[`${o}-list`]:{background:f}},[`${o}-list`]:bt(t),[`${o}-operation`]:{display:"flex",flex:"none",flexDirection:"column",alignSelf:"center",margin:`0 ${(0,O.unit)(a)}`,verticalAlign:"middle",[`${e}-btn`]:{display:"block","&:first-child":{marginBottom:c},[s]:{fontSize:r}}}})}},$t=t=>{const{componentCls:e}=t;return{[`${e}-rtl`]:{direction:"rtl"}}},xt=t=>{const{fontSize:e,lineHeight:s,controlHeight:o,controlHeightLG:a,lineWidth:c}=t,r=Math.round(e*s);return{listWidth:180,listHeight:200,listWidthLG:250,headerHeight:a,itemHeight:o,itemPaddingBlock:(o-r)/2,transferHeaderVerticalPadding:Math.ceil((a-c-r)/2)}};var It=(0,vt.I$)("Transfer",t=>{const e=(0,St.TS)(t);return[Ct(e),pt(e),yt(e),$t(e)]},xt);const de=t=>{const{dataSource:e,targetKeys:s=[],selectedKeys:o,selectAllLabels:a=[],operations:c=[],style:r={},listStyle:f={},locale:h={},titles:g,disabled:b,showSearch:x=!1,operationStyle:R,showSelectAll:y,oneWay:I,pagination:W,status:D,prefixCls:w,className:H,rootClassName:Q,selectionsIcon:Z,filterOption:N,render:B,footer:S,children:E,rowKey:C,onScroll:$,onChange:U,onSearch:L,onSelectChange:V}=t,{getPrefixCls:me,renderEmpty:F,direction:q,transfer:A}=(0,n.useContext)(Xe.E_),P=me("transfer",w),[fe,he,ge]=It(P),[ve,ee,K]=Ye(e,C,s),[z,k,Se,pe]=Qe(ee,K,o),[ye,ae]=(0,Ie.Z)(l=>l.key),[be,Ce]=(0,Ie.Z)(l=>l.key),te=(0,n.useCallback)((l,d)=>{if(l==="left"){const v=typeof d=="function"?d(z||[]):d;Se(v)}else{const v=typeof d=="function"?d(k||[]):d;pe(v)}},[z,k]),X=(l,d)=>{(l==="left"?ae:Ce)(d)},ie=(0,n.useCallback)((l,d)=>{l==="left"?V==null||V(d,k):V==null||V(z,d)},[z,k]),i=l=>{var d;return(d=g!=null?g:l.titles)!==null&&d!==void 0?d:[]},u=l=>{$==null||$("left",l)},p=l=>{$==null||$("right",l)},T=l=>{const d=l==="right"?z:k,v=Ve(ve),j=d.filter(ne=>!v.has(ne)),M=re(j),Y=l==="right"?j.concat(s):s.filter(ne=>!M.has(ne)),J=l==="right"?"left":"right";te(J,[]),ie(J,[]),U==null||U(Y,l,j)},G=()=>{T("left"),X("left",null)},Tt=()=>{T("right"),X("right",null)},Ze=(l,d,v)=>{te(l,j=>{let M=[];if(v==="replace")M=d;else if(v)M=Array.from(new Set([].concat((0,le.Z)(j),(0,le.Z)(d))));else{const Y=re(d);M=j.filter(J=>!Y.has(J))}return ie(l,M),M}),X(l,null)},Lt=(l,d)=>{Ze("left",l,d)},At=(l,d)=>{Ze("right",l,d)},Ot=l=>L==null?void 0:L("left",l.target.value),Rt=l=>L==null?void 0:L("right",l.target.value),wt=()=>L==null?void 0:L("left",""),Kt=()=>L==null?void 0:L("right",""),jt=(l,d,v,j,M)=>{d.has(v)&&(d.delete(v),X(l,null)),j&&(d.add(v),X(l,M))},Mt=(l,d,v,j)=>{(l==="left"?ye:be)(j,d,v)},Ne=(l,d,v,j)=>{const M=l==="left",Y=(0,le.Z)(M?z:k),J=new Set(Y),ne=(0,le.Z)(M?ee:K).filter(xe=>!xe.disabled),He=ne.findIndex(xe=>xe.key===d);j&&Y.length>0?Mt(l,ne,J,He):jt(l,J,d,v,He);const Be=Array.from(J);ie(l,Be),t.selectedKeys||te(l,Be)},kt=(l,d,v)=>{Ne("left",l,d,v==null?void 0:v.shiftKey)},Zt=(l,d,v)=>{Ne("right",l,d,v==null?void 0:v.shiftKey)},Nt=l=>{te("right",[]),U==null||U(s.filter(d=>!l.includes(d)),"left",(0,le.Z)(l))},Pe=l=>typeof f=="function"?f({direction:l}):f||{},Pt=(0,n.useContext)(Ue.aM),{hasFeedback:zt,status:Dt}=Pt,Ht=l=>Object.assign(Object.assign(Object.assign({},l),{notFoundContent:(F==null?void 0:F("Transfer"))||n.createElement(Ge.Z,{componentName:"Transfer"})}),h),Bt=(0,Ee.F)(Dt,D),ze=!E&&W,Ft=k.length>0,Wt=z.length>0,Vt=oe()(P,{[`${P}-disabled`]:b,[`${P}-customize-list`]:!!E,[`${P}-rtl`]:q==="rtl"},(0,Ee.Z)(P,Bt,zt),A==null?void 0:A.className,H,Q,he,ge),[Xt]=(0,Te.Z)("Transfer",Le.Z.Transfer),$e=Ht(Xt),[Gt,Ut]=i($e),De=Z!=null?Z:A==null?void 0:A.selectionsIcon;return fe(n.createElement("div",{className:Vt,style:Object.assign(Object.assign({},A==null?void 0:A.style),r)},n.createElement(ue,Object.assign({prefixCls:`${P}-list`,titleText:Gt,dataSource:ee,filterOption:N,style:Pe("left"),checkedKeys:z,handleFilter:Ot,handleClear:wt,onItemSelect:kt,onItemSelectAll:Lt,render:B,showSearch:x,renderList:E,footer:S,onScroll:u,disabled:b,direction:q==="rtl"?"right":"left",showSelectAll:y,selectAllLabel:a[0],pagination:ze,selectionsIcon:De},$e)),n.createElement(Me,{className:`${P}-operation`,rightActive:Wt,rightArrowText:c[0],moveToRight:Tt,leftActive:Ft,leftArrowText:c[1],moveToLeft:G,style:R,disabled:b,direction:q,oneWay:I}),n.createElement(ue,Object.assign({prefixCls:`${P}-list`,titleText:Ut,dataSource:K,filterOption:N,style:Pe("right"),checkedKeys:k,handleFilter:Rt,handleClear:Kt,onItemSelect:Zt,onItemSelectAll:At,onItemRemove:Nt,render:B,showSearch:x,renderList:E,footer:S,onScroll:p,disabled:b,direction:q==="rtl"?"left":"right",showSelectAll:y,selectAllLabel:a[1],showRemove:I,pagination:ze,selectionsIcon:De},$e))))};de.List=ue,de.Search=Re,de.Operation=Me;var Et=de}}]);
