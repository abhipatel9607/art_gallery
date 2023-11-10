const location_btn = document.getElementById("location")
const btn = document.querySelector(".btn")
const btn_logo_black = document.querySelector(".btn_logo_black")
const btn_logo_cream = document.querySelector(".btn_logo_cream")


location_btn.addEventListener("mouseenter", () => {
    console.log("mouse Enter");
    btn.style.backgroundColor = "#d5966c"
    btn_logo_cream.style.display = "none";
    btn_logo_black.style.display = "block"
});

location_btn.addEventListener("mouseleave", () => {
    btn.style.backgroundColor = "#151515"
    btn_logo_black.style.display = "none"
    btn_logo_cream.style.display = "block";
});

function to_location() {
    window.location.href = "./src/location.html";
}

function go_to_home() {
    window.location.href = "../index.html";
}