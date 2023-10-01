const waitList = document.getElementById("waitlist-form");

function sendEmail() {}

function submitForm(event) {
    event.preventDefault();

    // get user input
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    // validate user input
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (!name || !email) {
        alert("please fill out all input fields!");
        return;
    }

    console.log(name, email);

    nameInput.value = "";
    emailInput.value = "";

    console.log("added to waitlist");
}

waitList.addEventListener("submit", submitForm);
