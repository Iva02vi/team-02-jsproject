(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){const i="https://energyflow.b.goit.study/api/quote",r="quoteData",s=new Date().toISOString().split("T")[0],n=document.getElementById("quote"),e=JSON.parse(localStorage.getItem(r));e&&e.date===s?t(e.quote,e.author):fetch(i).then(o=>o.json()).then(o=>{const c=o.quote,u=o.author;t(c,u),localStorage.setItem(r,JSON.stringify({quote:c,author:u,date:s}))}).catch(o=>{console.error("Error fetching quote:",o),e&&t(e.quote,e.author)});function t(o,c){const u=n.querySelector(".quote-text"),l=n.querySelector(".quote-author");u.textContent=o,l.textContent=c}});
//# sourceMappingURL=quote-1da8f9b3.js.map
