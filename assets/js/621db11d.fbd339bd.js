"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[4212],{64734:(e,t,s)=>{s.r(t),s.d(t,{default:()=>ie});var a=s(96540),i=s(34164),r=s(61213),n=s(17559),l=s(21312),o=s(74848);const c=()=>(0,l.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});var h=s(40550),m=s(24581);s(36803);s(86025),s(44586);var u=s(56347),d=s(28774),x=s(31682),g=s(99169);function j(e){const{pathname:t}=(0,u.zy)();return(0,a.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,g.ys)(e.permalink,t))}(e,t)))),[e,t])}function v(e){let{items:t,ulClassName:s,liClassName:a,linkClassName:i,linkActiveClassName:r}=e;return(0,o.jsx)("ul",{className:s,children:t.map((e=>(0,o.jsx)("li",{className:a,children:(0,o.jsx)(d.A,{isNavLink:!0,to:e.permalink,className:i,activeClassName:r,children:e.title})},e.permalink)))})}var p=s(6342),f=s(51107);function b(e){let{year:t,yearGroupHeadingClassName:s,children:a}=e;return(0,o.jsxs)("div",{role:"group",children:[(0,o.jsx)(f.A,{as:"h3",className:s,children:t}),a]})}function N(e){let{items:t,yearGroupHeadingClassName:s,ListComponent:a}=e;if((0,p.p)().blog.sidebar.groupByYear){const e=function(e){const t=(0,x.$z)(e,(e=>`${new Date(e.date).getFullYear()}`)),s=Object.entries(t);return s.reverse(),s}(t);return(0,o.jsx)(o.Fragment,{children:e.map((e=>{let[t,i]=e;return(0,o.jsx)(b,{year:t,yearGroupHeadingClassName:s,children:(0,o.jsx)(a,{items:i})},t)}))})}return(0,o.jsx)(a,{items:t})}const w=(0,a.memo)(N),_="sidebar_re4s",k="sidebarItemTitle_pO2u",A="sidebarItemList_Yudw",C="sidebarItem__DBe",L="sidebarItemLink_mo7H",M="sidebarItemLinkActive_I1ZP",I="yearGroupHeading_rMGB",y=e=>{let{items:t}=e;return(0,o.jsx)(v,{items:t,ulClassName:(0,i.A)(A,"clean-list"),liClassName:C,linkClassName:L,linkActiveClassName:M})};function H(e){let{sidebar:t}=e;const s=j(t.items);return(0,o.jsx)("aside",{className:"col col--3",children:(0,o.jsxs)("nav",{className:(0,i.A)(_,"thin-scrollbar"),"aria-label":(0,l.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,o.jsx)("div",{className:(0,i.A)(k,"margin-bottom--md"),children:t.title}),(0,o.jsx)(w,{items:s,ListComponent:y,yearGroupHeadingClassName:I})]})})}const G=(0,a.memo)(H);var S=s(75600);const B={yearGroupHeading:"yearGroupHeading_QT03"},Z=e=>{let{items:t}=e;return(0,o.jsx)(v,{items:t,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function T(e){let{sidebar:t}=e;const s=j(t.items);return(0,o.jsx)(w,{items:s,ListComponent:Z,yearGroupHeadingClassName:B.yearGroupHeading})}function z(e){return(0,o.jsx)(S.GX,{component:T,props:e})}const P=(0,a.memo)(z);function D(e){let{sidebar:t}=e;const s=(0,m.l)();return t?.items.length?"mobile"===s?(0,o.jsx)(P,{sidebar:t}):(0,o.jsx)(G,{sidebar:t}):null}function Y(e){const{sidebar:t,toc:s,children:a,...r}=e,n=t&&t.items.length>0;return(0,o.jsx)(h.A,{...r,children:(0,o.jsx)("div",{className:"container margin-vert--lg",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)(D,{sidebar:t}),(0,o.jsx)("main",{className:(0,i.A)("col",{"col--7":n,"col--9 col--offset-1":!n}),children:a}),s&&(0,o.jsx)("div",{className:"col col--2",children:s})]})})})}var R=s(41463);const V="githubSvg_Uu4N";const X="xSvg_y3PF";const F=function(e){return(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,o.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,o.jsx)("path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"}),(0,o.jsx)("path",{d:"M3.6 9h16.8"}),(0,o.jsx)("path",{d:"M3.6 15h16.8"}),(0,o.jsx)("path",{d:"M11.5 3a17 17 0 0 0 0 18"}),(0,o.jsx)("path",{d:"M12.5 3a17 17 0 0 1 0 18"})]})},O={authorSocials:"authorSocials_rSDt",authorSocialLink:"authorSocialLink_owbf",authorSocialIcon:"authorSocialIcon_XYv3"},$={twitter:{Icon:function(e){return(0,o.jsx)("svg",{viewBox:"0 0 256 209",width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",...e,children:(0,o.jsx)("path",{d:"M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45",fill:"#55acee"})})},label:"Twitter"},github:{Icon:function(e){return(0,o.jsx)("svg",{viewBox:"0 0 256 250",width:"1em",height:"1em",...e,className:(0,i.A)(e.className,V),xmlns:"http://www.w3.org/2000/svg",style:{"--dark":"#000","--light":"#fff"},preserveAspectRatio:"xMidYMid",children:(0,o.jsx)("path",{d:"M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"})})},label:"GitHub"},stackoverflow:{Icon:function(e){return(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 169.61 200",width:"1em",height:"1em",...e,children:[(0,o.jsx)("path",{d:"M140.44 178.38v-48.65h21.61V200H0v-70.27h21.61v48.65z",fill:"#bcbbbb"}),(0,o.jsx)("path",{d:"M124.24 140.54l4.32-16.22-86.97-17.83-3.78 17.83zM49.7 82.16L130.72 120l7.56-16.22-81.02-37.83zm22.68-40l68.06 57.3 11.35-13.51-68.6-57.3-11.35 13.51zM116.14 0l-14.59 10.81 53.48 71.89 14.58-10.81zM37.81 162.16h86.43v-16.21H37.81z",fill:"#f48024"})]})},label:"Stack Overflow"},linkedin:{Icon:function(e){return(0,o.jsx)("svg",{width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 256 256",...e,children:(0,o.jsx)("path",{d:"M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453",fill:"#0A66C2"})})},label:"LinkedIn"},x:{Icon:function(e){return(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 1200 1227",...e,className:(0,i.A)(e.className,X),style:{"--dark":"#000","--light":"#fff"},children:(0,o.jsx)("path",{d:"M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"})})},label:"X"}};function J(e){let{platform:t,link:s}=e;const{Icon:a,label:r}=$[n=t]??{Icon:F,label:n};var n;return(0,o.jsx)(d.A,{className:O.authorSocialLink,href:s,title:r,children:(0,o.jsx)(a,{className:(0,i.A)(O.authorSocialLink)})})}function U(e){let{author:t}=e;const s=Object.entries(t.socials??{});return(0,o.jsx)("div",{className:O.authorSocials,children:s.map((e=>{let[t,s]=e;return(0,o.jsx)(J,{platform:t,link:s},t)}))})}const q={authorImage:"authorImage_XqGP","author-as-h1":"author-as-h1_n9oJ","author-as-h2":"author-as-h2_gXvM",authorDetails:"authorDetails_lV9A",authorName:"authorName_yefp",authorTitle:"authorTitle_nd0D",authorBlogPostCount:"authorBlogPostCount_iiJ5"};function Q(e){return e.href?(0,o.jsx)(d.A,{...e}):(0,o.jsx)(o.Fragment,{children:e.children})}function W(e){let{title:t}=e;return(0,o.jsx)("small",{className:q.authorTitle,title:t,children:t})}function E(e){let{name:t,as:s}=e;return s?(0,o.jsx)(f.A,{as:s,className:q.authorName,children:t}):(0,o.jsx)("span",{className:q.authorName,children:t})}function K(e){let{count:t}=e;return(0,o.jsx)("span",{className:(0,i.A)(q.authorBlogPostCount),children:t})}function ee(e){let{as:t,author:s,className:a,count:r}=e;const{name:n,title:l,url:c,imageURL:h,email:m,page:u}=s,d=u?.permalink||c||m&&`mailto:${m}`||void 0;return(0,o.jsxs)("div",{className:(0,i.A)("avatar margin-bottom--sm",a,q[`author-as-${t}`]),children:[h&&(0,o.jsx)(Q,{href:d,className:"avatar__photo-link",children:(0,o.jsx)("img",{className:(0,i.A)("avatar__photo",q.authorImage),src:h,alt:n})}),(n||l)&&(0,o.jsxs)("div",{className:(0,i.A)("avatar__intro",q.authorDetails),children:[(0,o.jsxs)("div",{className:"avatar__name",children:[n&&(0,o.jsx)(Q,{href:d,children:(0,o.jsx)(E,{name:n,as:t})}),r&&(0,o.jsx)(K,{count:r})]}),!!l&&(0,o.jsx)(W,{title:l}),(0,o.jsx)(U,{author:s})]})]})}const te={authorListItem:"authorListItem_n3yI"};function se(e){let{author:t}=e;return(0,o.jsx)("li",{className:te.authorListItem,children:(0,o.jsx)(ee,{as:"h2",author:t,count:t.count})})}function ae(e){let{authors:t}=e;return(0,o.jsx)("section",{className:(0,i.A)("margin-vert--lg",te.authorsListSection),children:(0,o.jsx)("ul",{children:t.map((e=>(0,o.jsx)(se,{author:e},e.key)))})})}function ie(e){let{authors:t,sidebar:s}=e;const a=c();return(0,o.jsxs)(r.e3,{className:(0,i.A)(n.G.wrapper.blogPages,n.G.page.blogAuthorsListPage),children:[(0,o.jsx)(r.be,{title:a}),(0,o.jsx)(R.A,{tag:"blog_authors_list"}),(0,o.jsxs)(Y,{sidebar:s,children:[(0,o.jsx)(f.A,{as:"h1",children:a}),(0,o.jsx)(ae,{authors:t})]})]})}}}]);