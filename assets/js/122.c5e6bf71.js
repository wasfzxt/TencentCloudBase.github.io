(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{347:function(a,s,t){"use strict";t.r(s);var e=t(2),c=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"静态网站"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#静态网站","aria-hidden":"true"}},[a._v("#")]),a._v(" 静态网站")]),a._v(" "),t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[a._v("⚠️ 注意事项")]),a._v(" "),t("p",[a._v("使用 CLI 操作静态网站服务前请先到"),t("a",{attrs:{href:"https://console.cloud.tencent.com/tcb",target:"_blank",rel:"noopener noreferrer"}},[a._v("云开发控制台"),t("OutboundLink")],1),a._v("开通静态网站服务。")])]),a._v(" "),t("ul",[t("li",[t("code",[a._v("localPath")]),a._v(" 为本地文件或文件夹的路径，为 "),t("code",[a._v("目录/文件名")]),a._v(" 的形式，如 "),t("code",[a._v("./index.js")]),a._v("、"),t("code",[a._v("static/css/index.css")]),a._v(" 等。")]),a._v(" "),t("li",[t("code",[a._v("cloudPath")]),a._v(" 为文件或文件夹的相对根目录的路径，为 "),t("code",[a._v("目录/文件名")]),a._v(" 的形式，如 "),t("code",[a._v("index.js")]),a._v("、"),t("code",[a._v("static/css/index.js")]),a._v(" 等。")])]),a._v(" "),t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[a._v("⚠️ 注意事项")]),a._v(" "),t("p",[a._v("Windows 系统中 localPath 为本地路径形式，是系统可以识别的路径，通常使用 "),t("code",[a._v("\\")]),a._v(" 分隔符。"),t("code",[a._v("cloudPath")]),a._v(" 是云端文件路径，均需要使用 "),t("code",[a._v("/")]),a._v(" 分隔符。")])]),a._v(" "),t("h2",{attrs:{id:"查看静态网站服务信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看静态网站服务信息","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看静态网站服务信息")]),a._v(" "),t("p",[a._v("您可以使用下面的命令展示静态网站的状态，访问域名等信息")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("cloudbase hosting:detail -e envId\n")])])]),t("h2",{attrs:{id:"部署文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 部署文件")]),a._v(" "),t("p",[a._v("您可以使用下面的命令将文件上传到静态网站的存储空间中的指定路径，当不指定 "),t("code",[a._v("cloudPath")]),a._v(" 时，文件将上传到根目录。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 部署文件到指定目录")]),a._v("\ncloudbase hosting:deploy localPath cloudPath -e envId\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将 hosting 目录下的所有文件部署到根目录")]),a._v("\ncloudbase hosting:deploy hosting -e envId\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将 static 目录下的 index.js 文件部署到 static/index.js")]),a._v("\ncloudbase hosting:deploy ./static/index.js static/index.js -e envId\n")])])]),t("p",[t("strong",[a._v("部署文件单个文件理论最大值为 50TB，文件数量无限制，具体以实际情况为准。")])]),a._v(" "),t("h2",{attrs:{id:"删除文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 删除文件")]),a._v(" "),t("p",[a._v("您可以使用下面的命令删除静态网站的存储空间中的文件或文件夹")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("cloudbase hosting:delete cloudPath -e envId\n")])])]),t("h2",{attrs:{id:"查看文件列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看文件列表","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看文件列表")]),a._v(" "),t("p",[a._v("您可以使用下面的命令部署展示静态网站存储空间中文件")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("cloudbase hosting:list -e envId\n")])])])])}),[],!1,null,null,null);s.default=c.exports}}]);