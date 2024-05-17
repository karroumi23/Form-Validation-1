const form = document.getElementById("form");
const inputs = form.querySelectorAll("input");

form.addEventListener("submit", submithandler);

function submithandler(e) {
  // Prevent the form from refreshing the page
  e.preventDefault();

  // Assuming `inputs` is an array of input elements
  inputs.forEach((input) => {
    // If input is empty, show error message
    if (input.value.trim() === "") {
      input.nextElementSibling.textContent = `${input.dataset.type} is required`;
    }
    // check (username) if input username value less than 3 Letters
    else if (
      input.dataset.type === "Username" &&
      input.value.trim().length <= 3
    ) {
      input.nextElementSibling.textContent = "Minimum length of 4 characters";
    }
    // check (email) If input is not empty and it's an email
    // but doesn't contain '@gmail.com', show error message
    else if (
      input.dataset.type === "Email" &&
      !input.value.trim().includes("@gmail.com")
    ) {
      input.nextElementSibling.textContent = "Invalid email format";
    }

    // check (password)  if it stronge or not
    else if (
      input.dataset.type === "Password" &&
      input.value.trim().length <= 5
    ) {
      input.nextElementSibling.textContent = "The password is not strong";
    }

  
    // Clear any existing error messages
    else {
      input.nextElementSibling.textContent = "";
    }
  });

  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      if (input.value.trim() !== "") {
        input.nextElementSibling.textContent = "";
      }
    });
  });
}
