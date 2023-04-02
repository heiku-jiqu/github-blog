import{S as de,i as ke,s as ye,k as i,q as a,a as f,l as p,m as r,r as n,h as e,c as h,n as Lt,b as l,B as s,A as Nt}from"./index-4cbca6b4.js";function me(ie){let m,nt,U,O,ot,F,c,lt,C,it,pt,H,rt,ct,g,ut,ft,A,ht,dt,Y,P,kt,G,w,yt,q,mt,wt,z,I,bt,J,b,_t,M,vt,Et,K,B,Ot,Q,_,pe=`<code class="language-py"><span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">'path/to/file'</span><span class="token punctuation">,</span> <span class="token string">'wb'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
	df<span class="token punctuation">.</span>to_csv<span class="token punctuation">(</span>f<span class="token punctuation">)</span></code>`,V,T,Pt,X,v,re=`<code class="language-py"><span class="token keyword">with</span> io<span class="token punctuation">.</span>BytesIO<span class="token punctuation">(</span>mode<span class="token operator">=</span><span class="token string">'w'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
	df<span class="token punctuation">.</span>to_csv<span class="token punctuation">(</span>f<span class="token punctuation">)</span></code>`,Z,j,It,$,d,Bt,R,Tt,jt,S,Dt,Ct,tt,E,ce=`<code class="language-py">f <span class="token operator">=</span> BytesIO<span class="token punctuation">(</span>mode<span class="token operator">=</span><span class="token string">'w'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
f<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">b"hello"</span><span class="token punctuation">)</span>
f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># returns empty string!</span>
f<span class="token punctuation">.</span>seek<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># returns 'hello'</span></code>`,et,u,Ht,W,gt,At,x,qt,Mt,L,Rt,St,N,Wt,xt;return{c(){m=i("h1"),nt=a(le),U=f(),O=i("h1"),ot=a("tl;dr"),F=f(),c=i("p"),lt=a("Use "),C=i("code"),it=a("BytesIO()"),pt=a(` file-like object and write bytes to this object.
When appending this data in `),H=i("code"),rt=a("requests"),ct=a(" library, remember to \u201Creset\u201D the cursor position of the object using "),g=i("code"),ut=a("file.seek(0)"),ft=a(" so that "),A=i("code"),ht=a("file.read()"),dt=a(" will return the written bytes."),Y=f(),P=i("h1"),kt=a("Background"),G=f(),w=i("p"),yt=a("When creating data pipelines, at the end you will usually want to write the processed data into a sink. Normally, the sink will be a file system, and supplying a path-like string to the API will suffice (e.g. "),q=i("code"),mt=a("pandas.DataFrame.to_csv('/path/to/file.csv')"),wt=a(`).
However, when you instead want to send this data through a HTTP POST method, it doesn\u2019t make sense to write the data to file system, then read back the data from file system and attach the data into your request.`),z=f(),I=i("h1"),bt=a("Solution"),J=f(),b=i("p"),_t=a("Luckily a simple solution is to use Python\u2019s built in "),M=i("code"),vt=a("BytesIO"),Et=a(" object, which is a file-like object that lets you write to in-memory buffer (aka RAM). You can pass in this file-like object to most API\u2019s writing to file system methods."),K=f(),B=i("p"),Ot=a("Usually, writing to file system goes something like this:"),Q=f(),_=i("pre"),V=f(),T=i("p"),Pt=a("To write to to an in-memory buffer (aka your RAM), change to this:"),X=f(),v=i("pre"),Z=f(),j=i("h2"),It=a("Note on reading after writing to BytesIO"),$=f(),d=i("p"),Bt=a("When writing to "),R=i("code"),Tt=a("BytesIO"),jt=a(", there is an underlying cursor that gets shifted to the right for every byte written. This cursor is "),S=i("strong"),Dt=a("not resetted"),Ct=a(" when you try to read from the object."),tt=f(),E=i("pre"),et=f(),u=i("p"),Ht=a("Therefore, when attaching your "),W=i("code"),gt=a("BytesIO"),At=a(" buffer to the "),x=i("code"),qt=a("data"),Mt=a(" param of "),L=i("code"),Rt=a("requests.post()"),St=a(", remember to "),N=i("code"),Wt=a("f.seek(0)"),xt=a(" to reset the cursor position to the beginning."),this.h()},l(t){m=p(t,"H1",{});var o=r(m);nt=n(o,le),o.forEach(e),U=h(t),O=p(t,"H1",{});var Ut=r(O);ot=n(Ut,"tl;dr"),Ut.forEach(e),F=h(t),c=p(t,"P",{});var k=r(c);lt=n(k,"Use "),C=p(k,"CODE",{});var Ft=r(C);it=n(Ft,"BytesIO()"),Ft.forEach(e),pt=n(k,` file-like object and write bytes to this object.
When appending this data in `),H=p(k,"CODE",{});var Yt=r(H);rt=n(Yt,"requests"),Yt.forEach(e),ct=n(k," library, remember to \u201Creset\u201D the cursor position of the object using "),g=p(k,"CODE",{});var Gt=r(g);ut=n(Gt,"file.seek(0)"),Gt.forEach(e),ft=n(k," so that "),A=p(k,"CODE",{});var zt=r(A);ht=n(zt,"file.read()"),zt.forEach(e),dt=n(k," will return the written bytes."),k.forEach(e),Y=h(t),P=p(t,"H1",{});var Jt=r(P);kt=n(Jt,"Background"),Jt.forEach(e),G=h(t),w=p(t,"P",{});var st=r(w);yt=n(st,"When creating data pipelines, at the end you will usually want to write the processed data into a sink. Normally, the sink will be a file system, and supplying a path-like string to the API will suffice (e.g. "),q=p(st,"CODE",{});var Kt=r(q);mt=n(Kt,"pandas.DataFrame.to_csv('/path/to/file.csv')"),Kt.forEach(e),wt=n(st,`).
However, when you instead want to send this data through a HTTP POST method, it doesn\u2019t make sense to write the data to file system, then read back the data from file system and attach the data into your request.`),st.forEach(e),z=h(t),I=p(t,"H1",{});var Qt=r(I);bt=n(Qt,"Solution"),Qt.forEach(e),J=h(t),b=p(t,"P",{});var at=r(b);_t=n(at,"Luckily a simple solution is to use Python\u2019s built in "),M=p(at,"CODE",{});var Vt=r(M);vt=n(Vt,"BytesIO"),Vt.forEach(e),Et=n(at," object, which is a file-like object that lets you write to in-memory buffer (aka RAM). You can pass in this file-like object to most API\u2019s writing to file system methods."),at.forEach(e),K=h(t),B=p(t,"P",{});var Xt=r(B);Ot=n(Xt,"Usually, writing to file system goes something like this:"),Xt.forEach(e),Q=h(t),_=p(t,"PRE",{class:!0});var ue=r(_);ue.forEach(e),V=h(t),T=p(t,"P",{});var Zt=r(T);Pt=n(Zt,"To write to to an in-memory buffer (aka your RAM), change to this:"),Zt.forEach(e),X=h(t),v=p(t,"PRE",{class:!0});var fe=r(v);fe.forEach(e),Z=h(t),j=p(t,"H2",{});var $t=r(j);It=n($t,"Note on reading after writing to BytesIO"),$t.forEach(e),$=h(t),d=p(t,"P",{});var D=r(d);Bt=n(D,"When writing to "),R=p(D,"CODE",{});var te=r(R);Tt=n(te,"BytesIO"),te.forEach(e),jt=n(D,", there is an underlying cursor that gets shifted to the right for every byte written. This cursor is "),S=p(D,"STRONG",{});var ee=r(S);Dt=n(ee,"not resetted"),ee.forEach(e),Ct=n(D," when you try to read from the object."),D.forEach(e),tt=h(t),E=p(t,"PRE",{class:!0});var he=r(E);he.forEach(e),et=h(t),u=p(t,"P",{});var y=r(u);Ht=n(y,"Therefore, when attaching your "),W=p(y,"CODE",{});var se=r(W);gt=n(se,"BytesIO"),se.forEach(e),At=n(y," buffer to the "),x=p(y,"CODE",{});var ae=r(x);qt=n(ae,"data"),ae.forEach(e),Mt=n(y," param of "),L=p(y,"CODE",{});var ne=r(L);Rt=n(ne,"requests.post()"),ne.forEach(e),St=n(y,", remember to "),N=p(y,"CODE",{});var oe=r(N);Wt=n(oe,"f.seek(0)"),oe.forEach(e),xt=n(y," to reset the cursor position to the beginning."),y.forEach(e),this.h()},h(){Lt(_,"class","language-py"),Lt(v,"class","language-py"),Lt(E,"class","language-py")},m(t,o){l(t,m,o),s(m,nt),l(t,U,o),l(t,O,o),s(O,ot),l(t,F,o),l(t,c,o),s(c,lt),s(c,C),s(C,it),s(c,pt),s(c,H),s(H,rt),s(c,ct),s(c,g),s(g,ut),s(c,ft),s(c,A),s(A,ht),s(c,dt),l(t,Y,o),l(t,P,o),s(P,kt),l(t,G,o),l(t,w,o),s(w,yt),s(w,q),s(q,mt),s(w,wt),l(t,z,o),l(t,I,o),s(I,bt),l(t,J,o),l(t,b,o),s(b,_t),s(b,M),s(M,vt),s(b,Et),l(t,K,o),l(t,B,o),s(B,Ot),l(t,Q,o),l(t,_,o),_.innerHTML=pe,l(t,V,o),l(t,T,o),s(T,Pt),l(t,X,o),l(t,v,o),v.innerHTML=re,l(t,Z,o),l(t,j,o),s(j,It),l(t,$,o),l(t,d,o),s(d,Bt),s(d,R),s(R,Tt),s(d,jt),s(d,S),s(S,Dt),s(d,Ct),l(t,tt,o),l(t,E,o),E.innerHTML=ce,l(t,et,o),l(t,u,o),s(u,Ht),s(u,W),s(W,gt),s(u,At),s(u,x),s(x,qt),s(u,Mt),s(u,L),s(L,Rt),s(u,St),s(u,N),s(N,Wt),s(u,xt)},p:Nt,i:Nt,o:Nt,d(t){t&&e(m),t&&e(U),t&&e(O),t&&e(F),t&&e(c),t&&e(Y),t&&e(P),t&&e(G),t&&e(w),t&&e(z),t&&e(I),t&&e(J),t&&e(b),t&&e(K),t&&e(B),t&&e(Q),t&&e(_),t&&e(V),t&&e(T),t&&e(X),t&&e(v),t&&e(Z),t&&e(j),t&&e($),t&&e(d),t&&e(tt),t&&e(E),t&&e(et),t&&e(u)}}}const we={title:"Writing File to In-Memory Buffer in Python",date:"2023-04-02"},{title:le,date:_e}=we;class ve extends de{constructor(m){super(),ke(this,m,null,me,ye,{})}}export{ve as default,we as metadata};
