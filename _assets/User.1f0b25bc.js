let e=document.createElement("style");e.innerHTML='.View.User[data-v-5ae83f92]{margin-top:0}.View.User .userinfo[data-v-5ae83f92]{display:flex;align-items:center;padding:2.66667vw 4.26667vw}.View.User .userinfo .avatarImage[data-v-5ae83f92]{width:10.66667vw;height:10.66667vw;border-radius:5.33333vw}.View.User .userinfo .levelIcon[data-v-5ae83f92],.View.User .userinfo .nickName[data-v-5ae83f92]{font-size:3.46667vw}.View.User .userinfo .balanceField[data-v-5ae83f92]{font-size:3.2vw}.View.User .userinfo .gender .lc-plan[data-v-5ae83f92]::before{font-size:4.26667vw}.View.User .userinfo .gender .lc-plan-male[data-v-5ae83f92]{color:#3742fa}.View.User .userinfo .gender .lc-plan-female[data-v-5ae83f92]{color:#ff4757}.View.User .statistic .van-grid-item[data-v-5ae83f92]:not(:last-child)::after{position:absolute;display:block;content:"";right:0;top:30%;bottom:30%;width:1px;background-color:#f2f3f5}.View.User .statistic .van-grid-item__content[data-v-5ae83f92]{position:relative}.View.User .statistic .van-grid-item__content .num[data-v-5ae83f92]{font-size:4vw}.View.User .statistic .van-grid-item__content .label[data-v-5ae83f92]{font-size:3.2vw;color:#969799}.View.User .publishBtn[data-v-5ae83f92]{width:21.33333vw}',document.head.appendChild(e);import{d as a,t,g as s,B as i,ai as n,F as l,y as r,C as o,N as c,I as d,b as f,c as u,l as v,aH as m,af as p,ay as w,az as g,e as b,o as _,f as h,Q as x,R as U,h as V,aA as k}from"./index.719c5909.js";import{C as z}from"./level.22f85bf1.js";import{u as y}from"./index.d1fdaee5.js";import{G as I,a as j}from"./index.bd3299c9.js";import{I as C}from"./index.0748ebb8.js";import{R as F,C as B}from"./index.208a711d.js";var[T,A]=r("cell-group"),N=o(a({name:T,inheritAttrs:!1,props:{title:String,inset:Boolean,border:t},setup(e,{slots:a,attrs:t}){var r=()=>s("div",i({class:[A({inset:e.inset}),{[n]:e.border&&!e.inset}]},t),[null==a.default?void 0:a.default()]);return()=>e.title||a.title?s(l,null,[s("div",{class:A("title",{inset:e.inset})},[a.title?a.title():e.title]),r()]):r()}})),S={name:"user-view",components:{[c.name]:c,[N.name]:N,[C.name]:C,[F.name]:F,[B.name]:B,[d.name]:d,[z.name]:z,[I.name]:I,[j.name]:j},setup(){const e=f(),a=u((()=>e.state.userinfo)),t=u((()=>e.state.statistic)),s=v("");setInterval((()=>{s.value=new Date(window.$correct.getServerTime()).toLocaleString()}),200);const i=y.debounce(m.factor().getUserInfo,6e4);return p((()=>i())),{userinfo:a,statistic:t,serverTime:s}}};const $=k();w("data-v-5ae83f92");const H={class:"View User"},L={class:"num"},R=s("div",{class:"label"},"??????",-1),D={class:"num"},E=s("div",{class:"label"},"??????",-1),G={class:"num"},M=s("div",{class:"label"},"??????",-1),Q=x("??????");g();const q=$(((e,a,t,i,n,l)=>{const r=b("van-image"),o=b("van-col"),c=b("van-icon"),d=b("level"),f=b("van-row"),u=b("van-grid-item"),v=b("van-grid"),m=b("van-button"),p=b("van-cell"),w=b("van-cell-group");return _(),h("div",H,[s("div",{class:"userinfo",onClick:a[1]||(a[1]=a=>e.$router.push("/user/setting"))},[s(r,{class:"avatarImage",src:e.$root.getAvatar(i.userinfo.avatarUrl),fit:"cover",round:"","icon-size":"15"},null,8,["src"]),s(o,{span:"19",offset:"1"},{default:$((()=>[s(f,{align:"center",gutter:"5"},{default:$((()=>[s(o,{class:"nickName"},{default:$((()=>[x(U(i.userinfo.nickname||"???????????????"),1)])),_:1}),i.userinfo.gender>0?(_(),h(o,{key:0,class:"gender"},{default:$((()=>[s(c,{"class-prefix":"lc-plan",name:1==i.userinfo.gender?"male":"female"},null,8,["name"])])),_:1})):V("v-if",!0),s(o,{"icon-wrap":""},{default:$((()=>[s(d,{l:i.userinfo.level},null,8,["l"])])),_:1})])),_:1}),s(f,{align:"center"},{default:$((()=>[s(o,{class:"balanceField",span:"6"},{default:$((()=>[x("??????: "+U(i.statistic.coins),1)])),_:1})])),_:1})])),_:1}),s(c,{name:"setting-o"})]),s(v,{class:"statistic","column-num":"3",border:!1,clickable:""},{default:$((()=>[s(u,{to:"/user/publish"},{default:$((()=>[s("div",L,U(i.statistic.publish),1),R])),_:1}),s(u,{to:"/user/follows"},{default:$((()=>[s("div",D,U(i.statistic.follow),1),E])),_:1}),s(u,{to:"/user/fans"},{default:$((()=>[s("div",G,U(i.statistic.fans),1),M])),_:1})])),_:1}),s(v,{class:"actions",border:!1,clickable:""},{default:$((()=>[s(u,{"icon-prefix":"lc-ali",icon:"history",text:"????????????",to:"/user/history"}),s(u,{"icon-prefix":"lc-ali",icon:"operation",text:"????????????",to:"/user/likes"}),s(u,{"icon-prefix":"lc-ali",icon:"dollar",text:"????????????",to:"/user/tips"}),s(u,{"icon-prefix":"lc-ali",icon:"zijin",text:"????????????",to:"/user/bills"})])),_:1}),s(w,{title:"??????"},{default:$((()=>[s(p,{title:"???????????????",border:"",clickable:""},{default:$((()=>[s(m,{class:"publishBtn",size:"mini",icon:"plus",color:"#FF0033",to:"/content/edit",plain:"",round:""},{default:$((()=>[Q])),_:1})])),_:1})])),_:1}),s(p,null,{default:$((()=>[x(U(i.serverTime),1)])),_:1})])}));S.render=q,S.__scopeId="data-v-5ae83f92";export default S;
