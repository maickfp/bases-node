const argv = require('yargs')
.options({
    'b': {
        alias: 'base',
        desc: 'Base for mult',
        type: 'number',
        demandOption: true
    },
    'l': {
        alias: 'list',
        desc: 'Show results in console',
        type: 'boolean',
        demandOption: false,
        default: false
    },
    'e': {
        alias: 'end',
        desc: 'End for mult',
        type: 'number',
        demandOption: false,
        default: 10
    }
})
.check( ( argv, options ) => {

    const {
        base,
        list,
        end
    } = argv;

    if( isNaN( base ) ) {
        throw new Error('Base should be a number');
    }

    if( isNaN( end ) ) {
        throw new Error('End should be a number');
    }
    
    return true;

})
.argv;

module.exports = argv;