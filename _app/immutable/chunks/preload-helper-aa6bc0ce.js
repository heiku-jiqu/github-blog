const d=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),f=function(s,e){return new URL(s,e).href},l={},m=function(e,o,i){return!o||o.length===0?e():Promise.all(o.map(t=>{if(t=f(t,i),t in l)return;l[t]=!0;const n=t.endsWith(".css"),c=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${c}`))return;const r=document.createElement("link");if(r.rel=n?"stylesheet":d,n||(r.as="script",r.crossOrigin=""),r.href=t,document.head.appendChild(r),n)return new Promise((u,a)=>{r.addEventListener("load",u),r.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>e())};export{m as _};