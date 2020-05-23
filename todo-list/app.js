const log = require('./util');
const _ = require('lodash');
const chalk = require('chalk');
// const command = process.argv[2].toUpperCase; 
// const command1 = process.argv[3];
const yargs = require('yargs');
const task = require('./task')


// alterando versão do CLI
yargs.version('1.0.1')

yargs.command({
    command: 'add',
    describe: 'Adiciona a porra toda',
    builder: {
        name: {
            describe : 'Nome Nome',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log(chalk.green('AEEEE add'))
        console.log(chalk.green(argv.name))

        task.addTask(argv.name)
    }
})

yargs.command({
    command: 'read',
    describe: 'Lê a porra toda',
    handler: function(){
        console.log(chalk.green('AEEEE Lê'))
    }
})

yargs.command({
    command: 'list',
    describe: 'Lista a porra toda',
    handler: function(){
        console.log(chalk.green('AEEEE Lista'))
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a porra toda',
    handler: function(){
        console.log(chalk.red('AEEEE remove'))
    }
})





// console.log(process.argv);


// console.log(yargs.argv);

 // console.log(yargs.argv);
 yargs.parse();