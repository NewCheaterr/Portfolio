/*const overlay = document.getElementById("entry-overlay");
document.getElementById("enter-btn").onclick = () => {
  overlay.classList.add("hidden");
  setTimeout(() => overlay.remove(), 800);
};

const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  themeBtn.classList.add("animate");
  setTimeout(() => themeBtn.classList.remove("animate"), 600);

  themeBtn.textContent = 
    document.body.classList.contains("light-mode") ? "☀️" : "🌙";
});
*/

// OVERLAY INIZIALE
const overlay = document.getElementById("entry-overlay");
const enterBtn = document.getElementById("enter-btn");

enterBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");

  // 🔊 avvia musica DOPO click (browser-safe)
  if (typeof startMusic === "function") {
    startMusic();
  }

  setTimeout(() => {
    overlay.remove();
  }, 800);
});

// 🌙 THEME TOGGLE
const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  themeBtn.classList.add("animate");
  setTimeout(() => themeBtn.classList.remove("animate"), 600);

  themeBtn.textContent =
    document.body.classList.contains("light-mode") ? "☀️" : "🌙";
});
