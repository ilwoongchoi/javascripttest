function toggleNavbar() {
    var navbarLinks = document.getElementById("navbarLinks");
    if (navbarLinks.style.display !== "none") {
        navbarLinks.style.display = "none";
    } else {
        navbarLinks.style.display = "block";
    }
}

window.addEventListener("resize", function () {
    var navbarLinks = document.getElementById("navbarLinks");
    if (window.innerWidth > 768) {
        navbarLinks.style.display = "block";
    } else {
        navbarLinks.style.display = "none";
    }
});
