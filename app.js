const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const togglePass1 = document.querySelector("#togglePass1");
const togglePass2 = document.querySelector("#togglePass2");
const passwordone = document.querySelector("#Pass1");
const password2 = document.querySelector("#Pass2");

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