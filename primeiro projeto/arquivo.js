
const fs = require('fs');

fs.writeFileSync('arquivo.txt', 'Vai Corinthians');
fs.appendFileSync('arquivo.txt', ' Campeão!');