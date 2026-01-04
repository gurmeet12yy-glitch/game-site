function toggleEye(){
  const p = document.getElementById("password");
  p.type = p.type === "password" ? "text" : "password";
}

function validateLogin(){
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  const eEmail = document.getElementById("e-email");
  const ePassword = document.getElementById("e-password");

  let ok = true;

  // RESET
  email.classList.remove("error");
  password.classList.remove("error");
  eEmail.innerText = "";
  ePassword.innerText = "";

  // EMAIL CHECK
  if(email.value.trim() === ""){
    email.classList.add("error");
    eEmail.innerText = "Email required";
    ok = false;
  }

  // PASSWORD CHECK
  if(password.value.trim() === ""){
    password.classList.add("error");
    ePassword.innerText = "Password required";
    ok = false;
  }

  return ok; // ❗ VERY IMPORTANT
}

// eye toggle
function toggleEye(){
  const pass = document.getElementById("password");
  pass.type = pass.type === "password" ? "text" : "password";
}

const music = document.getElementById("bgMusic");
const btn = document.querySelector(".music-btn");

/* 🔥 FIRST TAP PE MUSIC START */
document.addEventListener("click", () => {
  if (music.paused) {
    music.volume = 0.25;
    music.play().then(() => {
      btn.innerText = "🔊";
    }).catch(err => {
      console.log("Blocked:", err);
    });
  }
}, { once: true });

/* 🔊 TOGGLE BUTTON */
function toggleMusic() {
  if (music.paused) {
    music.volume = 0.25;
    music.play();
    btn.innerText = "🔊";
  } else {
    music.pause();
    btn.innerText = "🔇";
  }
}