/**
 * TODO: When we click 'Already,' then all fields should be hidden EXCEPT
 * 'username' and 'password.'
 */

/**
 * When the toggleBtn is clicked, hide all the inputs except for username and password
 */
const submitBtn = document.querySelector('button[type="submit"]');
const toggleBtn = document.querySelector("#toggle-btn");

console.log(submitBtn);

toggleBtn.addEventListener("click", function () {
  if (this.innerText === "Already have an account?") {
    this.innerText = "Need to create an account?";
    submitBtn.innerText = "Login!";
  } else {
    this.innerText = "Already have an account?";
    submitBtn.innerText = "Register!";
  }
});
