const a=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function l(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=l(t);fetch(t.href,o)}};a();const r=document.getElementById("line"),c=document.getElementById("lineMobile"),i=r.getTotalLength(),d=c.getTotalLength();r.style.strokeDasharray=i;r.style.strokeDashoffset=i;c.style.strokeDasharray=d;c.style.strokeDashoffset=d;function m(e){const n=(document.body.scrollTop+document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight);if(e.getTotalLength()>3e3){const s=d*n;e.style.strokeDashoffset=d-s}const l=i*n;e.style.strokeDashoffset=i-l}window.addEventListener("scroll",()=>{m(r)});window.addEventListener("scroll",()=>{m(c)});const f=document.querySelectorAll(".js-scroll"),g=(e,n=1)=>e.getBoundingClientRect().top<=(window.innerHeight||document.documentElement.clientHeight)/n,h=e=>e.getBoundingClientRect().top>(window.innerHeight||document.documentElement.clientHeight),p=e=>{e.classList.add("scrolled")},y=e=>{e.classList.remove("scrolled")},w=()=>{f.forEach(e=>{g(e,1.75)?p(e):h(e)&&y(e)})};window.addEventListener("scroll",()=>{w()});