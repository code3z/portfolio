import{e as o}from"./writeEffect-ad25c0cc.js";import{t as a}from"./onAnimationEnd-c4ef4008.js";import"./typingInterval-b805e32c.js";const s=async({elements:c},e)=>{if(e.cascade)(t=>{t.forEach(n=>n.currentNode.textContent="")})(c);else{const{getLongestTextElement:t}=await import("./index-4cce485c.js"),n=t(c);a(n,()=>e.dispatch("done"))}for(const t of c)e.cascade?await o(t,e):o(t,e);e.cascade&&e.dispatch("done")};export{s as mode};
