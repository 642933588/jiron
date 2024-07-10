"use strict";(self.webpackChunkdinky_web=self.webpackChunkdinky_web||[]).push([[5159],{87454:function(J,F,a){var x=a(96012),p=a(85893),I=function(l){var k=l.children,e=(0,x.q_)({opacity:1,from:{opacity:0},config:{duration:100,delay:100}});return(0,p.jsx)(x.q.div,{style:e,children:k})};F.Z=I},68166:function(J,F,a){var x=a(96012),p=a(85893),I=function(l){var k=l.children,e=(0,x.q_)({opacity:1,from:{opacity:0},config:{duration:100}});return(0,p.jsx)(x.q.h1,{style:e,children:k})};F.Z=I},28712:function(J,F,a){a.d(F,{m:function(){return k}});var x=a(41913),p=a(65987),I=a(14726),m=a(67294),l=a(85893),k=function(Y){var N=Y.onClick,V=Y.disabled,H=V===void 0?!1:V;return(0,l.jsx)(I.ZP,{className:"options-button",icon:(0,l.jsx)(p.Z,{}),disabled:H,title:(0,x.l)("button.edit"),onClick:function(){return N()}})}},39149:function(J,F,a){a.d(F,{Fu:function(){return q},HL:function(){return ee},Td:function(){return i},Y2:function(){return K},Z1:function(){return ae},nh:function(){return te},vE:function(){return M}});var x=a(68400),p=a.n(x),I=a(9361),m=a(97653),l,k,e,Y,N,V,H,w=I.Z.getDesignToken,Q=w(),M=m.ZP.div(l||(l=p()([`
  display: flex !important;
  justify-content: space-between;
  margin-left: 2vw;
  margin-right: 2vw;
`]))),ee=m.ZP.div(k||(k=p()([`
  display: flex !important;
  justify-content: flex-end;
`]))),K=m.ZP.div(e||(e=p()([`
  height: 80vh;
  overflow: auto;
`]))),te=m.ZP.div(Y||(Y=p()([`
  position: absolute;
  color: #1890ff;
  font-size: large;
  z-index: 2;
  top: 50%;
`]))),q=m.ZP.div(N||(N=p()([`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`]))),i=m.ZP.div(V||(V=p()([`
  display: flex;
  height: 100%;
  justify-content: left;
  align-items: center;
`]))),ae=m.ZP.div(H||(H=p()([`
  display: flex;
  height: 100%;
  justify-content: left;
  align-items: center;
`])))},90045:function(J,F,a){a.d(F,{C:function(){return x},E:function(){return p}});var x=function(I){return I.DINKY="Dinky",I.FLINK="Flink",I.MAVEN="Maven",I.DOLPHIN_SCHEDULER="DolphinScheduler",I.LDAP="LDAP",I.METRIC="Metric",I.RESOURCE="Resource",I.ENV="Env",I}({}),p=function(I){return I.BOOLEAN="boolean",I.OPTION="option",I}({})},18164:function(J,F,a){a.r(F),a.d(F,{default:function(){return me}});var x=a(68166),p=a(64599),I=a.n(p),m=a(15009),l=a.n(m),k=a(99289),e=a.n(k),Y=a(5574),N=a.n(Y),V=a(87454),H=a(58461),w=a(39149),Q=a(49881),M=a(90045),ee=a(97857),K=a.n(ee),te=a(28712),q=a(79935),i=a(41913),ae=a(90543),se=a(7616),Te=a(89359),ce=a(11198),re=a(42075),oe=a(72269),ne=a(55742),le=a(35653),y=a(67294),t=a(85893),Ee=function(u){var v=u.data,O=u.tag,f=u.auth,D=u.onSave,S=u.loading,R=u.toolBarRender,d=u.selectChanges,h=(0,y.useRef)(),L=function(c){var T;D(c),(T=h.current)===null||T===void 0||T.reload()},o=function(c,T){return T.frontType===M.E.BOOLEAN||T.frontType===M.E.OPTION?[]:[(0,t.jsx)(te.m,{disabled:!(0,Q.ux)(f),onClick:function(){c.startEditable(T.key)}},"edit")]},_=function(c){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ce.Z.Item,{children:c.name}),(0,t.jsx)(re.Z,{style:{marginLeft:15},size:0,children:O})]})},A=function(c){return c.frontType===M.E.BOOLEAN?(0,t.jsx)(oe.Z,K()(K()({},(0,q.uP)()),{},{style:{width:"4vw"},disabled:!(0,Q.ux)(f),checked:c.value,onChange:function(g){return D(K()(K()({},c),{},{value:g}))}})):c.frontType===M.E.OPTION?(0,t.jsx)(ne.ZP.Group,{onChange:d,value:c.value.toLowerCase(),disabled:!(0,Q.ux)(f),children:c.example.map(function(T){return(0,t.jsx)(ne.ZP.Button,{value:T.toLowerCase(),children:T},T)})}):(0,t.jsx)(le.Z,{style:{width:"30vw"},disabled:!0,value:c.value})},r={title:{editable:!1,render:function(c,T){return _(T)}},avatar:{editable:!1,render:function(){return(0,t.jsx)(ae.Z,{})}},description:{editable:!1,render:function(c,T){return(0,t.jsx)(t.Fragment,{children:T.note})}},content:{dataIndex:"value",render:function(c,T){return A(T)}},actions:{render:function(c,T,g,E){return o(E,T)}}},G={toolBarRender:R,rowKey:"key",style:{margin:0},loading:S,actionRef:h,size:"small",dataSource:v,showActions:"hover",metas:K()({},r),editable:{saveText:(0,t.jsx)(se.Z,{title:(0,i.l)("button.save")}),cancelText:(0,t.jsx)(H.xC,{title:(0,i.l)("button.back")}),actionRender:function(c,T,g){return c.frontType===M.E.BOOLEAN||c.frontType===M.E.OPTION?[]:[g.save,g.cancel]},onSave:function(){var s=e()(l()().mark(function T(g,E){return l()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.abrupt("return",L(E));case 1:case"end":return U.stop()}},T)}));function c(T,g){return s.apply(this,arguments)}return c}()}};return(0,t.jsx)(Te.Rs,K()({},G))},$=Ee,B=a(66309),Se=function(u){var v=u.data,O=u.onSave,f=u.auth,D=y.useState(!1),S=N()(D,2),R=S[0],d=S[1],h=function(){var L=e()(l()().mark(function o(_){return l()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d(!0),r.next=3,O(_);case 3:d(!1);case 4:case"end":return r.stop()}},o)}));return function(_){return L.apply(this,arguments)}}();return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)($,{loading:R,onSave:h,auth:f,tag:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(B.Z,{color:"default",children:(0,i.l)("sys.setting.tag.integration")})}),data:v})})},ge=function(u){var v=u.data,O=u.onSave,f=u.auth,D=y.useState(!1),S=N()(D,2),R=S[0],d=S[1],h=function(){var L=e()(l()().mark(function o(_){return l()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d(!0),r.next=3,O(_);case 3:d(!1);case 4:case"end":return r.stop()}},o)}));return function(_){return L.apply(this,arguments)}}();return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)($,{loading:R,onSave:h,auth:f,tag:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(B.Z,{color:"error",children:(0,i.l)("sys.setting.tag.system")})}),data:v})})},ve=function(u){var v=u.data,O=u.onSave,f=u.auth,D=y.useState(!1),S=N()(D,2),R=S[0],d=S[1],h=function(){var L=e()(l()().mark(function o(_){return l()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d(!0),r.next=3,O(_);case 3:d(!1);case 4:case"end":return r.stop()}},o)}));return function(_){return L.apply(this,arguments)}}();return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)($,{loading:R,onSave:h,auth:f,tag:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(B.Z,{color:"success",children:(0,i.l)("sys.setting.tag.extend")}),(0,t.jsx)(B.Z,{color:"processing",children:(0,i.l)("sys.setting.tag.core")})]}),data:v})})},_e=a(25538),P=a(21953),X=a(58023),Ae=a(80275),ue=a(37476),Ie=a(57513),fe=[{title:(0,i.l)("user.username"),dataIndex:"username"},{title:(0,i.l)("user.nickname"),dataIndex:"nickname"},{title:(0,i.l)("sys.ldap.settings.loadable"),dataIndex:"enabled",render:function(u,v){return v.enabled?(0,i.l)("rc.ai.isSimple.yes"):(0,i.l)("rc.ai.isSimple.no")}}],Re=function(){var u=(0,y.useState)(!1),v=N()(u,2),O=v[0],f=v[1],D=(0,y.useState)([]),S=N()(D,2),R=S[0],d=S[1],h=(0,y.useState)([]),L=N()(h,2),o=L[0],_=L[1],A=(0,y.useState)(""),r=N()(A,2),G=r[0],s=r[1],c=function(){var g=e()(l()().mark(function E(){var j;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return f(!0),n.next=3,(0,_e.Yu)(X.Z.LDAP_LIST_USER);case 3:j=n.sent,_(j.data),f(!1);case 6:case"end":return n.stop()}},E)}));return function(){return g.apply(this,arguments)}}(),T=function(){var g=e()(l()().mark(function E(){return l()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,(0,P.vO)(X.Z.LDAP_IMPORT_USERS,(0,i.l)("sys.ldap.settings.loadUser"),R);case 2:return U.next=4,c();case 4:d([]);case 5:case"end":return U.stop()}},E)}));return function(){return g.apply(this,arguments)}}();return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(ue.Y,{title:(0,i.l)("sys.ldap.settings.loadUser"),width:"50%",submitter:{submitButtonProps:{disabled:R.length===0}},onFinish:function(){return T()},trigger:(0,t.jsx)(B.Z,{icon:(0,t.jsx)(Ae.Z,{}),color:"#f50",onClick:function(){return c()},children:(0,i.l)("sys.ldap.settings.loadUser")}),children:[(0,t.jsx)(le.Z.Search,{placeholder:(0,i.l)("sys.ldap.settings.keyword"),style:{marginBottom:8},enterButton:!0,loading:O,onSearch:function(E){return s(E)}}),(0,t.jsx)(Ie.Z,{loading:O,size:"small",columns:fe,rowSelection:{onChange:function(E,j){return d(j)},getCheckboxProps:function(E){return{disabled:!E.enabled}}},dataSource:o.filter(function(g){var E;return g.username.indexOf(G)!==-1||((E=g.nickname)===null||E===void 0?void 0:E.indexOf(G))!==-1}),rowKey:"username"})]})})},he=a(3253),ie=a(5966),Oe=a(18922),De=function(){var u=Oe.Z.useForm(),v=N()(u,1),O=v[0],f=function(){var D=e()(l()().mark(function S(R){return l()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,(0,P.vO)(X.Z.LDAP_TEST_LOGIN,(0,i.l)("sys.ldap.settings.testLogin"),R);case 2:case"end":return h.stop()}},S)}));return function(R){return D.apply(this,arguments)}}();return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(ue.Y,{width:400,onFinish:f,form:O,modalProps:{onCancel:function(){return O.resetFields()},okButtonProps:{htmlType:"submit",autoFocus:!0}},trigger:(0,t.jsx)(B.Z,{icon:(0,t.jsx)(he.Z,{}),color:"#108ee9",children:(0,i.l)("sys.ldap.settings.testLogin")}),children:[(0,t.jsx)(ie.Z,{name:"username",label:(0,i.l)("login.username.placeholder")}),(0,t.jsx)(ie.Z,{name:"password",label:(0,i.l)("login.password.placeholder")})]})})},Le=a(87712),Ne=a(8941),pe=function(u){var v=u.data,O=u.onSave,f=u.auth,D=y.useState(!1),S=N()(D,2),R=S[0],d=S[1],h=function(){var _=e()(l()().mark(function A(){var r;return l()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d(!0),s.next=3,(0,P.Ri)(X.Z.LDAP_TEST_CONNECT);case 3:r=s.sent,r&&(0,Le.kk)((0,i.l)("sys.ldap.settings.testConnect.success","",{count:r})),d(!1);case 6:case"end":return s.stop()}},A)}));return function(){return _.apply(this,arguments)}}(),L=function(){var _=e()(l()().mark(function A(r){return l()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d(!0),s.next=3,O(r);case 3:d(!1);case 4:case"end":return s.stop()}},A)}));return function(r){return _.apply(this,arguments)}}(),o=function(){return[(0,t.jsxs)(re.Z,{children:[(0,t.jsx)(B.Z,{icon:(0,t.jsx)(Ne.Z,{}),color:"#87d068",onClick:function(){return h()},children:(0,i.l)("sys.ldap.settings.testConnect")}),(0,t.jsx)(De,{}),(0,t.jsx)(Re,{})]},"ldapToolBar")]};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)($,{loading:R,onSave:L,auth:f,tag:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(B.Z,{color:"default",children:(0,i.l)("sys.setting.tag.integration")})}),data:v,toolBarRender:o})})},Ge=function(u){var v=u.data,O=u.onSave,f=u.auth,D=y.useState(!1),S=N()(D,2),R=S[0],d=S[1],h=function(){var L=e()(l()().mark(function o(_){return l()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d(!0),r.next=3,O(_);case 3:d(!1);case 4:case"end":return r.stop()}},o)}));return function(_){return L.apply(this,arguments)}}();return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)($,{loading:R,onSave:h,auth:f,tag:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(B.Z,{color:"default",children:(0,i.l)("sys.setting.tag.integration")})}),data:v})})},Ue=function(u){var v=u.data,O=u.onSave,f=u.auth,D=y.useState(!1),S=N()(D,2),R=S[0],d=S[1],h=function(){var L=e()(l()().mark(function o(_){return l()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d(!0),r.next=3,O(_);case 3:d(!1);case 4:case"end":return r.stop()}},o)}));return function(_){return L.apply(this,arguments)}}();return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)($,{loading:R,onSave:h,auth:f,tag:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(B.Z,{color:"error",children:(0,i.l)("sys.setting.tag.system")}),(0,t.jsx)(B.Z,{color:"processing",children:(0,i.l)("sys.setting.tag.core")})]}),data:v})})},de={HDFS:"HDFS",OSS:"OSS"},ye=function(u){var v=u.data,O=u.onSave,f=u.auth,D=y.useState(!1),S=N()(D,2),R=S[0],d=S[1],h=y.useState("hdfs"),L=N()(h,2),o=L[0],_=L[1],A=(0,y.useState)({base:[],hdfs:[],oss:[]}),r=N()(A,2),G=r[0],s=r[1];(0,y.useEffect)(function(){var E,j=v.filter(function(Z){return Z.key.startsWith("sys.resource.settings.base")}),U=v.filter(function(Z){return Z.key.startsWith("sys.resource.settings.hdfs")}),n=v.filter(function(Z){return Z.key.startsWith("sys.resource.settings.oss")});s({base:j,hdfs:U,oss:n});var W=(E=j.find(function(Z){return Z.key==="sys.resource.settings.base.model"}))===null||E===void 0?void 0:E.value;W&&_(W)},[v]);var c="sys.resource.settings.base.model",T=function(){var E=e()(l()().mark(function j(U){return l()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return d(!0),W.next=3,O(U);case 3:d(!1);case 4:case"end":return W.stop()}},j)}));return function(U){return E.apply(this,arguments)}}(),g=function(){var E=e()(l()().mark(function j(U){var n;return l()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return n=U.target.value,_(n),Z.next=4,T({name:"",example:[],frontType:"",key:c,note:"",value:n.toString().toLocaleUpperCase()});case 4:case"end":return Z.stop()}},j)}));return function(U){return E.apply(this,arguments)}}();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)($,{loading:R,auth:f,onSave:T,tag:(0,t.jsx)(B.Z,{color:"default",children:(0,i.l)("sys.setting.tag.integration")}),data:G.base,selectChanges:g}),o.toLocaleUpperCase()===de.HDFS&&(0,t.jsx)($,{loading:R,auth:f,onSave:T,tag:(0,t.jsx)(B.Z,{color:"default",children:(0,i.l)("sys.setting.tag.integration")}),data:G.hdfs}),o.toLocaleUpperCase()===de.OSS&&(0,t.jsx)($,{loading:R,auth:f,onSave:T,tag:(0,t.jsx)(B.Z,{color:"default",children:(0,i.l)("sys.setting.tag.integration")}),data:G.oss})]})},b=a(81029),je=a(38345),z=25,xe=function(){var u=(0,y.useState)(M.C.DINKY),v=N()(u,2),O=v[0],f=v[1],D=(0,Q.md)(),S=(0,y.useState)({dolphinscheduler:[],env:[],flink:[],maven:[],ldap:[],metrics:[],resource:[]}),R=N()(S,2),d=R[0],h=R[1],L=function(){var A=e()(l()().mark(function r(){return l()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,P.Ri)(X.Z.SYSTEM_GET_ALL_CONFIG).then(function(c){c&&h(c)});case 2:case"end":return s.stop()}},r)}));return function(){return A.apply(this,arguments)}}();(0,y.useEffect)(function(){L()},[]);var o=function(){var A=e()(l()().mark(function r(G){var s,c,T,g,E,j;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,P.vO)(X.Z.SYSTEM_MODIFY_CONFIG,(0,i.l)("sys.setting.modify","",{key:G.name}),G);case 2:if(n.t1=s=n.sent,n.t0=n.t1!==null,!n.t0){n.next=6;break}n.t0=s!==void 0;case 6:if(!n.t0){n.next=10;break}n.t2=s,n.next=11;break;case 10:n.t2={};case 11:if(c=n.t2,T=c.code,T!==q.n8.ERROR){n.next=18;break}return n.next=16,L();case 16:n.next=36;break;case 18:g=I()(d[G.key.split(".")[1]]),n.prev=19,g.s();case 21:if((E=g.n()).done){n.next=28;break}if(j=E.value,j.key!==G.key){n.next=26;break}return j.value=G.value,n.abrupt("break",28);case 26:n.next=21;break;case 28:n.next=33;break;case 30:n.prev=30,n.t3=n.catch(19),g.e(n.t3);case 33:return n.prev=33,g.f(),n.finish(33);case 36:case"end":return n.stop()}},r,null,[[19,30,33,36]])}));return function(G){return A.apply(this,arguments)}}(),_=function(){var r=d.env,G=d.flink,s=d.maven,c=d.dolphinscheduler,T=d.ldap,g=d.metrics,E=d.resource;return[{key:M.C.DINKY,label:(0,t.jsxs)(w.Fu,{children:[(0,t.jsx)(H.O_,{size:z-5}),(0,i.l)("sys.setting.dinky")]}),children:(0,t.jsx)(ge,{auth:b.k5.SETTING_GLOBAL_DINKY_EDIT,onSave:o,data:r}),path:b.k5.SETTING_GLOBAL_DINKY},{key:M.C.FLINK,label:(0,t.jsxs)(w.Fu,{children:[(0,t.jsx)(H.sY,{size:z}),(0,i.l)("sys.setting.flink")]}),children:(0,t.jsx)(ve,{auth:b.k5.SETTING_GLOBAL_FLINK_EDIT,onSave:o,data:G}),path:b.k5.SETTING_GLOBAL_FLINK},{key:M.C.MAVEN,label:(0,t.jsxs)(w.Fu,{children:[(0,t.jsx)(H.wR,{size:z}),(0,i.l)("sys.setting.maven")]}),children:(0,t.jsx)(Ge,{auth:b.k5.SETTING_GLOBAL_MAVEN_EDIT,onSave:o,data:s}),path:b.k5.SETTING_GLOBAL_MAVEN},{key:M.C.DOLPHIN_SCHEDULER,label:(0,t.jsxs)(w.Fu,{children:[(0,t.jsx)(H.ie,{size:z}),(0,i.l)("sys.setting.ds")]}),children:(0,t.jsx)(Se,{auth:b.k5.SETTING_GLOBAL_DS_EDIT,onSave:o,data:c}),path:b.k5.SETTING_GLOBAL_DS},{key:M.C.LDAP,label:(0,t.jsxs)(w.Fu,{children:[(0,t.jsx)(H.vc,{size:z}),(0,i.l)("sys.setting.ldap")]}),children:(0,t.jsx)(pe,{auth:b.k5.SETTING_GLOBAL_LDAP_EDIT,onSave:o,data:T}),path:b.k5.SETTING_GLOBAL_LDAP},{key:M.C.METRIC,label:(0,t.jsxs)(w.Fu,{children:[(0,t.jsx)(H.dr,{size:z}),(0,i.l)("sys.setting.metrics")]}),children:(0,t.jsx)(Ue,{auth:b.k5.SETTING_GLOBAL_METRICS_EDIT,onSave:o,data:g}),path:b.k5.SETTING_GLOBAL_METRICS},{key:M.C.RESOURCE,label:(0,t.jsxs)(w.Fu,{children:[(0,t.jsx)(H.wA,{size:z}),(0,i.l)("sys.setting.resource")]}),children:(0,t.jsx)(ye,{auth:b.k5.SETTING_GLOBAL_RESOURCE_EDIT,onSave:o,data:E}),path:b.k5.SETTING_GLOBAL_RESOURCE}]};return(0,t.jsx)(V.Z,{children:(0,t.jsx)("div",{style:{paddingBottom:"20px"},children:(0,t.jsx)(je.Z,{ghost:!0,bodyStyle:{height:"80vh"},className:"schemaTree",size:"small",bordered:!0,tabs:{activeKey:O,type:"card",cardProps:{hoverable:!0,bodyStyle:{height:parent.innerHeight-155},boxShadow:!0},animated:!0,onChange:function(r){return f(r)},items:_().filter(function(A){return!A.path||!!(0,Q.sg)({path:A.path,children:A,access:D})})}})})})},Me=(0,y.memo)(xe),Fe=a(11774),me=function(){return(0,t.jsx)(x.Z,{children:(0,t.jsx)(Fe._z,{title:!1,children:(0,t.jsx)(Me,{})})})}},81029:function(J,F,a){a.d(F,{ef:function(){return m},k5:function(){return k},oF:function(){return l}});var x=a(41913),p=a(66309),I=a(85893),m={true:{text:(0,I.jsx)(p.Z,{color:"success",children:(0,x.l)("global.yes")}),status:"Success"},false:{text:(0,I.jsx)(p.Z,{color:"error",children:(0,x.l)("global.no")}),status:"Error"}},l=[{value:1,text:(0,x.l)("global.yes")},{value:0,text:(0,x.l)("global.no")}],k=function(e){return e.DATA_STUDIO_LEFT_PROJECT="/datastudio/left/project",e.DATASTUDIO_LEFT_CATALOG="/datastudio/left/catalog",e.DATASTUDIO_LEFT_DATASOURCE="/datastudio/left/datasource",e.DATASTUDIO_LEFT_GLOBAL_VARIABLE="/datastudio/left/globalVariable",e.DATASTUDIO_RIGHT_JOB_CONFIG="/datastudio/right/jobConfig",e.DATASTUDIO_RIGHT_PREVIEW_CONFIG="/datastudio/right/previewConfig",e.DATASTUDIO_RIGHT_SAVE_POINT="/datastudio/right/savePoint",e.DATASTUDIO_RIGHT_HISTORY_VISION="/datastudio/right/historyVision",e.DATASTUDIO_RIGHT_JOB_INFO="/datastudio/right/jobInfo",e.DATASTUDIO_LEFT_BOTTOM_CONSOLE="/datastudio/bottom/console",e.DATASTUDIO_LEFT_BOTTOM_RESULT="/datastudio/bottom/result",e.DATASTUDIO_LEFT_BOTTOM_LINEAGE="/datastudio/bottom/lineage",e.DATASTUDIO_LEFT_BOTTOM_HISTORY="/datastudio/bottom/history",e.DATASTUDIO_LEFT_BOTTOM_TABLE_DATA="/datastudio/bottom/table-data",e.DATASTUDIO_LEFT_BOTTOM_TOOL="/datastudio/bottom/tool",e.REGISTRATION_ALERT_GROUP_ADD="/registration/alert/group/add",e.REGISTRATION_ALERT_GROUP_EDIT="/registration/alert/group/edit",e.REGISTRATION_ALERT_GROUP_DELETE="/registration/alert/group/delete",e.REGISTRATION_ALERT_INSTANCE_ADD="/registration/alert/instance/add",e.REGISTRATION_ALERT_INSTANCE_EDIT="/registration/alert/instance/edit",e.REGISTRATION_ALERT_INSTANCE_DELETE="/registration/alert/instance/delete",e.REGISTRATION_ALERT_TEMPLATE_ADD="/registration/alert/template/add",e.REGISTRATION_ALERT_TEMPLATE_EDIT="/registration/alert/template/edit",e.REGISTRATION_ALERT_TEMPLATE_DELETE="/registration/alert/template/delete",e.REGISTRATION_CLUSTER_CONFIG_ADD="/registration/cluster/config/add",e.REGISTRATION_CLUSTER_CONFIG_EDIT="/registration/cluster/config/edit",e.REGISTRATION_CLUSTER_CONFIG_DELETE="/registration/cluster/config/delete",e.REGISTRATION_CLUSTER_CONFIG_HEARTBEATS="/registration/cluster/config/heartbeat",e.REGISTRATION_CLUSTER_CONFIG_DEPLOY="/registration/cluster/config/deploy",e.REGISTRATION_CLUSTER_INSTANCE_ADD="/registration/cluster/instance/add",e.REGISTRATION_CLUSTER_INSTANCE_EDIT="/registration/cluster/instance/edit",e.REGISTRATION_CLUSTER_INSTANCE_DELETE="/registration/cluster/instance/delete",e.REGISTRATION_CLUSTER_INSTANCE_HEARTBEATS="/registration/cluster/instance/heartbeat",e.REGISTRATION_CLUSTER_INSTANCE_KILL="/registration/cluster/instance/kill",e.REGISTRATION_DATA_SOURCE_LIST="/registration/datasource/list",e.REGISTRATION_DATA_SOURCE_ADD="/registration/datasource/list/add",e.REGISTRATION_DATA_SOURCE_EDIT="/registration/datasource/list/edit",e.REGISTRATION_DATA_SOURCE_DELETE="/registration/datasource/list/delete",e.REGISTRATION_DATA_SOURCE_COPY="/registration/datasource/list/copy",e.REGISTRATION_DATA_SOURCE_CHECK_HEARTBEAT="/registration/datasource/list/heartbeat",e.REGISTRATION_DATA_SOURCE_DETAIL_TREE="/registration/datasource/detail/tree",e.REGISTRATION_DATA_SOURCE_DETAIL_DESC="/registration/datasource/detail/desc",e.REGISTRATION_DATA_SOURCE_DETAIL_QUERY="/registration/datasource/detail/query",e.REGISTRATION_DATA_SOURCE_DETAIL_GENSQL="/registration/datasource/detail/gensql",e.REGISTRATION_DATA_SOURCE_DETAIL_CONSOLE="/registration/datasource/detail/console",e.REGISTRATION_DATA_SOURCE_DETAIL_REFRESH="/registration/datasource/detail/refresh",e.REGISTRATION_DOCUMENT_ADD="/registration/document/add",e.REGISTRATION_DOCUMENT_EDIT="/registration/document/edit",e.REGISTRATION_DOCUMENT_DELETE="/registration/document/delete",e.REGISTRATION_FRAGMENT_ADD="/registration/fragment/add",e.REGISTRATION_FRAGMENT_EDIT="/registration/fragment/edit",e.REGISTRATION_FRAGMENT_DELETE="/registration/fragment/delete",e.REGISTRATION_GIT_PROJECT_ADD="/registration/gitproject/add",e.REGISTRATION_GIT_PROJECT_EDIT="/registration/gitproject/edit",e.REGISTRATION_GIT_PROJECT_DELETE="/registration/gitproject/delete",e.REGISTRATION_GIT_PROJECT_BUILD="/registration/gitproject/build",e.REGISTRATION_GIT_PROJECT_SHOW_LOG="/registration/gitproject/showLog",e.REGISTRATION_UDF_TEMPLATE_ADD="/registration/udf/template/add",e.REGISTRATION_UDF_TEMPLATE_EDIT="/registration/udf/template/edit",e.REGISTRATION_UDF_TEMPLATE_DELETE="/registration/udf/template/delete",e.REGISTRATION_RESOURCE_ADD_FOLDER="/registration/resource/addFolder",e.REGISTRATION_RESOURCE_RENAME="/registration/resource/rename",e.REGISTRATION_RESOURCE_DELETE="/registration/resource/delete",e.REGISTRATION_RESOURCE_UPLOAD="/registration/resource/upload",e.AUTH_MENU_ADD_ROOT="/auth/menu/createRoot",e.AUTH_MENU_ADD_SUB="/auth/menu/addSub",e.AUTH_MENU_EDIT="/auth/menu/edit",e.AUTH_MENU_DELETE="/auth/menu/delete",e.AUTH_MENU_REFRESH="/auth/menu/refresh",e.AUTH_ROLE_ADD="/auth/role/add",e.AUTH_ROLE_EDIT="/auth/role/edit",e.AUTH_ROLE_DELETE="/auth/role/delete",e.AUTH_ROLE_ASSIGN_MENU="/auth/role/assignMenu",e.AUTH_ROLE_VIEW_USER_LIST="/auth/role/viewUser",e.AUTH_ROW_PERMISSIONS_ADD="/auth/rowPermissions/add",e.AUTH_ROW_PERMISSIONS_EDIT="/auth/rowPermissions/edit",e.AUTH_ROW_PERMISSIONS_DELETE="/auth/rowPermissions/delete",e.AUTH_TOKEN_ADD="/auth/token/add",e.AUTH_TOKEN_EDIT="/auth/token/edit",e.AUTH_TOKEN_DELETE="/auth/token/delete",e.AUTH_USER_ADD="/auth/user/add",e.AUTH_USER_EDIT="/auth/user/edit",e.AUTH_USER_DELETE="/auth/user/delete",e.AUTH_USER_CHANGE_PASSWORD="/auth/user/changePassword",e.AUTH_USER_RESET_PASSWORD="/auth/user/reset",e.AUTH_USER_ASSIGN_ROLE="/auth/user/assignRole",e.AUTH_USER_RECOVERY="/auth/user/recovery",e.AUTH_TENANT_ADD="/auth/tenant/add",e.AUTH_TENANT_EDIT="/auth/tenant/edit",e.AUTH_TENANT_DELETE="/auth/tenant/delete",e.AUTH_TENANT_ASSIGN_USER="/auth/tenant/assignUser",e.AUTH_TENANT_SET_USER_TO_TENANT_ADMIN="/auth/tenant/modifyTenantManager",e.AUTH_TENANT_VIEW_USER="/auth/tenant/viewUser",e.SETTING_GLOBAL_DINKY="/settings/globalsetting/dinky",e.SETTING_GLOBAL_DINKY_EDIT="/settings/globalsetting/dinky/edit",e.SETTING_GLOBAL_FLINK="/settings/globalsetting/flink",e.SETTING_GLOBAL_FLINK_EDIT="/settings/globalsetting/flink/edit",e.SETTING_GLOBAL_MAVEN="/settings/globalsetting/maven",e.SETTING_GLOBAL_MAVEN_EDIT="/settings/globalsetting/maven/edit",e.SETTING_GLOBAL_DS="/settings/globalsetting/ds",e.SETTING_GLOBAL_DS_EDIT="/settings/globalsetting/ds/edit",e.SETTING_GLOBAL_LDAP="/settings/globalsetting/ldap",e.SETTING_GLOBAL_LDAP_EDIT="/settings/globalsetting/ldap/edit",e.SETTING_GLOBAL_METRICS="/settings/globalsetting/metrics",e.SETTING_GLOBAL_METRICS_EDIT="/settings/globalsetting/metrics/edit",e.SETTING_GLOBAL_RESOURCE="/settings/globalsetting/resource",e.SETTING_GLOBAL_RESOURCE_EDIT="/settings/globalsetting/resource/edit",e.SYSTEM_SETTING_INFO_LOG_LIST="/settings/systemlog/loglist",e.SYSTEM_SETTING_INFO_ROOT_LOG="/settings/systemlog/rootlog",e.SYSTEM_ALERT_RULE_ADD="/settings/alertrule/add",e.SYSTEM_ALERT_RULE_EDIT="/settings/alertrule/edit",e.SYSTEM_ALERT_RULE_DELETE="/settings/alertrule/delete",e}({})}}]);
