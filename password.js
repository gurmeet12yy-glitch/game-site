let showConfirm = false;

function toggleConfirm() {
  const input = document.getElementById("confirmPassword");

  input.type = showConfirm ? "password" : "text";
  showConfirm = !showConfirm;
}