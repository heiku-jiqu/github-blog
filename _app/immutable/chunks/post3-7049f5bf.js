import{S as os,i as ls,s as is,M as ms,k as o,l,m as i,h as a,b as c,N as vs,f as jt,A as P,e as ns,L as _s,q as s,a as h,r as e,c as k,B as n,H as ws,I as ys,v as Es,w as bs,n as an,x as Ps,t as Cs,y as Os}from"./index-4cbca6b4.js";import{f as Ds}from"./index-6d9ae0b7.js";import{f as Ts}from"./GovtBalanceData-809c4fcd.js";function as(v,u,d){const r=v.slice();return r[2]=u[d],r[4]=d,r}function xs(v){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function js(v){let u,d=v[1],r=[];for(let f=0;f<d.length;f+=1)r[f]=ss(as(v,d,f));return{c(){for(let f=0;f<r.length;f+=1)r[f].c();u=ns()},l(f){for(let _=0;_<r.length;_+=1)r[_].l(f);u=ns()},m(f,_){for(let m=0;m<r.length;m+=1)r[m].m(f,_);c(f,u,_)},p(f,_){if(_&1){d=f[1];let m;for(m=0;m<d.length;m+=1){const b=as(f,d,m);r[m]?(r[m].p(b,_),jt(r[m],1)):(r[m]=ss(b),r[m].c(),jt(r[m],1),r[m].m(u.parentNode,u))}for(;m<r.length;m+=1)r[m].d(1);r.length=d.length}},i(f){for(let _=0;_<d.length;_+=1)jt(r[_])},o:P,d(f){_s(r,f),f&&a(u)}}}function ss(v){let u,d,r=v[2].year_of_balance+"",f,_,m=v[2].amount+"",b,Y,I=v[2].actual_revised_estimated+"",J,L,R=v[2].item+"",j,B,$;return{c(){u=o("section"),d=s("Year: "),f=s(r),_=s(" | Balance: "),b=s(m),Y=s(" | Type: "),J=s(I),L=s(` | Item:
				`),j=s(R),B=h()},l(T){u=l(T,"SECTION",{});var E=i(u);d=e(E,"Year: "),f=e(E,r),_=e(E," | Balance: "),b=e(E,m),Y=e(E," | Type: "),J=e(E,I),L=e(E,` | Item:
				`),j=e(E,R),B=k(E),E.forEach(a)},m(T,E){c(T,u,E),n(u,d),n(u,f),n(u,_),n(u,b),n(u,Y),n(u,J),n(u,L),n(u,j),n(u,B)},p:P,i(T){$||ws(()=>{$=ys(u,Ds,{delay:v[4]*50}),$.start()})},o:P,d(T){T&&a(u)}}}function Hs(v){let u,d;return{c(){u=o("p"),d=s("loading..")},l(r){u=l(r,"P",{});var f=i(u);d=e(f,"loading.."),f.forEach(a)},m(r,f){c(r,u,f),n(u,d)},p:P,i:P,o:P,d(r){r&&a(u)}}}function gs(v){let u,d={ctx:v,current:null,token:null,hasCatch:!1,pending:Hs,then:js,catch:xs,value:1};return ms(v[0],d),{c(){u=o("div"),d.block.c()},l(r){u=l(r,"DIV",{});var f=i(u);d.block.l(f),f.forEach(a)},m(r,f){c(r,u,f),d.block.m(u,d.anchor=null),d.mount=()=>u,d.anchor=null},p(r,[f]){v=r,vs(d,v,f)},i(r){jt(d.block)},o:P,d(r){r&&a(u),d.block.d(),d.token=null,d=null}}}function As(v){return[Ts()]}class Is extends os{constructor(u){super(),ls(this,u,As,gs,is,{})}}function $s(v){let u,d,r,f,_,m,b,Y,I,J,L,R,j,B,$,T,E,Ht,F,sn,gt,M,en,st,on,ln,At,K,pn,It,Q,cn,$t,N,un,et,rn,fn,Mt,G,ps=`<code class="language-js"><span class="token keyword">const</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
	<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
		<span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
promise
	<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value_in_promise</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
		value_in_promise<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// this is also an async method that returns Promise!</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
	<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value_as_json</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value_as_json<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`,Nt,X,dn,St,x,hn,ot,kn,mn,lt,vn,_n,it,wn,yn,qt,w,pt,En,bn,ct,Pn,Cn,ut,On,Dn,rt,Tn,xn,ft,jn,Hn,dt,gn,An,ht,In,$n,kt,Mn,Nn,Yt,U,cs=`<code class="language-js"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">runAsyncCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">let</span> output <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">callAsyncApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//</span>
	<span class="token keyword">let</span> output_as_json <span class="token operator">=</span> <span class="token keyword">await</span> output<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>output_as_json<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> output_as_json<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,Jt,Z,Sn,Lt,C,qn,mt,Yn,Jn,vt,Ln,Rn,_t,Bn,Gn,wt,Un,Wn,Rt,S,Vn,yt,zn,Fn,Bt,O,Kn,Et,Qn,Xn,bt,Zn,ta,Pt,na,aa,Ct,sa,ea,Gt,W,us=`<code class="language-js"><span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token function">runAsyncCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">inner_value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
	data <span class="token operator">=</span> inner_value<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`,Ut,D,oa,Ot,la,ia,Dt,pa,ca,Tt,ua,ra,xt,fa,da,Wt,tt,ha,Vt,nt,ka,zt,V,rs=`<code class="language-js"><span class="token punctuation">&#123;</span>#<span class="token keyword">await</span> <span class="token function">runAsyncCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token operator">...</span>loading<span class="token operator">...</span><span class="token operator">&lt;</span>p<span class="token operator">></span>
<span class="token punctuation">&#123;</span><span class="token operator">:</span>then inner_value<span class="token punctuation">&#125;</span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span>The inner value is <span class="token punctuation">&#123;</span>inner_value<span class="token punctuation">&#125;</span><span class="token operator">&lt;</span>p<span class="token operator">></span>
<span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">await</span><span class="token punctuation">&#125;</span></code>`,Ft,at,ma,Kt,z,Qt;return z=new Is({}),{c(){u=o("h1"),d=s(es),r=h(),f=o("h1"),_=s("async"),m=h(),b=o("p"),Y=s("Normal code is "),I=o("em"),J=s("synchronous"),L=s(", i.e. it will run sequentially line by line, waiting for code to finish executing before going to the next code."),R=h(),j=o("p"),B=s("Sometimes code has to wait for non-CPU intensive tasks (e.g. calling API), and we want to process other things whilst waiting for these tasks to finish in the background."),$=h(),T=o("p"),E=s("This is where asynchronous programming comes in to help us run things is parallel."),Ht=h(),F=o("h1"),sn=s("async in Javascript"),gt=h(),M=o("p"),en=s("Implementations of async programming defers in different programming language, but in Javascript, the most fundamental async type is the "),st=o("em"),on=s("Promise"),ln=s("."),At=h(),K=o("p"),pn=s(`A promise short circuits the waiting time by returning a container immediately, allowing the subsequent code to run whilst it wait in the background.
This container wraps the actual value that the async task will eventually return.`),It=h(),Q=o("p"),cn=s("How do to use the value inside the Promise then?"),$t=h(),N=o("p"),un=s("Promises have a "),et=o("code"),rn=s(".then()"),fn=s(` method that takes a function as an argument.
This function will be executed once the value has been successfully fulfilled by the Promise, and the value inside the promise will be passed into this function as an argument.`),Mt=h(),G=o("pre"),Nt=h(),X=o("h1"),dn=s("using async/await"),St=h(),x=o("p"),hn=s("Chaining a lot of "),ot=o("code"),kn=s(".then()"),mn=s(` closures looks ugly.
Instead, using the `),lt=o("code"),vn=s("async"),_n=s(" and "),it=o("code"),wn=s("await"),yn=s(" syntax helps make it look cleaner, as it lets you write code that is more like normal synchronous code."),qt=h(),w=o("p"),pt=o("code"),En=s("async"),bn=s(" keyword is used to define an "),ct=o("code"),Pn=s("async function"),Cn=s(", which will automatically make the function return a "),ut=o("code"),On=s("Promise"),Dn=s(`.
Within the `),rt=o("code"),Tn=s("async function"),xn=s(", use "),ft=o("code"),jn=s("await"),Hn=s(" before any async expression (i.e. code that returns Promises) to force the code to wait for that expression to finish and "),dt=o("strong"),gn=s("unwrap"),An=s(` the value inside the Promise.
`),ht=o("code"),In=s("await"),$n=s(" can only be used within an "),kt=o("code"),Mn=s("async"),Nn=s(" function."),Yt=h(),U=o("pre"),Jt=h(),Z=o("h1"),Sn=s("how to assign value inside promise to a variable?"),Lt=h(),C=o("p"),qn=s("Notice that "),mt=o("code"),Yn=s("async"),Jn=s(` functions implicitly wraps its output in a Promise.
Notice also that you can only use `),vt=o("code"),Ln=s("await"),Rn=s(", which unwraps a Promise, "),_t=o("em"),Bn=s("inside"),Gn=h(),wt=o("code"),Un=s("async"),Wn=s(` functions.
How then, do you assign the value inside Promise into a variable?`),Rt=h(),S=o("p"),Vn=s(`You will need to first instantiate a variable, and then assign the Promise\u2019s value once it has been resolved.
To do this, we can do the assignment within the `),yt=o("code"),zn=s(".then()"),Fn=s(" closure."),Bt=h(),O=o("p"),Kn=s("So at the end, "),Et=o("code"),Qn=s("async"),Xn=s("/"),bt=o("code"),Zn=s("await"),ta=s(" is only able to abstract away all the middle "),Pt=o("code"),na=s(".then()"),aa=s(" closures, but ultimately "),Ct=o("code"),sa=s(".then()"),ea=s(" is still needed in the final step to assign the value to a variable."),Gt=h(),W=o("pre"),Ut=h(),D=o("p"),oa=s("You will need to handle the state of "),Ot=o("code"),la=s("data"),ia=s(" by yourself, and make the DOM show what you want it to show when "),Dt=o("code"),pa=s("data"),ca=s(" is "),Tt=o("code"),ua=s("null"),ra=s(" and also when "),xt=o("code"),fa=s("data"),da=s(" is the value of resolved promise."),Wt=h(),tt=o("h2"),ha=s("svelte way"),Vt=h(),nt=o("p"),ka=s("Svelte abstracts away this complexity by using its await blocks"),zt=h(),V=o("pre"),Ft=h(),at=o("h1"),ma=s("retrieving data from API"),Kt=h(),Es(z.$$.fragment),this.h()},l(t){u=l(t,"H1",{});var p=i(u);d=e(p,es),p.forEach(a),r=k(t),f=l(t,"H1",{});var va=i(f);_=e(va,"async"),va.forEach(a),m=k(t),b=l(t,"P",{});var Xt=i(b);Y=e(Xt,"Normal code is "),I=l(Xt,"EM",{});var _a=i(I);J=e(_a,"synchronous"),_a.forEach(a),L=e(Xt,", i.e. it will run sequentially line by line, waiting for code to finish executing before going to the next code."),Xt.forEach(a),R=k(t),j=l(t,"P",{});var wa=i(j);B=e(wa,"Sometimes code has to wait for non-CPU intensive tasks (e.g. calling API), and we want to process other things whilst waiting for these tasks to finish in the background."),wa.forEach(a),$=k(t),T=l(t,"P",{});var ya=i(T);E=e(ya,"This is where asynchronous programming comes in to help us run things is parallel."),ya.forEach(a),Ht=k(t),F=l(t,"H1",{});var Ea=i(F);sn=e(Ea,"async in Javascript"),Ea.forEach(a),gt=k(t),M=l(t,"P",{});var Zt=i(M);en=e(Zt,"Implementations of async programming defers in different programming language, but in Javascript, the most fundamental async type is the "),st=l(Zt,"EM",{});var ba=i(st);on=e(ba,"Promise"),ba.forEach(a),ln=e(Zt,"."),Zt.forEach(a),At=k(t),K=l(t,"P",{});var Pa=i(K);pn=e(Pa,`A promise short circuits the waiting time by returning a container immediately, allowing the subsequent code to run whilst it wait in the background.
This container wraps the actual value that the async task will eventually return.`),Pa.forEach(a),It=k(t),Q=l(t,"P",{});var Ca=i(Q);cn=e(Ca,"How do to use the value inside the Promise then?"),Ca.forEach(a),$t=k(t),N=l(t,"P",{});var tn=i(N);un=e(tn,"Promises have a "),et=l(tn,"CODE",{});var Oa=i(et);rn=e(Oa,".then()"),Oa.forEach(a),fn=e(tn,` method that takes a function as an argument.
This function will be executed once the value has been successfully fulfilled by the Promise, and the value inside the promise will be passed into this function as an argument.`),tn.forEach(a),Mt=k(t),G=l(t,"PRE",{class:!0});var fs=i(G);fs.forEach(a),Nt=k(t),X=l(t,"H1",{});var Da=i(X);dn=e(Da,"using async/await"),Da.forEach(a),St=k(t),x=l(t,"P",{});var q=i(x);hn=e(q,"Chaining a lot of "),ot=l(q,"CODE",{});var Ta=i(ot);kn=e(Ta,".then()"),Ta.forEach(a),mn=e(q,` closures looks ugly.
Instead, using the `),lt=l(q,"CODE",{});var xa=i(lt);vn=e(xa,"async"),xa.forEach(a),_n=e(q," and "),it=l(q,"CODE",{});var ja=i(it);wn=e(ja,"await"),ja.forEach(a),yn=e(q," syntax helps make it look cleaner, as it lets you write code that is more like normal synchronous code."),q.forEach(a),qt=k(t),w=l(t,"P",{});var y=i(w);pt=l(y,"CODE",{});var Ha=i(pt);En=e(Ha,"async"),Ha.forEach(a),bn=e(y," keyword is used to define an "),ct=l(y,"CODE",{});var ga=i(ct);Pn=e(ga,"async function"),ga.forEach(a),Cn=e(y,", which will automatically make the function return a "),ut=l(y,"CODE",{});var Aa=i(ut);On=e(Aa,"Promise"),Aa.forEach(a),Dn=e(y,`.
Within the `),rt=l(y,"CODE",{});var Ia=i(rt);Tn=e(Ia,"async function"),Ia.forEach(a),xn=e(y,", use "),ft=l(y,"CODE",{});var $a=i(ft);jn=e($a,"await"),$a.forEach(a),Hn=e(y," before any async expression (i.e. code that returns Promises) to force the code to wait for that expression to finish and "),dt=l(y,"STRONG",{});var Ma=i(dt);gn=e(Ma,"unwrap"),Ma.forEach(a),An=e(y,` the value inside the Promise.
`),ht=l(y,"CODE",{});var Na=i(ht);In=e(Na,"await"),Na.forEach(a),$n=e(y," can only be used within an "),kt=l(y,"CODE",{});var Sa=i(kt);Mn=e(Sa,"async"),Sa.forEach(a),Nn=e(y," function."),y.forEach(a),Yt=k(t),U=l(t,"PRE",{class:!0});var ds=i(U);ds.forEach(a),Jt=k(t),Z=l(t,"H1",{});var qa=i(Z);Sn=e(qa,"how to assign value inside promise to a variable?"),qa.forEach(a),Lt=k(t),C=l(t,"P",{});var H=i(C);qn=e(H,"Notice that "),mt=l(H,"CODE",{});var Ya=i(mt);Yn=e(Ya,"async"),Ya.forEach(a),Jn=e(H,` functions implicitly wraps its output in a Promise.
Notice also that you can only use `),vt=l(H,"CODE",{});var Ja=i(vt);Ln=e(Ja,"await"),Ja.forEach(a),Rn=e(H,", which unwraps a Promise, "),_t=l(H,"EM",{});var La=i(_t);Bn=e(La,"inside"),La.forEach(a),Gn=k(H),wt=l(H,"CODE",{});var Ra=i(wt);Un=e(Ra,"async"),Ra.forEach(a),Wn=e(H,` functions.
How then, do you assign the value inside Promise into a variable?`),H.forEach(a),Rt=k(t),S=l(t,"P",{});var nn=i(S);Vn=e(nn,`You will need to first instantiate a variable, and then assign the Promise\u2019s value once it has been resolved.
To do this, we can do the assignment within the `),yt=l(nn,"CODE",{});var Ba=i(yt);zn=e(Ba,".then()"),Ba.forEach(a),Fn=e(nn," closure."),nn.forEach(a),Bt=k(t),O=l(t,"P",{});var g=i(O);Kn=e(g,"So at the end, "),Et=l(g,"CODE",{});var Ga=i(Et);Qn=e(Ga,"async"),Ga.forEach(a),Xn=e(g,"/"),bt=l(g,"CODE",{});var Ua=i(bt);Zn=e(Ua,"await"),Ua.forEach(a),ta=e(g," is only able to abstract away all the middle "),Pt=l(g,"CODE",{});var Wa=i(Pt);na=e(Wa,".then()"),Wa.forEach(a),aa=e(g," closures, but ultimately "),Ct=l(g,"CODE",{});var Va=i(Ct);sa=e(Va,".then()"),Va.forEach(a),ea=e(g," is still needed in the final step to assign the value to a variable."),g.forEach(a),Gt=k(t),W=l(t,"PRE",{class:!0});var hs=i(W);hs.forEach(a),Ut=k(t),D=l(t,"P",{});var A=i(D);oa=e(A,"You will need to handle the state of "),Ot=l(A,"CODE",{});var za=i(Ot);la=e(za,"data"),za.forEach(a),ia=e(A," by yourself, and make the DOM show what you want it to show when "),Dt=l(A,"CODE",{});var Fa=i(Dt);pa=e(Fa,"data"),Fa.forEach(a),ca=e(A," is "),Tt=l(A,"CODE",{});var Ka=i(Tt);ua=e(Ka,"null"),Ka.forEach(a),ra=e(A," and also when "),xt=l(A,"CODE",{});var Qa=i(xt);fa=e(Qa,"data"),Qa.forEach(a),da=e(A," is the value of resolved promise."),A.forEach(a),Wt=k(t),tt=l(t,"H2",{});var Xa=i(tt);ha=e(Xa,"svelte way"),Xa.forEach(a),Vt=k(t),nt=l(t,"P",{});var Za=i(nt);ka=e(Za,"Svelte abstracts away this complexity by using its await blocks"),Za.forEach(a),zt=k(t),V=l(t,"PRE",{class:!0});var ks=i(V);ks.forEach(a),Ft=k(t),at=l(t,"H1",{});var ts=i(at);ma=e(ts,"retrieving data from API"),ts.forEach(a),Kt=k(t),bs(z.$$.fragment,t),this.h()},h(){an(G,"class","language-js"),an(U,"class","language-js"),an(W,"class","language-js"),an(V,"class","language-js")},m(t,p){c(t,u,p),n(u,d),c(t,r,p),c(t,f,p),n(f,_),c(t,m,p),c(t,b,p),n(b,Y),n(b,I),n(I,J),n(b,L),c(t,R,p),c(t,j,p),n(j,B),c(t,$,p),c(t,T,p),n(T,E),c(t,Ht,p),c(t,F,p),n(F,sn),c(t,gt,p),c(t,M,p),n(M,en),n(M,st),n(st,on),n(M,ln),c(t,At,p),c(t,K,p),n(K,pn),c(t,It,p),c(t,Q,p),n(Q,cn),c(t,$t,p),c(t,N,p),n(N,un),n(N,et),n(et,rn),n(N,fn),c(t,Mt,p),c(t,G,p),G.innerHTML=ps,c(t,Nt,p),c(t,X,p),n(X,dn),c(t,St,p),c(t,x,p),n(x,hn),n(x,ot),n(ot,kn),n(x,mn),n(x,lt),n(lt,vn),n(x,_n),n(x,it),n(it,wn),n(x,yn),c(t,qt,p),c(t,w,p),n(w,pt),n(pt,En),n(w,bn),n(w,ct),n(ct,Pn),n(w,Cn),n(w,ut),n(ut,On),n(w,Dn),n(w,rt),n(rt,Tn),n(w,xn),n(w,ft),n(ft,jn),n(w,Hn),n(w,dt),n(dt,gn),n(w,An),n(w,ht),n(ht,In),n(w,$n),n(w,kt),n(kt,Mn),n(w,Nn),c(t,Yt,p),c(t,U,p),U.innerHTML=cs,c(t,Jt,p),c(t,Z,p),n(Z,Sn),c(t,Lt,p),c(t,C,p),n(C,qn),n(C,mt),n(mt,Yn),n(C,Jn),n(C,vt),n(vt,Ln),n(C,Rn),n(C,_t),n(_t,Bn),n(C,Gn),n(C,wt),n(wt,Un),n(C,Wn),c(t,Rt,p),c(t,S,p),n(S,Vn),n(S,yt),n(yt,zn),n(S,Fn),c(t,Bt,p),c(t,O,p),n(O,Kn),n(O,Et),n(Et,Qn),n(O,Xn),n(O,bt),n(bt,Zn),n(O,ta),n(O,Pt),n(Pt,na),n(O,aa),n(O,Ct),n(Ct,sa),n(O,ea),c(t,Gt,p),c(t,W,p),W.innerHTML=us,c(t,Ut,p),c(t,D,p),n(D,oa),n(D,Ot),n(Ot,la),n(D,ia),n(D,Dt),n(Dt,pa),n(D,ca),n(D,Tt),n(Tt,ua),n(D,ra),n(D,xt),n(xt,fa),n(D,da),c(t,Wt,p),c(t,tt,p),n(tt,ha),c(t,Vt,p),c(t,nt,p),n(nt,ka),c(t,zt,p),c(t,V,p),V.innerHTML=rs,c(t,Ft,p),c(t,at,p),n(at,ma),c(t,Kt,p),Ps(z,t,p),Qt=!0},p:P,i(t){Qt||(jt(z.$$.fragment,t),Qt=!0)},o(t){Cs(z.$$.fragment,t),Qt=!1},d(t){t&&a(u),t&&a(r),t&&a(f),t&&a(m),t&&a(b),t&&a(R),t&&a(j),t&&a($),t&&a(T),t&&a(Ht),t&&a(F),t&&a(gt),t&&a(M),t&&a(At),t&&a(K),t&&a(It),t&&a(Q),t&&a($t),t&&a(N),t&&a(Mt),t&&a(G),t&&a(Nt),t&&a(X),t&&a(St),t&&a(x),t&&a(qt),t&&a(w),t&&a(Yt),t&&a(U),t&&a(Jt),t&&a(Z),t&&a(Lt),t&&a(C),t&&a(Rt),t&&a(S),t&&a(Bt),t&&a(O),t&&a(Gt),t&&a(W),t&&a(Ut),t&&a(D),t&&a(Wt),t&&a(tt),t&&a(Vt),t&&a(nt),t&&a(zt),t&&a(V),t&&a(Ft),t&&a(at),t&&a(Kt),Os(z,t)}}}const Ms={title:"Javascript Async",date:"2022-10-13"},{title:es,date:Ys}=Ms;class Js extends os{constructor(u){super(),ls(this,u,null,$s,is,{})}}export{Js as default,Ms as metadata};
