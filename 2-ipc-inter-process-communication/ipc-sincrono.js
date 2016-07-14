// Processo principal
const {ipcMain} = require('electron');

ipcMain.on('mensagem-sincrona', (event, arg) => {
  console.log(arg);  // "ping"
  event.returnValue = 'pong';
});

// No processo renderer (página)
const {ipcRenderer} = require('electron');

console.log(ipcRenderer.sendSync('mensagem-sincrona', 'ping')); // "pong" 

// Fonte: https://github.com/electron/electron/blob/master/docs/api/ipc-main.md