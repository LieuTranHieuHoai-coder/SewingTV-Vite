"use strict";
const electron = require("electron");
const path = require("path");
if (require("electron-squirrel-startup")) {
  electron.app.quit();
}
const createWindow = () => {
  const mainWindow = new electron.BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    },
    fullscreen: true
  });
  {
    mainWindow.loadURL("http://localhost:5174");
  }
  mainWindow.loadURL("http://eip.qve.com.vn:8888/sewingdata");
  mainWindow.setMenuBarVisibility(false);
};
electron.app.on("ready", createWindow);
electron.app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    electron.app.quit();
  }
});
electron.app.on("activate", () => {
  if (electron.BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
