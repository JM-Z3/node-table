const fs = require('fs');
const colors = require('colors');




const multiplicar = async(base, l = false, hasta = 10) => {
    
    

    try {
        
        let resultadoPrint = '';
        let resultadoConsola = '';
        for (let i = 1; i <= hasta; i++) {
            resultadoPrint+=(`${base} X ${i} = ${base*i}\n`);
            resultadoConsola+=(`${base} ${'X'.green} ${i} ${'='.green} ${base*i}\n`);

        }

        if(l) {
            console.log('==============================='.rainbow)
            console.log('     Tabla de multiplicar'.bold.brightRed)
            console.log('==============================='.rainbow)

            console.log(resultadoConsola);
        }



        let nombreArchivo = `Tabla-del-${base}.txt`;
        fs.writeFileSync(`./salida/${nombreArchivo}`, resultadoPrint);

        return `${nombreArchivo} Saved!!!!!!!!!`.rainbow
    } catch (error) {
        throw error;
    }
    


}

module.exports = {
    multiplicar
}