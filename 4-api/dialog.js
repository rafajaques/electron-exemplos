let win = ...;  // BrowserWindow na qual será aberta a janela
const {dialog} = require('electron');

console.log(dialog.showOpenDialog({
  properties: [
    'openFile', // Janela para abrir arquivo
    'openDirectory', // Permitir abrir diretórios
    'multiSelections' // Permitir selecionar vários itens
  ]
}));
