import{s as g}from"./typingInterval-b805e32c.js";import{o as p}from"./isInRange-d476866c.js";let m=[];const d=t=>m.find(n=>n.currentNode===t),f=t=>{const n=(e=>{const r=/(<([^>]+)>)/g,s=[];let a;for(;(a=r.exec(e.innerHTML))!==null;){const c=a.index,i=r.lastIndex;s.push([c,i-1])}return s})(t),o=t.innerHTML.split("").map((e,r)=>{const{matchingLetters:s}=d(t),a=s.includes(r)||e.match(/\s+/g)||((i,l)=>l.some(([u,h])=>p(i,[u,h])))(r,n),c=String.fromCharCode(65+Math.round(50*Math.random()));return a?e:c}).join("");t.innerHTML=o},L=(t,n)=>{const o=t.innerHTML;for(let e=0;e<n.length;e++){const r=n[e],{matchingLetters:s}=d(t);!s.includes(e)&&r===o[e]&&s.push(e)}},H=async({elements:t},n)=>{m=[...t.map(({currentNode:o})=>({currentNode:o,matchingLetters:[]}))],await new Promise(o=>{t.forEach(async({currentNode:e,text:r})=>{const s=typeof n.scramble=="number"?n.scramble:3e3,a=new Date().getTime();for(;;){f(e),L(e,r),await g(n.interval);const c=e.innerHTML!=r,i=new Date().getTime()-a<s;if(!c||!i){o();break}}e.innerHTML=r})}),n.dispatch("done")};export{H as mode};
