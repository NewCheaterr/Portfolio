(function () {
  emailjs.init("im5LCAbBSEgq3Lh3-");
})();

function sendEmail(event) {
  event.preventDefault();

  emailjs.sendForm(
    "service_kkcputc",
    "template_ddw3qce",
    event.target
  )
  .then(() => {
    alert("Messaggio inviato!");
    event.target.reset();
  })
  .catch((error) => {
    console.error(error);
    alert("Errore nell'invio");
  });
}
