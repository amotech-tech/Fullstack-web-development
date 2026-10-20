

document.getElementById("year").textContent =
    new Date().getFullYear();

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");




const typingName = document.getElementById("typingName");

const words = [
    "Amos Ng'ang'a",
    "Web Developer",
    "IT Professional",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    typingName.textContent = currentWord.substring(0, charIndex);

    if (!deleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 120);
    } else if (!deleting) {
        deleting = true;
        setTimeout(typeEffect, 1200);
    } else if (charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 60);
    } else {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 300);
    }
}

typeEffect();
//contacct

const whatsappForm = document.getElementById("whatsappForm");

whatsappForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("clientName").value.trim();
    const service = document.getElementById("service").value;
    const budget = document.getElementById("budget").value;
    const details = document.getElementById("projectDetails").value.trim();

    
    const phoneNumber = "254112389888";

    const message =
`Hello Amos,

My name is ${name}.

I am interested in your ${service} service.

Project details:
${details}

Estimated budget: ${budget || "Not specified"}

I would like to discuss this project with you. Please let me know the next steps.

Thank you.`;

    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
});

