import{S as C,i as G,s as T,L as N,k as v,l as g,m as b,h as f,b as h,M as Y,f as p,A as r,e as S,K as A,q as u,a as H,r as d,c as L,B as _,G as D,H as F,v as K,w as M,x as O,t as R,y as U}from"./index-174477ec.js";import{f as V}from"./index-cd54725b.js";function j(c,e,n){const t=c.slice();return t[2]=e[n],t[4]=n,t}function z(c){return{c:r,l:r,m:r,p:r,i:r,o:r,d:r}}function J(c){let e,n=c[1],t=[];for(let a=0;a<n.length;a+=1)t[a]=q(j(c,n,a));return{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=S()},l(a){for(let o=0;o<t.length;o+=1)t[o].l(a);e=S()},m(a,o){for(let l=0;l<t.length;l+=1)t[l].m(a,o);h(a,e,o)},p(a,o){if(o&1){n=a[1];let l;for(l=0;l<n.length;l+=1){const s=j(a,n,l);t[l]?(t[l].p(s,o),p(t[l],1)):(t[l]=q(s),t[l].c(),p(t[l],1),t[l].m(e.parentNode,e))}for(;l<t.length;l+=1)t[l].d(1);t.length=n.length}},i(a){for(let o=0;o<n.length;o+=1)p(t[o])},o:r,d(a){A(t,a),a&&f(e)}}}function q(c){let e,n,t=c[2].year_of_balance+"",a,o,l=c[2].amount+"",s,k,I=c[2].actual_revised_estimated+"",$,y,P=c[2].item+"",w,E,B;return{c(){e=v("section"),n=u("Year: "),a=u(t),o=u(" | Balance: "),s=u(l),k=u(" | Type: "),$=u(I),y=u(` | Item:
				`),w=u(P),E=H()},l(m){e=g(m,"SECTION",{});var i=b(e);n=d(i,"Year: "),a=d(i,t),o=d(i," | Balance: "),s=d(i,l),k=d(i," | Type: "),$=d(i,I),y=d(i,` | Item:
				`),w=d(i,P),E=L(i),i.forEach(f)},m(m,i){h(m,e,i),_(e,n),_(e,a),_(e,o),_(e,s),_(e,k),_(e,$),_(e,y),_(e,w),_(e,E)},p:r,i(m){B||D(()=>{B=F(e,V,{delay:c[4]*50}),B.start()})},o:r,d(m){m&&f(e)}}}function Q(c){let e,n;return{c(){e=v("p"),n=u("loading..")},l(t){e=g(t,"P",{});var a=b(e);n=d(a,"loading.."),a.forEach(f)},m(t,a){h(t,e,a),_(e,n)},p:r,i:r,o:r,d(t){t&&f(e)}}}function W(c){let e,n={ctx:c,current:null,token:null,hasCatch:!1,pending:Q,then:J,catch:z,value:1};return N(c[0],n),{c(){e=v("div"),n.block.c()},l(t){e=g(t,"DIV",{});var a=b(e);n.block.l(a),a.forEach(f)},m(t,a){h(t,e,a),n.block.m(e,n.anchor=null),n.mount=()=>e,n.anchor=null},p(t,[a]){c=t,Y(n,c,a)},i(t){p(n.block)},o:r,d(t){t&&f(e),n.block.d(),n.token=null,n=null}}}async function X(){const c="https://data.gov.sg/api/action/datastore_search",n={resource_id:"98856a60-33cd-482a-9dc4-1ed52e562d5d",q:"balance"};let t=new URLSearchParams(n);const o=await(await fetch(c+"?"+t)).json();return console.log(o),o.result.records}function Z(c){return[X()]}class ee extends C{constructor(e){super(),G(this,e,Z,W,T,{})}}function te(c){let e,n,t,a,o;return a=new ee({}),{c(){e=v("h1"),n=u(x),t=H(),K(a.$$.fragment)},l(l){e=g(l,"H1",{});var s=b(e);n=d(s,x),s.forEach(f),t=L(l),M(a.$$.fragment,l)},m(l,s){h(l,e,s),_(e,n),h(l,t,s),O(a,l,s),o=!0},p:r,i(l){o||(p(a.$$.fragment,l),o=!0)},o(l){R(a.$$.fragment,l),o=!1},d(l){l&&f(e),l&&f(t),U(a,l)}}}const ae={title:"Govt Fiscal Position",date:"2022-10-13"},{title:x,date:oe}=ae;class ce extends C{constructor(e){super(),G(this,e,null,te,T,{})}}export{ce as default,ae as metadata};
