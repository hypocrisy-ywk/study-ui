(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{306:function(e,t,s){},307:function(e,t,s){},363:function(e,t,s){"use strict";var n=s(306);s.n(n).a},364:function(e,t,s){"use strict";var n=s(307);s.n(n).a},378:function(e,t,s){"use strict";s.r(t);var n=s(280),o=s(283),a=s(281);let c=class extends a.g{constructor(){super(...arguments),this.messageStyle=["message"]}mounted(){this.type&&this.messageStyle.push("giao-"+this.type),setTimeout(()=>{this.messageStyle.push("show")},0),setTimeout(()=>{this.close()},3e3)}close(){const e=this.messageStyle.findIndex(e=>"show"===e);this.messageStyle.splice(e,1),setTimeout(()=>{this.$el.remove(),this.$destroy()},400)}};Object(n.a)([Object(a.d)({default:""})],c.prototype,"text",void 0),Object(n.a)([Object(a.d)({default:"success"})],c.prototype,"type",void 0),c=Object(n.a)([a.a],c);var i=c,l=(s(363),s(19)),p=Object(l.a)(i,(function(){var e=this.$createElement;return(this._self._c||e)("div",{class:this.messageStyle},[this._v(this._s(this.text))])}),[],!1,null,"3e4ee99c",null).exports,u={install(e){e.prototype.$message=({type:t="success",text:s=""})=>{!function(e,t){const s=new(e.extend(p))({propsData:t});s.$mount(),document.body.appendChild(s.$el)}(e,{type:t,text:s})}}};a.g.use(u);let r=class extends a.g{open1(){this.$message({text:"成功消息"})}open2(){this.$message({type:"info",text:"通知消息"})}open3(){this.$message({type:"warning",text:"警告消息"})}open4(){this.$message({type:"danger",text:"危险消息"})}};r=Object(n.a)([Object(a.a)({components:{Button:o.a}})],r);var h=r,m=(s(364),{name:"message-demo",components:{Messages:Object(l.a)(h,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("Button",{attrs:{type:"success"},on:{click:e.open1}},[e._v("成功按钮")]),e._v(" "),s("Button",{attrs:{type:"info"},on:{click:e.open2}},[e._v("信息按钮")]),e._v(" "),s("Button",{attrs:{type:"warning"},on:{click:e.open3}},[e._v("警告按钮")]),e._v(" "),s("Button",{attrs:{type:"danger"},on:{click:e.open4}},[e._v("危险按钮")])],1)}),[],!1,null,"548737e3",null).exports}}),d=Object(l.a)(m,(function(){var e=this.$createElement;return(this._self._c||e)("Messages")}),[],!1,null,"15282280",null);t.default=d.exports}}]);