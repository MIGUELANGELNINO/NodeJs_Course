//? Utilizamon el comando node en temrinal abriendo un espacio similar a javascript en el cual podemos realizar diferentes operacion
//? Incluso realizar contantes y llamarlas

//! Al usar este modulo obtendremos acceso a funciones para leer datos dierctamente en el sistema de archivos
const fs = require('fs')

//!Primer codigo de node

/* const hello= "hello World"
console.log(hello); */

//* EN tla terminal-> node index.js y se ejecutara

const textIn = fs.readFileSync("./txt/input.txt",'utf-8')
console.log(textIn);

const textOut = `'this is'+${textIn}.\nCreated on ${Date.now()}`
fs.writeFileSync('./text/output.txt',textOut);
console.log('File written!');