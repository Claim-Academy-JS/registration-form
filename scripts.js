const alreadyMsg = "Already have an account?";
const needMsg = "Need to create an account?";

const submitBtn = document.querySelector('button[type="submit"]');
const toggleBtn = document.querySelector("#toggle-btn");

const inputs = document.querySelectorAll("input");

const toggledInputDivs = Array.from(document.querySelectorAll("div")).filter(
  (div) => {
    const input = div.querySelector("input");

    return input && input.id !== "uname" && input.id !== "password";
  }
);

inputs.forEach((input) =>
  input.addEventListener("blur", function handleBlur() {
    if (this.value.length) {
      this.classList.replace("is-error", "is-valid") ||
        this.classList.add("is-valid");
    } else {
      this.classList.replace("is-valid", "is-error") ||
        this.classList.add("is-error");
    }
  })
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
