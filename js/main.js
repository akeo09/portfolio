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
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentGallery = [];
let currentIndex = 0;

/*
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
*/

// Handle clicks on challenge/project containers
document.querySelectorAll(".project-container.challenges").forEach((container) => {
    const img = container.querySelector(".project-image");
    if (!img) return;

    container.addEventListener("click", () => {
        // Check if this challenge has its own gallery
        const gallery = container.querySelectorAll(".gallery-images img");
            if (gallery.length > 0) {
                // Only use project-specific gallery (no thumbnail)
                currentGallery = Array.from(gallery).map(el => el.src);
                modal.classList.add("gallery-active"); // mark as gallery modal
            } else {
                // Just one image
                currentGallery = [img.src];
                modal.classList.remove("gallery-active"); // reset for single image
            }


        currentIndex = 0;
        openModal(currentIndex);
    });
});

function openModal(index) {
    modalImage.src = currentGallery[index];
    modal.style.display = "block";
}

// Close modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    modalImage.src = "";
    currentGallery = [];
});

// Close modal on background click
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        modalImage.src = "";
        currentGallery = [];
    }
});

// Prev/Next navigation
prevBtn.addEventListener("click", () => {
    if (currentGallery.length > 0) {
        currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
        openModal(currentIndex);
    }
});

nextBtn.addEventListener("click", () => {
    if (currentGallery.length > 0) {
        currentIndex = (currentIndex + 1) % currentGallery.length;
        openModal(currentIndex);
    }
});

// Keyboard support
document.addEventListener("keydown", (e) => {
    if (modal.style.display === "block" && currentGallery.length > 0) {
        if (e.key === "ArrowLeft") prevBtn.click();
        if (e.key === "ArrowRight") nextBtn.click();
        if (e.key === "Escape") closeModal.click();
    }
});