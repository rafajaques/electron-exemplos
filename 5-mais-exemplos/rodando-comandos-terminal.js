// Novamente, nada de Electron
const process = require('child_process');
process.exec('ls', (err, response, stderr) => {
  console.log(response);
});
