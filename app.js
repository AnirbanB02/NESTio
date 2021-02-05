const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const togglePass1 = document.querySelector("#togglePass1");
const togglePass2 = document.querySelector("#togglePass2");
const togglecPass2 = document.querySelector("#togglecPass2");
const passwordone = document.querySelector("#Pass1");
const password2 = document.querySelector("#Pass2");
const cpassword2 = document.querySelector("#cPass2");

sign_up_btn.addEventListener('click', () => {
  container.classList.add("sign-up-mode");
});

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
    seterror("Pass2error", "*Password must be atleast 8 haracters");
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




  return returnval;
}