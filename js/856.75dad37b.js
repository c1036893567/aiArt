"use strict";(self["webpackChunkaiArt"]=self["webpackChunkaiArt"]||[]).push([[856],{4114:function(t,e,s){var a=s(6518),i=s(8981),o=s(6198),r=s(4527),n=s(6837),l=s(9039),c=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},m=c||!u();a({target:"Array",proto:!0,arity:1,forced:m},{push:function(t){var e=i(this),s=o(e),a=arguments.length;n(s+a);for(var l=0;l<a;l++)e[s]=arguments[l],s++;return r(e,s),s}})},4376:function(t,e,s){var a=s(2195);t.exports=Array.isArray||function(t){return"Array"===a(t)}},4527:function(t,e,s){var a=s(3724),i=s(4376),o=TypeError,r=Object.getOwnPropertyDescriptor,n=a&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=n?function(t,e){if(i(t)&&!r(t,"length").writable)throw new o("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},5240:function(t,e,s){s.d(e,{A:function(){return x}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-layout"},[e("header-nav"),e("div",{staticClass:"content-container"},[t._t("default")],2),e("footer-bar")],1)},i=[],o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header-nav"},[t._m(0),e("div",{staticClass:"nav-menu"},[e("el-menu",{staticClass:"nav-list",attrs:{mode:"horizontal",router:!0,"default-active":t.activeIndex}},[e("el-menu-item",{attrs:{index:"/home"}},[t._v("首页")]),e("el-menu-item",{attrs:{index:"/create"}},[t._v("AI绘画创作")]),e("el-menu-item",{attrs:{index:"/paintings"}},[t._v("画作展示")]),e("el-menu-item",{attrs:{index:"/about"}},[t._v("关于我们")]),e("el-menu-item",{attrs:{index:"/contact"}},[t._v("联系我们")])],1)],1),e("div",{staticClass:"user-actions"},[t.isLoggedIn?e("div",{staticClass:"credits-info"},[e("i",{staticClass:"el-icon-coin"}),e("span",{staticClass:"credits-text"},[t._v(t._s(t.userCredits)+" 积分")]),e("el-button",{staticClass:"get-more-btn",attrs:{type:"text"}},[t._v("获取更多")])],1):t._e(),t.isLoggedIn?e("el-dropdown",{attrs:{trigger:"click"},on:{command:t.handleCommand}},[e("span",{staticClass:"user-info"},[e("el-avatar",{attrs:{size:"medium",icon:"el-icon-user"}}),e("span",{staticClass:"username"},[t._v(t._s(t._f("formatPhone")(t.userPhone)))])],1),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",{attrs:{command:"profile"}},[t._v("个人中心")]),e("el-dropdown-item",{attrs:{command:"works"}},[t._v("我的作品")]),e("el-dropdown-item",{attrs:{command:"vip"}},[t._v("开通VIP")]),e("el-dropdown-item",{attrs:{divided:"",command:"logout"}},[t._v("退出登录")])],1)],1):e("div",[e("el-button",{attrs:{type:"text"},on:{click:t.goToLogin}},[t._v("登录")]),t._v(" / "),e("el-button",{attrs:{type:"text"},on:{click:t.goToRegister}},[t._v("注册")])],1)],1)])},r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"logo-container"},[e("div",{staticClass:"logo"},[t._v("绘画艺术")]),e("div",{staticClass:"slogan"},[t._v("AI作画 · 灵感创作")])])}],n=(s(4114),{name:"HeaderNav",data(){return{activeIndex:this.$route.path,userCredits:100}},computed:{isLoggedIn(){return"true"===sessionStorage.getItem("isAuthenticated")},userPhone(){return sessionStorage.getItem("userPhone")||""}},filters:{formatPhone(t){return t?t.substring(0,3)+"****"+t.substring(7):""}},methods:{handleCommand(t){"profile"===t?this.$router.push("/user"):"logout"===t?this.logout():"works"===t?this.$router.push("/paintings"):"vip"===t&&this.$message.info("VIP开通功能开发中")},logout(){sessionStorage.removeItem("isAuthenticated"),sessionStorage.removeItem("userPhone"),this.$message.success("已退出登录"),this.$router.push("/login")},goToLogin(){this.$router.push("/login")},goToRegister(){this.$router.push("/register")}},watch:{"$route.path"(t){this.activeIndex=t}}}),l=n,c=s(1656),u=(0,c.A)(l,o,r,!1,null,"46f3da8c",null),m=u.exports,v=function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer-bar"},[e("div",{staticClass:"footer-content"},[t._m(0),t._m(1),e("div",{staticClass:"footer-section"},[e("h3",[t._v("快速链接")]),e("ul",[e("li",[e("router-link",{attrs:{to:"/home"}},[t._v("首页")])],1),e("li",[e("router-link",{attrs:{to:"/paintings"}},[t._v("画作展示")])],1),e("li",[e("router-link",{attrs:{to:"/about"}},[t._v("关于我们")])],1),e("li",[e("router-link",{attrs:{to:"/contact"}},[t._v("联系我们")])],1)])])]),t._m(2)])},d=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer-section"},[e("h3",[t._v("关于我们")]),e("p",[t._v("我们是一家专业的AI绘画艺术平台，致力于用先进的AI技术创造精美的艺术作品。")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer-section"},[e("h3",[t._v("联系方式")]),e("p",[t._v("电话：123-456-7890")]),e("p",[t._v("邮箱：contact@aiart.com")]),e("p",[t._v("地址：中国上海市浦东新区未来路100号")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer-bottom"},[e("p",[t._v("© 2023 AI绘画艺术平台 版权所有")])])}],p={name:"FooterBar"},f=p,h=(0,c.A)(f,v,d,!1,null,"0a93d14a",null),g=h.exports,_={name:"MainLayout",components:{HeaderNav:m,FooterBar:g}},C=_,b=(0,c.A)(C,a,i,!1,null,"23d03772",null),x=b.exports},6837:function(t){var e=TypeError,s=9007199254740991;t.exports=function(t){if(t>s)throw e("Maximum allowed index exceeded");return t}},9856:function(t,e,s){s.r(e),s.d(e,{default:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("main-layout",[e("div",{staticClass:"contact-view"},[e("div",{staticClass:"page-header"},[e("h1",{staticClass:"page-title"},[t._v("联系我们")]),e("p",{staticClass:"page-description"},[t._v("无论您有任何问题或建议，都可以通过以下方式联系我们")])]),e("div",{staticClass:"contact-container"},[e("div",{staticClass:"contact-info"},[e("div",{staticClass:"info-section"},[e("div",{staticClass:"info-icon"},[e("i",{staticClass:"el-icon-location"})]),e("div",{staticClass:"info-content"},[e("h3",[t._v("公司地址")]),e("p",[t._v("中国上海市浦东新区未来路100号")]),e("p",[t._v("邮编: 200120")])])]),e("div",{staticClass:"info-section"},[e("div",{staticClass:"info-icon"},[e("i",{staticClass:"el-icon-phone"})]),e("div",{staticClass:"info-content"},[e("h3",[t._v("联系电话")]),e("p",[t._v("客服热线: 400-123-4567")]),e("p",[t._v("商务合作: 021-87654321")])])]),e("div",{staticClass:"info-section"},[e("div",{staticClass:"info-icon"},[e("i",{staticClass:"el-icon-message"})]),e("div",{staticClass:"info-content"},[e("h3",[t._v("电子邮箱")]),e("p",[t._v("客户服务: service@aiart.com")]),e("p",[t._v("商务合作: business@aiart.com")])])]),e("div",{staticClass:"info-section"},[e("div",{staticClass:"info-icon"},[e("i",{staticClass:"el-icon-time"})]),e("div",{staticClass:"info-content"},[e("h3",[t._v("工作时间")]),e("p",[t._v("周一至周五: 9:00 - 18:00")]),e("p",[t._v("周末及节假日休息")])])]),e("div",{staticClass:"social-media"},[e("h3",[t._v("关注我们")]),e("div",{staticClass:"social-icons"},[e("a",{staticClass:"social-icon",attrs:{href:"javascript:void(0);"}},[e("i",{staticClass:"el-icon-s-custom"})]),e("a",{staticClass:"social-icon",attrs:{href:"javascript:void(0);"}},[e("i",{staticClass:"el-icon-s-promotion"})]),e("a",{staticClass:"social-icon",attrs:{href:"javascript:void(0);"}},[e("i",{staticClass:"el-icon-s-management"})]),e("a",{staticClass:"social-icon",attrs:{href:"javascript:void(0);"}},[e("i",{staticClass:"el-icon-s-platform"})])])])]),e("div",{staticClass:"contact-form"},[e("h2",[t._v("发送消息")]),e("p",[t._v("如果您有任何问题、建议或合作意向，请填写以下表单，我们会尽快回复您。")]),e("el-form",{ref:"contactForm",attrs:{model:t.form,rules:t.rules,"label-position":"top"}},[e("el-form-item",{attrs:{label:"姓名",prop:"name"}},[e("el-input",{attrs:{placeholder:"请输入您的姓名"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),e("el-form-item",{attrs:{label:"电子邮箱",prop:"email"}},[e("el-input",{attrs:{placeholder:"请输入您的电子邮箱"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),e("el-form-item",{attrs:{label:"电话",prop:"phone"}},[e("el-input",{attrs:{placeholder:"请输入您的联系电话"},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1),e("el-form-item",{attrs:{label:"主题",prop:"subject"}},[e("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择联系主题"},model:{value:t.form.subject,callback:function(e){t.$set(t.form,"subject",e)},expression:"form.subject"}},[e("el-option",{attrs:{label:"产品咨询",value:"product"}}),e("el-option",{attrs:{label:"技术支持",value:"support"}}),e("el-option",{attrs:{label:"商务合作",value:"business"}}),e("el-option",{attrs:{label:"投诉建议",value:"complaint"}}),e("el-option",{attrs:{label:"其他",value:"other"}})],1)],1),e("el-form-item",{attrs:{label:"消息内容",prop:"message"}},[e("el-input",{attrs:{type:"textarea",placeholder:"请详细描述您的问题或需求",rows:6},model:{value:t.form.message,callback:function(e){t.$set(t.form,"message",e)},expression:"form.message"}})],1),e("el-form-item",[e("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:function(e){return t.submitForm("contactForm")}}},[t._v(" 提交 ")]),e("el-button",{on:{click:function(e){return t.resetForm("contactForm")}}},[t._v("重置")])],1)],1)],1)]),e("div",{staticClass:"map-section"},[e("h2",{staticClass:"section-title"},[t._v("我们的位置")]),e("div",{staticClass:"map-container"},[e("div",{staticClass:"map-placeholder"},[e("i",{staticClass:"el-icon-map-location"}),e("p",[t._v("地图加载中...")])])])]),e("div",{staticClass:"faq-section"},[e("h2",{staticClass:"section-title"},[t._v("常见问题")]),e("div",{staticClass:"faq-container"},[e("el-collapse",{attrs:{accordion:""}},[e("el-collapse-item",{attrs:{title:"如何创建一个账户？",name:"1"}},[e("div",[t._v(' 访问我们的官网首页，点击右上角的"注册"按钮，按照提示填写相关信息即可完成账户创建。注册成功后，您将收到一封确认邮件。 ')])]),e("el-collapse-item",{attrs:{title:"使用AI生成的艺术作品我拥有版权吗？",name:"2"}},[e("div",[t._v(" 是的，在我们平台上使用AI生成的艺术作品版权归您所有。您可以将其用于个人或商业用途，但请遵守我们的服务条款。 ")])]),e("el-collapse-item",{attrs:{title:"如何下载高清版本的作品？",name:"3"}},[e("div",[t._v(' 在作品详情页面，点击"下载"按钮，选择您需要的分辨率和格式，即可下载高清版本的作品。VIP用户可享受更高分辨率的下载权限。 ')])]),e("el-collapse-item",{attrs:{title:"忘记密码怎么办？",name:"4"}},[e("div",[t._v(' 在登录页面点击"忘记密码"链接，输入您注册时使用的邮箱，我们会向您发送密码重置链接。如有问题，请联系客服。 ')])]),e("el-collapse-item",{attrs:{title:"如何成为VIP会员？",name:"5"}},[e("div",[t._v(' 登录账户后，进入个人中心，点击"会员升级"，选择适合您的会员套餐并完成支付即可享受VIP特权。 ')])])],1)],1)])])])},i=[],o=s(5240),r={name:"ContactView",components:{MainLayout:o.A},data(){return{loading:!1,form:{name:"",email:"",phone:"",subject:"",message:""},rules:{name:[{required:!0,message:"请输入您的姓名",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}],email:[{required:!0,message:"请输入您的电子邮箱",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:"blur"}],phone:[{required:!0,message:"请输入您的联系电话",trigger:"blur"},{pattern:/^1[3-9]\d{9}$/,message:"请输入正确的手机号码",trigger:"blur"}],subject:[{required:!0,message:"请选择联系主题",trigger:"change"}],message:[{required:!0,message:"请输入消息内容",trigger:"blur"},{min:10,message:"消息内容不能少于10个字符",trigger:"blur"}]}}},methods:{submitForm(t){this.$refs[t].validate((e=>{if(!e)return this.$message.error("请正确填写表单信息"),!1;this.loading=!0,setTimeout((()=>{this.$message.success("消息提交成功，我们会尽快与您联系！"),this.resetForm(t),this.loading=!1}),1500)}))},resetForm(t){this.$refs[t].resetFields()}}},n=r,l=s(1656),c=(0,l.A)(n,a,i,!1,null,"39601075",null),u=c.exports}}]);
//# sourceMappingURL=856.75dad37b.js.map