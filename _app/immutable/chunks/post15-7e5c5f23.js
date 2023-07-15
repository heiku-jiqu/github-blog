import{S as tf,i as ef,s as lf,k as r,q as p,a as y,l as s,m as o,r as a,h as e,c as h,n as w,b as i,B as f,A as Wl}from"./index-4cbca6b4.js";function ff(gi){let E,Me,Lt,S,ne,Mt,P,Te,nt,x,De,Tt,H,ze,Dt,I,Re,zt,L,je,Rt,M,qe,jt,n,Fe,qt,T,Ke,Ft,D,Oe,Kt,z,Be,Ot,R,Ge,Bt,j,Ue,Gt,q,Ne,Ut,F,We,Nt,K,Xe,Wt,O,Je,Xt,B,Qe,Jt,G,Ve,Qt,U,Ye,Vt,N,Ze,Yt,W,$e,Zt,X,de,$t,J,ge,dt,Q,tl,gt,V,el,te,Y,ll,ee,Z,il,le,$,fl,ie,d,rl,fe,g,sl,re,tt,ol,se,et,pl,oe,lt,al,pe,it,yl,ae,ft,hl,ye,rt,ml,he,st,vl,me,ot,ul,ve,pt,c,wl,ue,at,El,we,m,bt,_l,cl,St,Cl,Al,Pt,kl,Ee,v,bl,C,Sl,Pl,A,xl,Hl,_e,yt,Il,ce,u,xt,Ll,Ml,Ht,nl,Tl,It,Dl,Ce,ht,zl,Ae,mt,Rl,ke,vt,jl,be,ut,ql,Se,wt,Fl,Pe,Et,Kl,xe,_t,Ol,He,ct,k,Bl,Ie,_,Gl,b,Ul,Nl;return{c(){E=r("h1"),Me=p(di),Lt=y(),S=r("p"),ne=p(`When working with sensitive data, it is inevitable to come across cryptography terms scattered here and there, be it for storing data, sharing data, de-identifying data, etc.
This post aggregates some of the common terms that I\u2019ve come across related to cryptography in the software world, and also how the concepts relate to each other.`),Mt=y(),P=r("h2"),Te=p("Goals of Cryptography"),nt=y(),x=r("p"),De=p("Before diving into many of the cryptographic terms/acronyms used, it is useful to have a general overview of cryptography."),Tt=y(),H=r("p"),ze=p(`Confidentiality
Integrity
Authenticity
Availability
Non-repudiation`),Dt=y(),I=r("h2"),Re=p("Encryption, Decryption"),zt=y(),L=r("h2"),je=p("Plaintext"),Rt=y(),M=r("p"),qe=p(`Plaintext is the data/information that that is unencrypted.
This includes any type of binary data, not just textual data.`),jt=y(),n=r("h2"),Fe=p("Cyphertext"),qt=y(),T=r("p"),Ke=p("Cyphertexts are the output of encrypting plaintext."),Ft=y(),D=r("h2"),Oe=p("Cyphers"),Kt=y(),z=r("p"),Be=p("Cyphers refer to the algorithms that is used to transform plaintext into cyphertext (encrypt), or cyphertext into plaintext (decrypt)"),Ot=y(),R=r("h2"),Ge=p("Types of Algorithms / Cyphers"),Bt=y(),j=r("h3"),Ue=p("Hash Functions"),Gt=y(),q=r("p"),Ne=p("SHA"),Ut=y(),F=r("h4"),We=p("Message Integrity Code (MIC)"),Nt=y(),K=r("p"),Xe=p("aka Message Authentication Code (no relation with MAC Address which stands for Media Access Control Address)"),Wt=y(),O=r("p"),Je=p("Poly1305 (TLS)"),Xt=y(),B=r("h3"),Qe=p("Symmetric"),Jt=y(),G=r("p"),Ve=p("aka Public key cryptography"),Qt=y(),U=r("h4"),Ye=p("Block Cyphers"),Vt=y(),N=r("p"),Ze=p("AES"),Yt=y(),W=r("h5"),$e=p("Mode of Operation"),Zt=y(),X=r("p"),de=p("Since block cypher only work on fixed size blocks (e.g. 512bits), how do the algorithms deal with bigger sizes?"),$t=y(),J=r("p"),ge=p("GCM Mode?"),dt=y(),Q=r("h4"),tl=p("Stream Cyphers"),gt=y(),V=r("p"),el=p(`RC4/ARCFOUR/ARC4 (older versions of SSL/TLS, but not recommended)
ChaCha20 (TLS)`),te=y(),Y=r("h3"),ll=p("Asymmetric Algorithms"),ee=y(),Z=r("p"),il=p("aka Private key cryptography"),le=y(),$=r("p"),fl=p("RSA?"),ie=y(),d=r("h3"),rl=p("Hybrid Systems"),fe=y(),g=r("p"),sl=p("TLS (SSL), SSH"),re=y(),tt=r("h3"),ol=p("Strength of Algorithm"),se=y(),et=r("h2"),pl=p("Private / Public Keys"),oe=y(),lt=r("h2"),al=p("AEAD"),pe=y(),it=r("p"),yl=p("Authenticated Encryption, Associated Data"),ae=y(),ft=r("h2"),hl=p("Digital Signatures"),ye=y(),rt=r("p"),ml=p("Digital Signatures help to prove that the information sent to the recipient has not been tampered with in any way."),he=y(),st=r("h2"),vl=p("Public Key Certificates"),me=y(),ot=r("p"),ul=p("At a high level, a Certificate helps to (mostly) guarantee that a person is not an impostor."),ve=y(),pt=r("p"),c=r("a"),wl=p("https://crypto.stackexchange.com/questions/102565/how-do-certificates-help"),ue=y(),at=r("p"),El=p("Certificate includes information about:"),we=y(),m=r("ul"),bt=r("li"),_l=p("key"),cl=y(),St=r("li"),Cl=p("subject, aka identity of the key\u2019s owner"),Al=y(),Pt=r("li"),kl=p("issuer, aka entity that verified the certificate\u2019s contents"),Ee=y(),v=r("p"),bl=p(`Helps to address this issue: \u201CHow do I know the subject I am communicating with is who they say they are?\u201C.
More concretely, \u201CHow do I know if this particular server that will be serving me web pages to `),C=r("a"),Sl=p("www.abcxyz.com"),Pl=p(" is actually the server of "),A=r("a"),xl=p("www.abcxyz.com"),Hl=p(" and not just some other random server?\u201D"),_e=y(),yt=r("p"),Il=p("Other names:"),ce=y(),u=r("ul"),xt=r("li"),Ll=p("Digital Certificates"),Ml=y(),Ht=r("li"),nl=p("Identity Certificates"),Tl=y(),It=r("li"),Dl=p("Certificates"),Ce=y(),ht=r("h3"),zl=p("Certificate Authority"),Ae=y(),mt=r("h2"),Rl=p("PKCS#"),ke=y(),vt=r("h2"),jl=p("S/MIME"),be=y(),ut=r("h2"),ql=p("Fingerprint"),Se=y(),wt=r("h2"),Fl=p("pkcs .cer .pfx pem"),Pe=y(),Et=r("h2"),Kl=p("X.509"),xe=y(),_t=r("h1"),Ol=p("Links"),He=y(),ct=r("p"),k=r("a"),Bl=p("TLS"),Ie=y(),_=r("p"),Gl=p("("),b=r("a"),Ul=p("https://crypto.stackexchange.com/questions/87078/stream-cipher-and-block-cipher-usage-in-network-data-encryption"),Nl=p(")"),this.h()},l(t){E=s(t,"H1",{});var l=o(E);Me=a(l,di),l.forEach(e),Lt=h(t),S=s(t,"P",{});var Xl=o(S);ne=a(Xl,`When working with sensitive data, it is inevitable to come across cryptography terms scattered here and there, be it for storing data, sharing data, de-identifying data, etc.
This post aggregates some of the common terms that I\u2019ve come across related to cryptography in the software world, and also how the concepts relate to each other.`),Xl.forEach(e),Mt=h(t),P=s(t,"H2",{});var Jl=o(P);Te=a(Jl,"Goals of Cryptography"),Jl.forEach(e),nt=h(t),x=s(t,"P",{});var Ql=o(x);De=a(Ql,"Before diving into many of the cryptographic terms/acronyms used, it is useful to have a general overview of cryptography."),Ql.forEach(e),Tt=h(t),H=s(t,"P",{});var Vl=o(H);ze=a(Vl,`Confidentiality
Integrity
Authenticity
Availability
Non-repudiation`),Vl.forEach(e),Dt=h(t),I=s(t,"H2",{});var Yl=o(I);Re=a(Yl,"Encryption, Decryption"),Yl.forEach(e),zt=h(t),L=s(t,"H2",{});var Zl=o(L);je=a(Zl,"Plaintext"),Zl.forEach(e),Rt=h(t),M=s(t,"P",{});var $l=o(M);qe=a($l,`Plaintext is the data/information that that is unencrypted.
This includes any type of binary data, not just textual data.`),$l.forEach(e),jt=h(t),n=s(t,"H2",{});var dl=o(n);Fe=a(dl,"Cyphertext"),dl.forEach(e),qt=h(t),T=s(t,"P",{});var gl=o(T);Ke=a(gl,"Cyphertexts are the output of encrypting plaintext."),gl.forEach(e),Ft=h(t),D=s(t,"H2",{});var ti=o(D);Oe=a(ti,"Cyphers"),ti.forEach(e),Kt=h(t),z=s(t,"P",{});var ei=o(z);Be=a(ei,"Cyphers refer to the algorithms that is used to transform plaintext into cyphertext (encrypt), or cyphertext into plaintext (decrypt)"),ei.forEach(e),Ot=h(t),R=s(t,"H2",{});var li=o(R);Ge=a(li,"Types of Algorithms / Cyphers"),li.forEach(e),Bt=h(t),j=s(t,"H3",{});var ii=o(j);Ue=a(ii,"Hash Functions"),ii.forEach(e),Gt=h(t),q=s(t,"P",{});var fi=o(q);Ne=a(fi,"SHA"),fi.forEach(e),Ut=h(t),F=s(t,"H4",{});var ri=o(F);We=a(ri,"Message Integrity Code (MIC)"),ri.forEach(e),Nt=h(t),K=s(t,"P",{});var si=o(K);Xe=a(si,"aka Message Authentication Code (no relation with MAC Address which stands for Media Access Control Address)"),si.forEach(e),Wt=h(t),O=s(t,"P",{});var oi=o(O);Je=a(oi,"Poly1305 (TLS)"),oi.forEach(e),Xt=h(t),B=s(t,"H3",{});var pi=o(B);Qe=a(pi,"Symmetric"),pi.forEach(e),Jt=h(t),G=s(t,"P",{});var ai=o(G);Ve=a(ai,"aka Public key cryptography"),ai.forEach(e),Qt=h(t),U=s(t,"H4",{});var yi=o(U);Ye=a(yi,"Block Cyphers"),yi.forEach(e),Vt=h(t),N=s(t,"P",{});var hi=o(N);Ze=a(hi,"AES"),hi.forEach(e),Yt=h(t),W=s(t,"H5",{});var mi=o(W);$e=a(mi,"Mode of Operation"),mi.forEach(e),Zt=h(t),X=s(t,"P",{});var vi=o(X);de=a(vi,"Since block cypher only work on fixed size blocks (e.g. 512bits), how do the algorithms deal with bigger sizes?"),vi.forEach(e),$t=h(t),J=s(t,"P",{});var ui=o(J);ge=a(ui,"GCM Mode?"),ui.forEach(e),dt=h(t),Q=s(t,"H4",{});var wi=o(Q);tl=a(wi,"Stream Cyphers"),wi.forEach(e),gt=h(t),V=s(t,"P",{});var Ei=o(V);el=a(Ei,`RC4/ARCFOUR/ARC4 (older versions of SSL/TLS, but not recommended)
ChaCha20 (TLS)`),Ei.forEach(e),te=h(t),Y=s(t,"H3",{});var _i=o(Y);ll=a(_i,"Asymmetric Algorithms"),_i.forEach(e),ee=h(t),Z=s(t,"P",{});var ci=o(Z);il=a(ci,"aka Private key cryptography"),ci.forEach(e),le=h(t),$=s(t,"P",{});var Ci=o($);fl=a(Ci,"RSA?"),Ci.forEach(e),ie=h(t),d=s(t,"H3",{});var Ai=o(d);rl=a(Ai,"Hybrid Systems"),Ai.forEach(e),fe=h(t),g=s(t,"P",{});var ki=o(g);sl=a(ki,"TLS (SSL), SSH"),ki.forEach(e),re=h(t),tt=s(t,"H3",{});var bi=o(tt);ol=a(bi,"Strength of Algorithm"),bi.forEach(e),se=h(t),et=s(t,"H2",{});var Si=o(et);pl=a(Si,"Private / Public Keys"),Si.forEach(e),oe=h(t),lt=s(t,"H2",{});var Pi=o(lt);al=a(Pi,"AEAD"),Pi.forEach(e),pe=h(t),it=s(t,"P",{});var xi=o(it);yl=a(xi,"Authenticated Encryption, Associated Data"),xi.forEach(e),ae=h(t),ft=s(t,"H2",{});var Hi=o(ft);hl=a(Hi,"Digital Signatures"),Hi.forEach(e),ye=h(t),rt=s(t,"P",{});var Ii=o(rt);ml=a(Ii,"Digital Signatures help to prove that the information sent to the recipient has not been tampered with in any way."),Ii.forEach(e),he=h(t),st=s(t,"H2",{});var Li=o(st);vl=a(Li,"Public Key Certificates"),Li.forEach(e),me=h(t),ot=s(t,"P",{});var Mi=o(ot);ul=a(Mi,"At a high level, a Certificate helps to (mostly) guarantee that a person is not an impostor."),Mi.forEach(e),ve=h(t),pt=s(t,"P",{});var ni=o(pt);c=s(ni,"A",{href:!0,rel:!0});var Ti=o(c);wl=a(Ti,"https://crypto.stackexchange.com/questions/102565/how-do-certificates-help"),Ti.forEach(e),ni.forEach(e),ue=h(t),at=s(t,"P",{});var Di=o(at);El=a(Di,"Certificate includes information about:"),Di.forEach(e),we=h(t),m=s(t,"UL",{});var Ct=o(m);bt=s(Ct,"LI",{});var zi=o(bt);_l=a(zi,"key"),zi.forEach(e),cl=h(Ct),St=s(Ct,"LI",{});var Ri=o(St);Cl=a(Ri,"subject, aka identity of the key\u2019s owner"),Ri.forEach(e),Al=h(Ct),Pt=s(Ct,"LI",{});var ji=o(Pt);kl=a(ji,"issuer, aka entity that verified the certificate\u2019s contents"),ji.forEach(e),Ct.forEach(e),Ee=h(t),v=s(t,"P",{});var At=o(v);bl=a(At,`Helps to address this issue: \u201CHow do I know the subject I am communicating with is who they say they are?\u201C.
More concretely, \u201CHow do I know if this particular server that will be serving me web pages to `),C=s(At,"A",{href:!0,rel:!0});var qi=o(C);Sl=a(qi,"www.abcxyz.com"),qi.forEach(e),Pl=a(At," is actually the server of "),A=s(At,"A",{href:!0,rel:!0});var Fi=o(A);xl=a(Fi,"www.abcxyz.com"),Fi.forEach(e),Hl=a(At," and not just some other random server?\u201D"),At.forEach(e),_e=h(t),yt=s(t,"P",{});var Ki=o(yt);Il=a(Ki,"Other names:"),Ki.forEach(e),ce=h(t),u=s(t,"UL",{});var kt=o(u);xt=s(kt,"LI",{});var Oi=o(xt);Ll=a(Oi,"Digital Certificates"),Oi.forEach(e),Ml=h(kt),Ht=s(kt,"LI",{});var Bi=o(Ht);nl=a(Bi,"Identity Certificates"),Bi.forEach(e),Tl=h(kt),It=s(kt,"LI",{});var Gi=o(It);Dl=a(Gi,"Certificates"),Gi.forEach(e),kt.forEach(e),Ce=h(t),ht=s(t,"H3",{});var Ui=o(ht);zl=a(Ui,"Certificate Authority"),Ui.forEach(e),Ae=h(t),mt=s(t,"H2",{});var Ni=o(mt);Rl=a(Ni,"PKCS#"),Ni.forEach(e),ke=h(t),vt=s(t,"H2",{});var Wi=o(vt);jl=a(Wi,"S/MIME"),Wi.forEach(e),be=h(t),ut=s(t,"H2",{});var Xi=o(ut);ql=a(Xi,"Fingerprint"),Xi.forEach(e),Se=h(t),wt=s(t,"H2",{});var Ji=o(wt);Fl=a(Ji,"pkcs .cer .pfx pem"),Ji.forEach(e),Pe=h(t),Et=s(t,"H2",{});var Qi=o(Et);Kl=a(Qi,"X.509"),Qi.forEach(e),xe=h(t),_t=s(t,"H1",{});var Vi=o(_t);Ol=a(Vi,"Links"),Vi.forEach(e),He=h(t),ct=s(t,"P",{});var Yi=o(ct);k=s(Yi,"A",{href:!0,rel:!0});var Zi=o(k);Bl=a(Zi,"TLS"),Zi.forEach(e),Yi.forEach(e),Ie=h(t),_=s(t,"P",{});var Le=o(_);Gl=a(Le,"("),b=s(Le,"A",{href:!0,rel:!0});var $i=o(b);Ul=a($i,"https://crypto.stackexchange.com/questions/87078/stream-cipher-and-block-cipher-usage-in-network-data-encryption"),$i.forEach(e),Nl=a(Le,")"),Le.forEach(e),this.h()},h(){w(c,"href","https://crypto.stackexchange.com/questions/102565/how-do-certificates-help"),w(c,"rel","nofollow"),w(C,"href","http://www.abcxyz.com"),w(C,"rel","nofollow"),w(A,"href","http://www.abcxyz.com"),w(A,"rel","nofollow"),w(k,"href","https://www.rfc-editor.org/rfc/rfc8446"),w(k,"rel","nofollow"),w(b,"href","https://crypto.stackexchange.com/questions/87078/stream-cipher-and-block-cipher-usage-in-network-data-encryption"),w(b,"rel","nofollow")},m(t,l){i(t,E,l),f(E,Me),i(t,Lt,l),i(t,S,l),f(S,ne),i(t,Mt,l),i(t,P,l),f(P,Te),i(t,nt,l),i(t,x,l),f(x,De),i(t,Tt,l),i(t,H,l),f(H,ze),i(t,Dt,l),i(t,I,l),f(I,Re),i(t,zt,l),i(t,L,l),f(L,je),i(t,Rt,l),i(t,M,l),f(M,qe),i(t,jt,l),i(t,n,l),f(n,Fe),i(t,qt,l),i(t,T,l),f(T,Ke),i(t,Ft,l),i(t,D,l),f(D,Oe),i(t,Kt,l),i(t,z,l),f(z,Be),i(t,Ot,l),i(t,R,l),f(R,Ge),i(t,Bt,l),i(t,j,l),f(j,Ue),i(t,Gt,l),i(t,q,l),f(q,Ne),i(t,Ut,l),i(t,F,l),f(F,We),i(t,Nt,l),i(t,K,l),f(K,Xe),i(t,Wt,l),i(t,O,l),f(O,Je),i(t,Xt,l),i(t,B,l),f(B,Qe),i(t,Jt,l),i(t,G,l),f(G,Ve),i(t,Qt,l),i(t,U,l),f(U,Ye),i(t,Vt,l),i(t,N,l),f(N,Ze),i(t,Yt,l),i(t,W,l),f(W,$e),i(t,Zt,l),i(t,X,l),f(X,de),i(t,$t,l),i(t,J,l),f(J,ge),i(t,dt,l),i(t,Q,l),f(Q,tl),i(t,gt,l),i(t,V,l),f(V,el),i(t,te,l),i(t,Y,l),f(Y,ll),i(t,ee,l),i(t,Z,l),f(Z,il),i(t,le,l),i(t,$,l),f($,fl),i(t,ie,l),i(t,d,l),f(d,rl),i(t,fe,l),i(t,g,l),f(g,sl),i(t,re,l),i(t,tt,l),f(tt,ol),i(t,se,l),i(t,et,l),f(et,pl),i(t,oe,l),i(t,lt,l),f(lt,al),i(t,pe,l),i(t,it,l),f(it,yl),i(t,ae,l),i(t,ft,l),f(ft,hl),i(t,ye,l),i(t,rt,l),f(rt,ml),i(t,he,l),i(t,st,l),f(st,vl),i(t,me,l),i(t,ot,l),f(ot,ul),i(t,ve,l),i(t,pt,l),f(pt,c),f(c,wl),i(t,ue,l),i(t,at,l),f(at,El),i(t,we,l),i(t,m,l),f(m,bt),f(bt,_l),f(m,cl),f(m,St),f(St,Cl),f(m,Al),f(m,Pt),f(Pt,kl),i(t,Ee,l),i(t,v,l),f(v,bl),f(v,C),f(C,Sl),f(v,Pl),f(v,A),f(A,xl),f(v,Hl),i(t,_e,l),i(t,yt,l),f(yt,Il),i(t,ce,l),i(t,u,l),f(u,xt),f(xt,Ll),f(u,Ml),f(u,Ht),f(Ht,nl),f(u,Tl),f(u,It),f(It,Dl),i(t,Ce,l),i(t,ht,l),f(ht,zl),i(t,Ae,l),i(t,mt,l),f(mt,Rl),i(t,ke,l),i(t,vt,l),f(vt,jl),i(t,be,l),i(t,ut,l),f(ut,ql),i(t,Se,l),i(t,wt,l),f(wt,Fl),i(t,Pe,l),i(t,Et,l),f(Et,Kl),i(t,xe,l),i(t,_t,l),f(_t,Ol),i(t,He,l),i(t,ct,l),f(ct,k),f(k,Bl),i(t,Ie,l),i(t,_,l),f(_,Gl),f(_,b),f(b,Ul),f(_,Nl)},p:Wl,i:Wl,o:Wl,d(t){t&&e(E),t&&e(Lt),t&&e(S),t&&e(Mt),t&&e(P),t&&e(nt),t&&e(x),t&&e(Tt),t&&e(H),t&&e(Dt),t&&e(I),t&&e(zt),t&&e(L),t&&e(Rt),t&&e(M),t&&e(jt),t&&e(n),t&&e(qt),t&&e(T),t&&e(Ft),t&&e(D),t&&e(Kt),t&&e(z),t&&e(Ot),t&&e(R),t&&e(Bt),t&&e(j),t&&e(Gt),t&&e(q),t&&e(Ut),t&&e(F),t&&e(Nt),t&&e(K),t&&e(Wt),t&&e(O),t&&e(Xt),t&&e(B),t&&e(Jt),t&&e(G),t&&e(Qt),t&&e(U),t&&e(Vt),t&&e(N),t&&e(Yt),t&&e(W),t&&e(Zt),t&&e(X),t&&e($t),t&&e(J),t&&e(dt),t&&e(Q),t&&e(gt),t&&e(V),t&&e(te),t&&e(Y),t&&e(ee),t&&e(Z),t&&e(le),t&&e($),t&&e(ie),t&&e(d),t&&e(fe),t&&e(g),t&&e(re),t&&e(tt),t&&e(se),t&&e(et),t&&e(oe),t&&e(lt),t&&e(pe),t&&e(it),t&&e(ae),t&&e(ft),t&&e(ye),t&&e(rt),t&&e(he),t&&e(st),t&&e(me),t&&e(ot),t&&e(ve),t&&e(pt),t&&e(ue),t&&e(at),t&&e(we),t&&e(m),t&&e(Ee),t&&e(v),t&&e(_e),t&&e(yt),t&&e(ce),t&&e(u),t&&e(Ce),t&&e(ht),t&&e(Ae),t&&e(mt),t&&e(ke),t&&e(vt),t&&e(be),t&&e(ut),t&&e(Se),t&&e(wt),t&&e(Pe),t&&e(Et),t&&e(xe),t&&e(_t),t&&e(He),t&&e(ct),t&&e(Ie),t&&e(_)}}}const rf={title:"Cryptic Cryptography Codex",date:"2023-06-23"},{title:di,date:of}=rf;class pf extends tf{constructor(E){super(),ef(this,E,null,ff,lf,{})}}export{pf as default,rf as metadata};
