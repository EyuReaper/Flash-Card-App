let isEyeOpen = false;

function toggleEye() {
  isEyeOpen = !isEyeOpen;
  const passwordInput = document.getElementById("password");
  const eyeIcon = document.querySelector(".toggle-eye i");

  if (isEyeOpen) {
    passwordInput.type = "text"; // Show password
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  } else {
    passwordInput.type = "password"; // Hide password
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  }
}

function handleStrongPasswordChecker(event) {
  const password = event.target.value;

  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const isLongEnough = password.length >= 8;

  // Update indicators
  updateIndicator(".lowercase", hasLowerCase);
  updateIndicator(".uppercase", hasUpperCase);
  updateIndicator(".number", hasNumber);
  updateIndicator(".symbol", hasSymbol);
  updateIndicator(".length", isLongEnough);
}

function updateIndicator(selector, isValid) {
  const indicator = document.querySelector(selector);
  if (isValid) {
    indicator.classList.add("active"); // Add active class for valid indicators
  } else {
    indicator.classList.remove("active"); // Remove active class for invalid indicators
  }
}
