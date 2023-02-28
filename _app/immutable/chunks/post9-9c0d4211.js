import{S as Es,i as Cs,s as Ts,k as o,q as a,a as r,l as p,m as l,r as e,h as t,c as k,n as Ds,b as u,B as n,A as us}from"./index-4cbca6b4.js";function xs(_s){let m,V,g,_,F,I,f,U,T,j,z,L,h,G,D,J,K,B,i,v,N,x,Q,W,b,X,q,Y,Z,y,$,O,ss,ns,ts,E,as,P,es,M,C,os,A,w,vs=`<code class="language-py"><span class="token keyword">from</span> unittest <span class="token keyword">import</span> TestCase
<span class="token keyword">from</span> math <span class="token keyword">import</span> sqrt

<span class="token comment"># implementation that you want to test</span>
<span class="token keyword">class</span> <span class="token class-name">MyCustomVector</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	x<span class="token punctuation">:</span> <span class="token builtin">int</span>
	y<span class="token punctuation">:</span> <span class="token builtin">int</span>

	<span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token punctuation">:</span><span class="token builtin">int</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span><span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
		self<span class="token punctuation">.</span>x <span class="token operator">=</span> x
		self<span class="token punctuation">.</span>y <span class="token operator">=</span> y

	<span class="token keyword">def</span> <span class="token function">l1_norm</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> <span class="token builtin">abs</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>x<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token builtin">abs</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>y<span class="token punctuation">)</span>

	<span class="token keyword">def</span> <span class="token function">l2_norm</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">float</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> sqrt<span class="token punctuation">(</span>self<span class="token punctuation">.</span>x <span class="token operator">**</span> <span class="token number">2</span> <span class="token operator">+</span> self<span class="token punctuation">.</span>y <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">)</span>

<span class="token comment"># test class that will run your tests</span>
<span class="token comment"># inherit from unittest.TestCase</span>
<span class="token keyword">class</span> <span class="token class-name">TestSomeBehaviors</span><span class="token punctuation">(</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token comment"># setting up test data/fixtures to be reused in all test cases</span>
	<span class="token comment"># within this test class</span>
	<span class="token keyword">def</span> <span class="token function">setUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
		self<span class="token punctuation">.</span>input1 <span class="token operator">=</span> MyCustomVector<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
		self<span class="token punctuation">.</span>input2 <span class="token operator">=</span> MyCustomVector<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>

	<span class="token keyword">def</span> <span class="token function">test_l1_norm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token comment"># TestCase provides assert*() methods to use in tests</span>
		self<span class="token punctuation">.</span>assertEqual<span class="token punctuation">(</span>
			self<span class="token punctuation">.</span>input1<span class="token punctuation">.</span>l1_norm<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token number">3</span><span class="token punctuation">,</span>
			<span class="token string">'l1 norm should be sum of absolute values'</span>
		<span class="token punctuation">)</span>

	<span class="token keyword">def</span> <span class="token function">test_l2_norm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
		self<span class="token punctuation">.</span>assertEqual<span class="token punctuation">(</span>
			self<span class="token punctuation">.</span>input1<span class="token punctuation">.</span>l1_norm<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			sqrt<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token string">'l2 norm should be sqrt of sum of squares'</span>
		<span class="token punctuation">)</span>

	<span class="token keyword">def</span> <span class="token function">tearDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token comment"># tear down test fixtures</span>
		<span class="token comment"># useful to reverse any side effects (e.g. temp files, temp db)</span>
		<span class="token keyword">pass</span></code>`;return{c(){m=o("h1"),V=a(ws),g=r(),_=o("p"),F=a(`Tests are important to prove the logic you have written down works as expected,
and to squash bugs forever.
On top of this, practicing Test Driven Development (TDD), which is the act of writing tests
BEFORE implementation, helps you improve software design.
TDD forces you to think about how to test your implementation,
and through this, you are more likely to come up with
simpler APIs/methods/functions that do only one thing.`),I=r(),f=o("p"),U=a("Python comes with "),T=o("code"),j=a("unittest"),z=a(" module in standard library that helps you write tests."),L=r(),h=o("p"),G=a("The basic flow of writing tests in "),D=o("code"),J=a("unittest"),K=a(" can be summarised as:"),B=r(),i=o("ol"),v=o("li"),N=a("import "),x=o("code"),Q=a("unittest"),W=r(),b=o("li"),X=a("create a test class that inherits from "),q=o("code"),Y=a("unittest.TestCase"),Z=r(),y=o("li"),$=a("create methods in this test class that tests a functionality through "),O=o("code"),ss=a("unittest.TestCase.assert*"),ns=a(" methods"),ts=r(),E=o("li"),as=a("run your tests through "),P=o("code"),es=a("python -m unittest <module_or_filepath>"),M=r(),C=o("h2"),os=a("Example Code:"),A=r(),w=o("pre"),this.h()},l(s){m=p(s,"H1",{});var c=l(m);V=e(c,ws),c.forEach(t),g=k(s),_=p(s,"P",{});var is=l(_);F=e(is,`Tests are important to prove the logic you have written down works as expected,
and to squash bugs forever.
On top of this, practicing Test Driven Development (TDD), which is the act of writing tests
BEFORE implementation, helps you improve software design.
TDD forces you to think about how to test your implementation,
and through this, you are more likely to come up with
simpler APIs/methods/functions that do only one thing.`),is.forEach(t),I=k(s),f=p(s,"P",{});var H=l(f);U=e(H,"Python comes with "),T=p(H,"CODE",{});var rs=l(T);j=e(rs,"unittest"),rs.forEach(t),z=e(H," module in standard library that helps you write tests."),H.forEach(t),L=k(s),h=p(s,"P",{});var R=l(h);G=e(R,"The basic flow of writing tests in "),D=p(R,"CODE",{});var ks=l(D);J=e(ks,"unittest"),ks.forEach(t),K=e(R," can be summarised as:"),R.forEach(t),B=k(s),i=p(s,"OL",{});var d=l(i);v=p(d,"LI",{});var ps=l(v);N=e(ps,"import "),x=p(ps,"CODE",{});var ms=l(x);Q=e(ms,"unittest"),ms.forEach(t),ps.forEach(t),W=k(d),b=p(d,"LI",{});var ls=l(b);X=e(ls,"create a test class that inherits from "),q=p(ls,"CODE",{});var fs=l(q);Y=e(fs,"unittest.TestCase"),fs.forEach(t),ls.forEach(t),Z=k(d),y=p(d,"LI",{});var S=l(y);$=e(S,"create methods in this test class that tests a functionality through "),O=p(S,"CODE",{});var hs=l(O);ss=e(hs,"unittest.TestCase.assert*"),hs.forEach(t),ns=e(S," methods"),S.forEach(t),ts=k(d),E=p(d,"LI",{});var cs=l(E);as=e(cs,"run your tests through "),P=p(cs,"CODE",{});var ds=l(P);es=e(ds,"python -m unittest <module_or_filepath>"),ds.forEach(t),cs.forEach(t),d.forEach(t),M=k(s),C=p(s,"H2",{});var ys=l(C);os=e(ys,"Example Code:"),ys.forEach(t),A=k(s),w=p(s,"PRE",{class:!0});var bs=l(w);bs.forEach(t),this.h()},h(){Ds(w,"class","language-py")},m(s,c){u(s,m,c),n(m,V),u(s,g,c),u(s,_,c),n(_,F),u(s,I,c),u(s,f,c),n(f,U),n(f,T),n(T,j),n(f,z),u(s,L,c),u(s,h,c),n(h,G),n(h,D),n(D,J),n(h,K),u(s,B,c),u(s,i,c),n(i,v),n(v,N),n(v,x),n(x,Q),n(i,W),n(i,b),n(b,X),n(b,q),n(q,Y),n(i,Z),n(i,y),n(y,$),n(y,O),n(O,ss),n(y,ns),n(i,ts),n(i,E),n(E,as),n(E,P),n(P,es),u(s,M,c),u(s,C,c),n(C,os),u(s,A,c),u(s,w,c),w.innerHTML=vs},p:us,i:us,o:us,d(s){s&&t(m),s&&t(g),s&&t(_),s&&t(I),s&&t(f),s&&t(L),s&&t(h),s&&t(B),s&&t(i),s&&t(M),s&&t(C),s&&t(A),s&&t(w)}}}const qs={title:"unittest-ing with Python",date:"2023-02-22"},{title:ws,date:Ps}=qs;class gs extends Es{constructor(m){super(),Cs(this,m,null,xs,Ts,{})}}export{gs as default,qs as metadata};
