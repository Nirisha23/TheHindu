hamburger = document.querySelector('#menuIcon');
navbar = document.querySelector('#navLinksContainer');

hamburger.onclick = function () {
    navbar.classList.toggle('active');

    if (navbar.classList.contains('active')) {
        hamburger.innerHTML = '<i class="fa fa-times" aria-hidden="true" width="24" hight="24"></i>';
    } else {
        hamburger.innerHTML = '<i class="fa fa-bars" aria-hidden="true" width="24" hight="24"></i>';
    }
};

