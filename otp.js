const timeLeftDisplay = document.querySelector("#timeLeft");
let timeleft = 600;  //time in seconds

//timer function
function timer() {
  setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(timeleft = 0);
    }
    let min = Math.floor(timeleft / 60);
    let sec = timeleft % 60;
    timeLeftDisplay.innerHTML = min + ":" + sec;
    timeleft -= 1;
    
    //redirect to main page (not working)
    if (timeleft < 0) {
      document.querySelector(".popup").style.display = "flex";
      setTimeout(function () {
        window.location.href = "./index.html"
      }, 1000);
    }

  }, 1000);
}

timer();