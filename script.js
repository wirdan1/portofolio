document.addEventListener("DOMContentLoaded", function() {
    let elements = document.querySelectorAll(".fade-in");

    function checkScroll() {
        elements.forEach((el) => {
            let position = el.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;

            if (position < windowHeight - 50) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Jalankan saat halaman dimuat
});

// Fungsi Upload & Pencarian URL
let urlData = [];

function uploadURL() {
    let name = document.getElementById("urlName").value;
    let link = document.getElementById("urlLink").value;

    if (name && link) {
        urlData.push({ name, link });
        updateURLList();
        saveToJSON();
    }
}

function updateURLList() {
    let list = document.getElementById("urlList");
    list.innerHTML = "";

    urlData.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="_blank">${item.name}</a>`;
        list.appendChild(li);
    });
}

function searchURL() {
    let searchValue = document.getElementById("search").value.toLowerCase();
    let filteredData = urlData.filter(item => item.name.toLowerCase().includes(searchValue));

    let list = document.getElementById("urlList");
    list.innerHTML = "";

    filteredData.forEach((item) => {
        let li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="_blank">${item.name}</a>`;
        list.appendChild(li);
    });
}

function saveToJSON() {
    let jsonData = JSON.stringify(urlData);
    localStorage.setItem("savedURLs", jsonData);
}

function loadFromJSON() {
    let jsonData = localStorage.getItem("savedURLs");
    if (jsonData) {
        urlData = JSON.parse(jsonData);
        updateURLList();
    }
}

loadFromJSON();
