document.querySelector('a[href="#about-section"]').addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.querySelector("#about-section").scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
});

document.querySelector('a[href="#projects-section"]').addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.querySelector("#projects-section").scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
});

document.querySelector('a[href="#resume-section"]').addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.querySelector("#resume-section").scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
});

window.onload = function() {
    setTimeout(function() {
        window.scrollTo(0, 0);  // Scroll to the top after the page loads
    }, 10);
};
