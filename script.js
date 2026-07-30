const form = document.getElementById("contactForm");

const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

form.addEventListener("submit", function(event){
    event.preventDefault();

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let isValid = true;
    if(name.value.trim() === ""){
        nameError.textContent = "Name is required";
        isValid = false;
    }
    if(email.value.trim() === ""){
        emailError.textContent = "Email is required";
        isValid = false;
    }
    else if(!email.value.includes("@")){
        emailError.textContent = "Enter a valid email";
        isValid = false;
    }
    if(message.value.trim().length < 10){
        messageError.textContent = "Message should contain at least 10 characters.";
        isValid = false;
    }
    if(isValid){
        alert("Message sent successfully!");
        form.reset();
    }
});