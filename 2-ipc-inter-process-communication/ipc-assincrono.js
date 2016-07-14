// Processo principal
const {ipcMain} = require('electron');

ipcMain.on('mensagem-assincrona', (event, arg) => {
  console.log(arg);  // "ping"
  event.sender.send('resposta-assincrona', 'pong');
});

// No processo renderer (página)
const {ipcRenderer} = require('electron');

ipcRenderer.on('resposta-assincrona', (event, arg) => {
  console.log(arg); // "pong"
});

ipcRenderer.send('mensagem-assincrona', 'ping');

// Fonte: https://github.com/electron/electron/blob/master/docs/api/ipc-main.md