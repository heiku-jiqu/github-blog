import{S as _n,i as bn,s as yn,k as n,q as o,a as p,l,m as c,r as a,h as s,c as u,n as fn,b as i,B as e,A as sa}from"./index-4cbca6b4.js";function Cn(kn){let K,Ut,lt,T,Mt,ne,jt,Jt,ct,B,Bt,rt,G,Gt,it,d,N,le,Nt,Ft,Qt,F,ce,Vt,Wt,Xt,Q,re,Yt,Zt,$t,z,ie,es,ts,pe,ss,os,as,V,ue,ns,ls,pt,W,cs,ut,S,rs,fe,is,ps,ft,k,de,us,fs,ke,ds,ks,he,hs,ms,me,vs,Es,ve,_s,dt,X,bs,kt,x,Ee,ys,Cs,ht,A,hn='<code class="language-py">producer <span class="token operator">=</span> Producer<span class="token punctuation">(</span>config<span class="token punctuation">)</span></code>',mt,Y,Ps,vt,f,R,_e,ws,Os,be,Ds,Is,Ls,E,ye,Ks,Ts,Ce,zs,Ss,Pe,Rs,qs,we,Hs,gs,xs,b,Oe,As,Us,De,Ms,js,Ie,Js,Bs,Gs,U,Le,Ns,Fs,Ke,Qs,Vs,M,Te,Ws,Xs,ze,Ys,Zs,q,$s,Se,eo,to,Re,so,Et,Z,oo,_t,O,ao,qe,no,lo,He,co,bt,D,ge,ro,io,xe,po,uo,yt,$,fo,Ct,h,Ae,ko,ho,Ue,mo,vo,Me,Eo,_o,je,bo,yo,Je,Co,Pt,ee,Po,wt,j,mn=`<code class="language-py"><span class="token keyword">from</span> confluent_kafka <span class="token keyword">import</span> Producer

config <span class="token operator">=</span> <span class="token punctuation">&#123;</span>boostrap<span class="token punctuation">.</span>servers<span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token number">9092</span><span class="token punctuation">&#125;</span>
producer <span class="token operator">=</span> Producer<span class="token punctuation">(</span>config<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">callback</span><span class="token punctuation">(</span>err<span class="token punctuation">:</span> KafkaError<span class="token punctuation">,</span> msg<span class="token punctuation">:</span> Message<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> err<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"Event produce to topic </span><span class="token interpolation"><span class="token punctuation">&#123;</span>msg<span class="token punctuation">.</span>topic<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span><span class="token string"> failed for event: </span><span class="token interpolation"><span class="token punctuation">&#123;</span>event<span class="token punctuation">.</span>key<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"</span><span class="token interpolation"><span class="token punctuation">&#123;</span>msg<span class="token punctuation">.</span>value<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span><span class="token string"> sent to topic </span><span class="token interpolation"><span class="token punctuation">&#123;</span>msg<span class="token punctuation">.</span>topic<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span><span class="token string"> in partition </span><span class="token interpolation"><span class="token punctuation">&#123;</span>msg<span class="token punctuation">.</span>partition<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>

producer<span class="token punctuation">.</span>produce<span class="token punctuation">(</span>
    topic <span class="token operator">=</span> <span class="token string">'hello_topic'</span><span class="token punctuation">,</span>
    key <span class="token operator">=</span> <span class="token string">"abc"</span><span class="token punctuation">,</span>
    value <span class="token operator">=</span> <span class="token string">"hello abc"</span><span class="token punctuation">,</span>
    on_delivery <span class="token operator">=</span> callback
<span class="token punctuation">)</span>
producer<span class="token punctuation">.</span>flush<span class="token punctuation">(</span><span class="token punctuation">)</span></code>`,Ot,te,wo,Dt,H,Oo,Be,Do,Io,It,m,Ge,Lo,Ko,Ne,To,zo,Fe,So,Ro,Qe,qo,Ho,Ve,go,Lt,se,xo,Kt,oe,Ao,Tt,v,We,Uo,Mo,Xe,jo,Jo,Ye,Bo,Go,Ze,No,Fo,zt,ae,Qo,St,g,$e,Vo,Wo,et,Xo;return{c(){K=n("h1"),Ut=o(dn),lt=p(),T=n("p"),Mt=o(`Python has multiple client implementations to interact with a Kafka cluster.
This post will walk through the `),ne=n("code"),jt=o("confluent-kafka-python"),Jt=o(" client, which is the official Python client implementation by Confluent Inc."),ct=p(),B=n("h2"),Bt=o("Overview"),rt=p(),G=n("p"),Gt=o("This client module has a few main classes that make up the bulk of its API:"),it=p(),d=n("ul"),N=n("li"),le=n("code"),Nt=o("Producer"),Ft=o(": To produce events to the Kafka cluster"),Qt=p(),F=n("li"),ce=n("code"),Vt=o("Consumer"),Wt=o(": To read events from the Kafka cluster"),Xt=p(),Q=n("li"),re=n("code"),Yt=o("SchemaRegistryClient"),Zt=o(": To get metadata/schemas about the Kafka cluster/topics when you have a Kafka Schema Registry server"),$t=p(),z=n("li"),ie=n("code"),es=o("Serializer"),ts=o(" / "),pe=n("code"),ss=o("Deserializer"),os=o(": To serialize and deserialize messages sent/received from Kafka into/from formats like JSON, Protobuf, Avro, etc."),as=p(),V=n("li"),ue=n("code"),ns=o("AdminClient"),ls=o(": To manage the Kafka cluster (e.g. creating topics, partitions, etc.)"),pt=p(),W=n("h2"),cs=o("Producer"),ut=p(),S=n("p"),rs=o("The "),fe=n("code"),is=o("Producer"),ps=o(" class is used to send events to Kafka. It is responsible for:"),ft=p(),k=n("ul"),de=n("li"),us=o("Partition assignment of the events"),fs=p(),ke=n("li"),ds=o("Batching events for improved throughput (but added latency)"),ks=p(),he=n("li"),hs=o("Compression of events and its data"),ms=p(),me=n("li"),vs=o("Retries (e.g. due to network errors)"),Es=p(),ve=n("li"),_s=o("Response callbacks when events are successfully delivered"),dt=p(),X=n("h3"),bs=o("using Producer"),kt=p(),x=n("p"),Ee=n("code"),ys=o("Producer"),Cs=o(" can be initialised by passing in a dictionary of configuration settings to the constructor."),ht=p(),A=n("pre"),mt=p(),Y=n("p"),Ps=o("The configuration can include the following:"),vt=p(),f=n("ul"),R=n("li"),_e=n("code"),ws=o("bootstrap.servers"),Os=o(" ("),be=n("strong"),Ds=o("required"),Is=o("): the URL to the Kafka cluster/brokers"),Ls=p(),E=n("li"),ye=n("code"),Ks=o("acks"),Ts=o(": level of acknowledgement required before returning from produce request ("),Ce=n("code"),zs=o("0"),Ss=o(", "),Pe=n("code"),Rs=o("1"),qs=o(", "),we=n("code"),Hs=o("all"),gs=o(" for no ack, only lead broker ack, and all broker acks, respectively)"),xs=p(),b=n("li"),Oe=n("code"),As=o("compression.type"),Us=o(": enables compression of messages (e.g. "),De=n("code"),Ms=o("gzip"),js=o(", "),Ie=n("code"),Js=o("zstd"),Bs=o(")"),Gs=p(),U=n("li"),Le=n("code"),Ns=o("batch.size"),Fs=o(": number of bytes to batch up before sending produce request. Should be adjust with "),Ke=n("code"),Qs=o("linger.ms"),Vs=p(),M=n("li"),Te=n("code"),Ws=o("linger.ms"),Xs=o(": number of milliseconds to wait for batch before sending produce request (i.e. latency). Should be adjusted with "),ze=n("code"),Ys=o("batch.size"),Zs=p(),q=n("li"),$s=o("any other connection security settings like "),Se=n("code"),eo=o("security.protocol"),to=o(" and "),Re=n("code"),so=o("ssl.keystore"),Et=p(),Z=n("h3"),oo=o("methods"),_t=p(),O=n("p"),ao=o("The 2 most important methods to take not of is "),qe=n("code"),no=o(".produce()"),lo=o(" and "),He=n("code"),co=o(".flush()"),bt=p(),D=n("p"),ge=n("code"),ro=o(".produce()"),io=o(" is used to send events to Kafka asynchronously, and "),xe=n("code"),po=o(".flush()"),uo=o(" is used to make sure all produce requests and callbacks are complete."),yt=p(),$=n("h4"),fo=o("methods for transactions"),Ct=p(),h=n("p"),Ae=n("code"),ko=o("Producer.init_transactions()"),ho=p(),Ue=n("code"),mo=o("Producer.begin_transaction()"),vo=p(),Me=n("code"),Eo=o("Producer.commit_transaction()"),_o=p(),je=n("code"),bo=o("Producer.abort_transaction()"),yo=p(),Je=n("code"),Co=o("Producer.send_offsets_to_transaction()"),Pt=p(),ee=n("h3"),Po=o("example"),wt=p(),j=n("pre"),Ot=p(),te=n("h2"),wo=o("Consumer"),Dt=p(),H=n("p"),Oo=o("The "),Be=n("code"),Do=o("Consumer"),Io=o(" class\u2019 main function used to read events from the Kafka cluster. It is also responsbile several areas like:"),It=p(),m=n("ul"),Ge=n("li"),Lo=o("Subscribing to Kafka topics"),Ko=p(),Ne=n("li"),To=o("Reading from those topics"),zo=p(),Fe=n("li"),So=o("Keeping track of successfully read events (by updating commited offset)"),Ro=p(),Qe=n("li"),qo=o("Manage offsets of the application"),Ho=p(),Ve=n("li"),go=o("Joining Consumer Groups (to horizontally scale the consumer app, up to number of partitions of topic)"),Lt=p(),se=n("h3"),xo=o("configs"),Kt=p(),oe=n("p"),Ao=o("cluster location, security settings, consumer group settings"),Tt=p(),v=n("p"),We=n("code"),Uo=o("group.id"),Mo=p(),Xe=n("code"),jo=o("auto.offset.reset"),Jo=o(`: whether to always reset to start of topic, or only consume new events as they arrive
`),Ye=n("code"),Bo=o("enable.auto.commit"),Go=o(`: whether to manually commit offsets using our code, or let the client automatically commit
`),Ze=n("code"),No=o("isolation.level"),Fo=o(": transaction processing, whether to read committed or uncomitted events"),zt=p(),ae=n("h3"),Qo=o("methods"),St=p(),g=n("p"),$e=n("code"),Vo=o("Consumer.subscribe()"),Wo=p(),et=n("code"),Xo=o("Consumer.poll()"),this.h()},l(t){K=l(t,"H1",{});var r=c(K);Ut=a(r,dn),r.forEach(s),lt=u(t),T=l(t,"P",{});var Rt=c(T);Mt=a(Rt,`Python has multiple client implementations to interact with a Kafka cluster.
This post will walk through the `),ne=l(Rt,"CODE",{});var oa=c(ne);jt=a(oa,"confluent-kafka-python"),oa.forEach(s),Jt=a(Rt," client, which is the official Python client implementation by Confluent Inc."),Rt.forEach(s),ct=u(t),B=l(t,"H2",{});var aa=c(B);Bt=a(aa,"Overview"),aa.forEach(s),rt=u(t),G=l(t,"P",{});var na=c(G);Gt=a(na,"This client module has a few main classes that make up the bulk of its API:"),na.forEach(s),it=u(t),d=l(t,"UL",{});var y=c(d);N=l(y,"LI",{});var Yo=c(N);le=l(Yo,"CODE",{});var la=c(le);Nt=a(la,"Producer"),la.forEach(s),Ft=a(Yo,": To produce events to the Kafka cluster"),Yo.forEach(s),Qt=u(y),F=l(y,"LI",{});var Zo=c(F);ce=l(Zo,"CODE",{});var ca=c(ce);Vt=a(ca,"Consumer"),ca.forEach(s),Wt=a(Zo,": To read events from the Kafka cluster"),Zo.forEach(s),Xt=u(y),Q=l(y,"LI",{});var $o=c(Q);re=l($o,"CODE",{});var ra=c(re);Yt=a(ra,"SchemaRegistryClient"),ra.forEach(s),Zt=a($o,": To get metadata/schemas about the Kafka cluster/topics when you have a Kafka Schema Registry server"),$o.forEach(s),$t=u(y),z=l(y,"LI",{});var tt=c(z);ie=l(tt,"CODE",{});var ia=c(ie);es=a(ia,"Serializer"),ia.forEach(s),ts=a(tt," / "),pe=l(tt,"CODE",{});var pa=c(pe);ss=a(pa,"Deserializer"),pa.forEach(s),os=a(tt,": To serialize and deserialize messages sent/received from Kafka into/from formats like JSON, Protobuf, Avro, etc."),tt.forEach(s),as=u(y),V=l(y,"LI",{});var ea=c(V);ue=l(ea,"CODE",{});var ua=c(ue);ns=a(ua,"AdminClient"),ua.forEach(s),ls=a(ea,": To manage the Kafka cluster (e.g. creating topics, partitions, etc.)"),ea.forEach(s),y.forEach(s),pt=u(t),W=l(t,"H2",{});var fa=c(W);cs=a(fa,"Producer"),fa.forEach(s),ut=u(t),S=l(t,"P",{});var qt=c(S);rs=a(qt,"The "),fe=l(qt,"CODE",{});var da=c(fe);is=a(da,"Producer"),da.forEach(s),ps=a(qt," class is used to send events to Kafka. It is responsible for:"),qt.forEach(s),ft=u(t),k=l(t,"UL",{});var C=c(k);de=l(C,"LI",{});var ka=c(de);us=a(ka,"Partition assignment of the events"),ka.forEach(s),fs=u(C),ke=l(C,"LI",{});var ha=c(ke);ds=a(ha,"Batching events for improved throughput (but added latency)"),ha.forEach(s),ks=u(C),he=l(C,"LI",{});var ma=c(he);hs=a(ma,"Compression of events and its data"),ma.forEach(s),ms=u(C),me=l(C,"LI",{});var va=c(me);vs=a(va,"Retries (e.g. due to network errors)"),va.forEach(s),Es=u(C),ve=l(C,"LI",{});var Ea=c(ve);_s=a(Ea,"Response callbacks when events are successfully delivered"),Ea.forEach(s),C.forEach(s),dt=u(t),X=l(t,"H3",{});var _a=c(X);bs=a(_a,"using Producer"),_a.forEach(s),kt=u(t),x=l(t,"P",{});var ta=c(x);Ee=l(ta,"CODE",{});var ba=c(Ee);ys=a(ba,"Producer"),ba.forEach(s),Cs=a(ta," can be initialised by passing in a dictionary of configuration settings to the constructor."),ta.forEach(s),ht=u(t),A=l(t,"PRE",{class:!0});var vn=c(A);vn.forEach(s),mt=u(t),Y=l(t,"P",{});var ya=c(Y);Ps=a(ya,"The configuration can include the following:"),ya.forEach(s),vt=u(t),f=l(t,"UL",{});var _=c(f);R=l(_,"LI",{});var st=c(R);_e=l(st,"CODE",{});var Ca=c(_e);ws=a(Ca,"bootstrap.servers"),Ca.forEach(s),Os=a(st," ("),be=l(st,"STRONG",{});var Pa=c(be);Ds=a(Pa,"required"),Pa.forEach(s),Is=a(st,"): the URL to the Kafka cluster/brokers"),st.forEach(s),Ls=u(_),E=l(_,"LI",{});var I=c(E);ye=l(I,"CODE",{});var wa=c(ye);Ks=a(wa,"acks"),wa.forEach(s),Ts=a(I,": level of acknowledgement required before returning from produce request ("),Ce=l(I,"CODE",{});var Oa=c(Ce);zs=a(Oa,"0"),Oa.forEach(s),Ss=a(I,", "),Pe=l(I,"CODE",{});var Da=c(Pe);Rs=a(Da,"1"),Da.forEach(s),qs=a(I,", "),we=l(I,"CODE",{});var Ia=c(we);Hs=a(Ia,"all"),Ia.forEach(s),gs=a(I," for no ack, only lead broker ack, and all broker acks, respectively)"),I.forEach(s),xs=u(_),b=l(_,"LI",{});var J=c(b);Oe=l(J,"CODE",{});var La=c(Oe);As=a(La,"compression.type"),La.forEach(s),Us=a(J,": enables compression of messages (e.g. "),De=l(J,"CODE",{});var Ka=c(De);Ms=a(Ka,"gzip"),Ka.forEach(s),js=a(J,", "),Ie=l(J,"CODE",{});var Ta=c(Ie);Js=a(Ta,"zstd"),Ta.forEach(s),Bs=a(J,")"),J.forEach(s),Gs=u(_),U=l(_,"LI",{});var Ht=c(U);Le=l(Ht,"CODE",{});var za=c(Le);Ns=a(za,"batch.size"),za.forEach(s),Fs=a(Ht,": number of bytes to batch up before sending produce request. Should be adjust with "),Ke=l(Ht,"CODE",{});var Sa=c(Ke);Qs=a(Sa,"linger.ms"),Sa.forEach(s),Ht.forEach(s),Vs=u(_),M=l(_,"LI",{});var gt=c(M);Te=l(gt,"CODE",{});var Ra=c(Te);Ws=a(Ra,"linger.ms"),Ra.forEach(s),Xs=a(gt,": number of milliseconds to wait for batch before sending produce request (i.e. latency). Should be adjusted with "),ze=l(gt,"CODE",{});var qa=c(ze);Ys=a(qa,"batch.size"),qa.forEach(s),gt.forEach(s),Zs=u(_),q=l(_,"LI",{});var ot=c(q);$s=a(ot,"any other connection security settings like "),Se=l(ot,"CODE",{});var Ha=c(Se);eo=a(Ha,"security.protocol"),Ha.forEach(s),to=a(ot," and "),Re=l(ot,"CODE",{});var ga=c(Re);so=a(ga,"ssl.keystore"),ga.forEach(s),ot.forEach(s),_.forEach(s),Et=u(t),Z=l(t,"H3",{});var xa=c(Z);oo=a(xa,"methods"),xa.forEach(s),_t=u(t),O=l(t,"P",{});var at=c(O);ao=a(at,"The 2 most important methods to take not of is "),qe=l(at,"CODE",{});var Aa=c(qe);no=a(Aa,".produce()"),Aa.forEach(s),lo=a(at," and "),He=l(at,"CODE",{});var Ua=c(He);co=a(Ua,".flush()"),Ua.forEach(s),at.forEach(s),bt=u(t),D=l(t,"P",{});var nt=c(D);ge=l(nt,"CODE",{});var Ma=c(ge);ro=a(Ma,".produce()"),Ma.forEach(s),io=a(nt," is used to send events to Kafka asynchronously, and "),xe=l(nt,"CODE",{});var ja=c(xe);po=a(ja,".flush()"),ja.forEach(s),uo=a(nt," is used to make sure all produce requests and callbacks are complete."),nt.forEach(s),yt=u(t),$=l(t,"H4",{});var Ja=c($);fo=a(Ja,"methods for transactions"),Ja.forEach(s),Ct=u(t),h=l(t,"P",{});var P=c(h);Ae=l(P,"CODE",{});var Ba=c(Ae);ko=a(Ba,"Producer.init_transactions()"),Ba.forEach(s),ho=u(P),Ue=l(P,"CODE",{});var Ga=c(Ue);mo=a(Ga,"Producer.begin_transaction()"),Ga.forEach(s),vo=u(P),Me=l(P,"CODE",{});var Na=c(Me);Eo=a(Na,"Producer.commit_transaction()"),Na.forEach(s),_o=u(P),je=l(P,"CODE",{});var Fa=c(je);bo=a(Fa,"Producer.abort_transaction()"),Fa.forEach(s),yo=u(P),Je=l(P,"CODE",{});var Qa=c(Je);Co=a(Qa,"Producer.send_offsets_to_transaction()"),Qa.forEach(s),P.forEach(s),Pt=u(t),ee=l(t,"H3",{});var Va=c(ee);Po=a(Va,"example"),Va.forEach(s),wt=u(t),j=l(t,"PRE",{class:!0});var En=c(j);En.forEach(s),Ot=u(t),te=l(t,"H2",{});var Wa=c(te);wo=a(Wa,"Consumer"),Wa.forEach(s),Dt=u(t),H=l(t,"P",{});var xt=c(H);Oo=a(xt,"The "),Be=l(xt,"CODE",{});var Xa=c(Be);Do=a(Xa,"Consumer"),Xa.forEach(s),Io=a(xt," class\u2019 main function used to read events from the Kafka cluster. It is also responsbile several areas like:"),xt.forEach(s),It=u(t),m=l(t,"UL",{});var w=c(m);Ge=l(w,"LI",{});var Ya=c(Ge);Lo=a(Ya,"Subscribing to Kafka topics"),Ya.forEach(s),Ko=u(w),Ne=l(w,"LI",{});var Za=c(Ne);To=a(Za,"Reading from those topics"),Za.forEach(s),zo=u(w),Fe=l(w,"LI",{});var $a=c(Fe);So=a($a,"Keeping track of successfully read events (by updating commited offset)"),$a.forEach(s),Ro=u(w),Qe=l(w,"LI",{});var en=c(Qe);qo=a(en,"Manage offsets of the application"),en.forEach(s),Ho=u(w),Ve=l(w,"LI",{});var tn=c(Ve);go=a(tn,"Joining Consumer Groups (to horizontally scale the consumer app, up to number of partitions of topic)"),tn.forEach(s),w.forEach(s),Lt=u(t),se=l(t,"H3",{});var sn=c(se);xo=a(sn,"configs"),sn.forEach(s),Kt=u(t),oe=l(t,"P",{});var on=c(oe);Ao=a(on,"cluster location, security settings, consumer group settings"),on.forEach(s),Tt=u(t),v=l(t,"P",{});var L=c(v);We=l(L,"CODE",{});var an=c(We);Uo=a(an,"group.id"),an.forEach(s),Mo=u(L),Xe=l(L,"CODE",{});var nn=c(Xe);jo=a(nn,"auto.offset.reset"),nn.forEach(s),Jo=a(L,`: whether to always reset to start of topic, or only consume new events as they arrive
`),Ye=l(L,"CODE",{});var ln=c(Ye);Bo=a(ln,"enable.auto.commit"),ln.forEach(s),Go=a(L,`: whether to manually commit offsets using our code, or let the client automatically commit
`),Ze=l(L,"CODE",{});var cn=c(Ze);No=a(cn,"isolation.level"),cn.forEach(s),Fo=a(L,": transaction processing, whether to read committed or uncomitted events"),L.forEach(s),zt=u(t),ae=l(t,"H3",{});var rn=c(ae);Qo=a(rn,"methods"),rn.forEach(s),St=u(t),g=l(t,"P",{});var At=c(g);$e=l(At,"CODE",{});var pn=c($e);Vo=a(pn,"Consumer.subscribe()"),pn.forEach(s),Wo=u(At),et=l(At,"CODE",{});var un=c(et);Xo=a(un,"Consumer.poll()"),un.forEach(s),At.forEach(s),this.h()},h(){fn(A,"class","language-py"),fn(j,"class","language-py")},m(t,r){i(t,K,r),e(K,Ut),i(t,lt,r),i(t,T,r),e(T,Mt),e(T,ne),e(ne,jt),e(T,Jt),i(t,ct,r),i(t,B,r),e(B,Bt),i(t,rt,r),i(t,G,r),e(G,Gt),i(t,it,r),i(t,d,r),e(d,N),e(N,le),e(le,Nt),e(N,Ft),e(d,Qt),e(d,F),e(F,ce),e(ce,Vt),e(F,Wt),e(d,Xt),e(d,Q),e(Q,re),e(re,Yt),e(Q,Zt),e(d,$t),e(d,z),e(z,ie),e(ie,es),e(z,ts),e(z,pe),e(pe,ss),e(z,os),e(d,as),e(d,V),e(V,ue),e(ue,ns),e(V,ls),i(t,pt,r),i(t,W,r),e(W,cs),i(t,ut,r),i(t,S,r),e(S,rs),e(S,fe),e(fe,is),e(S,ps),i(t,ft,r),i(t,k,r),e(k,de),e(de,us),e(k,fs),e(k,ke),e(ke,ds),e(k,ks),e(k,he),e(he,hs),e(k,ms),e(k,me),e(me,vs),e(k,Es),e(k,ve),e(ve,_s),i(t,dt,r),i(t,X,r),e(X,bs),i(t,kt,r),i(t,x,r),e(x,Ee),e(Ee,ys),e(x,Cs),i(t,ht,r),i(t,A,r),A.innerHTML=hn,i(t,mt,r),i(t,Y,r),e(Y,Ps),i(t,vt,r),i(t,f,r),e(f,R),e(R,_e),e(_e,ws),e(R,Os),e(R,be),e(be,Ds),e(R,Is),e(f,Ls),e(f,E),e(E,ye),e(ye,Ks),e(E,Ts),e(E,Ce),e(Ce,zs),e(E,Ss),e(E,Pe),e(Pe,Rs),e(E,qs),e(E,we),e(we,Hs),e(E,gs),e(f,xs),e(f,b),e(b,Oe),e(Oe,As),e(b,Us),e(b,De),e(De,Ms),e(b,js),e(b,Ie),e(Ie,Js),e(b,Bs),e(f,Gs),e(f,U),e(U,Le),e(Le,Ns),e(U,Fs),e(U,Ke),e(Ke,Qs),e(f,Vs),e(f,M),e(M,Te),e(Te,Ws),e(M,Xs),e(M,ze),e(ze,Ys),e(f,Zs),e(f,q),e(q,$s),e(q,Se),e(Se,eo),e(q,to),e(q,Re),e(Re,so),i(t,Et,r),i(t,Z,r),e(Z,oo),i(t,_t,r),i(t,O,r),e(O,ao),e(O,qe),e(qe,no),e(O,lo),e(O,He),e(He,co),i(t,bt,r),i(t,D,r),e(D,ge),e(ge,ro),e(D,io),e(D,xe),e(xe,po),e(D,uo),i(t,yt,r),i(t,$,r),e($,fo),i(t,Ct,r),i(t,h,r),e(h,Ae),e(Ae,ko),e(h,ho),e(h,Ue),e(Ue,mo),e(h,vo),e(h,Me),e(Me,Eo),e(h,_o),e(h,je),e(je,bo),e(h,yo),e(h,Je),e(Je,Co),i(t,Pt,r),i(t,ee,r),e(ee,Po),i(t,wt,r),i(t,j,r),j.innerHTML=mn,i(t,Ot,r),i(t,te,r),e(te,wo),i(t,Dt,r),i(t,H,r),e(H,Oo),e(H,Be),e(Be,Do),e(H,Io),i(t,It,r),i(t,m,r),e(m,Ge),e(Ge,Lo),e(m,Ko),e(m,Ne),e(Ne,To),e(m,zo),e(m,Fe),e(Fe,So),e(m,Ro),e(m,Qe),e(Qe,qo),e(m,Ho),e(m,Ve),e(Ve,go),i(t,Lt,r),i(t,se,r),e(se,xo),i(t,Kt,r),i(t,oe,r),e(oe,Ao),i(t,Tt,r),i(t,v,r),e(v,We),e(We,Uo),e(v,Mo),e(v,Xe),e(Xe,jo),e(v,Jo),e(v,Ye),e(Ye,Bo),e(v,Go),e(v,Ze),e(Ze,No),e(v,Fo),i(t,zt,r),i(t,ae,r),e(ae,Qo),i(t,St,r),i(t,g,r),e(g,$e),e($e,Vo),e(g,Wo),e(g,et),e(et,Xo)},p:sa,i:sa,o:sa,d(t){t&&s(K),t&&s(lt),t&&s(T),t&&s(ct),t&&s(B),t&&s(rt),t&&s(G),t&&s(it),t&&s(d),t&&s(pt),t&&s(W),t&&s(ut),t&&s(S),t&&s(ft),t&&s(k),t&&s(dt),t&&s(X),t&&s(kt),t&&s(x),t&&s(ht),t&&s(A),t&&s(mt),t&&s(Y),t&&s(vt),t&&s(f),t&&s(Et),t&&s(Z),t&&s(_t),t&&s(O),t&&s(bt),t&&s(D),t&&s(yt),t&&s($),t&&s(Ct),t&&s(h),t&&s(Pt),t&&s(ee),t&&s(wt),t&&s(j),t&&s(Ot),t&&s(te),t&&s(Dt),t&&s(H),t&&s(It),t&&s(m),t&&s(Lt),t&&s(se),t&&s(Kt),t&&s(oe),t&&s(Tt),t&&s(v),t&&s(zt),t&&s(ae),t&&s(St),t&&s(g)}}}const Pn={title:"Kafka and Python",date:"2023-03-15"},{title:dn,date:On}=Pn;class Dn extends _n{constructor(K){super(),bn(this,K,null,Cn,yn,{})}}export{Dn as default,Pn as metadata};
