document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("menuIcon").addEventListener("click", function () {
        console.log("Menu icon clicked");
        var navAuth = document.querySelector(".nav-auth");
        console.log("navAuth:", navAuth);
        navAuth.classList.toggle("active");
    });
});
