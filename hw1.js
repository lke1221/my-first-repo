const clockTitle = document.querySelector(".js-clock");

function getDday() {
  const today = new Date();
  const year = today.getFullYear();
  const christmas = new Date(year, 11, 25, 0, 0, 0, 0);
  if (today.getDate() === 25) {
    clockTitle.innerText = "Merry Christmas!";
  } else if (today - christmas > 0) {
    const nmas = new Date(Date.UTC(year + 1, 11, 25, 0, 0, 0, 0));
    renderTime(nmas, today);
  } else {
    renderTime(christmas, today);
  }
}

function renderTime(christmas, today) {
  const diff = christmas - today;
  const seconds = Math.floor(diff / 1000);
  const day = Math.floor(seconds / 86400);
  const hour = String(Math.floor((seconds / 3600) % 24)).padStart(2, "0");
  const minute = String(Math.floor((seconds / 60) % 60)).padStart(2, "0");
  const second = String(Math.floor(seconds % 60)).padStart(2, "0");

  clockTitle.innerText = `${day}d ${hour}h ${minute}m ${second}s`;
}

getDday();
setInterval(getDday, 1000);