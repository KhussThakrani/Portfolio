const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetTab = button.getAttribute("data-tab");

    tabButtons.forEach((btn) => btn.classList.remove("is-active"));
    tabPanels.forEach((panel) => panel.classList.remove("is-active"));

    button.classList.add("is-active");
    document.getElementById(targetTab).classList.add("is-active");
  });
});

ScrollReveal().reveal(".header-text h1", scrollRevealOption);

ScrollReveal().reveal(".header-text p", {
  ...scrollRevealOption,
  delay: 300,
});

ScrollReveal().reveal("#about .sub-title", scrollRevealOption);

ScrollReveal().reveal(".text", {
  ...scrollRevealOption,
  delay: 250,
});

ScrollReveal().reveal(".tab-button", {
  ...scrollRevealOption,
  interval: 150,
  delay: 250,
});

ScrollReveal().reveal(".services-list div", {
  ...scrollRevealOption,
  interval: 150,
  delay: 200,
});

ScrollReveal().reveal(".info-panel ul li", {
  ...scrollRevealOption,
  interval: 150,
  delay: 200,
});

ScrollReveal().reveal("#contact .sub-title", scrollRevealOption);
