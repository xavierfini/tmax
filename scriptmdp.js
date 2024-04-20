// script.js 
  
let icon = { 
    info: 
    '<span class="material-symbols-outlined">info</span>', 
}; 
  
const showToast = ( 
    message = "Sample Message", 
    toastType = "info", 
    duration = 5000) => { 
    if ( 
        !Object.keys(icon).includes(toastType)) 
        toastType = "info"; 
  
    let box = document.createElement("div"); 
    box.classList.add( 
        "toast", `toast-${toastType}`); 
    box.innerHTML = ` <div class="toast-content-wrapper"> 
                      <div class="toast-icon"> 
                      ${icon[toastType]} 
                      </div> 
                      <div class="toast-message">${message}</div> 
                      <div class="toast-progress"></div> 
                      </div>`; 
    duration = duration || 5000; 
    box.querySelector(".toast-progress").style.animationDuration = 
            `${duration / 1000}s`; 
  
    let toastAlready =  
        document.body.querySelector(".toast"); 
    if (toastAlready) { 
        toastAlready.remove(); 
    } 
  
    document.body.appendChild(box)}; 
  
let information =  
    document.querySelector(".custom-toast.info-toast"); 
  
information.addEventListener("click",(e) => { 
        e.preventDefault(); 
        showToast("Vous recevrez un mail dans quelques instants !","info",5000); 
    }); 