const DISCORD_ID = "1109500213195968632";

async function updateDiscordStatus() {
  try {
    const res = await fetch(
      `https://api.lanyard.rest/v1/users/${DISCORD_ID}`
    );
    const data = await res.json();

    const status = data.data.discord_status;
    const dot = document.getElementById("status-dot");

    switch (status) {
      case "online":
        dot.style.backgroundColor = "green";
        break;
      case "idle":
        dot.style.backgroundColor = "yellow";
        break;
      case "dnd":
        dot.style.backgroundColor = "red";
        break;
      case "offline":
      default:
        dot.style.backgroundColor = "gray";
    }
  } catch (e) {
    console.error("Errore Discord:", e);
  }
}

// aggiorna subito
updateDiscordStatus();

// aggiorna ogni 15 secondi
setInterval(updateDiscordStatus, 15000);
