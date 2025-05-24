window.addEventListener('load', () => {
    showHideLoader();
    
    //-- Initialize Swiper -- 
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 2000, // Cambia slide ogni 2 secondi
            disableOnInteraction: false, // Continua anche dopo l'interazione dell'utente
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});

function changeImage(img) {
    var modalImg = document.getElementById("modalImage");
    modalImg.src = img.src;
}

function vaiA(sezione) {
    switch (sezione) {
        case 1:
            window.location.href = "servizi.html#Edilizia-stradale";
            break;
        case 2:
            window.location.href = "servizi.html#Edilizia-civile";
            break;
        case 3:
            window.location.href = "servizi.html#pavimentazioni";
            break;
        default:
            return;
    }
}

function MostraGalleria() {
    window.location.href = "galleria.html";
}

function VaiAGalleria(){
    window.location.href = "galleria.html";
}

/* Funzione per mostrare un loader e nasconderlo */
function showHideLoader() {
    const loader = document.querySelector(".loader");
    if (loader.classList.contains("loader-hidden")) {
      loader.classList.remove("loader-hidden");
    } else loader.classList.add("loader-hidden");
  }