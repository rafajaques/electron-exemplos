const {app, Menu, Tray} = require('electron');
let tray = null;

app.on('ready', () => {
  tray = new Tray('/caminho/para/o/icone');

  const contextMenu = Menu.buildFromTemplate([
    {label: 'Opcao 1', type: 'radio'},
    {label: 'Opcao 2', type: 'radio'},
    {label: 'Opcao 3', type: 'radio', checked: true},
    {label: 'Opcao 4', type: 'radio'}
  ]);

  tray.setToolTip('Balãozinho com o nome da aplicação');
  tray.setContextMenu(contextMenu);
});
