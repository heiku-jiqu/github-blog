import{S as Bt,i as Ht,s as Nt,k as i,q as o,a as m,l as r,m as h,r as l,h as t,c,M as Wt,n as z,b as n,B as s,A as at}from"./index-39c5cc75.js";function Ft(zt){let y,de,R,E,ye,X,w,we,B,ve,_e,Y,b,Ee,Z,k,be,$,T,ke,ee,x,v,ot,te,g,Te,se,S,xe,ae,C,_,lt,oe,I,ge,le,P,Se,ne,p,Ce,H,Ie,Pe,N,Ae,De,F,Oe,Me,G,We,je,U,ze,Be,q,He,Ne,ie,A,Fe,re,D,Ge,he,O,Ue,me,u,qe,L,Le,Ve,V,Je,Ke,J,Qe,Re,K,Xe,Ye,Q,Ze,$e,ce,M,et,pe,W,tt,ue,j,st;return{c(){y=i("h1"),de=o(jt),R=m(),E=i("h2"),ye=o("Background"),X=m(),w=i("p"),we=o(`After extensively using Neovim, and going down the bottomless rabbit hole of customizations (Telescope, Treesitter, LSPs, Formatters, Themes, Fonts), I sometimes find myself scratching my head how they all integrate with the terminal and shell.
Eventually, it dawned on me that these are actually two `),B=i("em"),ve=o("different"),_e=o(` things, although most of the time they are used interchangeably.
This post will explain what the differences are, and introduce some backstory on how they came to be, which will hopefully make more sense after reading through the post.`),Y=m(),b=i("h2"),Ee=o("Preface"),Z=m(),k=i("p"),be=o("I think it is important to first understand that most of these terms are actually already in use in the beginning of the computer industry, i.e. when computers are the size of a house, used punch cards, and displays weren\u2019t even a thing!"),$=m(),T=i("h2"),ke=o("Terminal"),ee=m(),x=i("p"),v=i("img"),te=m(),g=i("p"),Te=o(`In the beginning, terminals are physical text input/output instruments (relatively smaller) that can be attached to computers (which are still huge) for humans to interact with the computers.
The terminal receives physical keystrokes by the humans, \u201Ctranslates\u201D these keystrokes into text/signals and sends them to the computer.
The computer can then return any output to the terminal which will display it.
The terminal is not limited to computers in the same premise as it can also connect to computers that are remote.`),se=m(),S=i("h2"),xe=o("Console"),ae=m(),C=i("p"),_=i("img"),oe=m(),I=i("p"),ge=o(`Consoles are a subset of terminal where it is directly attached to a computer system, used to control the computer it is attached to.
Even so, a hardware console in the old days can also contain knobs/switches, not just text terminals.`),le=m(),P=i("h2"),Se=o("Terminal Emulators"),ne=m(),p=i("p"),Ce=o("A terminal emulator, like its name suggests, "),H=i("em"),Ie=o("emulates"),Pe=o(` the functions of a physical terminal in modern computers.
It is a `),N=i("em"),Ae=o("software application"),De=o(" that receives text inputs and displays text outputs, and connects to a computer (which is usually the computer running the terminal, but it can also connect remotely through "),F=i("code"),Oe=o("ssh"),Me=o(`).
Physical keystrokes on your keyboards sends signals (through OS and device drivers) to the terminal, where it processes and gets interpreted into to their corresponding graphic characters or control characters (e.g. Enter key).
Some examples include `),G=i("code"),We=o("Windows Terminal"),je=o(", "),U=i("code"),ze=o("WezTerm"),Be=o(" and "),q=i("code"),He=o("Alacritty"),Ne=o("."),ie=m(),A=i("p"),Fe=o("So now that we have a bunch of characters, where do they go when we want to issue a command to the computer?"),re=m(),D=i("h2"),Ge=o("Shell"),he=m(),O=i("p"),Ue=o(`A shell is a type of application whose purpose is to run other applications (hence the name \u201Cshell\u201D).
It also usually interacts with the operating system by issuing syscalls on your behalf (e.g. creating a new process).
By default, a terminal (emulator) will start a command line shell on startup/login.
When you type a bunch of characters and press enter, shells are the applications that interpret those commands and then runs the program.
It will then output to the terminal who will then display the text.`),me=m(),u=i("p"),qe=o("There are different types of shell provided by the major operating systems, "),L=i("code"),Le=o("bash"),Ve=o(" for Unix and "),V=i("code"),Je=o("cmd"),Ke=o("/"),J=i("code"),Qe=o("powershell"),Re=o(" for Windows, though there are also more customised versions like "),K=i("code"),Xe=o("zsh"),Ye=o("/"),Q=i("code"),Ze=o("fish"),$e=o(`.
Shells are interactive, where you can type commands and get back results.
They also come with their own flavour of full-fledged language for scripting purposes.`),ce=m(),M=i("p"),et=o("Note that shells are not confined to just text based programs, there are also graphical shells that run GUI applications within them."),pe=m(),W=i("h2"),tt=o("Conclusion"),ue=m(),j=i("p"),st=o(`Terminals and Shells are not the same thing.
Terminals handle input/output of text, displaying text and connection to computers.
Shells are applications that run other applications (yes that also means you can run a shell in another shell in another shell in another shell\u2026).
Shells and Terminals work hand in hand for humans to interact with computers through text interfaces.`),this.h()},l(e){y=r(e,"H1",{});var a=h(y);de=l(a,jt),a.forEach(t),R=c(e),E=r(e,"H2",{});var nt=h(E);ye=l(nt,"Background"),nt.forEach(t),X=c(e),w=r(e,"P",{});var fe=h(w);we=l(fe,`After extensively using Neovim, and going down the bottomless rabbit hole of customizations (Telescope, Treesitter, LSPs, Formatters, Themes, Fonts), I sometimes find myself scratching my head how they all integrate with the terminal and shell.
Eventually, it dawned on me that these are actually two `),B=r(fe,"EM",{});var it=h(B);ve=l(it,"different"),it.forEach(t),_e=l(fe,` things, although most of the time they are used interchangeably.
This post will explain what the differences are, and introduce some backstory on how they came to be, which will hopefully make more sense after reading through the post.`),fe.forEach(t),Y=c(e),b=r(e,"H2",{});var rt=h(b);Ee=l(rt,"Preface"),rt.forEach(t),Z=c(e),k=r(e,"P",{});var ht=h(k);be=l(ht,"I think it is important to first understand that most of these terms are actually already in use in the beginning of the computer industry, i.e. when computers are the size of a house, used punch cards, and displays weren\u2019t even a thing!"),ht.forEach(t),$=c(e),T=r(e,"H2",{});var mt=h(T);ke=l(mt,"Terminal"),mt.forEach(t),ee=c(e),x=r(e,"P",{});var ct=h(x);v=r(ct,"IMG",{src:!0,alt:!0,title:!0}),ct.forEach(t),te=c(e),g=r(e,"P",{});var pt=h(g);Te=l(pt,`In the beginning, terminals are physical text input/output instruments (relatively smaller) that can be attached to computers (which are still huge) for humans to interact with the computers.
The terminal receives physical keystrokes by the humans, \u201Ctranslates\u201D these keystrokes into text/signals and sends them to the computer.
The computer can then return any output to the terminal which will display it.
The terminal is not limited to computers in the same premise as it can also connect to computers that are remote.`),pt.forEach(t),se=c(e),S=r(e,"H2",{});var ut=h(S);xe=l(ut,"Console"),ut.forEach(t),ae=c(e),C=r(e,"P",{});var ft=h(C);_=r(ft,"IMG",{src:!0,alt:!0,title:!0}),ft.forEach(t),oe=c(e),I=r(e,"P",{});var dt=h(I);ge=l(dt,`Consoles are a subset of terminal where it is directly attached to a computer system, used to control the computer it is attached to.
Even so, a hardware console in the old days can also contain knobs/switches, not just text terminals.`),dt.forEach(t),le=c(e),P=r(e,"H2",{});var yt=h(P);Se=l(yt,"Terminal Emulators"),yt.forEach(t),ne=c(e),p=r(e,"P",{});var f=h(p);Ce=l(f,"A terminal emulator, like its name suggests, "),H=r(f,"EM",{});var wt=h(H);Ie=l(wt,"emulates"),wt.forEach(t),Pe=l(f,` the functions of a physical terminal in modern computers.
It is a `),N=r(f,"EM",{});var vt=h(N);Ae=l(vt,"software application"),vt.forEach(t),De=l(f," that receives text inputs and displays text outputs, and connects to a computer (which is usually the computer running the terminal, but it can also connect remotely through "),F=r(f,"CODE",{});var _t=h(F);Oe=l(_t,"ssh"),_t.forEach(t),Me=l(f,`).
Physical keystrokes on your keyboards sends signals (through OS and device drivers) to the terminal, where it processes and gets interpreted into to their corresponding graphic characters or control characters (e.g. Enter key).
Some examples include `),G=r(f,"CODE",{});var Et=h(G);We=l(Et,"Windows Terminal"),Et.forEach(t),je=l(f,", "),U=r(f,"CODE",{});var bt=h(U);ze=l(bt,"WezTerm"),bt.forEach(t),Be=l(f," and "),q=r(f,"CODE",{});var kt=h(q);He=l(kt,"Alacritty"),kt.forEach(t),Ne=l(f,"."),f.forEach(t),ie=c(e),A=r(e,"P",{});var Tt=h(A);Fe=l(Tt,"So now that we have a bunch of characters, where do they go when we want to issue a command to the computer?"),Tt.forEach(t),re=c(e),D=r(e,"H2",{});var xt=h(D);Ge=l(xt,"Shell"),xt.forEach(t),he=c(e),O=r(e,"P",{});var gt=h(O);Ue=l(gt,`A shell is a type of application whose purpose is to run other applications (hence the name \u201Cshell\u201D).
It also usually interacts with the operating system by issuing syscalls on your behalf (e.g. creating a new process).
By default, a terminal (emulator) will start a command line shell on startup/login.
When you type a bunch of characters and press enter, shells are the applications that interpret those commands and then runs the program.
It will then output to the terminal who will then display the text.`),gt.forEach(t),me=c(e),u=r(e,"P",{});var d=h(u);qe=l(d,"There are different types of shell provided by the major operating systems, "),L=r(d,"CODE",{});var St=h(L);Le=l(St,"bash"),St.forEach(t),Ve=l(d," for Unix and "),V=r(d,"CODE",{});var Ct=h(V);Je=l(Ct,"cmd"),Ct.forEach(t),Ke=l(d,"/"),J=r(d,"CODE",{});var It=h(J);Qe=l(It,"powershell"),It.forEach(t),Re=l(d," for Windows, though there are also more customised versions like "),K=r(d,"CODE",{});var Pt=h(K);Xe=l(Pt,"zsh"),Pt.forEach(t),Ye=l(d,"/"),Q=r(d,"CODE",{});var At=h(Q);Ze=l(At,"fish"),At.forEach(t),$e=l(d,`.
Shells are interactive, where you can type commands and get back results.
They also come with their own flavour of full-fledged language for scripting purposes.`),d.forEach(t),ce=c(e),M=r(e,"P",{});var Dt=h(M);et=l(Dt,"Note that shells are not confined to just text based programs, there are also graphical shells that run GUI applications within them."),Dt.forEach(t),pe=c(e),W=r(e,"H2",{});var Ot=h(W);tt=l(Ot,"Conclusion"),Ot.forEach(t),ue=c(e),j=r(e,"P",{});var Mt=h(j);st=l(Mt,`Terminals and Shells are not the same thing.
Terminals handle input/output of text, displaying text and connection to computers.
Shells are applications that run other applications (yes that also means you can run a shell in another shell in another shell in another shell\u2026).
Shells and Terminals work hand in hand for humans to interact with computers through text interfaces.`),Mt.forEach(t),this.h()},h(){Wt(v.src,ot="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/DEC_VT100_terminal_transparent.png/592px-DEC_VT100_terminal_transparent.png")||z(v,"src",ot),z(v,"alt","Computer Terminal from Wiki"),z(v,"title","A terminal"),Wt(_.src,lt="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Supercomputer_NSA-IBM360_85.jpg/592px-Supercomputer_NSA-IBM360_85.jpg")||z(_,"src",lt),z(_,"alt","IBM360 Model 85 Console from Wiki"),z(_,"title","A console")},m(e,a){n(e,y,a),s(y,de),n(e,R,a),n(e,E,a),s(E,ye),n(e,X,a),n(e,w,a),s(w,we),s(w,B),s(B,ve),s(w,_e),n(e,Y,a),n(e,b,a),s(b,Ee),n(e,Z,a),n(e,k,a),s(k,be),n(e,$,a),n(e,T,a),s(T,ke),n(e,ee,a),n(e,x,a),s(x,v),n(e,te,a),n(e,g,a),s(g,Te),n(e,se,a),n(e,S,a),s(S,xe),n(e,ae,a),n(e,C,a),s(C,_),n(e,oe,a),n(e,I,a),s(I,ge),n(e,le,a),n(e,P,a),s(P,Se),n(e,ne,a),n(e,p,a),s(p,Ce),s(p,H),s(H,Ie),s(p,Pe),s(p,N),s(N,Ae),s(p,De),s(p,F),s(F,Oe),s(p,Me),s(p,G),s(G,We),s(p,je),s(p,U),s(U,ze),s(p,Be),s(p,q),s(q,He),s(p,Ne),n(e,ie,a),n(e,A,a),s(A,Fe),n(e,re,a),n(e,D,a),s(D,Ge),n(e,he,a),n(e,O,a),s(O,Ue),n(e,me,a),n(e,u,a),s(u,qe),s(u,L),s(L,Le),s(u,Ve),s(u,V),s(V,Je),s(u,Ke),s(u,J),s(J,Qe),s(u,Re),s(u,K),s(K,Xe),s(u,Ye),s(u,Q),s(Q,Ze),s(u,$e),n(e,ce,a),n(e,M,a),s(M,et),n(e,pe,a),n(e,W,a),s(W,tt),n(e,ue,a),n(e,j,a),s(j,st)},p:at,i:at,o:at,d(e){e&&t(y),e&&t(R),e&&t(E),e&&t(X),e&&t(w),e&&t(Y),e&&t(b),e&&t(Z),e&&t(k),e&&t($),e&&t(T),e&&t(ee),e&&t(x),e&&t(te),e&&t(g),e&&t(se),e&&t(S),e&&t(ae),e&&t(C),e&&t(oe),e&&t(I),e&&t(le),e&&t(P),e&&t(ne),e&&t(p),e&&t(ie),e&&t(A),e&&t(re),e&&t(D),e&&t(he),e&&t(O),e&&t(me),e&&t(u),e&&t(ce),e&&t(M),e&&t(pe),e&&t(W),e&&t(ue),e&&t(j)}}}const Gt={title:"Terminal, Console, Shell",date:"2023-10-20"},{title:jt,date:qt}=Gt;class Lt extends Bt{constructor(y){super(),Ht(this,y,null,Ft,Nt,{})}}export{Lt as default,Gt as metadata};
