// document.addEventListener('DOMContentLoaded', function () {
//     const menuIcon = document.getElementById('menuIcon');
//     const loginBtn = document.getElementById('loginBtn');
//     const subscribeBtn = document.getElementById('subscribeBtn');

//     menuIcon.addEventListener('click', function () {
//         if (loginBtn.style.display === 'none' && subscribeBtn.style.display === 'none') {
//             loginBtn.style.display = 'inline-block';
//             subscribeBtn.style.display = 'inline-block';
//             menuIcon.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
//         } else {
//             loginBtn.style.display = 'none';
//             subscribeBtn.style.display = 'none';
//             menuIcon.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
//         }
//     });
// });


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

