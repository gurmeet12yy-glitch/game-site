

function toggleEye(){
  const c = document.getElementById("confirm");
  c.type = c.type === "password" ? "text" : "password";
}

function checkStrength(){
  const password = document.getElementById("password");
  const p = password.value;
  const fill = document.getElementById("fill");
  const text = document.getElementById("strengthText");
  const wrap = document.querySelector(".strength-wrap");
  
  
  // password empty �� hide
  if(p.length === 0){
    wrap.style.display = "none";
    fill.style.width = "0%";
    text.innerText = "";
    return;
  }

  // password typed �� show
  wrap.style.display = "block";

  if(p.length < 4){
    fill.style.width = "30%";
    fill.style.background = "red";
    text.innerText = "Weak password";
    text.style.color = "red";
  }
  else if(p.length < 7){
    fill.style.width = "60%";
    fill.style.background = "orange";
    text.innerText = "Medium password";
    text.style.color = "orange";
  }
  else{
    fill.style.width = "100%";
    fill.style.background = "#2ecc71";
    text.innerText = "Strong password";
    text.style.color = "#2ecc71";
  }
}
function validate(){
  let ok = true;

  // inputs
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirm = document.getElementById("confirm");

  // errors
  const eUsername = document.getElementById("e-username");
  const eEmail = document.getElementById("e-email");
  const ePassword = document.getElementById("e-password");
  const eConfirm = document.getElementById("e-confirm");

  // RESET
  document.querySelectorAll("input").forEach(i=>{
    i.classList.remove("error");
  });
  document.querySelectorAll(".error-text").forEach(e=>{
  e.innerText = "";
});

  /* ===== EMPTY CHECK ===== */
  if(username.value.trim() === ""){
  eUsername.innerText = "Username required";
  username.classList.add("error");
  vibrateError(); // 📳 yaha
  ok = false;
}

  if(email.value.trim() === ""){
  eEmail.innerText = "Email required";
  email.classList.add("error");
  vibrateError(); // 📳
  ok = false;
}

  if(password.value.trim() === ""){
  ePassword.innerText = "Password required";
  password.classList.add("error");   // ✅ SAHI
  vibrateError();
  ok = false;
}

  if(confirm.value.trim() === ""){
  eConfirm.innerText = "Confirm password required";
  confirm.classList.add("error");
  vibrateError(); // 📳
  ok = false;
}

  /* ===== GMAIL CHECK ===== */
  if(email.value && !email.value.endsWith("@gmail.com")){
  eEmail.innerText = "Only @gmail.com allowed";
  email.classList.add("error");
  vibrateError(); // 📳
  ok = false;
}

  /* ===== PASSWORD MATCH ===== */
  if(password.value && confirm.value && password.value !== confirm.value){
  eConfirm.innerText = "Passwords do not match";
  confirm.classList.add("error");
  vibrateError(); // 📳
  ok = false;
}

  return ok; // 🔥 ye line mandatory hai
}

/* ===== BACKGROUND MUSIC ===== */

const music = document.getElementById("bgMusic");
const musicBtn = document.querySelector(".music-btn");
let playing = false;

/* default state = music OFF */
if(musicBtn){
  musicBtn.innerText = "🔇";
}

function toggleMusic(){
  if(!music) return;

  if(playing){
    // 🔇 OFF
    music.pause();
    playing = false;
    if(musicBtn) musicBtn.innerText = "🔇";
  }else{
    // 🔊 ON
  // 🔊 ON
music.play().then(()=>{
  fadeInMusic();   // ⭄1�71ￄ1�771ￄ1�71ￄ1�777 yahi smooth fade
  playing = true;
  if(musicBtn) musicBtn.innerText = "🔊";
}).catch(()=>{});
  }
}

/* mobile autoplay  1�71ￄ1�771ￄ1�71ￄ1�777 first user touch */
document.body.addEventListener("click", function autoPlay(){
  if(playing || !music) return;

  music.play().then(()=>{
  fadeInMusic();        // ⭄1�71ￄ1�771ￄ1�71ￄ1�777 smooth fade yaha bhi
  playing = true;
  if(musicBtn) musicBtn.innerText = "🔊";
}).catch(()=>{});

  document.body.removeEventListener("click", autoPlay);
});


function fadeInMusic(){
  let vol = 0;
  music.volume = 0;
  const fade = setInterval(()=>{
    if(vol < 0.15){
      vol += 0.01;
      music.volume = vol;
    }else{
      clearInterval(fade);
    }
  }, 120);
}

function vibrateError(){
  if (navigator.vibrate) {
    navigator.vibrate(200); // 200ms vibration
  }
}

function shakeBox(input){
  const box = input.closest(".input-box");
  if(!box) return;

  box.classList.add("shake");

  setTimeout(() => {
    box.classList.remove("shake");
  }, 400);
}