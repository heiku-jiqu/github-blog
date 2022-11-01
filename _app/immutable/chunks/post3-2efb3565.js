import{S as el,i as tl,s as al,L as fl,k as s,l as n,m as i,h as a,b as u,M as dl,f as Te,A as P,e as za,K as hl,q as l,a as m,r as o,c as _,B as t,G as pl,H as ml,v as _l,w as vl,n as Ze,x as wl,t as yl,y as El}from"./index-174477ec.js";import{f as bl}from"./index-cd54725b.js";function Qa(w,r,h){const f=w.slice();return f[2]=r[h],f[4]=h,f}function Pl(w){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function kl(w){let r,h=w[1],f=[];for(let d=0;d<h.length;d+=1)f[d]=Xa(Qa(w,h,d));return{c(){for(let d=0;d<f.length;d+=1)f[d].c();r=za()},l(d){for(let v=0;v<f.length;v+=1)f[v].l(d);r=za()},m(d,v){for(let p=0;p<f.length;p+=1)f[p].m(d,v);u(d,r,v)},p(d,v){if(v&1){h=d[1];let p;for(p=0;p<h.length;p+=1){const T=Qa(d,h,p);f[p]?(f[p].p(T,v),Te(f[p],1)):(f[p]=Xa(T),f[p].c(),Te(f[p],1),f[p].m(r.parentNode,r))}for(;p<f.length;p+=1)f[p].d(1);f.length=h.length}},i(d){for(let v=0;v<h.length;v+=1)Te(f[v])},o:P,d(d){hl(f,d),d&&a(r)}}}function Xa(w){let r,h,f=w[2].year_of_balance+"",d,v,p=w[2].amount+"",T,I,D=w[2].actual_revised_estimated+"",Y,A,F=w[2].item+"",B,M,x;return{c(){r=s("section"),h=l("Year: "),d=l(f),v=l(" | Balance: "),T=l(p),I=l(" | Type: "),Y=l(D),A=l(` | Item:
				`),B=l(F),M=m()},l(H){r=n(H,"SECTION",{});var E=i(r);h=o(E,"Year: "),d=o(E,f),v=o(E," | Balance: "),T=o(E,p),I=o(E," | Type: "),Y=o(E,D),A=o(E,` | Item:
				`),B=o(E,F),M=_(E),E.forEach(a)},m(H,E){u(H,r,E),t(r,h),t(r,d),t(r,v),t(r,T),t(r,I),t(r,Y),t(r,A),t(r,B),t(r,M)},p:P,i(H){x||pl(()=>{x=ml(r,bl,{delay:w[4]*50}),x.start()})},o:P,d(H){H&&a(r)}}}function Cl(w){let r,h;return{c(){r=s("p"),h=l("loading..")},l(f){r=n(f,"P",{});var d=i(r);h=o(d,"loading.."),d.forEach(a)},m(f,d){u(f,r,d),t(r,h)},p:P,i:P,o:P,d(f){f&&a(r)}}}function gl(w){let r,h={ctx:w,current:null,token:null,hasCatch:!1,pending:Cl,then:kl,catch:Pl,value:1};return fl(w[0],h),{c(){r=s("div"),h.block.c()},l(f){r=n(f,"DIV",{});var d=i(r);h.block.l(d),d.forEach(a)},m(f,d){u(f,r,d),h.block.m(r,h.anchor=null),h.mount=()=>r,h.anchor=null},p(f,[d]){w=f,dl(h,w,d)},i(f){Te(h.block)},o:P,d(f){f&&a(r),h.block.d(),h.token=null,h=null}}}async function Ol(){const w="https://data.gov.sg/api/action/datastore_search",h={resource_id:"98856a60-33cd-482a-9dc4-1ed52e562d5d",q:"balance"};let f=new URLSearchParams(h);const v=await(await fetch(`${w}?${f}`)).json();return console.log(v),v.result.records}function Dl(w){return[Ol()]}class Tl extends el{constructor(r){super(),tl(this,r,Dl,gl,al,{})}}function xl(w){let r,h,f,d,v,p,T,I,D,Y,A,F,B,M,x,H,E,K,et,xe,V,tt,He,N,at,ae,lt,ot,Se,z,st,$e,Q,nt,je,q,it,le,rt,ct,Ae,G,ll=`<code class="language-undefined">const promise = new Promise((resolve, reject) =&gt; &#123;
    setTimeout(() =&gt; &#123;
        resolve(123);
    &#125;, 300);
&#125;);
promise
    .then((value_in_promise) =&gt; &#123;
        value_in_promise.json() // this is also an async method that returns Promise!
    &#125;)
    .then((value_as_json) =&gt; &#123;
        console.log(value_as_json)
    &#125;)</code>`,Ie,X,ut,Me,O,ft,oe,dt,ht,se,pt,mt,ne,_t,vt,Ne,y,ie,wt,yt,re,Et,bt,ce,Pt,kt,ue,Ct,gt,fe,Ot,Dt,de,Tt,xt,he,Ht,St,pe,$t,jt,qe,J,ol=`<code class="language-undefined">async function runAsyncCode() &#123;
    let output = await callAsyncApi(); //
    let output_as_json = await output.json();
    console.log(output_as_json)
    return output_as_json
&#125;</code>`,Le,Z,At,Re,k,It,me,Mt,Nt,_e,qt,Lt,ve,Rt,Yt,we,Bt,Gt,Ye,L,Jt,ye,Ut,Wt,Be,C,Ft,Ee,Kt,Vt,be,zt,Qt,Pe,Xt,Zt,ke,ea,ta,Ge,U,sl=`<code class="language-undefined">let data = null;
runAsyncCode()
    .then((inner_value) =&gt; &#123;
        data = inner_value
    &#125;)</code>`,Je,g,aa,Ce,la,oa,ge,sa,na,Oe,ia,ra,De,ca,ua,Ue,ee,fa,We,te,da,Fe,W,nl=`<code class="language-undefined">&#123;#await runAsyncCode()&#125;
    &lt;p&gt;...loading...&lt;p&gt;
&#123;:then inner_value&#125;
    &lt;p&gt;The inner value is &#123;inner_value&#125;&lt;p&gt;
&#123;/await&#125;</code>`,Ke;return d=new Tl({}),{c(){r=s("h1"),h=l(Za),f=m(),_l(d.$$.fragment),v=m(),p=s("h1"),T=l("async"),I=m(),D=s("p"),Y=l("Normal code is "),A=s("em"),F=l("synchronous"),B=l(", i.e. it will run sequentially line by line, waiting for code to finish executing before going to the next code."),M=m(),x=s("p"),H=l("Sometimes code has to wait for non-CPU intensive tasks (e.g. calling API), and we want to process other things whilst waiting for these tasks to finish in the background."),E=m(),K=s("p"),et=l("This is where asynchronous programming comes in to help us run things is parallel."),xe=m(),V=s("h1"),tt=l("async in Javascript"),He=m(),N=s("p"),at=l("Implementations of async programming defers in different programming language, but in Javascript, the most fundamental async type is the "),ae=s("em"),lt=l("Promise"),ot=l("."),Se=m(),z=s("p"),st=l(`A promise short circuits the waiting time by returning a container immediately, allowing the subsequent code to run whilst it wait in the background.
This container wraps the actual value that the async task will eventually return.`),$e=m(),Q=s("p"),nt=l("How do to use the value inside the Promise then?"),je=m(),q=s("p"),it=l("Promises have a "),le=s("code"),rt=l(".then()"),ct=l(` method that takes a function as an argument.
This function will be executed once the value has been successfully fulfilled by the Promise, and the value inside the promise will be passed into this function as an argument.`),Ae=m(),G=s("pre"),Ie=m(),X=s("h1"),ut=l("using async/await"),Me=m(),O=s("p"),ft=l("Chaining a lot of "),oe=s("code"),dt=l(".then()"),ht=l(` closures looks ugly.
Instead, using the `),se=s("code"),pt=l("async"),mt=l(" and "),ne=s("code"),_t=l("await"),vt=l(" syntax helps make it look cleaner, as it lets you write code that is more like normal synchronous code."),Ne=m(),y=s("p"),ie=s("code"),wt=l("async"),yt=l(" keyword is used to define an "),re=s("code"),Et=l("async function"),bt=l(", which will automatically make the function return a "),ce=s("code"),Pt=l("Promise"),kt=l(`.
Within the `),ue=s("code"),Ct=l("async function"),gt=l(", use "),fe=s("code"),Ot=l("await"),Dt=l(" before any async expression (i.e. code that returns Promises) to force the code to wait for that expression to finish and "),de=s("strong"),Tt=l("unwrap"),xt=l(` the value inside the Promise.
`),he=s("code"),Ht=l("await"),St=l(" can only be used within an "),pe=s("code"),$t=l("async"),jt=l(" function."),qe=m(),J=s("pre"),Le=m(),Z=s("h1"),At=l("How to assign value inside promise to a variable?"),Re=m(),k=s("p"),It=l("Notice that "),me=s("code"),Mt=l("async"),Nt=l(` functions implicitly wraps its output in a Promise.
Notice also that you can only use `),_e=s("code"),qt=l("await"),Lt=l(", which unwraps a Promise, "),ve=s("em"),Rt=l("inside"),Yt=m(),we=s("code"),Bt=l("async"),Gt=l(` functions.
How then, do you assign the value inside Promise into a variable?`),Ye=m(),L=s("p"),Jt=l(`You will need to first instantiate a variable, and then assign the Promise\u2019s value once it has been resolved.
To do this, we can do the assignment within the `),ye=s("code"),Ut=l(".then()"),Wt=l(" closure."),Be=m(),C=s("p"),Ft=l("So at the end, "),Ee=s("code"),Kt=l("async"),Vt=l("/"),be=s("code"),zt=l("await"),Qt=l(" is only able to abstract away all the middle "),Pe=s("code"),Xt=l(".then()"),Zt=l(" closures, but ultimately "),ke=s("code"),ea=l(".then()"),ta=l(" is still needed in the final step to assign the value to a variable."),Ge=m(),U=s("pre"),Je=m(),g=s("p"),aa=l("You will need to handle the state of "),Ce=s("code"),la=l("data"),oa=l(" by yourself, and make the DOM show what you want it to show when "),ge=s("code"),sa=l("data"),na=l(" is "),Oe=s("code"),ia=l("null"),ra=l(" and also when "),De=s("code"),ca=l("data"),ua=l(" is the value of resolved promise."),Ue=m(),ee=s("h2"),fa=l("Svelte way"),We=m(),te=s("p"),da=l("Svelte abstracts away this complexity by using its await blocks"),Fe=m(),W=s("pre"),this.h()},l(e){r=n(e,"H1",{});var c=i(r);h=o(c,Za),c.forEach(a),f=_(e),vl(d.$$.fragment,e),v=_(e),p=n(e,"H1",{});var ha=i(p);T=o(ha,"async"),ha.forEach(a),I=_(e),D=n(e,"P",{});var Ve=i(D);Y=o(Ve,"Normal code is "),A=n(Ve,"EM",{});var pa=i(A);F=o(pa,"synchronous"),pa.forEach(a),B=o(Ve,", i.e. it will run sequentially line by line, waiting for code to finish executing before going to the next code."),Ve.forEach(a),M=_(e),x=n(e,"P",{});var ma=i(x);H=o(ma,"Sometimes code has to wait for non-CPU intensive tasks (e.g. calling API), and we want to process other things whilst waiting for these tasks to finish in the background."),ma.forEach(a),E=_(e),K=n(e,"P",{});var _a=i(K);et=o(_a,"This is where asynchronous programming comes in to help us run things is parallel."),_a.forEach(a),xe=_(e),V=n(e,"H1",{});var va=i(V);tt=o(va,"async in Javascript"),va.forEach(a),He=_(e),N=n(e,"P",{});var ze=i(N);at=o(ze,"Implementations of async programming defers in different programming language, but in Javascript, the most fundamental async type is the "),ae=n(ze,"EM",{});var wa=i(ae);lt=o(wa,"Promise"),wa.forEach(a),ot=o(ze,"."),ze.forEach(a),Se=_(e),z=n(e,"P",{});var ya=i(z);st=o(ya,`A promise short circuits the waiting time by returning a container immediately, allowing the subsequent code to run whilst it wait in the background.
This container wraps the actual value that the async task will eventually return.`),ya.forEach(a),$e=_(e),Q=n(e,"P",{});var Ea=i(Q);nt=o(Ea,"How do to use the value inside the Promise then?"),Ea.forEach(a),je=_(e),q=n(e,"P",{});var Qe=i(q);it=o(Qe,"Promises have a "),le=n(Qe,"CODE",{});var ba=i(le);rt=o(ba,".then()"),ba.forEach(a),ct=o(Qe,` method that takes a function as an argument.
This function will be executed once the value has been successfully fulfilled by the Promise, and the value inside the promise will be passed into this function as an argument.`),Qe.forEach(a),Ae=_(e),G=n(e,"PRE",{class:!0});var il=i(G);il.forEach(a),Ie=_(e),X=n(e,"H1",{});var Pa=i(X);ut=o(Pa,"using async/await"),Pa.forEach(a),Me=_(e),O=n(e,"P",{});var R=i(O);ft=o(R,"Chaining a lot of "),oe=n(R,"CODE",{});var ka=i(oe);dt=o(ka,".then()"),ka.forEach(a),ht=o(R,` closures looks ugly.
Instead, using the `),se=n(R,"CODE",{});var Ca=i(se);pt=o(Ca,"async"),Ca.forEach(a),mt=o(R," and "),ne=n(R,"CODE",{});var ga=i(ne);_t=o(ga,"await"),ga.forEach(a),vt=o(R," syntax helps make it look cleaner, as it lets you write code that is more like normal synchronous code."),R.forEach(a),Ne=_(e),y=n(e,"P",{});var b=i(y);ie=n(b,"CODE",{});var Oa=i(ie);wt=o(Oa,"async"),Oa.forEach(a),yt=o(b," keyword is used to define an "),re=n(b,"CODE",{});var Da=i(re);Et=o(Da,"async function"),Da.forEach(a),bt=o(b,", which will automatically make the function return a "),ce=n(b,"CODE",{});var Ta=i(ce);Pt=o(Ta,"Promise"),Ta.forEach(a),kt=o(b,`.
Within the `),ue=n(b,"CODE",{});var xa=i(ue);Ct=o(xa,"async function"),xa.forEach(a),gt=o(b,", use "),fe=n(b,"CODE",{});var Ha=i(fe);Ot=o(Ha,"await"),Ha.forEach(a),Dt=o(b," before any async expression (i.e. code that returns Promises) to force the code to wait for that expression to finish and "),de=n(b,"STRONG",{});var Sa=i(de);Tt=o(Sa,"unwrap"),Sa.forEach(a),xt=o(b,` the value inside the Promise.
`),he=n(b,"CODE",{});var $a=i(he);Ht=o($a,"await"),$a.forEach(a),St=o(b," can only be used within an "),pe=n(b,"CODE",{});var ja=i(pe);$t=o(ja,"async"),ja.forEach(a),jt=o(b," function."),b.forEach(a),qe=_(e),J=n(e,"PRE",{class:!0});var rl=i(J);rl.forEach(a),Le=_(e),Z=n(e,"H1",{});var Aa=i(Z);At=o(Aa,"How to assign value inside promise to a variable?"),Aa.forEach(a),Re=_(e),k=n(e,"P",{});var S=i(k);It=o(S,"Notice that "),me=n(S,"CODE",{});var Ia=i(me);Mt=o(Ia,"async"),Ia.forEach(a),Nt=o(S,` functions implicitly wraps its output in a Promise.
Notice also that you can only use `),_e=n(S,"CODE",{});var Ma=i(_e);qt=o(Ma,"await"),Ma.forEach(a),Lt=o(S,", which unwraps a Promise, "),ve=n(S,"EM",{});var Na=i(ve);Rt=o(Na,"inside"),Na.forEach(a),Yt=_(S),we=n(S,"CODE",{});var qa=i(we);Bt=o(qa,"async"),qa.forEach(a),Gt=o(S,` functions.
How then, do you assign the value inside Promise into a variable?`),S.forEach(a),Ye=_(e),L=n(e,"P",{});var Xe=i(L);Jt=o(Xe,`You will need to first instantiate a variable, and then assign the Promise\u2019s value once it has been resolved.
To do this, we can do the assignment within the `),ye=n(Xe,"CODE",{});var La=i(ye);Ut=o(La,".then()"),La.forEach(a),Wt=o(Xe," closure."),Xe.forEach(a),Be=_(e),C=n(e,"P",{});var $=i(C);Ft=o($,"So at the end, "),Ee=n($,"CODE",{});var Ra=i(Ee);Kt=o(Ra,"async"),Ra.forEach(a),Vt=o($,"/"),be=n($,"CODE",{});var Ya=i(be);zt=o(Ya,"await"),Ya.forEach(a),Qt=o($," is only able to abstract away all the middle "),Pe=n($,"CODE",{});var Ba=i(Pe);Xt=o(Ba,".then()"),Ba.forEach(a),Zt=o($," closures, but ultimately "),ke=n($,"CODE",{});var Ga=i(ke);ea=o(Ga,".then()"),Ga.forEach(a),ta=o($," is still needed in the final step to assign the value to a variable."),$.forEach(a),Ge=_(e),U=n(e,"PRE",{class:!0});var cl=i(U);cl.forEach(a),Je=_(e),g=n(e,"P",{});var j=i(g);aa=o(j,"You will need to handle the state of "),Ce=n(j,"CODE",{});var Ja=i(Ce);la=o(Ja,"data"),Ja.forEach(a),oa=o(j," by yourself, and make the DOM show what you want it to show when "),ge=n(j,"CODE",{});var Ua=i(ge);sa=o(Ua,"data"),Ua.forEach(a),na=o(j," is "),Oe=n(j,"CODE",{});var Wa=i(Oe);ia=o(Wa,"null"),Wa.forEach(a),ra=o(j," and also when "),De=n(j,"CODE",{});var Fa=i(De);ca=o(Fa,"data"),Fa.forEach(a),ua=o(j," is the value of resolved promise."),j.forEach(a),Ue=_(e),ee=n(e,"H2",{});var Ka=i(ee);fa=o(Ka,"Svelte way"),Ka.forEach(a),We=_(e),te=n(e,"P",{});var Va=i(te);da=o(Va,"Svelte abstracts away this complexity by using its await blocks"),Va.forEach(a),Fe=_(e),W=n(e,"PRE",{class:!0});var ul=i(W);ul.forEach(a),this.h()},h(){Ze(G,"class","language-undefined"),Ze(J,"class","language-undefined"),Ze(U,"class","language-undefined"),Ze(W,"class","language-undefined")},m(e,c){u(e,r,c),t(r,h),u(e,f,c),wl(d,e,c),u(e,v,c),u(e,p,c),t(p,T),u(e,I,c),u(e,D,c),t(D,Y),t(D,A),t(A,F),t(D,B),u(e,M,c),u(e,x,c),t(x,H),u(e,E,c),u(e,K,c),t(K,et),u(e,xe,c),u(e,V,c),t(V,tt),u(e,He,c),u(e,N,c),t(N,at),t(N,ae),t(ae,lt),t(N,ot),u(e,Se,c),u(e,z,c),t(z,st),u(e,$e,c),u(e,Q,c),t(Q,nt),u(e,je,c),u(e,q,c),t(q,it),t(q,le),t(le,rt),t(q,ct),u(e,Ae,c),u(e,G,c),G.innerHTML=ll,u(e,Ie,c),u(e,X,c),t(X,ut),u(e,Me,c),u(e,O,c),t(O,ft),t(O,oe),t(oe,dt),t(O,ht),t(O,se),t(se,pt),t(O,mt),t(O,ne),t(ne,_t),t(O,vt),u(e,Ne,c),u(e,y,c),t(y,ie),t(ie,wt),t(y,yt),t(y,re),t(re,Et),t(y,bt),t(y,ce),t(ce,Pt),t(y,kt),t(y,ue),t(ue,Ct),t(y,gt),t(y,fe),t(fe,Ot),t(y,Dt),t(y,de),t(de,Tt),t(y,xt),t(y,he),t(he,Ht),t(y,St),t(y,pe),t(pe,$t),t(y,jt),u(e,qe,c),u(e,J,c),J.innerHTML=ol,u(e,Le,c),u(e,Z,c),t(Z,At),u(e,Re,c),u(e,k,c),t(k,It),t(k,me),t(me,Mt),t(k,Nt),t(k,_e),t(_e,qt),t(k,Lt),t(k,ve),t(ve,Rt),t(k,Yt),t(k,we),t(we,Bt),t(k,Gt),u(e,Ye,c),u(e,L,c),t(L,Jt),t(L,ye),t(ye,Ut),t(L,Wt),u(e,Be,c),u(e,C,c),t(C,Ft),t(C,Ee),t(Ee,Kt),t(C,Vt),t(C,be),t(be,zt),t(C,Qt),t(C,Pe),t(Pe,Xt),t(C,Zt),t(C,ke),t(ke,ea),t(C,ta),u(e,Ge,c),u(e,U,c),U.innerHTML=sl,u(e,Je,c),u(e,g,c),t(g,aa),t(g,Ce),t(Ce,la),t(g,oa),t(g,ge),t(ge,sa),t(g,na),t(g,Oe),t(Oe,ia),t(g,ra),t(g,De),t(De,ca),t(g,ua),u(e,Ue,c),u(e,ee,c),t(ee,fa),u(e,We,c),u(e,te,c),t(te,da),u(e,Fe,c),u(e,W,c),W.innerHTML=nl,Ke=!0},p:P,i(e){Ke||(Te(d.$$.fragment,e),Ke=!0)},o(e){yl(d.$$.fragment,e),Ke=!1},d(e){e&&a(r),e&&a(f),El(d,e),e&&a(v),e&&a(p),e&&a(I),e&&a(D),e&&a(M),e&&a(x),e&&a(E),e&&a(K),e&&a(xe),e&&a(V),e&&a(He),e&&a(N),e&&a(Se),e&&a(z),e&&a($e),e&&a(Q),e&&a(je),e&&a(q),e&&a(Ae),e&&a(G),e&&a(Ie),e&&a(X),e&&a(Me),e&&a(O),e&&a(Ne),e&&a(y),e&&a(qe),e&&a(J),e&&a(Le),e&&a(Z),e&&a(Re),e&&a(k),e&&a(Ye),e&&a(L),e&&a(Be),e&&a(C),e&&a(Ge),e&&a(U),e&&a(Je),e&&a(g),e&&a(Ue),e&&a(ee),e&&a(We),e&&a(te),e&&a(Fe),e&&a(W)}}}const Hl={title:"Govt Fiscal Position",date:"2022-10-13"},{title:Za,date:jl}=Hl;class Al extends el{constructor(r){super(),tl(this,r,null,xl,al,{})}}export{Al as default,Hl as metadata};
