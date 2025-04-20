export function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleString("id-ID", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function formatTime(date) {
  const d = new Date(date);
  return d.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
}

export function isPast(date) {
  return new Date(date) < new Date();
}

export function formatRelativeTime(date) {
  const now = new Date();
  const then = new Date(date);
  const diff = then - now;

  const minutes = Math.round(diff / 60000);
  const hours = Math.round(diff / 3600000);
  const days = Math.round(diff / 86400000);

  if (minutes < -1440) return `${Math.abs(days)} hari lalu`;
  if (minutes < -60) return `${Math.abs(hours)} jam lalu`;
  if (minutes < 0) return `${Math.abs(minutes)} menit lalu`;
  if (minutes < 60) return `dalam ${minutes} menit`;
  if (minutes < 1440) return `dalam ${hours} jam`;
  return `dalam ${days} hari`;
}

export function updateDateTime() {
  const dateTimeEl = document.getElementById("dateTime");
  const now = new Date();
  if (dateTimeEl) {
    dateTimeEl.textContent = now.toLocaleString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }
}
