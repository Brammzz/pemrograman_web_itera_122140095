import DashboardApp from "./app.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const app = new DashboardApp();
    console.log("Dashboard app initialized successfully");

    await simulateApiCheck();
  } catch (error) {
    console.error("Error initializing app:", error);
  }
});

const simulateApiCheck = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("System check complete");
      resolve(true);
    }, 1000);
  });
};
