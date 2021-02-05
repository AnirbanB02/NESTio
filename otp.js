var timeLeftDisplay = document.querySelector("#timeLeft");
let timeleft = 600;  //10min

//timer function
function timer(){
  setInterval(function(){
    if(timeleft <= 0){
      clearInterval(timeleft = 0);
    }
    let min = Math.floor(timeleft/60);
    let sec = timeleft%60;
    timeLeftDisplay.innerHTML = min + ":" + sec ;
    timeleft -= 1;
    
  }, 1000);
}

timer();

function otpFail(){
  
}