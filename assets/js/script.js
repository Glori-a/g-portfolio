// Example for menu highlighting
document.querySelectorAll('.menu a').forEach((link) => {
    link.addEventListener('click', () => {
        document.querySelector('.menu a.active').classList.remove('active');
        link.classList.add('active');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const galleryItems = document.querySelectorAll(".gallery-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const filter = this.getAttribute("data-filter");

            galleryItems.forEach(item => {
                if (filter === "all" || item.classList.contains(filter)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    // Affiche tous les éléments au chargement de la page
    document.querySelector(".filter-btn.active").click();
});

