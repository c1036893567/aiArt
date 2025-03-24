"use strict";(self["webpackChunkpainting_view"]=self["webpackChunkpainting_view"]||[]).push([[603],{1603:function(e,o,s){s.r(o),s.d(o,{default:function(){return c}});var t=function(){var e=this,o=e._self._c;return o("div",{staticClass:"login-container",style:{backgroundImage:`url(${e.backgroundImage})`}},[o("el-card",{staticClass:"login-card"},[o("h2",{staticClass:"login-title"},[e._v("AI Art Generator")]),o("el-tabs",{attrs:{stretch:""},model:{value:e.activeTab,callback:function(o){e.activeTab=o},expression:"activeTab"}},[o("el-tab-pane",{attrs:{label:"密码登录",name:"password"}},[o("el-form",{ref:"passwordLoginForm",attrs:{model:e.passwordLoginForm}},[o("el-form-item",{attrs:{prop:"phone"}},[o("el-input",{attrs:{placeholder:"请输入手机号"},model:{value:e.passwordLoginForm.phone,callback:function(o){e.$set(e.passwordLoginForm,"phone",o)},expression:"passwordLoginForm.phone"}})],1),o("el-form-item",{attrs:{prop:"password"}},[o("el-input",{attrs:{type:"password",placeholder:"请输入密码","show-password":""},model:{value:e.passwordLoginForm.password,callback:function(o){e.$set(e.passwordLoginForm,"password",o)},expression:"passwordLoginForm.password"}})],1),o("el-button",{staticClass:"login-button",attrs:{type:"primary"},on:{click:e.submitPasswordForm}},[e._v("登录")])],1)],1),o("el-tab-pane",{attrs:{label:"短信验证登录",name:"code"}},[o("el-form",{ref:"codeLoginForm",attrs:{model:e.codeLoginForm}},[o("el-form-item",{attrs:{prop:"phone"}},[o("el-input",{attrs:{placeholder:"请输入手机号"},model:{value:e.codeLoginForm.phone,callback:function(o){e.$set(e.codeLoginForm,"phone",o)},expression:"codeLoginForm.phone"}})],1),o("el-form-item",{attrs:{prop:"code"}},[o("el-input",{attrs:{placeholder:"请输入验证码"},scopedSlots:e._u([{key:"append",fn:function(){return[o("el-button",{attrs:{type:"primary",disabled:e.isCodeSending},on:{click:e.sendCode}},[e._v(" "+e._s(e.codeButtonText)+" ")])]},proxy:!0}]),model:{value:e.codeLoginForm.code,callback:function(o){e.$set(e.codeLoginForm,"code",o)},expression:"codeLoginForm.code"}})],1),o("el-button",{staticClass:"login-button",attrs:{type:"primary"},on:{click:e.submitCodeForm}},[e._v("登录")])],1)],1)],1),o("p",{staticClass:"register-link"},[e._v(" 没有账号？"),o("router-link",{attrs:{to:"/register"}},[e._v("立即注册")])],1)],1)],1)},r=[],a=(s(4114),{data(){return{backgroundImage:"https://img.freepik.com/free-photo/abstract-colorful-splash-3d-background-generative-ai-background_60438-2509.jpg",activeTab:"password",passwordLoginForm:{phone:"",password:""},codeLoginForm:{phone:"",code:""},isCodeSending:!1,codeButtonText:"获取验证码"}},methods:{validatePhone(e){return e?!!/^1[3-9]\d{9}$/.test(e)||(this.$message.error("请输入合法的手机号"),!1):(this.$message.error("手机号不能为空"),!1)},submitPasswordForm(){const{phone:e,password:o}=this.passwordLoginForm;e&&o?(console.log("密码登录表单数据:",this.passwordLoginForm),e&&o?(sessionStorage.setItem("isAuthenticated","true"),sessionStorage.setItem("userPhone",e),this.$message.success("登录成功"),this.$router.push("/home")):this.$message.error("登录失败，请检查手机号或密码")):this.$message.error("手机号或密码不能为空")},submitCodeForm(){const{phone:e,code:o}=this.codeLoginForm;e&&o?this.validatePhone(e)&&(console.log("验证码登录表单数据:",this.codeLoginForm),e&&o?(sessionStorage.setItem("isAuthenticated","true"),sessionStorage.setItem("userPhone",e),this.$message.success("登录成功"),this.$router.push("/home")):this.$message.error("登录失败，请检查手机号或验证码")):this.$message.error("手机号或验证码不能为空")},sendCode(){const e=this.codeLoginForm.phone;this.validatePhone(e)&&(this.isCodeSending=!0,this.codeButtonText="发送中...",setTimeout((()=>{this.isCodeSending=!1,this.codeButtonText="获取验证码",this.$message.success("验证码已发送")}),3e3))}}}),n=a,i=s(1656),d=(0,i.A)(n,t,r,!1,null,"789da786",null),c=d.exports}}]);
//# sourceMappingURL=603.1d780499.js.map