(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(8835)}])},8835:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return z}});var t=i(5893),s=i(7294),o=i(7357),l=i(4267),r=i(3965),a=i(5861),c=i(888),d=i(8026),x=i(4362),h=i(6638),u=i(6214),p=i(7621),m=i(6725),v=i(1825),j=i(8698),g=i(438),Z=i(8299),b=i(3567),f=i(6250),y=i(6581),w=i(8378);let C=[{name:"New",icon:(0,t.jsx)(h.Z,{})},{name:"JS Mastery",icon:(0,t.jsx)(u.Z,{})},{name:"Coding",icon:(0,t.jsx)(u.Z,{})},{name:"ReactJS",icon:(0,t.jsx)(u.Z,{})},{name:"NextJS",icon:(0,t.jsx)(u.Z,{})},{name:"Music",icon:(0,t.jsx)(x.Z,{})},{name:"Education",icon:(0,t.jsx)(j.Z,{})},{name:"Podcast",icon:(0,t.jsx)(b.Z,{})},{name:"Movie",icon:(0,t.jsx)(p.Z,{})},{name:"Gaming",icon:(0,t.jsx)(m.Z,{})},{name:"Live",icon:(0,t.jsx)(v.Z,{})},{name:"Sport",icon:(0,t.jsx)(y.Z,{})},{name:"Fashion",icon:(0,t.jsx)(Z.Z,{})},{name:"Beauty",icon:(0,t.jsx)(g.Z,{})},{name:"Comedy",icon:(0,t.jsx)(f.Z,{})},{name:"Gym",icon:(0,t.jsx)(y.Z,{})},{name:"Crypto",icon:(0,t.jsx)(w.Z,{})}],S=e=>{var n,i,s,x,h,u,p,m;let{channelDetail:v,marginTop:j}=e;return(0,t.jsx)(o.Z,{sx:{boxShadow:"none",borderRadius:"20px",display:"flex",justifyContent:"center",alignItems:"center",width:{xs:"356px",md:"320px"},height:"326px",margin:"auto",marginTop:j},children:(0,t.jsx)(d.rU,{to:"/channel/".concat(null==v?void 0:null===(n=v.id)||void 0===n?void 0:n.channelId),children:(0,t.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center",color:"#fff"},children:[(0,t.jsx)(r.Z,{image:(null==v?void 0:null===(i=v.snippet)||void 0===i?void 0:null===(s=i.thumbnails)||void 0===s?void 0:null===(x=s.high)||void 0===x?void 0:x.url)||"http://dergipark.org.tr/assets/app/images/buddy_sample.png",alt:null==v?void 0:null===(h=v.snippet)||void 0===h?void 0:h.title,sx:{borderRadius:"50%",height:"180px",width:"180px",mb:2,border:"1px solid #e3e3e3"}}),(0,t.jsxs)(a.Z,{variant:"h6",children:[null==v?void 0:null===(u=v.snippet)||void 0===u?void 0:u.title," ",(0,t.jsx)(c.Z,{sx:{fontSize:"14px",color:"gray",ml:"5px"}})]}),(null==v?void 0:null===(p=v.statistics)||void 0===p?void 0:p.subscriberCount)&&(0,t.jsxs)(a.Z,{sx:{fontSize:"15px",fontWeight:500,color:"gray"},children:[parseInt(null==v?void 0:null===(m=v.statistics)||void 0===m?void 0:m.subscriberCount).toLocaleString("en-US")," Subscribers"]})]})})})};var I=i(6242);let _=e=>{var n,i;let{video:{id:{videoId:s},snippet:o}}=e;return(0,t.jsxs)(I.Z,{sx:{width:{xs:"100%",sm:"358px",md:"320px"},boxShadow:"none",borderRadius:0},children:[(0,t.jsx)(d.rU,{to:s?"/video/".concat(s):"/video/cV2gBU6hKfY",children:(0,t.jsx)(r.Z,{image:(null==o?void 0:null===(n=o.thumbnails)||void 0===n?void 0:null===(i=n.high)||void 0===i?void 0:i.url)||"https://i.ibb.co/G2L2Gwp/API-Course.png",alt:null==o?void 0:o.title,sx:{width:{xs:"100%",sm:"358px"},height:180}})}),(0,t.jsxs)(l.Z,{sx:{backgroundColor:"#1E1E1E",height:"106px"},children:[(0,t.jsx)(d.rU,{to:s?"/video/".concat(s):"/video/GDa8kZLNhJ4",children:(0,t.jsx)(a.Z,{variant:"subtitle1",fontWeight:"bold",color:"#FFF",children:(null==o?void 0:o.title.slice(0,60))||"Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI".slice(0,60)})}),(0,t.jsx)(d.rU,{to:(null==o?void 0:o.channelId)?"/channel/".concat(null==o?void 0:o.channelId):"/channel/UCmXmlB4-HJytD7wek0Uo97A",children:(0,t.jsxs)(a.Z,{variant:"subtitle2",color:"gray",children:[(null==o?void 0:o.channelTitle)||"JavaScript Mastery",(0,t.jsx)(c.Z,{sx:{fontSize:"12px",color:"gray",ml:"5px"}})]})})]})]})};var R=i(9669),P=i.n(R),k=i(3454);let E={params:{maxResults:50},headers:{"X-RapidAPI-Key":k.env.REACT_APP_RAPID_API_KEY,"X-RapidAPI-Host":"youtube-v31.p.rapidapi.com"}},N=async e=>{let{data:n}=await P().get("".concat("https://youtube-v31.p.rapidapi.com","/").concat(e),E);return n};var A=i(1536);let D=()=>{let[e,n]=(0,s.useState)("New"),[i,l]=(0,s.useState)(null);return(0,s.useEffect)(()=>{l(null),N("search?part=snippet&q=".concat(e)).then(e=>l(e.items))},[e]),(0,t.jsxs)(A.Z,{sx:{flexDirection:{sx:"column",md:"row"}},children:[(0,t.jsxs)(o.Z,{sx:{height:{sx:"auto",md:"92vh"},borderRight:"1px solid #3d3d3d",px:{sx:0,md:2}},children:[(0,t.jsx)(Y,{selectedCategory:e,setSelectedCategory:n}),(0,t.jsx)(a.Z,{className:"copyright",variant:"body2",sx:{mt:1.5,color:"#fff"},children:"Copyright \xa9 2022 JSM Media"})]}),(0,t.jsxs)(o.Z,{p:2,sx:{overflowY:"auto",height:"90vh",flex:2},children:[(0,t.jsxs)(a.Z,{variant:"h4",fontWeight:"bold",mb:2,sx:{color:"white"},children:[e," ",(0,t.jsx)("span",{style:{color:"#FC1503"},children:"videos"})]}),(0,t.jsx)(T,{videos:i})]})]})};var F=i(8456);let J=()=>(0,t.jsx)(o.Z,{minHeight:"95vh",children:(0,t.jsx)(A.Z,{direction:"row",justifyContent:"center",alignItems:"center",height:"80vh",children:(0,t.jsx)(F.Z,{})})}),U=()=>(0,t.jsxs)(A.Z,{direction:"row",alignItems:"center",p:2,sx:{position:"sticky",background:"#000",top:0,justifyContent:"space-between"},children:[(0,t.jsx)("div",{to:"/",style:{display:"flex",alignItems:"center"},children:(0,t.jsx)("img",{src:"https://i.ibb.co/s9Qys2j/logo.png",alt:"logo",height:45})}),(0,t.jsx)(H,{})]});var M=i(629),G=i(3666),X=i(2761);let B=()=>{let[e,n]=(0,s.useState)(""),i=i=>{i.preventDefault(),e&&n("")};return(0,t.jsxs)(M.Z,{component:"form",onSubmit:i,sx:{borderRadius:20,border:"1px solid #e3e3e3",pl:2,boxShadow:"none",mr:{sm:5}},children:[(0,t.jsx)("input",{className:"search-bar",placeholder:"Search...",value:e,onChange:e=>n(e.target.value)}),(0,t.jsx)(G.Z,{type:"submit",sx:{p:"10px",color:"red"},"aria-label":"search",children:(0,t.jsx)(X.Z,{})})]})};var H=B;let L=e=>{let{videos:n,direction:i}=e;return(null==n?void 0:n.length)?(0,t.jsx)(A.Z,{direction:i||"row",flexWrap:"wrap",justifyContent:"start",alignItems:"start",gap:2,children:n.map((e,n)=>(0,t.jsxs)(o.Z,{children:[e.id.videoId&&(0,t.jsx)(_,{video:e}),e.id.channelId&&(0,t.jsx)(S,{channelDetail:e})]},n))}):(0,t.jsx)(J,{})};var T=L;let W=e=>{let{selectedCategory:n,setSelectedCategory:i}=e;return(0,t.jsx)(A.Z,{direction:"row",sx:{overflowY:"auto",height:{sx:"auto",md:"95%"},flexDirection:{md:"column"}},children:C.map(e=>(0,t.jsxs)("button",{className:"category-btn",onClick:()=>i(e.name),style:{background:e.name===n&&"#FC1503",color:"white"},children:[(0,t.jsx)("span",{style:{color:e.name===n?"white":"red",marginRight:"15px"},children:e.icon}),(0,t.jsx)("span",{style:{opacity:e.name===n?"1":"0.8"},children:e.name})]},e.name))})};var Y=W;function z(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(U,{}),(0,t.jsx)(D,{})]})}}},function(e){e.O(0,[127,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);