(window.webpackJsonp=window.webpackJsonp||[]).push([[11,5,6],{476:function(t,e,r){"use strict";r(12),r(4),r(11),r(87),r(31),r(293),r(473),r(67),r(97);var n=r(2);var o,l=r(89);e.a=(o="container",n.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,n=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var l=data.attrs;if(l){data.attrs={};var c=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));c.length&&(data.staticClass+=" ".concat(c.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,o=e.children,c=data.attrs;return c&&(data.attrs={},r=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(l.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),o)}})},478:function(t,e,r){var content=r(491);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("59d106fc",content,!0,{sourceMap:!1})},490:function(t,e,r){"use strict";r(478)},491:function(t,e,r){var n=r(16)(!1);n.push([t.i,'.skillImage[data-v-0c7d79ca]{position:relative}.skillImage[data-v-0c7d79ca]:after{content:"";position:absolute;background:linear-gradient(90deg,transparent,rgba(18,18,18,.25882),#121212);width:100%;height:100%;z-index:10}',""]),t.exports=n},492:function(t,e,r){"use strict";r.r(e);var n=r(286),o=(r(490),r(76)),component=Object(o.a)({},(function(){return(0,this._self._c)(n.a,{staticClass:"skillImage rounded-lg",attrs:{src:"https://res.cloudinary.com/rukkiecodes/image/upload/v1663761613/IMG_21142_pljiqr.jpg"}})}),[],!1,null,"0c7d79ca",null);e.default=component.exports},493:function(t,e,r){"use strict";r.r(e);var n=r(209),o=r(86),l=r(529),c=r(528),d=r(76),component=Object(d.a)({},(function(){var t=this,e=t._self._c;return e(c.a,[e(l.a,{attrs:{cols:"12"}},[e(n.a,{attrs:{color:"transparent",flat:""}},[e(o.c,{staticClass:"mx-0 px-0 text-h4"},[t._v("skills()")])],1)],1),t._v(" "),e(l.a,{staticClass:"mt-n5",attrs:{cols:"12"}},[e("span",{staticClass:"blue-grey--text text--darken-1"},[t._v("// 5+ years of experience")])]),t._v(" "),e(l.a,{attrs:{cols:"12"}},[e("span",[t._v("Main skills")])]),t._v(" "),e(l.a,{attrs:{cols:"12",sm:"3"}},[e("span",{staticClass:"blue-grey--text text--darken-1"},[t._v("Frontend development")]),t._v(" "),e("span",{staticClass:"blue-grey--text text--darken-1"},[t._v("Backend development")]),t._v(" "),e("span",{staticClass:"blue-grey--text text--darken-1"},[t._v("Mobile development")])]),t._v(" "),e(l.a,{attrs:{cols:"12",sm:"9"}},[e("span",{staticClass:"blue-grey--text text--darken-1"},[t._v("JavaScript, CSS, TypeScript, Vue, Node, Epress, Grapgh, 3D Illustrator, and Strategic thinking")])]),t._v(" "),e(l.a,{attrs:{cols:"12"}},[e("span",[t._v("Experience")])]),t._v(" "),e(l.a,{attrs:{cols:"12",sm:"4"}},[e("span",{staticClass:"deep-purple--text text--accent-4"},[t._v("Intern Frontend developer")]),t._v(" "),e("span",{staticClass:"blue-grey--text text--darken-1"},[t._v("Primedsoft(2018 - 2019)")])]),t._v(" "),e(l.a,{attrs:{cols:"12",sm:"4"}},[e("span",{staticClass:"deep-purple--text text--accent-4"},[t._v("Frontend developer")]),t._v(" "),e("span",{staticClass:"blue-grey--text text--darken-1"},[t._v("Babbage(2020 - 2021)")])]),t._v(" "),e(l.a,{attrs:{cols:"12",sm:"4"}},[e("span",{staticClass:"deep-purple--text text--accent-4"},[t._v("Senior Software Developer")]),t._v(" "),e("span",{staticClass:"blue-grey--text text--darken-1"},[t._v("Savilli Labs(2021 - now)")])])],1)}),[],!1,null,null,null);e.default=component.exports},536:function(t,e,r){"use strict";r.r(e);var n=r(208),o=r(453),l=r(209),c=r(86),d=r(529),v=r(476),_=r(205),m=r(286),f=r(528),x=r(511),k=r(492),h=r(493),w={name:"IndexPage",data:function(){return{}},methods:{gotoFacebook:function(){window.open("https://www.facebook.com/Rukkiecodes")},gotoTwitter:function(){window.open("https://twitter.com/rukkiecodes")},gotoGithub:function(){window.open("https://github.com/rukkiecodes")},gotoLinkedin:function(){window.open("https://www.linkedin.com/in/terry-amagboro-004830197")},gotoResume:function(){window.open("https://docs.google.com/document/d/1VOFordnMhqUqPV4W18j3R9xEW6OAvtAF/edit?usp=sharing&ouid=118220414778609688788&rtpof=true&sd=true")}},components:{Repo:x.default,SkillsImage:k.default,Skills:h.default}},C=r(76),component=Object(C.a)(w,(function(){var t=this,e=t._self._c;return e(v.a,{staticClass:"ma-0",attrs:{fluid:""}},[e(f.a,{attrs:{justify:"center",align:"center"}},[e(d.a,{attrs:{cols:"12",sm:"8",md:"4"}},[e(l.a,{staticClass:"d-flex justify-space-between align-center",attrs:{color:"transparent",width:"100%",height:"100vh",flat:""}},[e(c.b,{staticClass:"text-center"},[e(n.a,{attrs:{size:"150"}},[e(m.a,{attrs:{src:"https://res.cloudinary.com/rukkiecodes/image/upload/v1663761613/IMG_21142_pljiqr.jpg"}})],1),t._v(" "),e(c.b,{staticClass:"text-h4 font-weight-bold"},[t._v("Terry Amagboro")]),t._v(" "),e("span",[t._v("Creative frontend developer, designer and illustrator.")]),t._v(" "),e(c.a,{staticClass:"d-flex justify-space-between"},[e(o.a,{attrs:{icon:"",depressed:""},on:{click:t.gotoFacebook}},[e(_.a,[t._v("mdi-facebook")])],1),t._v(" "),e(o.a,{attrs:{icon:"",depressed:""},on:{click:t.gotoTwitter}},[e(_.a,[t._v("mdi-twitter")])],1),t._v(" "),e(o.a,{attrs:{icon:"",depressed:""},on:{click:t.gotoGithub}},[e(_.a,[t._v("mdi-github")])],1),t._v(" "),e(o.a,{attrs:{icon:"",depressed:""},on:{click:t.gotoLinkedin}},[e(_.a,[t._v("mdi-linkedin")])],1)],1)],1)],1)],1)],1),t._v(" "),e(f.a,{attrs:{id:"work"}},[e(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[e(l.a,{attrs:{color:"transparent mx-0 ml-sm-5",flat:""}},[e(c.c,{staticClass:"mx-0 px-0 text-h4"},[t._v("about("),e("span",{staticClass:"deep-purple--text text--accent-4"},[t._v("me")]),t._v(")"),e("span",{staticClass:"ml-3"},[t._v("{")])]),t._v(" "),e(f.a,[e(d.a,{attrs:{cols:"12"}},[e(o.a,{staticClass:"text-capitalize",attrs:{rounded:"",depressed:"",color:"deep-purple accent-4"},on:{click:t.gotoResume}},[t._v("\n              My Resume\n              "),e(_.a,{staticClass:"ml-2",attrs:{small:""}},[t._v("mdi-link-variant")])],1)],1),t._v(" "),e(d.a,{attrs:{cols:"1"}}),t._v(" "),e(d.a,{attrs:{cols:"11"}},[e("span",{staticClass:"blue-grey--text text--darken-1"},[e("span",{staticClass:"deep-purple--text text--accent-4"},[t._v("return ")]),t._v("`\n              "),e("span",[t._v("Personally connected with the web development industry and information technology for many years.")]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("span",[t._v("Well-organised, problem solver, independent with high attention to detail. fan of Animated sries, outdoor activities, and networking.")]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("span",[t._v("Intersted in the entire frontend spectrum and working on ambirious projects with positive people.")]),t._v("`\n            ")])])],1),t._v(" "),e(c.c,{staticClass:"mx-0 px-0 text-h4"},[t._v("}")])],1)],1),t._v(" "),e(d.a,{attrs:{cols:"12",sm:"6",md:"8"}},[e("Repo")],1)],1),t._v(" "),e(f.a,{staticClass:"mt-16"},[e(d.a,{attrs:{cols:"12",sm:"4"}},[e("SkillsImage")],1),t._v(" "),e(d.a,{attrs:{cols:"12",sm:"8"}},[e("Skills")],1)],1),t._v(" "),e(v.a,{staticClass:"mt-16"},[e(f.a,[e(d.a,{attrs:{cols:"12"}},[e(l.a,{attrs:{width:"500",color:"transparent",flat:""}},[e("p",[t._v("Thanks for checking my website!")]),t._v(" "),e("p",{staticClass:"blue-grey--text text--darken-1"},[t._v("// It's a work in progress so check back often!")]),t._v(" "),e("p",{staticClass:"font-weight-bold text-h5 text-sm-h4 text-md-h3 text-lg-h2"},[t._v("Check out my "),e("router-link",{staticClass:"deep-purple--text text--accent-4",staticStyle:{cursor:"pointer"},attrs:{to:"/work"}},[t._v("Selcted works")]),t._v(" for more details.")],1),t._v(" "),e("p",[t._v("I am available for new projects and a coffee "),e("span",{staticClass:"deep-purple--text text--accent-4"},[t._v(";)")])])])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Repo:r(511).default,SkillsImage:r(492).default,Skills:r(493).default})}}]);