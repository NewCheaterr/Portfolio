// Inizializza EmailJS
(function () {
  emailjs.init("LA_TUA_PUBLIC_KEY"); // la public key che hai trovato
})();

// Associa l’evento submit
globalThis.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // ferma il refresh
    emailjs.sendForm(
      "TUO_SERVICE_ID",
      "TUO_TEMPLATE_ID",
      form
    )
    .then(() => {
      alert("Messaggio inviato!");
      form.reset(); // pulisce i campi
    })
    .catch((error) => {
      console.error(error);
      alert("Errore nell'invio: controlla console");
    });
  });
});
