/* Skyppy UX layer: flow guidance, route preview and deliberate choice interactions. */
(() => {
  "use strict";
  const mount=document.getElementById("screenMount");
  if(!mount)return;
  const flows={
    rider:{title:"YOUR RIDE",steps:[["ride-home","Route"],["ride-options","Ride"],["ride-review","Review"],["ride-matching","Match"],["ride-driver","Driver"],["ride-live","Trip"],["ride-payment","Payment"],["ride-rating","Rate"]]},
    sender:{title:"YOUR SHIPMENT",steps:[["sender-home","Start"],["sender-details","Addresses"],["sender-package","Parcel"],["sender-schedule","Pickup"],["sender-review","Review"],["sender-booked","Done"]]},
    driver:{title:"PARTNER JOURNEY",steps:[["driver-onboarding","Join"],["driver-verification","Verify"],["driver-dashboard","Home"],["driver-request","Request"],["driver-navigation","Pickup"],["driver-trip","Trip"]]},
    receiver:{title:"DELIVERY CHECK",steps:[["receiver-home","Delivery"],["receiver-verify","Verify"],["receiver-delivered","Done"]]}
  };
  const routeIds=["ride-home","ride-options","ride-review","ride-matching","ride-driver","ride-live","ride-payment","ride-rating"];
  const labels={ "ride-home":["Vijayanagar, Mysuru","VVCE, Mysuru"],"ride-options":["Vijayanagar, Mysuru","VVCE, Mysuru"],"ride-review":["Vijayanagar, Mysuru","VVCE, Mysuru"] };
  let lastScreen="";
  function activeScreen(){
    const id=location.hash.slice(1);
    if(id)return id;
    const heading=mount.querySelector(".screen-intro h1")?.textContent||"";
    return heading==="Where would you like to go?"?"ride-home":"welcome";
  }
  function progressMarkup(flow,id){
    const index=flow.steps.findIndex(step=>step[0]===id);
    if(index<0)return "";
    return '<section class="journey-progress" aria-label="'+flow.title+', step '+(index+1)+' of '+flow.steps.length+'"><div class="journey-progress-copy"><strong>'+flow.title+'</strong><span>Step '+(index+1)+' of '+flow.steps.length+'</span></div><div class="journey-progress-bars" aria-hidden="true">'+flow.steps.map((step,i)=>'<i class="'+(i<index?"done":i===index?"current":"")+'"></i>').join("")+'</div></section>';
  }
  function routeMarkup(){
    return '<section class="route-visual" aria-label="Illustrative route from Vijayanagar to VVCE in Mysuru"><svg viewBox="0 0 360 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><path d="M-20 35 L380 112 M20 -10 L90 170 M180 -20 L145 175 M280 -20 L325 175 M-20 130 L380 30" fill="none" stroke="#fff" stroke-width="10" stroke-linecap="round"/><path d="M-20 35 L380 112 M20 -10 L90 170 M180 -20 L145 175 M280 -20 L325 175 M-20 130 L380 30" fill="none" stroke="#d4ddca" stroke-width="2" stroke-linecap="round"/><path d="M58 114 C92 105 100 50 153 62 S225 115 293 39" fill="none" stroke="#82934d" stroke-width="4" stroke-linecap="round" stroke-dasharray="5 7"/><circle cx="58" cy="114" r="7" fill="#82934d" stroke="#fff" stroke-width="3"/><circle cx="293" cy="39" r="7" fill="#c66a42" stroke="#fff" stroke-width="3"/></svg><div class="route-tag pickup"><i class="route-dot"></i><span>Pickup<small>Vijayanagar</small></span></div><div class="route-tag dropoff"><i class="route-dot end"></i><span>Destination<small>VVCE, Mysuru</small></span></div><span class="route-foot">4.8 KM · SAMPLE ROUTE</span></section>';
  }
  function enhance(){
    const id=activeScreen();
    if(id===lastScreen && mount.querySelector(".journey-progress"))return;
    lastScreen=id;
    mount.querySelector(".journey-progress")?.remove();
    mount.querySelector(".route-visual")?.remove();
    const intro=mount.querySelector(".screen-intro");
    if(!intro)return;
    if(id==="welcome"&&!mount.querySelector(".welcome-start")){
      const start=document.createElement("section");
      start.className="welcome-start";
      start.innerHTML='<div class="welcome-start-copy"><strong>Need a ride right now?</strong><span>Start with a clear route and upfront sample fare.</span></div><button class="button" type="button" data-go="ride-home">Book a ride <span>→</span></button>';
      intro.insertAdjacentElement("afterend",start);
      mount.querySelector(".content-grid")?.classList.add("welcome-roles");
    }
    const role=Object.keys(flows).find(key=>flows[key].steps.some(step=>step[0]===id));
    if(role){
      const markup=progressMarkup(flows[role],id);
      if(markup)intro.insertAdjacentHTML("afterend",markup);
    }
    if(id==="ride-home"){
      const map=routeMarkup();
      const progress=mount.querySelector(".journey-progress");
      (progress||intro).insertAdjacentHTML("afterend",map);
      const form=mount.querySelector(".demo-form");
      const metrics=mount.querySelector(".metric-grid");
      if(form&&metrics)metrics.insertAdjacentElement("beforebegin",form);
      mount.querySelectorAll(".demo-form input").forEach((input,i)=>{
        input.autocomplete="street-address";
        input.setAttribute("aria-label",i===0?"Pickup location": "Destination");
      });
      const labels=mount.querySelectorAll(".field>span");
      labels.forEach(label=>{if(label.textContent==="Pickup location")label.textContent="Pickup point";if(label.textContent==="Destination")label.textContent="Where to?";});
    }
    if(id==="ride-options"){
      const cards=[...mount.querySelectorAll(".info-card")];
      const choices=cards.filter(card=>["Auto","Bike","Cab"].includes(card.querySelector(".info-copy b")?.textContent.trim()));
      if(choices.length){
        choices.forEach((card,i)=>{
          card.classList.add("choice-card");
          card.setAttribute("role","button");
          card.setAttribute("tabindex","0");
          card.setAttribute("aria-pressed",i===0?"true":"false");
          if(i===0)card.classList.add("selected");
        });
        let selected=choices[0];
        const actions=mount.querySelector(".screen-actions");
        if(actions){
          actions.innerHTML='<button class="button button-primary" type="button" data-go="ride-review">Continue with Auto · ₹99 <span>→</span></button>';
          choices.forEach(card=>card.addEventListener("click",()=>{
            selected=card;
            choices.forEach(item=>{item.classList.toggle("selected",item===selected);item.setAttribute("aria-pressed",String(item===selected));});
            const name=selected.querySelector(".info-copy b").textContent.trim();
            const price=selected.querySelector(".info-value")?.textContent.trim()||"";
            const cta=actions.querySelector("button");
            cta.innerHTML="Continue with "+name+(price?" · "+price:"")+' <span>→</span>';
          }));
          choices.forEach(card=>card.addEventListener("keydown",event=>{if(event.key==="Enter"||event.key===" "){event.preventDefault();card.click();}}));
        }
      }
    }
    mount.querySelectorAll(".screen-actions .button-primary,.form-footer .button-primary").forEach(button=>button.setAttribute("aria-label",button.textContent.trim().replace("→","").trim()));
  }
  const observer=new MutationObserver(()=>requestAnimationFrame(enhance));
  observer.observe(mount,{childList:true,subtree:true});
  enhance();
  window.addEventListener("hashchange",()=>requestAnimationFrame(enhance));
})();
