const submitBtn = document.querySelector('button[type="submit"]');
const toggleBtn = document.querySelector("#toggle-btn");

const toggledInputs = document.querySelectorAll("input:not(#uname, #password)");

// TODO: Iterate over all toggledInputs and add the 'is-hidden' class

toggleBtn.addEventListener("click", function () {
  if (this.innerText === "Already have an account?") {
    for (let i = 0; i < toggledInputs.length; i += 1) {
      toggledInputs[i].classList.add("is-hidden");
    }
    this.innerText = "Need to create an account?";
    submitBtn.innerText = "Login!";
  } else {
    const hiddenInputs = document.querySelectorAll("input.is-hidden");
    for (let i = 0; i < hiddenInputs.length; i += 1) {
      hiddenInputs[i].classList.add("is-visible");
    }

    this.innerText = "Already have an account?";
    submitBtn.innerText = "Register!";
  }
});
