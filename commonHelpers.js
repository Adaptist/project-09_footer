(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();document.querySelector(".footer-comment").addEventListener("input",function(){const r=this.cols;this.value.length>r&&(this.value=this.value.substring(0,r-3)+"...")});document.getElementById("email").addEventListener("input",function(){const r=this,s=document.getElementById("email-validation");r.checkValidity()?(r.classList.remove("error"),r.classList.add("success"),s.textContent="Success!",s.classList.remove("error"),s.classList.add("success")):(r.classList.remove("success"),r.classList.add("error"),s.textContent="Invalid email, try again",s.classList.remove("success"),s.classList.add("error"))});
//# sourceMappingURL=commonHelpers.js.map
