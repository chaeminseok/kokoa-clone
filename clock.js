const clock=document.querySelector(".live-clock span");


function getClock(){
    const date = new Date();
    let hours= String(date.getHours());
    const minutes= String(date.getMinutes()).padStart(2,"0");
    if (hours==="0"){
        hours="12";
    }
    clock.innerText=`${hours}:${minutes}`;
}

getClock();
setInterval(getClock , 1000);