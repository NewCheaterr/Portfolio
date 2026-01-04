const DISCORD_ID = "1109500213195968632";

document.addEventListener("DOMContentLoaded", () => {
  const dot = document.getElementById("discord-status");

  if (!dot) {
    console.error("Elemento #discord-status non trovato");
    return;
  }

  async function updateDiscordStatus() {
    try {
      const res = await fetch(
        `https://api.lanyard.rest/v1/users/${DISCORD_ID}`
      );
      const json = await res.json();
      const status = json.data.discord_status;

      dot.classList.remove(
        "status-online",
        "status-idle",
        "status-dnd",
        "status-offline"
      );

      switch (status) {
        case "online":
          dot.classList.add("status-online");
          break;
        case "idle":
          dot.classList.add("status-idle");
          break;
        case "dnd":
          dot.classList.add("status-dnd");
          break;
        default:
          dot.classList.add("status-offline");
      }
    } catch (err) {
      console.error("Errore Discord:", err);
    }
  }

  updateDiscordStatus();
  setInterval(updateDiscordStatus, 15000);
});
