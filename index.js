function checkPassword() {
  const correctPassword = "design123"; // Change this to your preferred password
  const enteredPassword = document.getElementById("password").value;
  const caseStudy = document.getElementById("caseStudy");
  const errorMessage = document.getElementById("errorMessage");

  if (enteredPassword === correctPassword) {
    caseStudy.style.display = "block";
    errorMessage.classList.add("hidden");
    blocker.style.display = "none";
  } else {
    errorMessage.classList.remove("hidden");
  }
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    checkPassword();
  }
}
