const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

ScrollReveal().reveal(".header-text h1", scrollRevealOption);

ScrollReveal().reveal(".header-text p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal("#about .sub-title", scrollRevealOption);

ScrollReveal().reveal(".text", {
  ...scrollRevealOption,
  delay: 400,
});

ScrollReveal().reveal(".tab-links", {
  ...scrollRevealOption,
  interval: 400,
  delay: 800,
});

ScrollReveal().reveal("#skills ul li", {
  ...scrollRevealOption,
  delay: 2800,
});

ScrollReveal().reveal("#contact .sub-title", scrollRevealOption);
