// Inizializza EmailJS
(function () {
  emailjs.init("im5LCAbBSEgq3Lh3-"); // la public key che hai trovato
})();

// Associa l’evento submit
globalThis.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // ferma il refresh
    emailjs.sendForm(
      "service_kkcputc",
      "template_ddw3qce",
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
