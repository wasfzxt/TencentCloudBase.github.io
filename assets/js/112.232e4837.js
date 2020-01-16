(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{363:function(a,s,t){"use strict";t.r(s);var e=t(2),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"环境基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境基础","aria-hidden":"true"}},[a._v("#")]),a._v(" 环境基础")]),a._v(" "),t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[a._v("⚠️注意事项")]),a._v(" "),t("p",[a._v("所有 CloudBase CLI 命令均在配置文件所在目录执行。")])]),a._v(" "),t("h2",{attrs:{id:"查看所有环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看所有环境","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看所有环境")]),a._v(" "),t("p",[a._v("当您想要查看您所拥有的所有环境的基本信息时，你可以使用下面的命令获取环境列表：")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("cloudbase env:list\n")])])]),t("p",[a._v("您会得到类似下面的输出：")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("┌─────────────┬───────┬─────────────┬────────┬─────────────────────┬────────┐\n│    EnvId    │ Alias │ PackageName │ Source │     CreateTime      │ Status │\n├─────────────┼───────┼─────────────┼────────┼─────────────────────┼────────┤\n│ dev-xxxxxx  │  dev  │    基础版    │  云开发 │ "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2019")]),a._v("-06-20 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("13")]),a._v(":24:51 │  正常   │\n├─────────────┼───────┼─────────────┼────────┼─────────────────────┼────────┤\n│ base-xxxxxx │  base │    基础版    │  小程序 │ "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2019")]),a._v("-04-09 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("13")]),a._v(":06:09 │  正常   │\n├─────────────┼───────┼─────────────┼────────┼─────────────────────┼────────┤\n│ scf-xxxxxx  │  xlab │    基础版    │  小程序 │ "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2019")]),a._v("-08-13 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("19")]),a._v(":12:18 │  不可用 │\n└─────────────┴───────┴─────────────┴────────┴─────────────────────┴────────┘\n")])])]),t("p",[a._v("EnvId 是环境的的唯一标志，在全局范围内是唯一的。Alias 是环境的别名，方便用户区分不同的环境，在单个用户下是不同的，全局范围内可能存在相同的值。")]),a._v(" "),t("p",[a._v("Status 表明了环境的状态，只有当环境状态正常时，您才可以操作函数、数据库、存储等资源。新建的环境也可能处于不可用的状态，请耐心等待初始化完成。如果您的环境状态一直处于不可用状态时，请及时联系我们解决。")]),a._v(" "),t("h2",{attrs:{id:"创建环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建环境","aria-hidden":"true"}},[a._v("#")]),a._v(" 创建环境")]),a._v(" "),t("p",[a._v("您可以使用下面的命令创建一个新的环境")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("cloudbase env:create env-name\n")])])]),t("p",[a._v("每个用户可以创建的环境数量是有限的，如果您的环境数量已经使用完，您会得到一个创建失败的提醒。")])])}),[],!1,null,null,null);s.default=r.exports}}]);