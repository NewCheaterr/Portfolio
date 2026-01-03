/*const music = document.getElementById('bg-music');
const toggle = document.getElementById('music-toggle');
const settingsBtn = document.getElementById('settings-btn');
const volumeBox = document.getElementById('volume-box');
const volumeControl = document.getElementById('volume-control');

let playing = false;
let currentTrack = 0;

function getTrackName(path){
    return path.split('/').pop().replace(/\.[^/.]+$/, "");
}

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

  function playTrack(index){
    if(playlist.length === 0) return;
    currentTrack = index % playlist.length;
    music.src = playlist[currentTrack];
    music.muted = false;
    music.volume = Number.parseFloat(volumeControl.value) || 0.1;
    music.play().then(()=>{
      toggle.textContent = '🔊';
      toggle.classList.add('pulse');
      showToast(":notes: Ora in riproduzione: " + getTrackName(playlist[currentTrack]));
      playing = true;
    }).catch(err=>{
      console.log("Autoplay bloccato:", err);
      toggle.textContent = '🔇';
    });
  }

  music.addEventListener('ended', ()=> playTrack(currentTrack + 1));

  toggle.addEventListener('click', ()=>{
    if(playing){
      music.pause();
      toggle.textContent = '🔇';
      toggle.classList.remove('pulse');
      playing = false;
    } else {
      music.play().catch(()=>{});
      toggle.textContent = '🔊';
      toggle.classList.add('pulse');
      playing = true;
    }
  });

  settingsBtn.addEventListener('click', ()=>{
    volumeBox.classList.toggle('active');
    settingsBtn.classList.add('spin');
    setTimeout(()=>settingsBtn.classList.remove('spin'),600);
  });

  volumeControl.addEventListener('input', () => {
  music.volume = Number.parseFloat(volumeControl.value);
});
*/


const music = new Audio();
let currentTrack = 0;
let playing = false;

// 🔊 elementi DOM
const toggle = document.getElementById("music-toggle");
const settingsBtn = document.getElementById("settings-btn");
const volumeBox = document.getElementById("volume-box");
const volumeControl = document.getElementById("volume");

// playlist.js DEVE essere caricato prima
music.src = playlist[currentTrack];
music.loop = true;
music.volume = Number.parseFloat(volumeControl.value) || 0.1;

// ▶️ play / pause
toggle.addEventListener("click", () => {
  if (playing) {
    music.pause();
    toggle.textContent = "🔇";
  } else {
    music.play();
    toggle.textContent = "🔊";
  }
  playing = !playing;
});

// 🎚 volume
volumeControl.addEventListener("input", () => {
  music.volume = Number.parseFloat(volumeControl.value);
});

// ⚙️ apri/chiudi box volume
settingsBtn.addEventListener('click', ()=>{
    volumeBox.classList.toggle('active');
    settingsBtn.classList.add('spin');
    setTimeout(()=>settingsBtn.classList.remove('spin'),600);
  });

// ▶️ avvio sicuro dopo interazione utente
function startMusic() {
  if (!playing) {
    music.play();
    playing = true;
    toggle.textContent = "🔊";
  }
}
