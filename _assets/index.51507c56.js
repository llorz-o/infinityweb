import{d as o,t as a,g as l,a_ as e,y as r,I as s,C as t}from"./index.719c5909.js";var[n,c]=r("tag"),i=t(o({name:n,props:{size:String,mark:Boolean,show:a,color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean,type:{type:String,default:"default"}},emits:["close"],setup(o,{slots:a,emit:r}){var t=o=>{o.stopPropagation(),r("close",o)},n=()=>{var{type:e,mark:r,plain:n,round:i,size:d,closeable:p}=o,u={mark:r,plain:n,round:i};d&&(u[d]=d);var m=p&&l(s,{name:"cross",class:c("close"),onClick:t},null);return l("span",{style:o.plain?{color:o.textColor||o.color,borderColor:o.color}:{color:o.textColor,background:o.color},class:c([u,e])},[null==a.default?void 0:a.default(),m])};return()=>l(e,{name:o.closeable?"van-fade":void 0},{default:()=>[o.show?n():null]})}}));export{i as T};
