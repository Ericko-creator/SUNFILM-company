// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", function () {
    const toggleDarkMode = document.createElement("button");
    toggleDarkMode.textContent = "Toggle Dark Mode";
    toggleDarkMode.style.margin = "20px";
    document.body.prepend(toggleDarkMode);

    toggleDarkMode.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});

// Pop-up Modal Functionality
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `<p>Welcome to SunFilms! Check out our latest projects.</p><button id='closeModal'>Close</button>`;
    document.body.appendChild(modal);

    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    document.body.appendChild(overlay);

    function showModal() {
        modal.classList.add("show");
        overlay.classList.add("show");
    }

    function closeModal() {
        modal.classList.remove("show");
        overlay.classList.remove("show");
    }

    setTimeout(showModal, 2000); // Show modal after 2 seconds

    document.getElementById("closeModal").addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);
});

// Form Validation
// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", function () {
    const toggleDarkMode = document.createElement("button");
    toggleDarkMode.textContent = "Toggle Dark Mode";
    toggleDarkMode.style.margin = "20px";
    document.body.prepend(toggleDarkMode);

    toggleDarkMode.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});

// Pop-up Modal Functionality
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `<p>Welcome to SunFilms! Check out our latest projects.</p><button id='closeModal'>Close</button>`;
    document.body.appendChild(modal);

    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    document.body.appendChild(overlay);

    function showModal() {
        modal.classList.add("show");
        overlay.classList.add("show");
    }

    function closeModal() {
        modal.classList.remove("show");
        overlay.classList.remove("show");
    }

    setTimeout(showModal, 2000); // Show modal after 2 seconds

    document.getElementById("closeModal").addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);
});

// Form Validation
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (e) {
            const email = document.querySelector("input[type='email']");
            if (!email.value.includes("@")) {
                alert("Please enter a valid email address.");
                e.preventDefault();
            }
        });
    }
});

            }
        });
    }
});
