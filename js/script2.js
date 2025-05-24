window.onload = () => {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopImmediatePropagation(); // Evita il comportamento predefinito del form
        const toastEl = document.getElementById('successToast');
        const toast = new bootstrap.Toast(toastEl);
        toast.show(); // Mostra il toast
        // Resetta il form
        event.target.reset();
    });
}

/* Funzione per mostrare un loader e nasconderlo */
function showHideLoader() {
    const loader = document.querySelector(".loader");
    if (loader.classList.contains("loader-hidden")) {
      loader.classList.remove("loader-hidden");
    } else loader.classList.add("loader-hidden");
  }
