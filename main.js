const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.querySelectorAll("#about .tab-contents");

function opentab(tabname, element) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  element.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

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

ScrollReveal().reveal(".tab-links", {
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
