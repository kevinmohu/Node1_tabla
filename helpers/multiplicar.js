const fs = require('fs');
const colors = require('colors')

const crearArchivo = async(base = 5, l = false, h = 10) => {

    try {

        let salida = '';

        for (let i = 0; i <= h; i++) {
            salida += `${base}x${i}:${i*base}\n`;
        }

        if (l) {
            console.log('==================');
            console.log(`Tabla del: ${base}`);
            console.log('==================');
            console.log(salida.yellow);
        }

        fs.writeFileSync(`./salida/Tabla del ${base}.txt`, salida)
        return `Tabla del ${base}.txt creada`;
    } catch (err) {
        throw err;

    }


}

module.exports = {
    crearArchivo
}