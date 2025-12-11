import { app, BrowserWindow } from "electron";
import { join } from "node:path";
import { electronApp, optimizer } from "@electron-toolkit/utils";
import { registerRoute } from "../lib/electron-router-dom";
import icon from "../../resources/icon.png?asset";

function createWindow(): void {
  const mainWindow = new BrowserWindow({
    width: 1120,
    height: 700,
    show: false,
    autoHideMenuBar: true,
    icon,
    backgroundColor: "#17141f",
    titleBarStyle: "hiddenInset",
    trafficLightPosition: {
      x: 20,
      y: 20,
    },
    // ...(process.platform === "linux" ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, "../preload/index.js"),
      sandbox: false,
    },
  });

  registerRoute({
    id: "main",
    browserWindow: mainWindow,
    htmlFile: join(__dirname, "../renderer/index.html"),
  });

  mainWindow.on("ready-to-show", () => {
    mainWindow.show();
  });
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId("com.electron");

  app.on("browser-window-created", (_, window) => {
    optimizer.watchWindowShortcuts(window);
  });

  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
