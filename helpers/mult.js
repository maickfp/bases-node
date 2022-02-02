
const fs = require('fs');

const createTableFile = async ( list = false, base = 1, end = 20 ) => {

    const fileName = `tabla-${ base }.txt`;
    let outputConsole, outputFile = '';

    outputConsole += '=====================\n'.green;
    outputConsole += `     TABLA DEL ${ base }     \n`.bgGray.black;
    outputConsole += '=====================\n'.green;

    outputFile += '=====================\n';
    outputFile += `     TABLA DEL ${ base }     \n`;
    outputFile += '=====================\n';


    for (let i = 1; i <= end; i++) {
        
        const mult = base * i;
        outputConsole += `${ base } ${ 'X'.cyan } ${ i } ${ '='.cyan } ${ mult }\n`;
        outputFile += `${ base } X ${ i } = ${ mult }\n`;
        
    }

    if( list ){
        console.log(outputConsole);
    }

    // fs.writeFile( fileName, salida, ( err ) => {
    //     if( err ) throw err;

    //     console.log(`${ fileName } creado!`);
    // });

    try{

        fs.writeFileSync( `./out/${fileName}`, outputFile );

        // console.log(`${ fileName } creado!`);
        return fileName;

    }catch( err ){
        // console.log( 'Error escribiendo archivo', err );
        throw err;
    }

};

module.exports = {
    createTableFile
};
