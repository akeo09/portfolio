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

const challengeContainers = document.querySelectorAll(".project-container.challenges");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const closeModal = document.getElementById("close-modal");

// Open modal when clicking on a challenge container
challengeContainers.forEach((container) => {
    container.addEventListener("click", () => {
        const img = container.querySelector(".project-image");
        if (img) { // Make sure image exists
            const imgSrc = img.getAttribute("src");
            modalImage.src = imgSrc;
            modal.style.display = "block";
        }
    });
});

// Close modal on (X) click
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    modalImage.src = "";
});

// Close modal when clicking outside modal content
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        modalImage.src = "";
    }
});