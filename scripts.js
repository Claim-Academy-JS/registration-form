const alreadyMsg = "Already have an account?";
const needMsg = "Need to create an account?";

const submitBtn = document.querySelector('button[type="submit"]');
const toggleBtn = document.querySelector("#toggle-btn");

const toggledInputDivs = Array.from(document.querySelectorAll("div")).filter(
  (div) => {
    const input = div.querySelector("input");

    // Optional Chaining (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
    return input?.id !== "uname" && input?.id !== "password";
  }
);

function toggleFormInfo() {
  toggledInputDivs.forEach((toggledInputDiv) => {
    if (toggleBtn.innerText === alreadyMsg) {
      toggledInputDiv.classList.replace("is-visible", "is-hidden") ||
        toggledInputDiv.classList.add("is-hidden");
    } else {
      toggledInputDiv.classList.replace("is-hidden", "is-visible");
    }
  });

  toggleBtn.innerText =
    toggleBtn.innerText === alreadyMsg ? needMsg : alreadyMsg;

  submitBtn.innerText = submitBtn.innerText.includes("Login")
    ? "Register!"
    : "Login!";
}

toggleBtn.addEventListener("click", toggleFormInfo);
