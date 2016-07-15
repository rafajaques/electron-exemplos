// No processo principal
const {BrowserWindow} = require('electron');

// Ou no processo renderer
const {BrowserWindow} = require('electron').remote;

let win = new BrowserWindow({width: 800, height: 600});
win.on('closed', () => {
  win = null;
});

win.loadURL('http://rafajaques.com.br');

// http://electron.atom.io/docs/api/browser-window/
