(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{362:function(a,t,s){"use strict";s.r(t);var e=s(2),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"登录方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#登录方式","aria-hidden":"true"}},[a._v("#")]),a._v(" 登录方式")]),a._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[a._v("⚠️注意事项")]),a._v(" "),s("p",[a._v("所有 CloudBase CLI 命令均在配置文件所在目录执行。")])]),a._v(" "),s("p",[a._v("当您需要使用云开发的身份验证服务时，您需要配置您想使用的登录方式。目前云开发支持自定义登录、微信公众平台、微信开放平台登录等多种登录方式。")]),a._v(" "),s("h2",{attrs:{id:"查看登录方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看登录方式","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看登录方式")]),a._v(" "),s("p",[a._v("您可以使用下面的命令列出环境配置的登录方式列表，查看环境配置的登录方式，以及相关的状态。")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("cloudbase env:login:list\n")])])]),s("p",[a._v("您会得到类似于下面的输出")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("┌────────────────────────────┬──────────────┬─────────────────────┬────────┐\n│            Id              │   Platform   │     CreateTime      │ Status │\n├────────────────────────────┼──────────────┼─────────────────────┼────────┤\n│ be00aef4-2eb9-4413-a50d-xx │  微信开放平台  │ "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2019")]),a._v("-07-11 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("15")]),a._v(":47:22 │  启用中 │\n├────────────────────────────┼──────────────┼─────────────────────┼────────┤\n│ 76a7070e-2177-4c6d-a4f2-xx │  微信公众平台  │ "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2019")]),a._v("-06-21 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),a._v(":15:51 │  禁用中 │\n└────────────────────────────┴──────────────┴─────────────────────┴────────┘\n")])])]),s("h2",{attrs:{id:"新建登录方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新建登录方式","aria-hidden":"true"}},[a._v("#")]),a._v(" 新建登录方式")]),a._v(" "),s("p",[a._v("您可以使用下面的命令新建登录方式：")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("cloudbase env:login:config\n")])])]),s("p",[a._v("您需要选择配置的平台，登录方式状态，以及对应的 AppId 和 AppSecret，登录方式请选择启用。在添加方式时不会校验 AppId 和 AppSecret 的有效性，只有在请求时，AppId 和 AppSecret 才会被校验，所以请确保您添加的 AppId 和 AppSecret 是有效的。")]),a._v(" "),s("h2",{attrs:{id:"修改登录方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改登录方式","aria-hidden":"true"}},[a._v("#")]),a._v(" 修改登录方式")]),a._v(" "),s("p",[a._v("您也可以使用 "),s("code",[a._v("cloudbase env:login:config")]),a._v(" 修改已经配置的登录方式，如切换启用状态，修改 AppId 和 AppSecret。")])])}),[],!1,null,null,null);t.default=r.exports}}]);