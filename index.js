import{a as d,S as g,i as n}from"./assets/vendor-CNqCr-V-.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="54256417-25db5ea9abd41c713c8abda81",h="https://pixabay.com/api/";function y(o){const a=new URLSearchParams({key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return d.get(`${h}?${a}`).then(t=>{if(t.status!==200)throw new Error(t.status);return t.data})}const l=document.querySelector(".gallery"),u=document.querySelector(".loader");let b=new g(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const a=o.map(({webformatURL:t,largeImageURL:i,tags:e,likes:r,views:s,comments:m,downloads:f})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${i}">
                <img class="gallery-image" src="${t}" alt="${e}" />
            </a>
            <div class="info">
                <p><b>Likes:</b> ${r}</p>
                <p><b>Views:</b> ${s}</p>
                <p><b>Comments:</b> ${m}</p>
                <p><b>Downloads:</b> ${f}</p>
            </div>
        </li>`).join("");l.innerHTML=a,b.refresh()}function w(){l.innerHTML=""}function P(){u.classList.add("is-active")}function S(){u.classList.remove("is-active")}const c=document.querySelector("#search-form");c.addEventListener("submit",o=>{o.preventDefault();const a=o.currentTarget.elements["search-text"].value.trim();if(a===""){n.warning({message:"Please enter a search term!"});return}w(),P(),y(a).then(t=>{if(t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(t.hits)}).catch(t=>{console.error(t),n.error({message:"Something went wrong. Please try again later."})}).finally(()=>{S(),c.reset()})});
//# sourceMappingURL=index.js.map
