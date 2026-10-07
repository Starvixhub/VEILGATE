const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {

        formMessage.textContent =
            "Please complete every field before sending.";

        formMessage.style.color = "#e58a8a";

        return;
    }


    const button = form.querySelector(".send-button");
    const buttonText = button.querySelector("span");

    const originalText = buttonText.textContent;


    buttonText.textContent = "OPENING THE GATE...";
    button.style.opacity = "0.75";


    setTimeout(function () {

        buttonText.textContent = "TRANSMISSION SENT";
        button.style.opacity = "1";

        formMessage.textContent =
            `The gate has received your message, ${name}.`;

        formMessage.style.color = "#83d6a1";

        form.reset();

    }, 700);


    setTimeout(function () {

        buttonText.textContent = originalText;

        formMessage.textContent = "";

    }, 4000);

});