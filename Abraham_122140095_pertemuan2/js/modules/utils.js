export const formatDate = (dateString) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Date(dateString).toLocaleDateString("id-ID", options);
};

export const formatTime = (dateString) => {
  const options = {
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Date(dateString).toLocaleTimeString("id-ID", options);
};

export const isPast = (dateString) => {
  return new Date(dateString) < new Date();
};

export const formatRelativeTime = (dateString) => {
  const now = new Date();
  const date = new Date(dateString);
  const diffInSeconds = Math.floor((date - now) / 1000);

  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;

  if (diffInSeconds < 0) {
    const elapsed = Math.abs(diffInSeconds);

    if (elapsed < minute) {
      return `${elapsed} detik yang lalu`;
    } else if (elapsed < hour) {
      return `${Math.floor(elapsed / minute)} menit yang lalu`;
    } else if (elapsed < day) {
      return `${Math.floor(elapsed / hour)} jam yang lalu`;
    } else if (elapsed < week) {
      return `${Math.floor(elapsed / day)} hari yang lalu`;
    } else if (elapsed < month) {
      return `${Math.floor(elapsed / week)} minggu yang lalu`;
    } else {
      return formatDate(dateString);
    }
  } else {
    if (diffInSeconds < minute) {
      return `dalam ${diffInSeconds} detik`;
    } else if (diffInSeconds < hour) {
      return `dalam ${Math.floor(diffInSeconds / minute)} menit`;
    } else if (diffInSeconds < day) {
      return `dalam ${Math.floor(diffInSeconds / hour)} jam`;
    } else if (diffInSeconds < week) {
      return `dalam ${Math.floor(diffInSeconds / day)} hari`;
    } else if (diffInSeconds < month) {
      return `dalam ${Math.floor(diffInSeconds / week)} minggu`;
    } else {
      return formatDate(dateString);
    }
  }
};

export const updateDateTime = () => {
  const dateTimeElement = document.getElementById("dateTime");
  if (dateTimeElement) {
    const now = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    dateTimeElement.textContent = now.toLocaleDateString("id-ID", options);
  }
};

export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};
