const yearElements = document.querySelectorAll("#year");
yearElements.forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const courseButtons = document.querySelectorAll("[data-course]");
const courseOutput = document.querySelector("#course-output");
const courseMessages = {
  "Cyber Security": "Cyber Security focuses on protecting systems, networks, data, and users from digital threats.",
  "Agricultural Technology": "Agricultural Technology focuses on tools and systems that make farming smarter and more productive.",
  "Computer Science": "Computer Science focuses on software, problem solving, data processing, and intelligent systems."
};

courseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const course = button.dataset.course;
    courseOutput.textContent = courseMessages[course];
  });
});

const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    question.parentElement.classList.toggle("open");
  });
});

const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const topic = formData.get("topic");
    const message = formData.get("message").trim();

    if (!name || !email || !topic || !message) {
      formMessage.textContent = "Please complete every field before submitting the form.";
      formMessage.className = "form-message error";
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      formMessage.textContent = "Please enter a valid email address.";
      formMessage.className = "form-message error";
      return;
    }

    formMessage.textContent = `Thank you, ${name}. Your ${topic.toLowerCase()} enquiry has been received.`;
    formMessage.className = "form-message success";
    contactForm.reset();
  });
}
