
const { createTableFile } = require('./helpers/mult');
const argv = require('./config/yargs');
require('./config/colors');

console.clear();

// const [,, arg3 = 'base=2' ] = process.argv;
// const [, base = 2 ] = arg3.split('=');
// console.log( arg3 );


// console.log( argv ); // FLAGS EJ: --LISTAR=TRUE
// console.log( argv._ ); // PARAMETROS EJ: TIPO=2

// const base = 2;
const {
    base,
    list,
    end
} = argv;

createTableFile( list, base, end )
.then( fileName => console.log( fileName, 'creado!!'.success ) )
.catch( err => console.log( 'Error', err ));