// Toggle Menu
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Pindah Halaman
function showSection(sectionId) {
    document.getElementById("home").style.display = "none";
    document.getElementById("profile").style.display = "none";
    document.getElementById("tiktok").style.display = "none";
    document.getElementById(sectionId).style.display = "block";
}
