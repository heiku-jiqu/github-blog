import{S as Ma,i as Na,s as Ja,k as n,q as o,a as p,l,m as c,r as a,h as s,c as u,n as Ha,b as i,B as e,A as So}from"./index-4cbca6b4.js";function Ga(Aa){let L,Lt,Ye,T,Tt,se,It,Kt,Ze,j,zt,$e,B,St,et,f,M,oe,qt,Rt,Ht,N,ae,xt,At,gt,J,ne,Ut,jt,Bt,I,le,Mt,Nt,ce,Jt,Gt,Ft,G,re,Qt,Vt,tt,F,Wt,st,K,Xt,ie,Yt,Zt,ot,k,pe,$t,es,ue,ts,ss,de,os,as,fe,ns,ls,ke,cs,at,Q,rs,nt,R,he,is,ps,lt,H,ga='<code class="language-py">producer <span class="token operator">=</span> Producer<span class="token punctuation">(</span>config<span class="token punctuation">)</span></code>',ct,V,us,rt,d,z,me,ds,fs,ve,ks,hs,ms,v,Ee,vs,Es,_e,_s,ys,ye,bs,Cs,be,Ps,ws,Os,_,Ce,Ds,Ls,Pe,Ts,Is,we,Ks,zs,Ss,x,Oe,qs,Rs,De,Hs,xs,A,Le,As,gs,Te,Us,js,S,Bs,Ie,Ms,Ns,Ke,Js,it,W,Gs,pt,P,Fs,ze,Qs,Vs,Se,Ws,ut,w,qe,Xs,Ys,Re,Zs,$s,dt,X,eo,ft,h,He,to,so,xe,oo,ao,Ae,no,lo,ge,co,ro,Ue,io,kt,Y,po,ht,g,Ua=`<code class="language-py"><span class="token keyword">from</span> confluent_kafka <span class="token keyword">import</span> Producer

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
producer<span class="token punctuation">.</span>flush<span class="token punctuation">(</span><span class="token punctuation">)</span></code>`,mt,Z,uo,vt,$,fo,Et,ee,ko,_t,m,je,ho,mo,Be,vo,Eo,Me,_o,yo,Ne,bo,Co,yt,te,Po,bt,q,Je,wo,Oo,Ge,Do;return{c(){L=n("h1"),Lt=o(xa),Ye=p(),T=n("p"),Tt=o(`Python has multiple client implementations to interact with a Kafka cluster.
This post will walk through the `),se=n("code"),It=o("confluent-kafka-python"),Kt=o(" client, which is the official Python client implementation by Confluent Inc."),Ze=p(),j=n("h2"),zt=o("Overview"),$e=p(),B=n("p"),St=o("This client module has a few main classes that make up the bulk of its API:"),et=p(),f=n("ul"),M=n("li"),oe=n("code"),qt=o("Producer"),Rt=o(": To produce events to the Kafka cluster"),Ht=p(),N=n("li"),ae=n("code"),xt=o("Consumer"),At=o(": To read events from the Kafka cluster"),gt=p(),J=n("li"),ne=n("code"),Ut=o("SchemaRegistryClient"),jt=o(": To get metadata/schemas about the Kafka cluster/topics when you have a Kafka Schema Registry server"),Bt=p(),I=n("li"),le=n("code"),Mt=o("Serializer"),Nt=o(" / "),ce=n("code"),Jt=o("Deserializer"),Gt=o(": To serialize and deserialize messages sent/received from Kafka into/from formats like JSON, Protobuf, Avro, etc."),Ft=p(),G=n("li"),re=n("code"),Qt=o("AdminClient"),Vt=o(": To manage the Kafka cluster (e.g. creating topics, partitions, etc.)"),tt=p(),F=n("h2"),Wt=o("Producer"),st=p(),K=n("p"),Xt=o("The "),ie=n("code"),Yt=o("Producer"),Zt=o(" class is used to send events to Kafka. It is responsible for:"),ot=p(),k=n("ul"),pe=n("li"),$t=o("Partition assignment of the events"),es=p(),ue=n("li"),ts=o("Batching events for improved throughput (but added latency)"),ss=p(),de=n("li"),os=o("Compression of events and its data"),as=p(),fe=n("li"),ns=o("Retries (e.g. due to network errors)"),ls=p(),ke=n("li"),cs=o("Response callbacks when events are successfully delivered"),at=p(),Q=n("h3"),rs=o("using Producer"),nt=p(),R=n("p"),he=n("code"),is=o("Producer"),ps=o(" can be initialised by passing in a dictionary of configuration settings to the constructor."),lt=p(),H=n("pre"),ct=p(),V=n("p"),us=o("The configuration can include the following:"),rt=p(),d=n("ul"),z=n("li"),me=n("code"),ds=o("bootstrap.servers"),fs=o(" ("),ve=n("strong"),ks=o("required"),hs=o("): the URL to the Kafka cluster/brokers"),ms=p(),v=n("li"),Ee=n("code"),vs=o("acks"),Es=o(": level of acknowledgement required before returning from produce request ("),_e=n("code"),_s=o("0"),ys=o(", "),ye=n("code"),bs=o("1"),Cs=o(", "),be=n("code"),Ps=o("all"),ws=o(" for no ack, only lead broker ack, and all broker acks, respectively)"),Os=p(),_=n("li"),Ce=n("code"),Ds=o("compression.type"),Ls=o(": enables compression of messages (e.g. "),Pe=n("code"),Ts=o("gzip"),Is=o(", "),we=n("code"),Ks=o("zstd"),zs=o(")"),Ss=p(),x=n("li"),Oe=n("code"),qs=o("batch.size"),Rs=o(": number of bytes to batch up before sending produce request. Should be adjust with "),De=n("code"),Hs=o("linger.ms"),xs=p(),A=n("li"),Le=n("code"),As=o("linger.ms"),gs=o(": number of milliseconds to wait for batch before sending produce request (i.e. latency). Should be adjusted with "),Te=n("code"),Us=o("batch.size"),js=p(),S=n("li"),Bs=o("any other connection security settings like "),Ie=n("code"),Ms=o("security.protocol"),Ns=o(" and "),Ke=n("code"),Js=o("ssl.keystore"),it=p(),W=n("h3"),Gs=o("methods"),pt=p(),P=n("p"),Fs=o("The 2 most important methods to take not of is "),ze=n("code"),Qs=o(".produce()"),Vs=o(" and "),Se=n("code"),Ws=o(".flush()"),ut=p(),w=n("p"),qe=n("code"),Xs=o(".produce()"),Ys=o(" is used to send events to Kafka asynchronously, and "),Re=n("code"),Zs=o(".flush()"),$s=o(" is used to make sure all produce requests and callbacks are complete."),dt=p(),X=n("h4"),eo=o("methods for transactions"),ft=p(),h=n("p"),He=n("code"),to=o("Producer.init_transactions()"),so=p(),xe=n("code"),oo=o("Producer.begin_transaction()"),ao=p(),Ae=n("code"),no=o("Producer.commit_transaction()"),lo=p(),ge=n("code"),co=o("Producer.abort_transaction()"),ro=p(),Ue=n("code"),io=o("Producer.send_offsets_to_transaction()"),kt=p(),Y=n("h3"),po=o("example"),ht=p(),g=n("pre"),mt=p(),Z=n("h2"),uo=o("Consumer"),vt=p(),$=n("h3"),fo=o("configs"),Et=p(),ee=n("p"),ko=o("cluster location, security settings, consumer group settings"),_t=p(),m=n("p"),je=n("code"),ho=o("group.id"),mo=p(),Be=n("code"),vo=o("auto.offset.reset"),Eo=o(`: whether to always reset to start of topic, or only consume new events as they arrive
`),Me=n("code"),_o=o("enable.auto.commit"),yo=o(`: whether to manually commit offsets using our code, or let the client automatically commit
`),Ne=n("code"),bo=o("isolation.level"),Co=o(": transaction processing, whether to read committed or uncomitted events"),yt=p(),te=n("h3"),Po=o("methods"),bt=p(),q=n("p"),Je=n("code"),wo=o("Consumer.subscribe()"),Oo=p(),Ge=n("code"),Do=o("Consumer.poll()"),this.h()},l(t){L=l(t,"H1",{});var r=c(L);Lt=a(r,xa),r.forEach(s),Ye=u(t),T=l(t,"P",{});var Ct=c(T);Tt=a(Ct,`Python has multiple client implementations to interact with a Kafka cluster.
This post will walk through the `),se=l(Ct,"CODE",{});var qo=c(se);It=a(qo,"confluent-kafka-python"),qo.forEach(s),Kt=a(Ct," client, which is the official Python client implementation by Confluent Inc."),Ct.forEach(s),Ze=u(t),j=l(t,"H2",{});var Ro=c(j);zt=a(Ro,"Overview"),Ro.forEach(s),$e=u(t),B=l(t,"P",{});var Ho=c(B);St=a(Ho,"This client module has a few main classes that make up the bulk of its API:"),Ho.forEach(s),et=u(t),f=l(t,"UL",{});var y=c(f);M=l(y,"LI",{});var Lo=c(M);oe=l(Lo,"CODE",{});var xo=c(oe);qt=a(xo,"Producer"),xo.forEach(s),Rt=a(Lo,": To produce events to the Kafka cluster"),Lo.forEach(s),Ht=u(y),N=l(y,"LI",{});var To=c(N);ae=l(To,"CODE",{});var Ao=c(ae);xt=a(Ao,"Consumer"),Ao.forEach(s),At=a(To,": To read events from the Kafka cluster"),To.forEach(s),gt=u(y),J=l(y,"LI",{});var Io=c(J);ne=l(Io,"CODE",{});var go=c(ne);Ut=a(go,"SchemaRegistryClient"),go.forEach(s),jt=a(Io,": To get metadata/schemas about the Kafka cluster/topics when you have a Kafka Schema Registry server"),Io.forEach(s),Bt=u(y),I=l(y,"LI",{});var Fe=c(I);le=l(Fe,"CODE",{});var Uo=c(le);Mt=a(Uo,"Serializer"),Uo.forEach(s),Nt=a(Fe," / "),ce=l(Fe,"CODE",{});var jo=c(ce);Jt=a(jo,"Deserializer"),jo.forEach(s),Gt=a(Fe,": To serialize and deserialize messages sent/received from Kafka into/from formats like JSON, Protobuf, Avro, etc."),Fe.forEach(s),Ft=u(y),G=l(y,"LI",{});var Ko=c(G);re=l(Ko,"CODE",{});var Bo=c(re);Qt=a(Bo,"AdminClient"),Bo.forEach(s),Vt=a(Ko,": To manage the Kafka cluster (e.g. creating topics, partitions, etc.)"),Ko.forEach(s),y.forEach(s),tt=u(t),F=l(t,"H2",{});var Mo=c(F);Wt=a(Mo,"Producer"),Mo.forEach(s),st=u(t),K=l(t,"P",{});var Pt=c(K);Xt=a(Pt,"The "),ie=l(Pt,"CODE",{});var No=c(ie);Yt=a(No,"Producer"),No.forEach(s),Zt=a(Pt," class is used to send events to Kafka. It is responsible for:"),Pt.forEach(s),ot=u(t),k=l(t,"UL",{});var b=c(k);pe=l(b,"LI",{});var Jo=c(pe);$t=a(Jo,"Partition assignment of the events"),Jo.forEach(s),es=u(b),ue=l(b,"LI",{});var Go=c(ue);ts=a(Go,"Batching events for improved throughput (but added latency)"),Go.forEach(s),ss=u(b),de=l(b,"LI",{});var Fo=c(de);os=a(Fo,"Compression of events and its data"),Fo.forEach(s),as=u(b),fe=l(b,"LI",{});var Qo=c(fe);ns=a(Qo,"Retries (e.g. due to network errors)"),Qo.forEach(s),ls=u(b),ke=l(b,"LI",{});var Vo=c(ke);cs=a(Vo,"Response callbacks when events are successfully delivered"),Vo.forEach(s),b.forEach(s),at=u(t),Q=l(t,"H3",{});var Wo=c(Q);rs=a(Wo,"using Producer"),Wo.forEach(s),nt=u(t),R=l(t,"P",{});var zo=c(R);he=l(zo,"CODE",{});var Xo=c(he);is=a(Xo,"Producer"),Xo.forEach(s),ps=a(zo," can be initialised by passing in a dictionary of configuration settings to the constructor."),zo.forEach(s),lt=u(t),H=l(t,"PRE",{class:!0});var ja=c(H);ja.forEach(s),ct=u(t),V=l(t,"P",{});var Yo=c(V);us=a(Yo,"The configuration can include the following:"),Yo.forEach(s),rt=u(t),d=l(t,"UL",{});var E=c(d);z=l(E,"LI",{});var Qe=c(z);me=l(Qe,"CODE",{});var Zo=c(me);ds=a(Zo,"bootstrap.servers"),Zo.forEach(s),fs=a(Qe," ("),ve=l(Qe,"STRONG",{});var $o=c(ve);ks=a($o,"required"),$o.forEach(s),hs=a(Qe,"): the URL to the Kafka cluster/brokers"),Qe.forEach(s),ms=u(E),v=l(E,"LI",{});var O=c(v);Ee=l(O,"CODE",{});var ea=c(Ee);vs=a(ea,"acks"),ea.forEach(s),Es=a(O,": level of acknowledgement required before returning from produce request ("),_e=l(O,"CODE",{});var ta=c(_e);_s=a(ta,"0"),ta.forEach(s),ys=a(O,", "),ye=l(O,"CODE",{});var sa=c(ye);bs=a(sa,"1"),sa.forEach(s),Cs=a(O,", "),be=l(O,"CODE",{});var oa=c(be);Ps=a(oa,"all"),oa.forEach(s),ws=a(O," for no ack, only lead broker ack, and all broker acks, respectively)"),O.forEach(s),Os=u(E),_=l(E,"LI",{});var U=c(_);Ce=l(U,"CODE",{});var aa=c(Ce);Ds=a(aa,"compression.type"),aa.forEach(s),Ls=a(U,": enables compression of messages (e.g. "),Pe=l(U,"CODE",{});var na=c(Pe);Ts=a(na,"gzip"),na.forEach(s),Is=a(U,", "),we=l(U,"CODE",{});var la=c(we);Ks=a(la,"zstd"),la.forEach(s),zs=a(U,")"),U.forEach(s),Ss=u(E),x=l(E,"LI",{});var wt=c(x);Oe=l(wt,"CODE",{});var ca=c(Oe);qs=a(ca,"batch.size"),ca.forEach(s),Rs=a(wt,": number of bytes to batch up before sending produce request. Should be adjust with "),De=l(wt,"CODE",{});var ra=c(De);Hs=a(ra,"linger.ms"),ra.forEach(s),wt.forEach(s),xs=u(E),A=l(E,"LI",{});var Ot=c(A);Le=l(Ot,"CODE",{});var ia=c(Le);As=a(ia,"linger.ms"),ia.forEach(s),gs=a(Ot,": number of milliseconds to wait for batch before sending produce request (i.e. latency). Should be adjusted with "),Te=l(Ot,"CODE",{});var pa=c(Te);Us=a(pa,"batch.size"),pa.forEach(s),Ot.forEach(s),js=u(E),S=l(E,"LI",{});var Ve=c(S);Bs=a(Ve,"any other connection security settings like "),Ie=l(Ve,"CODE",{});var ua=c(Ie);Ms=a(ua,"security.protocol"),ua.forEach(s),Ns=a(Ve," and "),Ke=l(Ve,"CODE",{});var da=c(Ke);Js=a(da,"ssl.keystore"),da.forEach(s),Ve.forEach(s),E.forEach(s),it=u(t),W=l(t,"H3",{});var fa=c(W);Gs=a(fa,"methods"),fa.forEach(s),pt=u(t),P=l(t,"P",{});var We=c(P);Fs=a(We,"The 2 most important methods to take not of is "),ze=l(We,"CODE",{});var ka=c(ze);Qs=a(ka,".produce()"),ka.forEach(s),Vs=a(We," and "),Se=l(We,"CODE",{});var ha=c(Se);Ws=a(ha,".flush()"),ha.forEach(s),We.forEach(s),ut=u(t),w=l(t,"P",{});var Xe=c(w);qe=l(Xe,"CODE",{});var ma=c(qe);Xs=a(ma,".produce()"),ma.forEach(s),Ys=a(Xe," is used to send events to Kafka asynchronously, and "),Re=l(Xe,"CODE",{});var va=c(Re);Zs=a(va,".flush()"),va.forEach(s),$s=a(Xe," is used to make sure all produce requests and callbacks are complete."),Xe.forEach(s),dt=u(t),X=l(t,"H4",{});var Ea=c(X);eo=a(Ea,"methods for transactions"),Ea.forEach(s),ft=u(t),h=l(t,"P",{});var C=c(h);He=l(C,"CODE",{});var _a=c(He);to=a(_a,"Producer.init_transactions()"),_a.forEach(s),so=u(C),xe=l(C,"CODE",{});var ya=c(xe);oo=a(ya,"Producer.begin_transaction()"),ya.forEach(s),ao=u(C),Ae=l(C,"CODE",{});var ba=c(Ae);no=a(ba,"Producer.commit_transaction()"),ba.forEach(s),lo=u(C),ge=l(C,"CODE",{});var Ca=c(ge);co=a(Ca,"Producer.abort_transaction()"),Ca.forEach(s),ro=u(C),Ue=l(C,"CODE",{});var Pa=c(Ue);io=a(Pa,"Producer.send_offsets_to_transaction()"),Pa.forEach(s),C.forEach(s),kt=u(t),Y=l(t,"H3",{});var wa=c(Y);po=a(wa,"example"),wa.forEach(s),ht=u(t),g=l(t,"PRE",{class:!0});var Ba=c(g);Ba.forEach(s),mt=u(t),Z=l(t,"H2",{});var Oa=c(Z);uo=a(Oa,"Consumer"),Oa.forEach(s),vt=u(t),$=l(t,"H3",{});var Da=c($);fo=a(Da,"configs"),Da.forEach(s),Et=u(t),ee=l(t,"P",{});var La=c(ee);ko=a(La,"cluster location, security settings, consumer group settings"),La.forEach(s),_t=u(t),m=l(t,"P",{});var D=c(m);je=l(D,"CODE",{});var Ta=c(je);ho=a(Ta,"group.id"),Ta.forEach(s),mo=u(D),Be=l(D,"CODE",{});var Ia=c(Be);vo=a(Ia,"auto.offset.reset"),Ia.forEach(s),Eo=a(D,`: whether to always reset to start of topic, or only consume new events as they arrive
`),Me=l(D,"CODE",{});var Ka=c(Me);_o=a(Ka,"enable.auto.commit"),Ka.forEach(s),yo=a(D,`: whether to manually commit offsets using our code, or let the client automatically commit
`),Ne=l(D,"CODE",{});var za=c(Ne);bo=a(za,"isolation.level"),za.forEach(s),Co=a(D,": transaction processing, whether to read committed or uncomitted events"),D.forEach(s),yt=u(t),te=l(t,"H3",{});var Sa=c(te);Po=a(Sa,"methods"),Sa.forEach(s),bt=u(t),q=l(t,"P",{});var Dt=c(q);Je=l(Dt,"CODE",{});var qa=c(Je);wo=a(qa,"Consumer.subscribe()"),qa.forEach(s),Oo=u(Dt),Ge=l(Dt,"CODE",{});var Ra=c(Ge);Do=a(Ra,"Consumer.poll()"),Ra.forEach(s),Dt.forEach(s),this.h()},h(){Ha(H,"class","language-py"),Ha(g,"class","language-py")},m(t,r){i(t,L,r),e(L,Lt),i(t,Ye,r),i(t,T,r),e(T,Tt),e(T,se),e(se,It),e(T,Kt),i(t,Ze,r),i(t,j,r),e(j,zt),i(t,$e,r),i(t,B,r),e(B,St),i(t,et,r),i(t,f,r),e(f,M),e(M,oe),e(oe,qt),e(M,Rt),e(f,Ht),e(f,N),e(N,ae),e(ae,xt),e(N,At),e(f,gt),e(f,J),e(J,ne),e(ne,Ut),e(J,jt),e(f,Bt),e(f,I),e(I,le),e(le,Mt),e(I,Nt),e(I,ce),e(ce,Jt),e(I,Gt),e(f,Ft),e(f,G),e(G,re),e(re,Qt),e(G,Vt),i(t,tt,r),i(t,F,r),e(F,Wt),i(t,st,r),i(t,K,r),e(K,Xt),e(K,ie),e(ie,Yt),e(K,Zt),i(t,ot,r),i(t,k,r),e(k,pe),e(pe,$t),e(k,es),e(k,ue),e(ue,ts),e(k,ss),e(k,de),e(de,os),e(k,as),e(k,fe),e(fe,ns),e(k,ls),e(k,ke),e(ke,cs),i(t,at,r),i(t,Q,r),e(Q,rs),i(t,nt,r),i(t,R,r),e(R,he),e(he,is),e(R,ps),i(t,lt,r),i(t,H,r),H.innerHTML=ga,i(t,ct,r),i(t,V,r),e(V,us),i(t,rt,r),i(t,d,r),e(d,z),e(z,me),e(me,ds),e(z,fs),e(z,ve),e(ve,ks),e(z,hs),e(d,ms),e(d,v),e(v,Ee),e(Ee,vs),e(v,Es),e(v,_e),e(_e,_s),e(v,ys),e(v,ye),e(ye,bs),e(v,Cs),e(v,be),e(be,Ps),e(v,ws),e(d,Os),e(d,_),e(_,Ce),e(Ce,Ds),e(_,Ls),e(_,Pe),e(Pe,Ts),e(_,Is),e(_,we),e(we,Ks),e(_,zs),e(d,Ss),e(d,x),e(x,Oe),e(Oe,qs),e(x,Rs),e(x,De),e(De,Hs),e(d,xs),e(d,A),e(A,Le),e(Le,As),e(A,gs),e(A,Te),e(Te,Us),e(d,js),e(d,S),e(S,Bs),e(S,Ie),e(Ie,Ms),e(S,Ns),e(S,Ke),e(Ke,Js),i(t,it,r),i(t,W,r),e(W,Gs),i(t,pt,r),i(t,P,r),e(P,Fs),e(P,ze),e(ze,Qs),e(P,Vs),e(P,Se),e(Se,Ws),i(t,ut,r),i(t,w,r),e(w,qe),e(qe,Xs),e(w,Ys),e(w,Re),e(Re,Zs),e(w,$s),i(t,dt,r),i(t,X,r),e(X,eo),i(t,ft,r),i(t,h,r),e(h,He),e(He,to),e(h,so),e(h,xe),e(xe,oo),e(h,ao),e(h,Ae),e(Ae,no),e(h,lo),e(h,ge),e(ge,co),e(h,ro),e(h,Ue),e(Ue,io),i(t,kt,r),i(t,Y,r),e(Y,po),i(t,ht,r),i(t,g,r),g.innerHTML=Ua,i(t,mt,r),i(t,Z,r),e(Z,uo),i(t,vt,r),i(t,$,r),e($,fo),i(t,Et,r),i(t,ee,r),e(ee,ko),i(t,_t,r),i(t,m,r),e(m,je),e(je,ho),e(m,mo),e(m,Be),e(Be,vo),e(m,Eo),e(m,Me),e(Me,_o),e(m,yo),e(m,Ne),e(Ne,bo),e(m,Co),i(t,yt,r),i(t,te,r),e(te,Po),i(t,bt,r),i(t,q,r),e(q,Je),e(Je,wo),e(q,Oo),e(q,Ge),e(Ge,Do)},p:So,i:So,o:So,d(t){t&&s(L),t&&s(Ye),t&&s(T),t&&s(Ze),t&&s(j),t&&s($e),t&&s(B),t&&s(et),t&&s(f),t&&s(tt),t&&s(F),t&&s(st),t&&s(K),t&&s(ot),t&&s(k),t&&s(at),t&&s(Q),t&&s(nt),t&&s(R),t&&s(lt),t&&s(H),t&&s(ct),t&&s(V),t&&s(rt),t&&s(d),t&&s(it),t&&s(W),t&&s(pt),t&&s(P),t&&s(ut),t&&s(w),t&&s(dt),t&&s(X),t&&s(ft),t&&s(h),t&&s(kt),t&&s(Y),t&&s(ht),t&&s(g),t&&s(mt),t&&s(Z),t&&s(vt),t&&s($),t&&s(Et),t&&s(ee),t&&s(_t),t&&s(m),t&&s(yt),t&&s(te),t&&s(bt),t&&s(q)}}}const Fa={title:"Kafka and Python",date:"2023-03-15"},{title:xa,date:Va}=Fa;class Wa extends Ma{constructor(L){super(),Na(this,L,null,Ga,Ja,{})}}export{Wa as default,Fa as metadata};
