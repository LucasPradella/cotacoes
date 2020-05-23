const log = require('./util');


const _ = require('lodash');
const chalk = require('chalk');



console.log('app util')

const inicio = chalk.green('Inicio do metodo');

console.log(inicio)
console.log(chalk.bold.inverse('Java > javaScript '))


log('primeira mensagem de log')
log('segunda mensagem de log')

const meuArray = [1, 2, 3, 4, 5, 6];

const meuNovoArray = _.chunk(meuArray, 3);

console.log(meuNovoArray);


const dif = _.difference(meuNovoArray[0], meuNovoArray[1])

console.log(dif)
console.log(chalk.red('Fim do metodo'))