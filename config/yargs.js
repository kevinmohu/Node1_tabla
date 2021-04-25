const argv = require('yargs')
    .options('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla'
    })
    .options('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        describe: 'Muestra la tabla en consola'

    })
    .options('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: false,
        describe: 'Dimension de la tabla',
        default: 10
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero';
        }
        if (isNaN(argv.h)) {
            throw 'El limite debe de ser un numero entero';
        }
        return true;
    })
    .argv;

module.exports = argv;