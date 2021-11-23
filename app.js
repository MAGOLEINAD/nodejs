const {crearArchivo} = require ('./helpers/multiplicar')
const argv = require ('./config/yargs');
require('colors');

console.clear ()


crearArchivo (argv.b,argv.l,argv.h)
 .then (nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
 .catch (err => console.log(err))






// console.log(argv)
// console.log('base:yargs',argv.base)
// console.log(process.argv)


//De donde sale el YARGS Resuelve esta problematica
// const[ , , arg3='base=5'] = process.argv
// const [ , base=5] = arg3.split ('=')
// console.log(base)
// // const base = 3;