import{S as C,i as I,s as U,k as p,q as b,a as S,l as v,m as g,r as x,h as u,c as B,n as m,b as E,B as d,A as P,H as j,u as q}from"../../../chunks/index-3d0fa062.js";import{b as y}from"../../../chunks/paths-6cd3a76e.js";function A(o,a,h){const s=o.slice();return s[1]=a[h],s}function L(o){let a,h,s,i=o[1].meta.title+"",r,l,e,n=o[1].meta.date+"",t,f;return{c(){a=p("li"),h=p("h2"),s=p("a"),r=b(i),e=b(`
			Published `),t=b(n),f=S(),this.h()},l(_){a=v(_,"LI",{class:!0});var c=g(a);h=v(c,"H2",{class:!0});var k=g(h);s=v(k,"A",{href:!0});var H=g(s);r=x(H,i),H.forEach(u),k.forEach(u),e=x(c,`
			Published `),t=x(c,n),f=B(c),c.forEach(u),this.h()},h(){m(s,"href",l=y+o[1].path),m(h,"class","svelte-1xxdia7"),m(a,"class","svelte-1xxdia7")},m(_,c){E(_,a,c),d(a,h),d(h,s),d(s,r),d(a,e),d(a,t),d(a,f)},p(_,c){c&1&&i!==(i=_[1].meta.title+"")&&q(r,i),c&1&&l!==(l=y+_[1].path)&&m(s,"href",l),c&1&&n!==(n=_[1].meta.date+"")&&q(t,n)},d(_){_&&u(a)}}}function w(o){let a,h,s,i,r=o[0].posts,l=[];for(let e=0;e<r.length;e+=1)l[e]=L(A(o,r,e));return{c(){a=p("h1"),h=b("blogposts"),s=S(),i=p("ul");for(let e=0;e<l.length;e+=1)l[e].c();this.h()},l(e){a=v(e,"H1",{});var n=g(a);h=x(n,"blogposts"),n.forEach(u),s=B(e),i=v(e,"UL",{class:!0});var t=g(i);for(let f=0;f<l.length;f+=1)l[f].l(t);t.forEach(u),this.h()},h(){m(i,"class","svelte-1xxdia7")},m(e,n){E(e,a,n),d(a,h),E(e,s,n),E(e,i,n);for(let t=0;t<l.length;t+=1)l[t].m(i,null)},p(e,[n]){if(n&1){r=e[0].posts;let t;for(t=0;t<r.length;t+=1){const f=A(e,r,t);l[t]?l[t].p(f,n):(l[t]=L(f),l[t].c(),l[t].m(i,null))}for(;t<l.length;t+=1)l[t].d(1);l.length=r.length}},i:P,o:P,d(e){e&&u(a),e&&u(s),e&&u(i),j(l,e)}}}function z(o,a,h){let{data:s}=a;return o.$$set=i=>{"data"in i&&h(0,s=i.data)},[s]}class G extends C{constructor(a){super(),I(this,a,z,w,U,{data:0})}}export{G as default};