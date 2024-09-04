const scrollRevealOption = {
 distance: "50px",
 origin: "bottom",
 duration: 1000,
};

ScrollReveal().reveal(".navbar", {
 ...scrollRevealOption,
 origin: "top",
 delay: 200,
});
ScrollReveal().reveal(".image img", {
 ...scrollRevealOption,
 origin: "right",
});
ScrollReveal().reveal(".home .paragraph", {
 ...scrollRevealOption,
 delay: 500,
});
ScrollReveal().reveal(".special-item", {
 ...scrollRevealOption,
 origin: "left",
 delay: 500,
});
ScrollReveal().reveal(".menu .card", {
 ...scrollRevealOption,
 origin: "top",
 delay: 500,
});
ScrollReveal().reveal(".about", {
 ...scrollRevealOption,
 interval: 500,
});
ScrollReveal().reveal(".contact .container", {
 ...scrollRevealOption,
 interval: 500,
});
