import{C as a}from"./relation-item.11e67dd5.js";import{N as e,aL as n,aM as t,e as i,o as s,f as o,j as r,g as l,F as d,P as m,Q as f}from"./index.719c5909.js";import{L as g}from"./index.697a0a58.js";import"./index.208a711d.js";import"./index.0748ebb8.js";import"./use-tab-status.4fba9145.js";import"./style.712d8f68.js";var u={name:"fans-view",components:{[g.name]:g,[e.name]:e,[n.name]:n,[a.name]:a},setup(){const{listManager:a}=t.factor().buildList();return{listManager:a,getRelationFans:async function(){await t.factor().getRelationFans(a)}}}};const c=f("粉丝");u.render=function(a,e,n,t,f,g){const u=i("Header"),p=i("relation-item"),M=i("van-list"),h=i("Layout");return s(),o(h,{class:"Fans",header:""},{default:r((()=>[l(u,{class:"van-hairline--bottom",fixed:"",animation:"",onClickLeft:e[1]||(e[1]=e=>a.$router.back())},{default:r((()=>[c])),_:1}),l(M,{loading:t.listManager.loading,"onUpdate:loading":e[2]||(e[2]=a=>t.listManager.loading=a),error:t.listManager.error,"onUpdate:error":e[3]||(e[3]=a=>t.listManager.error=a),finished:t.listManager.finished,"finished-text":"没有更多了",onLoad:t.getRelationFans},{default:r((()=>[(s(!0),o(d,null,m(t.listManager.list,(a=>(s(),o(p,{key:a.id,item:a,onChangeRelation:e=>a.relation=e},null,8,["item","onChangeRelation"])))),128))])),_:1},8,["loading","error","finished","onLoad"])])),_:1})};export default u;
