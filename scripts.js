/**
 * TODO: username must be greater than 8 characters
 * If I leave the field and it is less than 8 characters, mark it with an error
 */
document.querySelector("#uname").addEventListener(
  "input",

  // Wow! We can pass a function into another fxn./method - this is known as callback fxn.
  () => {
    console.log("hello! I was changed!");
  }
);
