"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[95145],{99265:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var s=i(74848),t=i(28453);const l={},d="Catena-X e.V. Structure and Guidelines",r={type:"mdx",permalink:"/markdown-guidelines",source:"@site/src/pages/markdown-guidelines.md",title:"Catena-X e.V. Structure and Guidelines",description:"Repository Structure and files",frontMatter:{},unlisted:!1},a={},o=[{value:"Repository Structure and files",id:"repository-structure-and-files",level:2},{value:"Folder and File structure",id:"folder-and-file-structure",level:3},{value:"Special &amp; default files",id:"special--default-files",level:3},{value:"How to order MD files in a folder?",id:"how-to-order-md-files-in-a-folder",level:3},{value:"How to order the chapters?",id:"how-to-order-the-chapters",level:4},{value:"MD file guidelines and best practices",id:"md-file-guidelines-and-best-practices",level:2},{value:"Headings",id:"headings",level:3},{value:"DOs - Headings",id:"dos---headings",level:4},{value:"Don&#39;ts - Headings",id:"donts---headings",level:4},{value:"Bolt",id:"bolt",level:3},{value:"DOs - Bolt",id:"dos---bolt",level:4},{value:"Don&#39;ts - Bolt",id:"donts---bolt",level:4},{value:"Italic",id:"italic",level:3},{value:"DOs - Italic",id:"dos---italic",level:4},{value:"Don&#39;ts - Italic",id:"donts---italic",level:4},{value:"Lists - unordered",id:"lists---unordered",level:3},{value:"DOs - Lists unordered",id:"dos---lists-unordered",level:4},{value:"Don&#39;ts - Lists unordered",id:"donts---lists-unordered",level:4},{value:"Lists - ordered",id:"lists---ordered",level:3},{value:"DOs - Lists ordered",id:"dos---lists-ordered",level:4},{value:"Don&#39;ts - Lists ordered",id:"donts---lists-ordered",level:4},{value:"Images/Figures/Files",id:"imagesfiguresfiles",level:3},{value:"DOs - Images/Figures/Files",id:"dos---imagesfiguresfiles",level:4},{value:"Code",id:"code",level:3},{value:"DOs - Code",id:"dos---code",level:4},{value:"Links/URLs/E-Mail/Phone numbers",id:"linksurlse-mailphone-numbers",level:3},{value:"DOs - Links/URLs/E-Mail/Phone numbers",id:"dos---linksurlse-mailphone-numbers",level:4},{value:"Don&#39;ts - Links/URLs/E-Mail/Phone numbers",id:"donts---linksurlse-mailphone-numbers",level:4},{value:"Admonitions",id:"admonitions",level:3},{value:"DOs - Admonitions",id:"dos---admonitions",level:4},{value:"Link to chapters/headlines",id:"link-to-chaptersheadlines",level:2},{value:"DOs - chapters/headlines",id:"dos---chaptersheadlines",level:3}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"catena-x-ev-structure-and-guidelines",children:"Catena-X e.V. Structure and Guidelines"})}),"\n",(0,s.jsx)(n.h2,{id:"repository-structure-and-files",children:"Repository Structure and files"}),"\n",(0,s.jsx)(n.p,{children:'The following shows the default structure of a given repository. All the files which will be released with the content are contained in the "docs" folder. All the folders, files and assets are named in the kebab-case convention.'}),"\n",(0,s.jsx)(n.h3,{id:"folder-and-file-structure",children:"Folder and File structure"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"github-repo\n\u251c\u2500\u2500 .github\n\u251c\u2500\u2500 docs\n\u2502   \u251c\u2500\u2500 my-first-chapter\n\u2502   \u2502   \u251c\u2500\u2500 my-first-chapter.md\n\u2502   \u2502   \u251c\u2500\u2500 _category_.json\n\u2502   \u2502   \u2514\u2500\u2500 assets\n\u2502   \u2502       \u251c\u2500\u2500 my-image-for-the-chapter.jpg\n\u2502   \u2502       \u251c\u2500\u2500 nice-image.png\n\u2502   \u2502       \u2514\u2500\u2500 nice-asset.xyz\n\u2502   \u2514\u2500\u2500 my-second-chapter\n\u2502       \u251c\u2500\u2500 my-second-chapter.md\n\u2502       \u251c\u2500\u2500 my-subchapter-in-chapter-two.md\n\u2502       \u251c\u2500\u2500 _category_.json\n\u2502       \u2514\u2500\u2500 assets\n\u2502           \u251c\u2500\u2500 my-other-image-for-the-chapter.jpg\n\u2502           \u251c\u2500\u2500 nice-image-2.png\n\u2502           \u2514\u2500\u2500 nice-asset-4.xyz\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 .markdownlint.yaml\n\u251c\u2500\u2500 CHANGELOG.md\n\u251c\u2500\u2500 getting-started-github.md\n\u251c\u2500\u2500 LICENSE\n\u2514\u2500\u2500 README.md\n"})}),"\n",(0,s.jsx)(n.h3,{id:"special--default-files",children:"Special & default files"}),"\n",(0,s.jsx)(n.p,{children:'In order to display and render the "docs" folder successfully within docusaurus we need some special files e.g. to determine the order of the given content.'}),"\n",(0,s.jsx)(n.h3,{id:"how-to-order-md-files-in-a-folder",children:"How to order MD files in a folder?"}),"\n",(0,s.jsx)(n.p,{children:"To order multiple MD files in a given folder there must be a specific heading at the beginning of the file. This has to be added by default even is there aren't multiple files in a given folder."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"---\nsidebar_position: 1\n---\n# How: Data Space Governance\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In the example above the title of the document is ",(0,s.jsx)(n.code,{children:"How: Data Space Governance"}),". In this case the name of the MD file and the folder would be ",(0,s.jsx)(n.code,{children:"how-data-space-governance"})," and the file would be ",(0,s.jsx)(n.code,{children:"how-data-space-governance.md"}),". In the example the files is the first one in the order within the folder. The order can be arranged by changing the number incrementally in the key ",(0,s.jsx)(n.code,{children:"sidebar_position"})," starting from ",(0,s.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"how-to-order-the-chapters",children:"How to order the chapters?"}),"\n",(0,s.jsxs)(n.p,{children:["To order the folders and therefor the chapters in the correct order so they get displayed correctly, there must be a ",(0,s.jsx)(n.code,{children:"_category_.json"})," in each folder. This contains the following content:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "label": "How: Data Space Governance",\n    "position": 4,\n    "collapsible": true,\n    "collapsed": true\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"label"}),": corresponds with the title of the file in this example ",(0,s.jsx)(n.code,{children:"How: Data Space Governance"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"position"}),": position of the folder in the overall structure, in this example its the firth chapter."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"collapsible"}),": is the list of chapters collapsible ",(0,s.jsx)(n.code,{children:"default=true"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"collapsed"}),": is the default view collapsed ",(0,s.jsx)(n.code,{children:"default=true"}),"?"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"md-file-guidelines-and-best-practices",children:"MD file guidelines and best practices"}),"\n",(0,s.jsx)(n.p,{children:"In the following section the best practices in writing MD files and guidelines on how we in Catena-X write MD files."}),"\n",(0,s.jsx)(n.h3,{id:"headings",children:"Headings"}),"\n",(0,s.jsx)(n.h4,{id:"dos---headings",children:"DOs - Headings"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-MD",children:"# This a heading in the first order\n## This a heading in the first order\n"})}),"\n",(0,s.jsx)(n.h4,{id:"donts---headings",children:"Don'ts - Headings"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-MD",children:"This a heading in the first order\n=================================\nThis a heading in the first order\n---------------------------------\n"})}),"\n",(0,s.jsx)(n.h3,{id:"bolt",children:"Bolt"}),"\n",(0,s.jsx)(n.h4,{id:"dos---bolt",children:"DOs - Bolt"}),"\n",(0,s.jsxs)(n.p,{children:["In this sentence ",(0,s.jsx)(n.strong,{children:"this part"})," is bolt."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-MD",children:"In this sentence **this part** is bolt.\n"})}),"\n",(0,s.jsx)(n.h4,{id:"donts---bolt",children:"Don'ts - Bolt"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-MD",children:"In this sentence **this** **part** is bolt.\nIn this sentence __this part__ is bolt.\nIn this sentence __this__ __part__ is bolt.\n"})}),"\n",(0,s.jsx)(n.h3,{id:"italic",children:"Italic"}),"\n",(0,s.jsx)(n.h4,{id:"dos---italic",children:"DOs - Italic"}),"\n",(0,s.jsxs)(n.p,{children:["In this sentence ",(0,s.jsx)(n.em,{children:"this part"})," is italic."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-MD",children:"In this sentence *this part* is italic.\n"})}),"\n",(0,s.jsx)(n.h4,{id:"donts---italic",children:"Don'ts - Italic"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-MD",children:"In this sentence *this* *part* is italic.\nIn this sentence _this part_ is italic.\nIn this sentence _this_ _part_ is italic.\n"})}),"\n",(0,s.jsx)(n.h3,{id:"lists---unordered",children:"Lists - unordered"}),"\n",(0,s.jsx)(n.h4,{id:"dos---lists-unordered",children:"DOs - Lists unordered"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"first item"}),"\n",(0,s.jsxs)(n.li,{children:["second item","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"sub item"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-MD",children:"- first item\n- second item\n  - sub item\n"})}),"\n",(0,s.jsx)(n.h4,{id:"donts---lists-unordered",children:"Don'ts - Lists unordered"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-MD",children:"- first item\n+ second item\n  * sub item\n"})}),"\n",(0,s.jsx)(n.h3,{id:"lists---ordered",children:"Lists - ordered"}),"\n",(0,s.jsx)(n.h4,{id:"dos---lists-ordered",children:"DOs - Lists ordered"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"first item"}),"\n",(0,s.jsxs)(n.li,{children:["second item","\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"sub item"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-MD",children:"1. first item\n2. second item\n   1. sub item\n"})}),"\n",(0,s.jsx)(n.h4,{id:"donts---lists-ordered",children:"Don'ts - Lists ordered"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-MD",children:"1) first item\n2) second item\n   1) sub item\n"})}),"\n",(0,s.jsx)(n.h3,{id:"imagesfiguresfiles",children:"Images/Figures/Files"}),"\n",(0,s.jsx)(n.p,{children:'In addition to the image itself we also provide a alternatives text "alt" in the square brackets. In markdown captions are not supported. We will use the same text as the "alt" in italic writing directly under the image. All kind of files must be named in kebab-case.'}),"\n",(0,s.jsx)(n.h4,{id:"dos---imagesfiguresfiles",children:"DOs - Images/Figures/Files"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-MD",children:"![Nice Image](./assets/nice-image.png)\n*Nice Image*\n"})}),"\n",(0,s.jsx)(n.p,{children:'Alt text is the same as the "caption".'}),"\n",(0,s.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,s.jsx)(n.h4,{id:"dos---code",children:"DOs - Code"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"// the hello world program\nconsole.log('Hello World');\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"    ```java\n    // the hello world program\n    console.log('Hello World');\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\n### Text-Box\n\nA `text` in a box\n\n```md\n    A `text` in a box\n"})}),"\n",(0,s.jsx)(n.h3,{id:"linksurlse-mailphone-numbers",children:"Links/URLs/E-Mail/Phone numbers"}),"\n",(0,s.jsx)(n.p,{children:"Due to to the use of docusaurus the convention is the following:"}),"\n",(0,s.jsx)(n.h4,{id:"dos---linksurlse-mailphone-numbers",children:"DOs - Links/URLs/E-Mail/Phone numbers"}),"\n",(0,s.jsxs)(n.p,{children:["Go and visit ",(0,s.jsx)(n.a,{href:"https://catena-x.net/en/",children:"Catena-X"}),(0,s.jsx)(n.br,{}),"\n","E-Mail is here: ",(0,s.jsx)(n.a,{href:"mailto:info@catena-x.net",children:"info@catena-x.net"}),(0,s.jsx)(n.br,{}),"\n","Phone number: ",(0,s.jsx)(n.a,{href:"tel:+49123456798",children:"+49 123 456798"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"    Go and visit [Catena-X](https://catena-x.net/en/)   \n    E-Mail is here: [info@catena-x.net](mailto:info@catena-x.net)  \n    Phone number: [+49 123 456798](tel:+49123456798)  \n"})}),"\n",(0,s.jsx)(n.h4,{id:"donts---linksurlse-mailphone-numbers",children:"Don'ts - Links/URLs/E-Mail/Phone numbers"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"    Go and visit Catena-X <https://catena-x.net/en/>\n    E-Mail ist here: <info@catena-x.net> \n"})}),"\n",(0,s.jsx)(n.h3,{id:"admonitions",children:"Admonitions"}),"\n",(0,s.jsxs)(n.p,{children:["They are not getting rendered correctly in the MD files but in docusaurus. Further information can be found ",(0,s.jsx)(n.a,{href:"https://docusaurus.io/docs/markdown-features/admonitions",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"dos---admonitions",children:"DOs - Admonitions"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Some ",(0,s.jsx)(n.strong,{children:"content"})," with ",(0,s.jsx)(n.em,{children:"Markdown"})," ",(0,s.jsx)(n.code,{children:"syntax"}),"."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:":::tip\n\nSome **content** with *Markdown* `syntax`.\n\n:::\n"})}),"\n",(0,s.jsx)(n.h2,{id:"link-to-chaptersheadlines",children:"Link to chapters/headlines"}),"\n",(0,s.jsx)(n.h3,{id:"dos---chaptersheadlines",children:"DOs - chapters/headlines"}),"\n",(0,s.jsx)(n.p,{children:'Be aware if there is a "-" in the heading the IntelliSense in VS Code adds one "-" to many, which results in a error in the MDX linter. In addition if you want to link to the title of the file don\'t tag the heading with "#" it in the link, just link to the file itself. This would result in a error in the MDX linter.'}),"\n",(0,s.jsxs)(n.p,{children:["Jump back to the ",(0,s.jsx)(n.a,{href:"#catena-x-ev-structure-and-guidelines",children:"Top"}),(0,s.jsx)(n.br,{}),"\n","Jump to another ",(0,s.jsx)(n.a,{href:"/getting-started-github#branching",children:"file"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"    Jump back to the [Top](#catena-x-ev-structure-and-guidelines)  \n    Jump to another [file](/getting-started-github#branching) \n"})})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>r});var s=i(96540);const t={},l=s.createContext(t);function d(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);