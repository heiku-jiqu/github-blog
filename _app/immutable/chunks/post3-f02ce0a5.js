import{S as ol,i as sl,s as nl,L as ml,k as s,l as n,m as i,h as a,b as c,M as _l,f as xe,A as k,e as el,K as vl,q as l,a as p,r as o,c as m,B as t,G as wl,H as yl,v as El,w as bl,n as at,x as Pl,t as kl,y as Cl}from"./index-67ec3149.js";import{f as Ol}from"./index-c904887d.js";function tl(v,u,h){const f=v.slice();return f[2]=u[h],f[4]=h,f}function gl(v){return{c:k,l:k,m:k,p:k,i:k,o:k,d:k}}function Dl(v){let u,h=v[1],f=[];for(let d=0;d<h.length;d+=1)f[d]=al(tl(v,h,d));return{c(){for(let d=0;d<f.length;d+=1)f[d].c();u=el()},l(d){for(let w=0;w<f.length;w+=1)f[w].l(d);u=el()},m(d,w){for(let _=0;_<f.length;_+=1)f[_].m(d,w);c(d,u,w)},p(d,w){if(w&1){h=d[1];let _;for(_=0;_<h.length;_+=1){const P=tl(d,h,_);f[_]?(f[_].p(P,w),xe(f[_],1)):(f[_]=al(P),f[_].c(),xe(f[_],1),f[_].m(u.parentNode,u))}for(;_<f.length;_+=1)f[_].d(1);f.length=h.length}},i(d){for(let w=0;w<h.length;w+=1)xe(f[w])},o:k,d(d){vl(f,d),d&&a(u)}}}function al(v){let u,h,f=v[2].year_of_balance+"",d,w,_=v[2].amount+"",P,L,j=v[2].actual_revised_estimated+"",R,Y,J=v[2].item+"",x,B,I;return{c(){u=s("section"),h=l("Year: "),d=l(f),w=l(" | Balance: "),P=l(_),L=l(" | Type: "),R=l(j),Y=l(` | Item:
				`),x=l(J),B=p()},l(D){u=n(D,"SECTION",{});var b=i(u);h=o(b,"Year: "),d=o(b,f),w=o(b," | Balance: "),P=o(b,_),L=o(b," | Type: "),R=o(b,j),Y=o(b,` | Item:
				`),x=o(b,J),B=m(b),b.forEach(a)},m(D,b){c(D,u,b),t(u,h),t(u,d),t(u,w),t(u,P),t(u,L),t(u,R),t(u,Y),t(u,x),t(u,B)},p:k,i(D){I||wl(()=>{I=yl(u,Ol,{delay:v[4]*50}),I.start()})},o:k,d(D){D&&a(u)}}}function Tl(v){let u,h;return{c(){u=s("p"),h=l("loading..")},l(f){u=n(f,"P",{});var d=i(u);h=o(d,"loading.."),d.forEach(a)},m(f,d){c(f,u,d),t(u,h)},p:k,i:k,o:k,d(f){f&&a(u)}}}function xl(v){let u,h={ctx:v,current:null,token:null,hasCatch:!1,pending:Tl,then:Dl,catch:gl,value:1};return ml(v[0],h),{c(){u=s("div"),h.block.c()},l(f){u=n(f,"DIV",{});var d=i(u);h.block.l(d),d.forEach(a)},m(f,d){c(f,u,d),h.block.m(u,h.anchor=null),h.mount=()=>u,h.anchor=null},p(f,[d]){v=f,_l(h,v,d)},i(f){xe(h.block)},o:k,d(f){f&&a(u),h.block.d(),h.token=null,h=null}}}async function Hl(){const v="https://data.gov.sg/api/action/datastore_search",h={resource_id:"98856a60-33cd-482a-9dc4-1ed52e562d5d",q:"balance"};let f=new URLSearchParams(h);return(await(await fetch(`${v}?${f}`)).json()).result.records}function Al(v){return[Hl()]}class $l extends ol{constructor(u){super(),sl(this,u,Al,xl,nl,{})}}function jl(v){let u,h,f,d,w,_,P,L,j,R,Y,J,x,B,I,D,b,He,z,lt,Ae,S,ot,le,st,nt,$e,F,it,je,Q,rt,Ie,M,ct,oe,ut,ft,Se,G,il=`<code class="language-undefined">const promise = new Promise((resolve, reject) =&gt; &#123;
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
    &#125;)</code>`,Me,X,dt,Ne,T,ht,se,pt,mt,ne,_t,vt,ie,wt,yt,qe,y,re,Et,bt,ce,Pt,kt,ue,Ct,Ot,fe,gt,Dt,de,Tt,xt,he,Ht,At,pe,$t,jt,me,It,St,Le,U,rl=`<code class="language-undefined">async function runAsyncCode() &#123;
    let output = await callAsyncApi(); //
    let output_as_json = await output.json();
    console.log(output_as_json)
    return output_as_json
&#125;</code>`,Re,Z,Mt,Ye,C,Nt,_e,qt,Lt,ve,Rt,Yt,we,Jt,Bt,ye,Gt,Ut,Je,N,Wt,Ee,Kt,Vt,Be,O,zt,be,Ft,Qt,Pe,Xt,Zt,ke,ea,ta,Ce,aa,la,Ge,W,cl=`<code class="language-undefined">let data = null;
runAsyncCode()
    .then((inner_value) =&gt; &#123;
        data = inner_value
    &#125;)</code>`,Ue,g,oa,Oe,sa,na,ge,ia,ra,De,ca,ua,Te,fa,da,We,ee,ha,Ke,te,pa,Ve,K,ul=`<code class="language-undefined">&#123;#await runAsyncCode()&#125;
    &lt;p&gt;...loading...&lt;p&gt;
&#123;:then inner_value&#125;
    &lt;p&gt;The inner value is &#123;inner_value&#125;&lt;p&gt;
&#123;/await&#125;</code>`,ze,ae,ma,Fe,V,Qe;return V=new $l({}),{c(){u=s("h1"),h=l(ll),f=p(),d=s("h1"),w=l("async"),_=p(),P=s("p"),L=l("Normal code is "),j=s("em"),R=l("synchronous"),Y=l(", i.e. it will run sequentially line by line, waiting for code to finish executing before going to the next code."),J=p(),x=s("p"),B=l("Sometimes code has to wait for non-CPU intensive tasks (e.g. calling API), and we want to process other things whilst waiting for these tasks to finish in the background."),I=p(),D=s("p"),b=l("This is where asynchronous programming comes in to help us run things is parallel."),He=p(),z=s("h1"),lt=l("async in Javascript"),Ae=p(),S=s("p"),ot=l("Implementations of async programming defers in different programming language, but in Javascript, the most fundamental async type is the "),le=s("em"),st=l("Promise"),nt=l("."),$e=p(),F=s("p"),it=l(`A promise short circuits the waiting time by returning a container immediately, allowing the subsequent code to run whilst it wait in the background.
This container wraps the actual value that the async task will eventually return.`),je=p(),Q=s("p"),rt=l("How do to use the value inside the Promise then?"),Ie=p(),M=s("p"),ct=l("Promises have a "),oe=s("code"),ut=l(".then()"),ft=l(` method that takes a function as an argument.
This function will be executed once the value has been successfully fulfilled by the Promise, and the value inside the promise will be passed into this function as an argument.`),Se=p(),G=s("pre"),Me=p(),X=s("h1"),dt=l("using async/await"),Ne=p(),T=s("p"),ht=l("Chaining a lot of "),se=s("code"),pt=l(".then()"),mt=l(` closures looks ugly.
Instead, using the `),ne=s("code"),_t=l("async"),vt=l(" and "),ie=s("code"),wt=l("await"),yt=l(" syntax helps make it look cleaner, as it lets you write code that is more like normal synchronous code."),qe=p(),y=s("p"),re=s("code"),Et=l("async"),bt=l(" keyword is used to define an "),ce=s("code"),Pt=l("async function"),kt=l(", which will automatically make the function return a "),ue=s("code"),Ct=l("Promise"),Ot=l(`.
Within the `),fe=s("code"),gt=l("async function"),Dt=l(", use "),de=s("code"),Tt=l("await"),xt=l(" before any async expression (i.e. code that returns Promises) to force the code to wait for that expression to finish and "),he=s("strong"),Ht=l("unwrap"),At=l(` the value inside the Promise.
`),pe=s("code"),$t=l("await"),jt=l(" can only be used within an "),me=s("code"),It=l("async"),St=l(" function."),Le=p(),U=s("pre"),Re=p(),Z=s("h1"),Mt=l("how to assign value inside promise to a variable?"),Ye=p(),C=s("p"),Nt=l("Notice that "),_e=s("code"),qt=l("async"),Lt=l(` functions implicitly wraps its output in a Promise.
Notice also that you can only use `),ve=s("code"),Rt=l("await"),Yt=l(", which unwraps a Promise, "),we=s("em"),Jt=l("inside"),Bt=p(),ye=s("code"),Gt=l("async"),Ut=l(` functions.
How then, do you assign the value inside Promise into a variable?`),Je=p(),N=s("p"),Wt=l(`You will need to first instantiate a variable, and then assign the Promise\u2019s value once it has been resolved.
To do this, we can do the assignment within the `),Ee=s("code"),Kt=l(".then()"),Vt=l(" closure."),Be=p(),O=s("p"),zt=l("So at the end, "),be=s("code"),Ft=l("async"),Qt=l("/"),Pe=s("code"),Xt=l("await"),Zt=l(" is only able to abstract away all the middle "),ke=s("code"),ea=l(".then()"),ta=l(" closures, but ultimately "),Ce=s("code"),aa=l(".then()"),la=l(" is still needed in the final step to assign the value to a variable."),Ge=p(),W=s("pre"),Ue=p(),g=s("p"),oa=l("You will need to handle the state of "),Oe=s("code"),sa=l("data"),na=l(" by yourself, and make the DOM show what you want it to show when "),ge=s("code"),ia=l("data"),ra=l(" is "),De=s("code"),ca=l("null"),ua=l(" and also when "),Te=s("code"),fa=l("data"),da=l(" is the value of resolved promise."),We=p(),ee=s("h2"),ha=l("svelte way"),Ke=p(),te=s("p"),pa=l("Svelte abstracts away this complexity by using its await blocks"),Ve=p(),K=s("pre"),ze=p(),ae=s("h1"),ma=l("retrieving data from API"),Fe=p(),El(V.$$.fragment),this.h()},l(e){u=n(e,"H1",{});var r=i(u);h=o(r,ll),r.forEach(a),f=m(e),d=n(e,"H1",{});var _a=i(d);w=o(_a,"async"),_a.forEach(a),_=m(e),P=n(e,"P",{});var Xe=i(P);L=o(Xe,"Normal code is "),j=n(Xe,"EM",{});var va=i(j);R=o(va,"synchronous"),va.forEach(a),Y=o(Xe,", i.e. it will run sequentially line by line, waiting for code to finish executing before going to the next code."),Xe.forEach(a),J=m(e),x=n(e,"P",{});var wa=i(x);B=o(wa,"Sometimes code has to wait for non-CPU intensive tasks (e.g. calling API), and we want to process other things whilst waiting for these tasks to finish in the background."),wa.forEach(a),I=m(e),D=n(e,"P",{});var ya=i(D);b=o(ya,"This is where asynchronous programming comes in to help us run things is parallel."),ya.forEach(a),He=m(e),z=n(e,"H1",{});var Ea=i(z);lt=o(Ea,"async in Javascript"),Ea.forEach(a),Ae=m(e),S=n(e,"P",{});var Ze=i(S);ot=o(Ze,"Implementations of async programming defers in different programming language, but in Javascript, the most fundamental async type is the "),le=n(Ze,"EM",{});var ba=i(le);st=o(ba,"Promise"),ba.forEach(a),nt=o(Ze,"."),Ze.forEach(a),$e=m(e),F=n(e,"P",{});var Pa=i(F);it=o(Pa,`A promise short circuits the waiting time by returning a container immediately, allowing the subsequent code to run whilst it wait in the background.
This container wraps the actual value that the async task will eventually return.`),Pa.forEach(a),je=m(e),Q=n(e,"P",{});var ka=i(Q);rt=o(ka,"How do to use the value inside the Promise then?"),ka.forEach(a),Ie=m(e),M=n(e,"P",{});var et=i(M);ct=o(et,"Promises have a "),oe=n(et,"CODE",{});var Ca=i(oe);ut=o(Ca,".then()"),Ca.forEach(a),ft=o(et,` method that takes a function as an argument.
This function will be executed once the value has been successfully fulfilled by the Promise, and the value inside the promise will be passed into this function as an argument.`),et.forEach(a),Se=m(e),G=n(e,"PRE",{class:!0});var fl=i(G);fl.forEach(a),Me=m(e),X=n(e,"H1",{});var Oa=i(X);dt=o(Oa,"using async/await"),Oa.forEach(a),Ne=m(e),T=n(e,"P",{});var q=i(T);ht=o(q,"Chaining a lot of "),se=n(q,"CODE",{});var ga=i(se);pt=o(ga,".then()"),ga.forEach(a),mt=o(q,` closures looks ugly.
Instead, using the `),ne=n(q,"CODE",{});var Da=i(ne);_t=o(Da,"async"),Da.forEach(a),vt=o(q," and "),ie=n(q,"CODE",{});var Ta=i(ie);wt=o(Ta,"await"),Ta.forEach(a),yt=o(q," syntax helps make it look cleaner, as it lets you write code that is more like normal synchronous code."),q.forEach(a),qe=m(e),y=n(e,"P",{});var E=i(y);re=n(E,"CODE",{});var xa=i(re);Et=o(xa,"async"),xa.forEach(a),bt=o(E," keyword is used to define an "),ce=n(E,"CODE",{});var Ha=i(ce);Pt=o(Ha,"async function"),Ha.forEach(a),kt=o(E,", which will automatically make the function return a "),ue=n(E,"CODE",{});var Aa=i(ue);Ct=o(Aa,"Promise"),Aa.forEach(a),Ot=o(E,`.
Within the `),fe=n(E,"CODE",{});var $a=i(fe);gt=o($a,"async function"),$a.forEach(a),Dt=o(E,", use "),de=n(E,"CODE",{});var ja=i(de);Tt=o(ja,"await"),ja.forEach(a),xt=o(E," before any async expression (i.e. code that returns Promises) to force the code to wait for that expression to finish and "),he=n(E,"STRONG",{});var Ia=i(he);Ht=o(Ia,"unwrap"),Ia.forEach(a),At=o(E,` the value inside the Promise.
`),pe=n(E,"CODE",{});var Sa=i(pe);$t=o(Sa,"await"),Sa.forEach(a),jt=o(E," can only be used within an "),me=n(E,"CODE",{});var Ma=i(me);It=o(Ma,"async"),Ma.forEach(a),St=o(E," function."),E.forEach(a),Le=m(e),U=n(e,"PRE",{class:!0});var dl=i(U);dl.forEach(a),Re=m(e),Z=n(e,"H1",{});var Na=i(Z);Mt=o(Na,"how to assign value inside promise to a variable?"),Na.forEach(a),Ye=m(e),C=n(e,"P",{});var H=i(C);Nt=o(H,"Notice that "),_e=n(H,"CODE",{});var qa=i(_e);qt=o(qa,"async"),qa.forEach(a),Lt=o(H,` functions implicitly wraps its output in a Promise.
Notice also that you can only use `),ve=n(H,"CODE",{});var La=i(ve);Rt=o(La,"await"),La.forEach(a),Yt=o(H,", which unwraps a Promise, "),we=n(H,"EM",{});var Ra=i(we);Jt=o(Ra,"inside"),Ra.forEach(a),Bt=m(H),ye=n(H,"CODE",{});var Ya=i(ye);Gt=o(Ya,"async"),Ya.forEach(a),Ut=o(H,` functions.
How then, do you assign the value inside Promise into a variable?`),H.forEach(a),Je=m(e),N=n(e,"P",{});var tt=i(N);Wt=o(tt,`You will need to first instantiate a variable, and then assign the Promise\u2019s value once it has been resolved.
To do this, we can do the assignment within the `),Ee=n(tt,"CODE",{});var Ja=i(Ee);Kt=o(Ja,".then()"),Ja.forEach(a),Vt=o(tt," closure."),tt.forEach(a),Be=m(e),O=n(e,"P",{});var A=i(O);zt=o(A,"So at the end, "),be=n(A,"CODE",{});var Ba=i(be);Ft=o(Ba,"async"),Ba.forEach(a),Qt=o(A,"/"),Pe=n(A,"CODE",{});var Ga=i(Pe);Xt=o(Ga,"await"),Ga.forEach(a),Zt=o(A," is only able to abstract away all the middle "),ke=n(A,"CODE",{});var Ua=i(ke);ea=o(Ua,".then()"),Ua.forEach(a),ta=o(A," closures, but ultimately "),Ce=n(A,"CODE",{});var Wa=i(Ce);aa=o(Wa,".then()"),Wa.forEach(a),la=o(A," is still needed in the final step to assign the value to a variable."),A.forEach(a),Ge=m(e),W=n(e,"PRE",{class:!0});var hl=i(W);hl.forEach(a),Ue=m(e),g=n(e,"P",{});var $=i(g);oa=o($,"You will need to handle the state of "),Oe=n($,"CODE",{});var Ka=i(Oe);sa=o(Ka,"data"),Ka.forEach(a),na=o($," by yourself, and make the DOM show what you want it to show when "),ge=n($,"CODE",{});var Va=i(ge);ia=o(Va,"data"),Va.forEach(a),ra=o($," is "),De=n($,"CODE",{});var za=i(De);ca=o(za,"null"),za.forEach(a),ua=o($," and also when "),Te=n($,"CODE",{});var Fa=i(Te);fa=o(Fa,"data"),Fa.forEach(a),da=o($," is the value of resolved promise."),$.forEach(a),We=m(e),ee=n(e,"H2",{});var Qa=i(ee);ha=o(Qa,"svelte way"),Qa.forEach(a),Ke=m(e),te=n(e,"P",{});var Xa=i(te);pa=o(Xa,"Svelte abstracts away this complexity by using its await blocks"),Xa.forEach(a),Ve=m(e),K=n(e,"PRE",{class:!0});var pl=i(K);pl.forEach(a),ze=m(e),ae=n(e,"H1",{});var Za=i(ae);ma=o(Za,"retrieving data from API"),Za.forEach(a),Fe=m(e),bl(V.$$.fragment,e),this.h()},h(){at(G,"class","language-undefined"),at(U,"class","language-undefined"),at(W,"class","language-undefined"),at(K,"class","language-undefined")},m(e,r){c(e,u,r),t(u,h),c(e,f,r),c(e,d,r),t(d,w),c(e,_,r),c(e,P,r),t(P,L),t(P,j),t(j,R),t(P,Y),c(e,J,r),c(e,x,r),t(x,B),c(e,I,r),c(e,D,r),t(D,b),c(e,He,r),c(e,z,r),t(z,lt),c(e,Ae,r),c(e,S,r),t(S,ot),t(S,le),t(le,st),t(S,nt),c(e,$e,r),c(e,F,r),t(F,it),c(e,je,r),c(e,Q,r),t(Q,rt),c(e,Ie,r),c(e,M,r),t(M,ct),t(M,oe),t(oe,ut),t(M,ft),c(e,Se,r),c(e,G,r),G.innerHTML=il,c(e,Me,r),c(e,X,r),t(X,dt),c(e,Ne,r),c(e,T,r),t(T,ht),t(T,se),t(se,pt),t(T,mt),t(T,ne),t(ne,_t),t(T,vt),t(T,ie),t(ie,wt),t(T,yt),c(e,qe,r),c(e,y,r),t(y,re),t(re,Et),t(y,bt),t(y,ce),t(ce,Pt),t(y,kt),t(y,ue),t(ue,Ct),t(y,Ot),t(y,fe),t(fe,gt),t(y,Dt),t(y,de),t(de,Tt),t(y,xt),t(y,he),t(he,Ht),t(y,At),t(y,pe),t(pe,$t),t(y,jt),t(y,me),t(me,It),t(y,St),c(e,Le,r),c(e,U,r),U.innerHTML=rl,c(e,Re,r),c(e,Z,r),t(Z,Mt),c(e,Ye,r),c(e,C,r),t(C,Nt),t(C,_e),t(_e,qt),t(C,Lt),t(C,ve),t(ve,Rt),t(C,Yt),t(C,we),t(we,Jt),t(C,Bt),t(C,ye),t(ye,Gt),t(C,Ut),c(e,Je,r),c(e,N,r),t(N,Wt),t(N,Ee),t(Ee,Kt),t(N,Vt),c(e,Be,r),c(e,O,r),t(O,zt),t(O,be),t(be,Ft),t(O,Qt),t(O,Pe),t(Pe,Xt),t(O,Zt),t(O,ke),t(ke,ea),t(O,ta),t(O,Ce),t(Ce,aa),t(O,la),c(e,Ge,r),c(e,W,r),W.innerHTML=cl,c(e,Ue,r),c(e,g,r),t(g,oa),t(g,Oe),t(Oe,sa),t(g,na),t(g,ge),t(ge,ia),t(g,ra),t(g,De),t(De,ca),t(g,ua),t(g,Te),t(Te,fa),t(g,da),c(e,We,r),c(e,ee,r),t(ee,ha),c(e,Ke,r),c(e,te,r),t(te,pa),c(e,Ve,r),c(e,K,r),K.innerHTML=ul,c(e,ze,r),c(e,ae,r),t(ae,ma),c(e,Fe,r),Pl(V,e,r),Qe=!0},p:k,i(e){Qe||(xe(V.$$.fragment,e),Qe=!0)},o(e){kl(V.$$.fragment,e),Qe=!1},d(e){e&&a(u),e&&a(f),e&&a(d),e&&a(_),e&&a(P),e&&a(J),e&&a(x),e&&a(I),e&&a(D),e&&a(He),e&&a(z),e&&a(Ae),e&&a(S),e&&a($e),e&&a(F),e&&a(je),e&&a(Q),e&&a(Ie),e&&a(M),e&&a(Se),e&&a(G),e&&a(Me),e&&a(X),e&&a(Ne),e&&a(T),e&&a(qe),e&&a(y),e&&a(Le),e&&a(U),e&&a(Re),e&&a(Z),e&&a(Ye),e&&a(C),e&&a(Je),e&&a(N),e&&a(Be),e&&a(O),e&&a(Ge),e&&a(W),e&&a(Ue),e&&a(g),e&&a(We),e&&a(ee),e&&a(Ke),e&&a(te),e&&a(Ve),e&&a(K),e&&a(ze),e&&a(ae),e&&a(Fe),Cl(V,e)}}}const Il={title:"Javascript Async",date:"2022-10-13"},{title:ll,date:Nl}=Il;class ql extends ol{constructor(u){super(),sl(this,u,null,jl,nl,{})}}export{ql as default,Il as metadata};