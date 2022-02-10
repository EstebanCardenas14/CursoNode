const fs = require('fs');

console.clear();
const base = 3;
let salida = '';

console.log('==================');
console.log(`tabla del ${base}`);
console.log('==================\n');

for(let i = 1; i <= 10; i++){
    salida += `${base} x ${i} = ${base * i}\n`
}

console.log(salida);

fs.writeFile(`tabla-${ base }.txt`, salida, (err) => {
    if(err) throw err;
    console.log(`\nArchivo tabla-${base}.txt creado con exito !!`);
});