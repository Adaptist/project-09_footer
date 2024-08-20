(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();document.querySelector(".footer-comment").addEventListener("input",function(){const s=this.cols;this.value.length>s&&(this.value=this.value.substring(0,s-3)+"...")});document.getElementById("email").addEventListener("input",function(){const s=this,t=document.getElementById("email-validation");s.checkValidity()?(s.classList.remove("error"),s.classList.add("success"),t.textContent="Success!",t.classList.remove("error"),t.classList.add("success")):(s.classList.remove("success"),s.classList.add("error"),t.textContent="Invalid email, try again",t.classList.remove("success"),t.classList.add("error"))});document.querySelector(".form-btn").addEventListener("click",function(s){s.preventDefault();const t=document.getElementById("email").value,o=document.getElementById("comment").value;fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,comment:o})}).then(e=>{if(!e.ok)throw new Error("Server error");return e.json()}).then(e=>{document.querySelector(".footer-form").reset(),i(e.title,e.message)}).catch(e=>{d("Error","Something went wrong. Please check your input and try again.")})});function i(s,t){const o=document.createElement("div");o.classList.add("modal"),o.innerHTML=`
        <div class="modal-content">
            <button class="modal-close">X
                <svg class="modal-close-svg" width="11" height="11">
                    <use href="/src/img/icon.svg#icon-x"></use>
                </svg>
            </button>
            <h3>${s}</h3>
            <p>${t}</p>
        </div>
    `,document.body.appendChild(o),o.querySelector(".modal-close").addEventListener("click",r),o.addEventListener("click",function(e){e.target===o&&r()}),document.addEventListener("keydown",function(e){e.key==="Escape"&&r()});function r(){document.body.removeChild(o)}}function d(s,t){const o=document.createElement("div");o.classList.add("toast"),o.innerHTML=`
        <strong>${s}</strong>
        <p>${t}</p>
    `,document.body.appendChild(o),setTimeout(()=>{document.body.removeChild(o)},3e3)}
//# sourceMappingURL=commonHelpers.js.map
