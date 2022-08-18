(function(){"use strict";var o=Math.round;function a(a){const b=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2});return b.format(a)}function b(a){const b=a.querySelector(".savings-calculator__section-heading");767<window.innerWidth?window.scrollTo({top:b.offsetTop-73,behavior:"smooth"}):window.scrollTo({top:b.offsetTop-106,behavior:"smooth"})}function c(a,b,c){setTimeout(()=>{a.classList.add(`shift-out-${c}`)},b),setTimeout(()=>{a.classList.remove(`shift-out-${c}`),a.classList.add("hidden"),a.classList.add("transparent")},b+s)}function d(a,b,c,d){setTimeout(()=>{b.classList.remove("hidden")},c),setTimeout(()=>{b.classList.remove("transparent"),b.classList.add(`shift-in-${d}-${a}`)},c+10),setTimeout(()=>{b.classList.remove(`shift-in-${d}-${a}`)},c+s)}function e(a,b,e,f=!1){f?(c(a,b,"right"),setTimeout(()=>{a.textContent=e,d(16,a,b,"left")},b+s)):(c(a,b,"left"),setTimeout(()=>{a.textContent=e,d(16,a,b,"right")},b+s))}function f(a,b,e,f,h=!1){h?(c(e,f,"right"),setTimeout(()=>{b.classList.remove("current-step"),a.classList.add("current-step"),g(a,e),d(16,e,f,"left")},f+s)):(c(e,f,"left"),setTimeout(()=>{b.classList.remove("current-step"),a.classList.add("current-step"),g(a,e),d(16,e,f,"right")},f+s))}function g(a,b){const c=b.querySelector(".savings-calculator__tags"),d=parseInt(window.getComputedStyle(c,null).getPropertyValue("padding-left").replace("px",""));b.scrollLeft=a.offsetLeft-d}function h(a,g){const h=a.querySelector(".savings-calculator__tags__wrapper"),i=a.querySelector(`#calculator-step-tag-${r+1}`);e(g,0,q[r+1].heading),c(a.querySelector(`#calculator-step-block-${r+1}`),200,"left"),r++;const j=a.querySelector(`#calculator-step-tag-${r+1}`);f(j,i,h,0),1===r&&b(a),d(16,a.querySelector(`#calculator-step-block-${r+1}`),600,"right")}function i(a,b){const g=a.querySelector(".savings-calculator__tags__wrapper"),h=a.querySelector(`#calculator-step-tag-${r+1}`);e(b,0,q[r-1].heading,!0),c(a.querySelector(`#calculator-step-block-${r+1}`),200,"right"),r--;const i=a.querySelector(`#calculator-step-tag-${r+1}`);f(i,h,g,0,!0),d(16,a.querySelector(`#calculator-step-block-${r+1}`),600,"left")}function j({tag:a,id:b,classList:c,textContent:d,href:e,src:f,alt:g,htmlElements:h,inlineStyle:i,injectPoint:j,target:k}){const l=document.createElement(a);return b?l.id=b:null,c?c.forEach(a=>{l.classList.add(`${a}`)}):null,d?l.textContent=d:null,e?l.href=e:null,f?l.src=f:null,g?l.alt=g:null,i?l.style=i:null,h?h.forEach(a=>{l.insertAdjacentHTML("beforeend",a)}):null,k?l.setAttribute("target",k):null,j?j.insertAdjacentElement("beforeend",l):null,l}function k(a,b){const c=b.querySelector(".calculator-chev-up"),d=b.querySelector(".calculator-chev-down");c&&a.classList.contains("expanded")&&(a.classList.remove("expanded"),d.style.display="block",c.style.display="none",a.style.maxHeight="70px")}function l(a){const b=a.querySelector(".savings-calculator__result-block");b&&b.remove()}function m(a,b){const c=/[+-]?\d+(\.\d+)?/g,d=a.textContent,e=d.match(c).map(function(a){return parseFloat(a)});let f=0;const g=e/400;setInterval(()=>{f+g<e?f+=g:f=e,a.textContent=`${(o(100*f)/100).toFixed(b)}`},1)}function n(a,b){a.dataset.metricsCustomhandler="true",a.dataset.metricsLinkId=b,a.dataset.metricsEvent="e_linkClick",a.dataset.metricsLinkPlacement=`ink-calculator-2`,a.addEventListener("click",()=>{dataLayer.push({event:a.dataset.metricsEvent,linkPlacement:a.dataset.metricsLinkPlacement,linkID:a.dataset.metricsLinkId})})}// Animations for elements when scrolled into view
const p=[{name:"Business",pagesPerMonth:700,monthlyCost:2499,annualCost:29988},{name:"Frequent",pagesPerMonth:300,monthlyCost:1199,annualCost:14388},{name:"Moderate",pagesPerMonth:100,monthlyCost:599,annualCost:7188},{name:"Occasional",pagesPerMonth:50,monthlyCost:399,annualCost:4788},{name:"Light",pagesPerMonth:10,monthlyCost:99,annualCost:1188}],q=[{heading:"How often do you replace your cartridges?",tag:"Select printing frequency"},{heading:"What type of cartridge do you use?",tag:"Select ink type"},{heading:"See your estimated annual savings.",tag:"See estimated savings"}];let r=0;const s=400;(function(){document.addEventListener("DOMContentLoaded",function(){function a(a,b){for(let c=0;c<a.length;++c)a[c].classList.add(b)}function b(a,b){for(let c=0;c<a.length;++c)a[c].classList.remove(b)}const c=document.querySelectorAll(".fly-in-right-animation"),d=document.querySelectorAll(".fly-in-right-animation--delayed");if(!("IntersectionObserver"in window)||!("IntersectionObserverEntry"in window)||!("intersectionRatio"in window.IntersectionObserverEntry.prototype))// fallback for IE and other old browsers.
a(c,"fly-in-right"),a(d,"fly-in-right--delayed"),setTimeout(function(){b(c,"fly-in-right-animation")},200),setTimeout(function(){b(d,"fly-in-right-animation--delayed")},700);else{function a(a,b,c){0<a.intersectionRatio&&(a.target.classList.add(b),setTimeout(function(){a.target.classList.remove(c)},200))}function b(a,b,c,d){a&&(b?b.observe(a):(a.classList.add(c),a.classList.remove(d)))}function e(a,c,d,e){for(let f=0;f<a.length;++f)b(a[f],c,d,e)}const f=new IntersectionObserver(function(b){for(let c=0;c<b.length;c++)a(b[c],"fly-in-right","fly-in-right-animation")},{threshold:0}),g=new IntersectionObserver(function(b){for(let c=0;c<b.length;c++)a(b[c],"fly-in-right--delayed","fly-in-right-animation--delayed")},{threshold:0});setTimeout(function(){e(c,f,"fly-in-right",".fly-in-right-animation")},300),setTimeout(function(){e(d,g,"fly-in-right--delayed",".fly-in-right-animation--delayed")},800)}})})();class t{constructor(){this.inkType=null,this.replacingFrequency=null,this.CPPs=[],this.lowestPageYieldCartridge=0,this.outOfFlow=!1}get finalMonthValue(){return this.replacingFrequency.baseMonthValue*this.inkType.monthValueModifier}get pagesPerYear(){return this.finalMonthValue/this.inkType.cartridges.length*this.lowestPageYieldCartridge.pageYield}get discountPercentage(){return o(100-100*(this.instantInkPlan.annualCost/this.traditionalCost))}get traditionalCost(){return o(this.pagesPerYear*this.CPPs.reduce((c,a)=>c+a,0))}get instantInkPlan(){const a=p.filter(a=>a.annualCost<this.traditionalCost);for(let b=0;b<a.length;b++){if(this.pagesPerYear/12>a[0].pagesPerMonth)return a[0];if(a[a.length-1].pagesPerMonth>this.pagesPerYear/12)return a[a.length-1];if(0>a[b].pagesPerMonth-this.pagesPerYear/12)return a[b-1]}}get savings(){return this.traditionalCost-this.instantInkPlan.annualCost}resetCPPs(){0<this.CPPs.length&&(this.CPPs=[])}}const u=`<svg xmlns="http://www.w3.org/2000/svg" width="4.656" height="9.775" viewBox="0 0 4.656 9.775" class="calculator-chev-left">
  <path d="M-21139.7-18661.488l-1.117-.84,2.934-4.047-2.934-4.055,1.117-.834,3.539,4.887-.3.418Z" transform="translate(-21136.164 -18661.488) rotate(180)"/>
</svg>`,v=`<svg xmlns="http://www.w3.org/2000/svg" width="12.199" height="5.809" viewBox="0 0 12.199 5.809" class="calculator-chev-up" style="display: none;">
  <path d="M1.393,0,0,1.049,3.66,6.1,0,11.158,1.393,12.2,5.809,6.1,5.43,5.58Z" transform="translate(0 5.809) rotate(-90)"/>
</svg>`,w=`<svg xmlns="http://www.w3.org/2000/svg" width="12.199" height="5.809" viewBox="0 0 12.199 5.809" class="calculator-chev-down">
  <path d="M-21139.428-18659.064l-1.393-1.049,3.66-5.051-3.66-5.059,1.393-1.041,4.416,6.1-.379.52Z" transform="translate(-18659.064 21140.82) rotate(90)"/>
</svg>`,x=new t,y=document.getElementById("savings-calculator");// instantiate calculation class
// initial page render
y.classList.add("savings-calculator");// buffer all images
// const $910CartImgSrc = '/hp-ii0001-generic-910.jpg';
// const $headingImgSrc = '/hp-ii0001-lockup.jpg';
// const $packageImgSrc =  '/hp-ii0001.jpg';
// const $67CartImgSrc = '/hp-ii0001-generic-67.jpg';
const z=y.querySelector(".img-package-thumbnail"),A=z.src;z.remove();const B=y.querySelector(".img-heading"),C=B.src;B.remove();const D=y.querySelector(".img-910-cartridges"),E=D.src;D.remove();const F=y.querySelector(".img-67-cartridges"),G=F.src;F.remove(),j({tag:"h2",textContent:"Let\u2019s estimate your savings",classList:["savings-calculator__section-heading"],injectPoint:y});const H=j({tag:"div",classList:["savings-calculator__heading-block","fly-in-right-animation"],injectPoint:y}),I=j({tag:"h3",classList:["savings-calculator__heading"],textContent:q[r].heading,injectPoint:H}),J=j({tag:"div",classList:["savings-calculator__tags__wrapper"],injectPoint:H}),K=j({tag:"div",classList:["savings-calculator__tags"],injectPoint:J}),L=j({tag:"div",classList:["savings-calculator__step-block__container","fly-in-right-animation--delayed"],injectPoint:y});q.forEach((a,b)=>{const c=j({tag:"p",classList:["savings-calculator__tags__tag"],id:`calculator-step-tag-${b+1}`,injectPoint:K});j({tag:"span",textContent:`${b+1}`,classList:["step-tag__order"],injectPoint:c}),j({tag:"span",textContent:a.tag,classList:["step-tag__text"],injectPoint:c});const d=j({tag:"div",id:`calculator-step-block-${b+1}`,classList:["savings-calculator__step-block"],injectPoint:L});if(c.classList.add(`savings-calculator__tags__tag`),b===r?c.classList.add("current-step"):(d.classList.add("hidden"),d.classList.add("transparent")),0!==b){const a=j({tag:"div",classList:["savings-calculator__text-button","savings-calculator__back-button"],htmlElements:[u],injectPoint:d});n(a,`go-back-${b+1}`),j({tag:"span",textContent:"Go back",injectPoint:a})}});// get all steps
const M=y.querySelector(`#calculator-step-block-1`),N=y.querySelector(`#calculator-step-block-2`),O=y.querySelector(`#calculator-step-block-3`),P=j({tag:"div",classList:["options-wrapper"],injectPoint:M});// first step render
// rendering buttons
({belongToStep:1,frequencies:[{text:"Once a month",baseMonthValue:12,eventID:"01-once-a-month"},{text:"Every 2 months",baseMonthValue:6,eventID:"02-every-2-months"},{text:"Every 3 months",baseMonthValue:4,eventID:"03-every-3-months"},{text:"Every 6 months",baseMonthValue:2,eventID:"04-every-6-months"},{text:"Once a year or less",baseMonthValue:1,eventID:"05-once-a-year-or-less"}]}).frequencies.forEach(a=>{const b=j({tag:"a",textContent:a.text,classList:["option-button"],injectPoint:P});// first step -> second step trigger
n(b,a.eventID),b.addEventListener("click",()=>{h(y,I),x.replacingFrequency=a})}),j({tag:"h4",textContent:"HP Original",injectPoint:N});const Q=j({tag:"div",classList:["options-wrapper"],injectPoint:N}),R=j({tag:"div",classList:["savings-calculator__accordion-block"],injectPoint:N}),S=j({tag:"div",classList:["savings-calculator__accordion-tab"],htmlElements:["<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12.199\" height=\"5.809\" viewBox=\"0 0 12.199 5.809\" class=\"calculator-chev-up\" style=\"display: none;\">\n  <path d=\"M1.393,0,0,1.049,3.66,6.1,0,11.158,1.393,12.2,5.809,6.1,5.43,5.58Z\" transform=\"translate(0 5.809) rotate(-90)\"/>\n</svg>","<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12.199\" height=\"5.809\" viewBox=\"0 0 12.199 5.809\" class=\"calculator-chev-down\">\n  <path d=\"M-21139.428-18659.064l-1.393-1.049,3.66-5.051-3.66-5.059,1.393-1.041,4.416,6.1-.379.52Z\" transform=\"translate(-18659.064 21140.82) rotate(90)\"/>\n</svg>"],injectPoint:R});n(S,"i-dont-know-my-cartridge-number"),j({tag:"span",textContent:"I don\u2019t know my cartridge number",injectPoint:S});const T=j({tag:"div",classList:["savings-calculator__accordion-body"],htmlElements:[`<p>HP ink and toner cartridges are labeled to help distinguish which cartridges work with selected printers, some of which can use more than one cartridge. To view a full list of printers and their eligible cartridge numbers, visit: <a href="https://support.hp.com/my-en/document/ish_2405837-1980674-16" target="_blank" class="body-text--medium">Which cartridges work with my HP printer?</a></p>
<p></p>
<p>Still can’t find your cartridge type?</p>`],injectPoint:R});n(T.querySelector("a"),"which-cartridges-work-with-my-printer");const U=j({tag:"a",textContent:"See how others have saved with Instant Ink",classList:["option-button"],injectPoint:T});// rendering buttons
n(U,"see-how-others-have-saved"),U.addEventListener("click",()=>{h(y,I),l(O);const a=j({tag:"div",classList:["savings-calculator__result-block","off-flow"],injectPoint:O}),b=j({tag:"div",classList:["savings-calculator__result-block__text-wrapper","off-flow"],injectPoint:a});j({tag:"h4",textContent:"We use your cartridge number to give you an accurate estimation of savings.",injectPoint:b}),j({tag:"h4",textContent:"While we are unable to give you a savings estimate, you can see how others have saved with Instant Ink:",classList:["desktop-only"],injectPoint:b}),j({tag:"h4",textContent:"While we are unable to give you a savings estimate, you can see how others have saved with Instant Ink.",classList:["mobile-only"],injectPoint:b});const c=j({tag:"div",classList:["savings-calculator__result-block__comparison","savings-calculator__result-block__comparison","off-flow"],injectPoint:a}),d=j({tag:"div",classList:["savings-calculator__result-card","savings-calculator__result-card--green"],injectPoint:c});//sample 1
j({tag:"p",classList:["body-text","sample-name"],textContent:"Joanna S.",injectPoint:d}),j({tag:"h3",classList:["savings-calculator__result-card__heading"],htmlElements:[`Saves <span class="body-text--medium">$422.74</span> per year with Instant Ink.`],injectPoint:d});const e=j({tag:"div",classList:["savings-calculator__result-card__bottom"],injectPoint:d}),f=j({tag:"div",classList:["savings-calculator__result-card__bottom__text"],injectPoint:e});j({tag:"p",classList:["body-text--small"],textContent:"Replaces HP Original Ink 63 cartridges once a month",injectPoint:f}),j({tag:"div",classList:["divider"],injectPoint:f}),j({tag:"p",classList:["body-text--small"],textContent:"Standard cost: $566.62 per year",injectPoint:f}),j({tag:"div",classList:["divider"],injectPoint:f}),j({tag:"p",classList:["body-text--small"],textContent:"Instant Ink cost: $143.88 per year",injectPoint:f});const g=j({tag:"div",classList:["savings-calculator__result-card__bottom__image"],injectPoint:e});j({tag:"img",src:G,classList:["cartridge-thumbnail"],injectPoint:g});//sample 2
const m=j({tag:"div",classList:["savings-calculator__result-card","savings-calculator__result-card--green"],injectPoint:c});j({tag:"p",classList:["body-text","sample-name"],textContent:"Greg L.",injectPoint:m}),j({tag:"h3",classList:["savings-calculator__result-card__heading"],htmlElements:[`Saves <span class="body-text--medium">$152.54</span> per year with Instant Ink.`],injectPoint:m});const o=j({tag:"div",classList:["savings-calculator__result-card__bottom"],injectPoint:m}),p=j({tag:"div",classList:["savings-calculator__result-card__bottom__text"],injectPoint:o});j({tag:"p",classList:["body-text--small"],textContent:"Replaces HP Original Ink 910 cartridges every 3 months",injectPoint:p}),j({tag:"div",classList:["divider"],injectPoint:p}),j({tag:"p",classList:["body-text--small"],textContent:"Standard cost: $224.42 per year",injectPoint:p}),j({tag:"div",classList:["divider"],injectPoint:p}),j({tag:"p",classList:["body-text--small"],textContent:"Instant Ink cost: $71.88 per year",injectPoint:p});const q=j({tag:"div",classList:["savings-calculator__result-card__bottom__image"],injectPoint:o});j({tag:"img",src:E,classList:["cartridge-thumbnail"],injectPoint:q});const s=j({tag:"div",classList:["savings__buttons-block","display-flex"],injectPoint:a}),t=j({tag:"a",classList:["savings-calculator__cta"],textContent:"Get started",href:"https://instantink.hpconnected.com/enroll/start_v2_web?locale=us/en&jumpid=va_b3d6b21bc9",target:"_blank",injectPoint:s});n(t,"get-started-3.2");const u=j({tag:"a",classList:["savings-calculator__text-button","savings-calculator__reset-button"],textContent:"Retake savings tool",injectPoint:s});n(u,"retake-savings-tool-3.1"),u.addEventListener("click",()=>{for(k(R,S);0!==r;)i(y,I)})}),function(a,b,c){const d=b.querySelector(".calculator-chev-up"),e=b.querySelector(".calculator-chev-down");b.addEventListener("click",()=>{a.classList.contains("expanded")?(a.classList.remove("expanded"),e.style.display="block",d.style.display="none",a.style.maxHeight="70px"):(a.classList.add("expanded"),a.style.maxHeight=`${92+c.offsetHeight}px`,e.style.display="none",d.style.display="block")})}(R,S,T),{belongToStep:2,types:[{name:"62",triColor:!0,monthValueModifier:2,eventID:"62",// inside cartridges list, only one and one must have gaugedForTraditionalCost set to true.
cartridges:[{name:"HP 62 Black (K) Ink Cartridge",cost:1899,pageYield:200,gaugedForTraditionalCost:!1},{name:"HP 62 Tri-color Ink Cartridge",cost:2399,pageYield:165,gaugedForTraditionalCost:!0}]},{name:"63",triColor:!0,monthValueModifier:2,eventID:"63",cartridges:[{name:"HP 63 Black (K) Ink Cartridge",cost:2099,pageYield:190,gaugedForTraditionalCost:!1},{name:"HP 63 Tri-color Ink Cartridge",cost:2899,pageYield:165,gaugedForTraditionalCost:!0}]},{name:"64",triColor:!0,monthValueModifier:2,eventID:"64",cartridges:[{name:"HP 64 Black (K) Original Ink Cartridge NA",cost:1899,pageYield:200,gaugedForTraditionalCost:!1},{name:"HP 64 Tri-color Original Ink Cartridge NA",cost:2499,pageYield:165,gaugedForTraditionalCost:!0}]},{name:"65",triColor:!0,monthValueModifier:2,eventID:"65",cartridges:[{name:"HP 65 Black Ink Cartridge",cost:1599,pageYield:120,gaugedForTraditionalCost:!1},{name:"HP 65 Tri-color Ink Cartridge",cost:1699,pageYield:100,gaugedForTraditionalCost:!0}]},{name:"67",triColor:!0,monthValueModifier:2,eventID:"67",cartridges:[{name:"HP 67 Black (K) Original Ink Cartridge",cost:1599,pageYield:120,gaugedForTraditionalCost:!1},{name:"HP 67 Tri-color Original Ink Cartridge",cost:1699,pageYield:100,gaugedForTraditionalCost:!0}]},{name:"902",triColor:!1,monthValueModifier:4,eventID:"902",cartridges:[{name:"HP 902 Black (K) Original Ink Cartridge",cost:1999,pageYield:300,gaugedForTraditionalCost:!0},{name:"HP 902 Cyan Original Ink Cartridge",cost:1399,pageYield:315,gaugedForTraditionalCost:!1},{name:"HP 902 Magenta Original Ink Cartridge",cost:1399,pageYield:315,gaugedForTraditionalCost:!1},{name:"HP 902 Yellow Original Ink Cartridge",cost:1399,pageYield:315,gaugedForTraditionalCost:!1}]},{name:"910",triColor:!1,monthValueModifier:4,eventID:"910",cartridges:[{name:"HP 910 Black (K) Original Ink Cartridge",cost:1899,pageYield:300,gaugedForTraditionalCost:!0},{name:"HP 910 Cyan Original Ink Cartridge",cost:1299,pageYield:315,gaugedForTraditionalCost:!1},{name:"HP 910 Magenta Original Ink Cartridge",cost:1299,pageYield:315,gaugedForTraditionalCost:!1},{name:"HP 910 Yellow Original Ink Cartridge",cost:1299,pageYield:315,gaugedForTraditionalCost:!1}]},{name:"950 or 951",triColor:!1,monthValueModifier:4,eventID:"950-951",cartridges:[{name:"HP 950 Black (K) Officejet Ink Cartridge",cost:3299,pageYield:1e3,gaugedForTraditionalCost:!1},{name:"HP 951 Cyan Officejet Ink Cartridge",cost:2499,pageYield:700,gaugedForTraditionalCost:!0},{name:"HP 951 Magenta Officejet Ink Cartridge",cost:2499,pageYield:700,gaugedForTraditionalCost:!1},{name:"HP 951 Yellow Officejet Ink Cartridge",cost:2499,pageYield:700,gaugedForTraditionalCost:!1}]},{name:"952",triColor:!1,monthValueModifier:4,eventID:"952",cartridges:[{name:"HP 952 Black (K) Original Ink Cartridge",cost:3399,pageYield:900,gaugedForTraditionalCost:!1},{name:"HP 952 Cyan Original Ink Cartridge",cost:2399,pageYield:630,gaugedForTraditionalCost:!0},{name:"HP 952 Magenta Original Ink Cartridge",cost:2399,pageYield:630,gaugedForTraditionalCost:!1},{name:"HP 952 Yellow Original Ink Cartridge",cost:2399,pageYield:630,gaugedForTraditionalCost:!1}]},{name:"962",triColor:!1,monthValueModifier:4,eventID:"962",cartridges:[{name:"HP 962 Black (K) Original Ink Cartridge",cost:3299,pageYield:1e3,gaugedForTraditionalCost:!1},{name:"HP 962 Cyan Original Ink Cartridge",cost:2299,pageYield:700,gaugedForTraditionalCost:!0},{name:"HP 962 Magenta Original Ink Cartridge",cost:2299,pageYield:700,gaugedForTraditionalCost:!1},{name:"HP 962 Yellow Original Ink Cartridge",cost:2299,pageYield:700,gaugedForTraditionalCost:!1}]}]}.types.forEach(b=>{const c=j({tag:"a",textContent:b.name,classList:["option-button"],injectPoint:Q});//second step -> third step (final) trigger
n(c,b.eventID),Q.insertAdjacentElement("beforeend",c),c.addEventListener("click",()=>{h(y,I),x.inkType=b,x.resetCPPs(),b.cartridges.forEach(a=>{x.CPPs.push(a.cost/a.pageYield),a.gaugedForTraditionalCost&&(x.lowestPageYieldCartridge=a)}),l(O);const c=j({tag:"div",classList:["savings-calculator__result-block","display-flex"],injectPoint:O}),d=j({tag:"div",classList:["savings-calculator__result-block__savings"],injectPoint:c}),e=j({tag:"div",classList:["savings-calculator__result-block__comparison"],injectPoint:c});j({tag:"h4",textContent:"Estimated annual savings",injectPoint:d});const f=j({tag:"h2",classList:["savings_number","result-numbers"],htmlElements:[`$<span class="counterUp">${x.savings/100}</span>`],injectPoint:d});m(f.querySelector(".counterUp"),2),j({tag:"div",classList:["meter"],htmlElements:[`<span style="width:${x.discountPercentage}%;"><span class="progress progress--green "></span></span>`],injectPoint:d});const g=`
      <p class="body-text">You’ll save an estimated <span class="body-text--medium">${x.discountPercentage}% a year</span> with Instant Ink.</p>
      <p class="body-text body-text--secondary">Based on an approximate usage of ${x.finalMonthValue} black and color cartridges per year.</p>
    `;j({tag:"div",classList:["savings__text-block"],htmlElements:[g],injectPoint:d});const o=j({tag:"div",classList:["savings__buttons-block"],injectPoint:d}),p=j({tag:"a",classList:["savings-calculator__cta"],textContent:"Get started",href:"https://instantink.hpconnected.com/enroll/start_v2_web?locale=us/en&jumpid=va_b3d6b21bc9",target:"_blank",injectPoint:o});n(p,"get-started-3");const q=j({tag:"a",classList:["savings-calculator__text-button","savings-calculator__reset-button"],textContent:"Retake savings tool",injectPoint:o});n(q,"retake-savings-tool-3"),q.addEventListener("click",()=>{for(k(R,S);0!==r;)i(y,I)});const s=j({tag:"div",classList:["savings-calculator__result-card","savings-calculator__result-card--grey"],injectPoint:e}),t=j({tag:"div",classList:["savings-calculator__result-card__top"],injectPoint:s}),u=j({tag:"div",classList:["savings-calculator__result-card__bottom"],injectPoint:s}),v=j({tag:"div",classList:["savings-calculator__result-card__heading-block"],injectPoint:t});j({tag:"h3",classList:["savings-calculator__result-card__heading"],textContent:"Standard cartridges",injectPoint:v});const w=j({tag:"p",classList:["savings-calculator__result-card__result"],injectPoint:t});j({tag:"span",classList:["body-text--medium"],textContent:a(x.traditionalCost/100),injectPoint:w}),j({tag:"span",classList:["body-text"],textContent:" per year",injectPoint:w}),j({tag:"p",classList:["body-text--small"],textContent:"Manual ordering, chance to run out",injectPoint:u}),j({tag:"div",classList:["divider"],injectPoint:u}),j({tag:"p",classList:["body-text--small"],textContent:"Standard size, buy more often",injectPoint:u});const z=j({tag:"div",classList:["savings-calculator__result-card","savings-calculator__result-card--green"],injectPoint:e}),B=j({tag:"div",classList:["savings-calculator__result-card__top"],injectPoint:z}),D=j({tag:"div",classList:["savings-calculator__result-card__heading-block"],injectPoint:B});j({tag:"img",src:C,classList:["heading-thumbnail"],injectPoint:D}),j({tag:"img",src:A,classList:["package-thumbnail"],injectPoint:D});const E=j({tag:"div",classList:["savings-calculator__result-card__bottom"],injectPoint:z}),F=j({tag:"p",classList:["savings-calculator__result-card__result"],injectPoint:B});j({tag:"span",classList:["body-text--medium"],textContent:a(x.instantInkPlan.annualCost/100),injectPoint:F}),j({tag:"span",classList:["body-text"],textContent:" per year",injectPoint:F}),j({tag:"p",classList:["body-text--small"],textContent:`Recommended plan of ${x.instantInkPlan.pagesPerMonth} pages per month`,injectPoint:B}),j({tag:"p",classList:["body-text--small"],textContent:"Automatic refills, ships when low",injectPoint:E}),j({tag:"div",classList:["divider"],injectPoint:E}),j({tag:"p",classList:["body-text--small"],textContent:"Long lasting, high-yield cartridges",injectPoint:E});const G=j({tag:"a",classList:["savings-calculator__cta"],textContent:"Get started",href:"https://instantink.hpconnected.com/enroll/start_v2_web?locale=us/en&jumpid=va_b3d6b21bc9",target:"_blank",injectPoint:E});n(G,"get-started-3.1")})}),function(a,b){const c=a.querySelectorAll(".savings-calculator__back-button");for(let d=0;d<c.length;d++)c[d].addEventListener("click",()=>{i(a,b)})}(y,I)})();
