const music = new Audio();
let currentTrack = 0;
let playing = false;

// 🔊 elementi DOM
const toggle = document.getElementById("music-toggle");
const settingsBtn = document.getElementById("settings-btn");
const volumeBox = document.getElementById("volume-box");
const volumeControl = document.getElementById("volume");

// Assicuriamoci che `playlist` sia definita (caricata da playlist.js prima di questo file)
if (Array.isArray(playlist) && playlist.length > 0) {
  music.src = playlist[currentTrack];
} else {
  music.src = "";
}
if (volumeControl) music.volume = Number.parseFloat(volumeControl.value) || 0.1;

// Mostra toast
function showToast(msg){
  let toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(()=>toast.classList.add('show'),50);
  setTimeout(()=>{
    toast.classList.remove('show');
    setTimeout(()=>toast.remove(),300);
  },3000);
}

// Play specific track by index (gestisce wrap-around)
function playTrack(index){
  if (!Array.isArray(playlist) || playlist.length === 0) return;
  currentTrack = ((index % playlist.length) + playlist.length) % playlist.length;
  music.src = playlist[currentTrack];
  music.currentTime = 0;
  music.play().then(()=>{
    playing = true;
    toggle.textContent = "🔊";
    toggle.classList.add('pulse');
    showToast("🎵 Ora in riproduzione: " + playlist[currentTrack].split('/').pop().replace(/\.[^/.]+$/, ""));
  }).catch(err=>{
    console.log('Playback error:', err);
    toggle.textContent = '🔇';
  });
}

// ▶️ play / pause
toggle.addEventListener("click", () => {
  if (playing) {
    music.pause();
    toggle.textContent = "🔇";
    toggle.classList.remove('pulse');
    playing = false;
  } else {
    // se non stiamo già riproducendo, assicurati che la traccia corrente sia impostata
    if (!music.src) music.src = playlist[currentTrack] || "";
    music.play().then(()=>{
      playing = true;
      toggle.textContent = "🔊";
      toggle.classList.add('pulse');
    }).catch(()=>{
      toggle.textContent = '🔇';
    });
  }
});

// 🎚 volume
if (volumeControl) {
  volumeControl.addEventListener("input", () => {
    music.volume = Number.parseFloat(volumeControl.value);
  });
}

// ⚙️ apri/chiudi box volume
settingsBtn.addEventListener('click', ()=>{
  volumeBox.classList.toggle('active');
  settingsBtn.classList.add('spin');
  setTimeout(()=>settingsBtn.classList.remove('spin'),600);
});

// Quando finisce una traccia, avvia la successiva
music.addEventListener('ended', ()=> playTrack(currentTrack + 1));

  // Avvia la musica al primo gesto dell'utente (click o tasto) — necessario per le policy autoplay
  function handleFirstGesture(){
    if (!playing) playTrack(currentTrack);
  }
  globalThis.addEventListener('click', handleFirstGesture, { once: true });
  globalThis.addEventListener('keydown', handleFirstGesture, { once: true });
