(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("jobType"),o=document.getElementById("yachtType"),a=document.getElementById("department"),i=document.getElementById("vesselSize"),e=document.getElementById("keyword"),t=document.getElementById("jobList"),l=document.getElementById("jobPosition"),m=[{title:"Service Stewardess",yacht:"Motor",department:"Interior",vesselSize:"31m–50m",type:"Permanent",description:"Provide exceptional service for guests aboard a luxurious new build yacht. A solid knowledge of cocktails and wine is required.",location:"50m Private Yacht, Mediterranean",salary:"€4,500/month",startDate:"Mid-February"},{title:"Deckhand",yacht:"Sailing",department:"Deck",vesselSize:"51m–80m",type:"Seasonal",description:"Support sailing operations, maintain the deck’s cleanliness, assist with technical duties, and participate in mooring and docking procedures. A Yachtmaster qualification is preferred.",location:"52m Sailing Yacht, Caribbean",salary:"$4,000/month",visaRequirement:"B1/B2 Visa",startDate:"ASAP"},{title:"Sous Chef",yacht:"Motor",department:"Galley",vesselSize:"81m–100m",type:"Temporary",description:"Create gourmet meals for guests and crew, handle menu planning and provisioning, and maintain high culinary standards.",location:"81m Motor Yacht",salary:"DOE but competitive",startDate:"March"}];function p(){const s=e.value.toLowerCase(),n=r.value,d=o.value,y=a.value,h=i.value,f=m.filter(u=>{const v=s===""||u.title.toLowerCase().includes(s)||u.description.toLowerCase().includes(s),b=n===""||u.type===n,E=d===""||u.yacht===d,S=y===""||u.department===y,w=h===""||u.vesselSize===h;return v&&b&&E&&S&&w});c(f)}function c(s){if(t.innerHTML="",s.length===0){t.innerHTML="<p>No jobs found.</p>";return}s.forEach(n=>{const d=document.createElement("div");d.classList.add("job"),d.innerHTML=`
              <div>
                  <h3>${n.title} (${n.location})</h3>
                  <p><strong>Type:</strong> ${n.type}</p>
                  <p><strong>Yacht:</strong> ${n.yacht}</p>
                  <p><strong>Department:</strong> ${n.department}</p>
                  <p><strong>Vessel Size:</strong> ${n.vesselSize}</p>
                  <p><strong>Description:</strong> ${n.description}</p>
                  <p><strong>Salary:</strong> ${n.salary}</p>
                  ${n.visaRequirement?`<p><strong>Visa Requirement:</strong> ${n.visaRequirement}</p>`:""}
                  <p><strong>Start Date:</strong> ${n.startDate}</p>
              </div>
              <a href="#apply" class="apply-btn">Apply</a>
          `,t.appendChild(d)}),g()}function g(){document.querySelectorAll(".apply-btn").forEach(s=>{s.addEventListener("click",n=>{n.preventDefault();const y=n.target.closest(".job").querySelector("h3").textContent.split(" (")[0];l.value=y,document.getElementById("apply").scrollIntoView({behavior:"smooth"})})})}c(m),document.querySelector(".search-bar button").addEventListener("click",p),[r,o,a,i].forEach(s=>{s.addEventListener("change",p)}),e.addEventListener("input",p)});document.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("jobPosition");document.querySelectorAll(".apply-btn").forEach(o=>{o.addEventListener("click",a=>{a.preventDefault();const e=a.target.closest(".job").querySelector("h3").textContent.split(" (")[0];r.value=e,document.getElementById("apply").scrollIntoView({behavior:"smooth"})})})});document.querySelector(".yacht-crew-form").addEventListener("submit",function(r){r.preventDefault();const o=document.getElementById("position").value.trim(),a=document.getElementById("yacht-type").value.trim(),i=document.getElementById("first-name").value.trim(),e=document.getElementById("last-name").value.trim(),t=document.getElementById("email").value.trim(),l=document.getElementById("contact").value.trim(),m=document.getElementById("details").value.trim();if(!o||!a||!i||!e||!t||!l){alert("Please fill out all required fields.");return}if(!L(t)){alert("Please enter a valid email address.");return}fetch("http://localhost:3000/yacht-crew",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({position:o,yachtType:a,firstName:i,lastName:e,email:t,contact:l,details:m})}).then(c=>{if(!c.ok)throw new Error("Failed to submit the form. Please try again.");return c.json()}).then(c=>{console.log(c.message),I()}).catch(c=>{console.error(c.message),alert("There was an error submitting the form. Please try again later.")})});function I(){const r=document.createElement("div");r.id="crewSuccessModal",r.innerHTML=`
      <div class="modal-content">
          <h2>Request Submitted</h2>
          <p>Your request has been successfully submitted! We will contact you soon.</p>
          <button id="closeCrewModalButton">Close</button>
      </div>
  `,document.body.appendChild(r);const o=document.createElement("style");o.textContent=`
      #crewSuccessModal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
      }
      .modal-content {
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          animation: fadeIn 0.3s ease-in-out;
      }
      .modal-content h2 {
          margin: 0 0 10px;
          color: #28a745;
      }
      .modal-content p {
          margin: 0 0 20px;
          color: #333;
      }
      .modal-content button {
          background-color: #28a745;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s;
      }
      .modal-content button:hover {
          background-color: #218838;
      }
      @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
      }
  `,document.head.appendChild(o),document.getElementById("closeCrewModalButton").addEventListener("click",function(){document.body.removeChild(r)})}function L(r){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)}
//# sourceMappingURL=index-DOAssLsR.js.map
