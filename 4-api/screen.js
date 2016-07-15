// Criar uma janela que ocupa toda a tela
const electron = require('electron');
const {app, BrowserWindow} = electron;

let win

app.on('ready', () => {
  const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize;
  win = new BrowserWindow({width, height});
});

// http://electron.atom.io/docs/api/screen/
