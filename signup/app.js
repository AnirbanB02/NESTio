const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const togglePass1 = document.querySelector("#togglePass1");
const togglePass2 = document.querySelector("#togglePass2");
const togglecPass2 = document.querySelector("#togglecPass2");
const passwordone = document.querySelector("#Pass1");
const password2 = document.querySelector("#Pass2");
const cpassword2 = document.querySelector("#cPass2");

const verBtn = document.querySelector('.ver-btn');
const timeLeftDisplay = document.querySelector("#timeLeft");
var otphead = document.querySelector('.otpContent .head');
var otpPara = document.querySelector('.otpContent p');
let timeleft = 15;  //time in seconds
let verEmail = false;

//signup mode on
sign_up_btn.addEventListener('click', () => {
  container.classList.add("sign-up-mode");
});

//signin mode on
sign_in_btn.addEventListener('click', () => {
  container.classList.remove("sign-up-mode");
});

togglePass1.addEventListener('click', function (e) {
  // alert("clicked");
  // toggle the type attribute
  const type = passwordone.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordone.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');
});

togglePass2.addEventListener('click', function (e) {
  // alert("clicked");
  // toggle the type attribute
  const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
  password2.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');
});

togglecPass2.addEventListener('click', function (e) {
  // alert("clicked");
  // toggle the type attribute
  const type = cpassword2.getAttribute('type') === 'password' ? 'text' : 'password';
  cpassword2.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');
});

//validation of signup form

function seterror(id, error) {
  document.getElementById(id).innerHTML = error;
}

function clearErrors() {
  var errorspans = document.getElementsByClassName("errormsg");
  for (let i = 0; i < errorspans.length; i++) {
    errorspans[i].innerHTML = "";
  }
}

//verifying the form details
function SignUpValidation() {
  clearErrors();
  var returnval = true;

  var name = document.getElementById("fname").value;
  var pass2 = document.getElementById('Pass2').value;
  var cpass2 = document.getElementById('cPass2').value;
  var Did = document.getElementById('fDid').value;
  var reg = /^N[0-9]{5}$/;

  if (name.length <= 3) {
    seterror("nameerror", "*Name too short");
    returnval = false;
  }

  if (pass2.length < 8) {
    seterror("Pass2error", "*Password must be atleast 8 characters");
    returnval = false;
  }

  if (cpass2 != pass2) {
    seterror("cPass2error", "*Must match password");
    returnval = false;
  }

  if (!reg.test(Did)) {
    seterror("fDiderror", "*Invalid Device ID");
    returnval = false;
  }

  if (!verEmail) {
    seterror("emailerror", "Email not verified");
    returnval = false;
  }

  return returnval;
}

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

    //changing the content for timeover
    if (timeleft < 0) {
      otphead.innerHTML = "Email Not Verified";
      otphead.style.color = "red";
      otpPara.innerHTML = "You will be redirectred to the signup page again automatically";

      //reloading the page
      setTimeout(function () {
        window.location.reload();
      }, 5000);
    }

  }, 1000);
}

let emailVal = document.getElementById('femail').value;

//verifying the email
verBtn.addEventListener('click', function (e) {
  // alert("clicked");
  verEmail = true;
  document.querySelector('.popup').style.display = 'block';
  console.log(emailVal);
  timer();
});
