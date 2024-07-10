"use strict";(self.webpackChunkdinky_web=self.webpackChunkdinky_web||[]).push([[1513],{60982:function(R,u,e){e.d(u,{q:function(){return a}});var f=e(41913),d=e(24969),m=e(14726),v=e(67294),s=e(85893),a=function(i){var E=i.onClick;return(0,s.jsxs)(m.ZP,{type:"primary",onClick:E,children:[(0,s.jsx)(d.Z,{}),(0,f.l)("button.create")]})}},28712:function(R,u,e){e.d(u,{m:function(){return a}});var f=e(41913),d=e(65987),m=e(14726),v=e(67294),s=e(85893),a=function(i){var E=i.onClick,C=i.disabled,M=C===void 0?!1:C;return(0,s.jsx)(m.ZP,{className:"options-button",icon:(0,s.jsx)(d.Z,{}),disabled:M,title:(0,f.l)("button.edit"),onClick:function(){return E()}})}},47540:function(R,u,e){e.d(u,{E:function(){return a}});var f=e(58461),d=e(41913),m=e(14726),v=e(67294),s=e(85893),a=function(i){var E=i.onClick;return(0,s.jsx)(m.ZP,{className:"options-button",icon:(0,s.jsx)(f.M3,{}),title:(0,d.l)("button.delete"),onClick:function(){return E()}})}},73093:function(R,u,e){e.r(u),e.d(u,{default:function(){return ue}});var f=e(15009),d=e.n(f),m=e(99289),v=e.n(m),s=e(97857),a=e.n(s),D=e(5574),i=e.n(D),E=e(60982),C=e(28712),M=e(47540),O=e(49881),F=e(19632),K=e.n(F),Z=e(63573),W=e(79935),l=e(41913),U=e(5966),N=e(97269),G=e(37476),b=e(18922),V=e(14726),z=e(67294),t=e(85893),ne={height:"40vh",width:"100vh",lineNumbers:"on",language:"markdown",showFloatButton:!1},te=function(h){var A=h.onSubmit,I=h.onCancel,x=h.modalVisible,T=h.values,$=b.Z.useForm(),S=i()($,1),B=S[0],Y=(0,z.useState)(T.templateContent||""),g=i()(Y,2),j=g[0],H=g[1],J=function(){var n=v()(d()().mark(function r(){var c;return d()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,B.validateFields();case 2:c=P.sent,A(a()(a()({},T),c));case 4:case"end":return P.stop()}},r)}));return function(){return n.apply(this,arguments)}}(),X=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(U.Z,{name:"name",label:(0,l.l)("rc.template.name"),rules:[{required:!0,message:(0,l.l)("rc.template.namePlaceholder")}],placeholder:(0,l.l)("rc.template.name")}),(0,t.jsx)(N.A.Item,{name:"templateContent",label:(0,l.l)("rc.template.templateCodeLabel","",{language:"markdown"}),rules:[{required:!0,message:(0,l.l)("rc.template.templateCodePlaceholder")}],children:(0,t.jsx)(Z.Z,a()(a()({},ne),{},{code:j,onChange:function(c){return H(c!=null?c:"")}}))})]})},o=function(){return[(0,t.jsx)(V.ZP,{onClick:function(){return I(!1)},children:(0,l.l)("button.cancel")},"AlertTemplateCancel"),(0,t.jsx)(V.ZP,{type:"primary",htmlType:"submit",autoFocus:!0,onClick:function(){return J()},children:(0,l.l)("button.finish")},"AlertTemplateFinish")]};return(0,t.jsx)(G.Y,a()(a()({title:T.id?(0,l.l)("rc.alert.template.modify"):(0,l.l)("rc.alert.template.create"),open:x,initialValues:T,form:B,modalProps:{onCancel:function(){return I(!1)},destroyOnClose:!0,maskClosable:!1}},W.q6),{},{submitter:{render:function(){return K()(o())}},children:X()}))},Q=te,w=e(21953),k=e(58023),L=e(81029),ae=e(36317),re=e(57344),le=e(24969),de=e(89359),se=e(11774),ie=e(85576),q=e(2487),_=e(4393),oe=e(6311),ue=function(){var ee=(0,z.useState)(ae.JB),h=i()(ee,2),A=h[0],I=h[1],x=(0,re.useRequest)({url:k.Z.ALERT_TEMPLATE}),T=x.data,$=x.loading,S=x.run,B=function(n){I(function(r){return a()(a()({},r),{},{editOpen:!r.editOpen,value:n})})},Y=function(){var o=v()(d()().mark(function n(r){return d()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:ie.Z.confirm({title:(0,l.l)("rc.template.delete"),content:(0,l.l)("rc.template.deleteConfirm"),okText:(0,l.l)("button.confirm"),cancelText:(0,l.l)("button.cancel"),onOk:function(){var P=v()(d()().mark(function fe(){return d()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,(0,w.m0)(k.Z.ALERT_TEMPLATE,r);case 2:S();case 3:case"end":return y.stop()}},fe)}));function ce(){return P.apply(this,arguments)}return ce}()});case 1:case"end":return p.stop()}},n)}));return function(r){return o.apply(this,arguments)}}(),g=function(){I(function(n){return a()(a()({},n),{},{value:{},addedOpen:!1,editOpen:!1})})},j=function(){var o=v()(d()().mark(function n(r){return d()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,(0,w.On)(k.Z.ALERT_TEMPLATE,r,function(){},function(){return g()});case 2:S();case 3:case"end":return p.stop()}},n)}));return function(r){return o.apply(this,arguments)}}(),H=function(n){return[(0,t.jsx)(O.FY,{path:L.k5.REGISTRATION_ALERT_TEMPLATE_EDIT,children:(0,t.jsx)(C.m,{onClick:function(){return B(n)}},"".concat(n.id,"_edit"))},n.id),(0,t.jsx)(O.FY,{path:L.k5.REGISTRATION_ALERT_TEMPLATE_DELETE,children:(0,t.jsx)(M.E,{onClick:function(){return Y(n.id)}},"".concat(n.id,"_delete"))},n.id)]},J=function(){return function(){return[(0,t.jsx)(O.FY,{path:L.k5.REGISTRATION_ALERT_TEMPLATE_ADD,children:(0,t.jsx)(E.q,{onClick:function(){return I(function(r){return a()(a()({},r),{},{addedOpen:!0})})}},"CreateAlertTemplateBtn")},"create")]}},X=function(n){return n&&n.id?(0,t.jsx)(q.Z.Item,{children:(0,t.jsx)(_.Z,{hoverable:!0,actions:H(n),children:(0,t.jsx)(_.Z.Meta,{style:{width:"100%",height:"15vh"},title:(0,t.jsx)("a",{children:n.name}),description:(0,t.jsx)(oe.U,{skipHtml:!0,unwrapDisallowed:!0,children:n.templateContent})})})},n.id):(0,t.jsx)(q.Z.Item,{children:(0,t.jsx)(O.FY,{path:L.k5.REGISTRATION_ALERT_TEMPLATE_ADD,children:(0,t.jsxs)(V.ZP,{type:"dashed",style:{height:"25vh",width:"100%"},onClick:function(){return I(function(c){return a()(a()({},c),{},{addedOpen:!0})})},children:[(0,t.jsx)(le.Z,{})," ",(0,l.l)("rc.alert.template.new")]})},n.id)})};return(0,t.jsxs)(se._z,{title:!1,children:[(0,t.jsx)(de.Rs,{headerTitle:(0,l.l)("menu.registration.alert.template"),rowKey:"id",loading:$,grid:{gutter:16,xs:1,sm:2,md:3,lg:3,xl:4,xxl:4},dataSource:T!=null?T:[],renderItem:function(n){return X(n)},toolBarRender:J()}),(0,t.jsx)(Q,{onSubmit:j,onCancel:g,modalVisible:A.addedOpen,values:{}}),A.value&&Object.keys(A.value).length>0&&(0,t.jsx)(Q,{onSubmit:j,onCancel:g,modalVisible:A.editOpen,values:A.value})]})}},36317:function(R,u,e){e.d(u,{Ih:function(){return G},JB:function(){return O},Lc:function(){return K},Ln:function(){return Z},RB:function(){return M},TH:function(){return b},_W:function(){return N},_X:function(){return W},er:function(){return C},m4:function(){return U},qI:function(){return F},ql:function(){return v},sh:function(){return l}});var f=e(72174),d=e(57900),m=e(3259),v={alertGroupList:[],loading:!1,addedOpen:!1,editOpen:!1,value:{}},s={webhook:void 0,keyword:void 0,secret:void 0,isEnableProxy:!1,isAtAll:!1,atMobiles:[""],proxy:void 0,port:void 0,user:void 0,password:void 0},a={webhook:void 0,keyword:void 0,secret:void 0,isEnableProxy:!1,isAtAll:!1,users:[""],proxy:void 0,port:void 0,user:void 0,password:void 0},D={serverHost:void 0,serverPort:void 0,sender:void 0,receivers:[""],receiverCcs:[""],enableSmtpAuth:!1,starttlsEnable:!1,sslEnable:!1,smtpSslTrust:void 0,user:void 0,password:void 0},i={sendType:"wechat",isAtAll:!1,webhook:void 0,keyword:void 0,users:void 0,corpId:void 0,secret:void 0,agentId:void 0},E={suppliers:f.Ic.ALIBABA,accessKeyId:void 0,sdkAppId:void 0,accessKeySecret:void 0,signature:void 0,templateId:void 0,configId:(0,m.Zo)(32),weight:1,retryInterval:5,maxRetries:3,phoneNumbers:[""]},C={id:void 0,name:void 0,type:d.X.DINGTALK,params:s||a||D||i||E,enabled:!0,createTime:void 0,updateTime:void 0},M={alertInstanceList:[],loading:!1,addedOpen:!1,editOpen:!1,value:C},O={alertTemplateList:[],loading:!1,addedOpen:!1,editOpen:!1,value:{}},F={loading:!1,addedOpen:!1,editOpen:!1,value:{},configList:[]},K={loading:!1,addedOpen:!1,editOpen:!1,value:{},instanceList:[]},Z={loading:!1,addedOpen:!1,editOpen:!1,value:{},drawerOpen:!1},W={loading:!1,addedOpen:!1,editOpen:!1,value:{},logOpen:!1,codeTreeOpen:!1,buildOpen:!1},l={logRecord:"",currentStep:0,showListOpen:!1,percent:0,steps:[]},U={loading:!1,addedOpen:!1,editOpen:!1,value:{},drawerOpen:!1},N={treeData:[],content:"",clickedNode:{},rightClickedNode:{},contextMenuOpen:!1,contextMenuPosition:{top:0,left:0},selectedKeys:[],editOpen:!1,editContent:"",uploadOpen:!1,value:{}},G={loading:!1,addedOpen:!1,editOpen:!1,value:{},drawerOpen:!1},b={loading:!1,addedOpen:!1,editOpen:!1,value:{},isDetailPage:!1}}}]);
