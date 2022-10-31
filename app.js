const { multiplicar } = require("./helpers/multiplicar");
const argv = require('./config/yargs');




//option(l)
//listar
//bolean
//default:false


console.clear();



// console.log(argv);



// const [,,arg3 = 'base=5'] = process.argv;
// const [, base] = arg3.split('=');



// console.log('base : yargs', argv.base, argv.h);


multiplicar(argv.b, argv.l, argv.h)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));