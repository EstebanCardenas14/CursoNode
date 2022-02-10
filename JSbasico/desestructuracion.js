
//Objeto 
const deadpool = {
    nombre: 'Wade',
    apellido: 'Wilson',
    poder: 'Regeneracion',
    edad: 50,
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

//Forma de imprimir el objeto
//console.log(deadpool.getNombre())

//DESESTRUCTURACION 1:

const {nombre, apellido, poder, edad } = deadpool;
//console.log(nombre, apellido, poder, edad );

//DESESTRUCTURACION 2:

function imprimeHeroe(heroe){
    const {nombre, apellido, poder, edad } = heroe;
    console.log(nombre, apellido, poder, edad );
}

//imprimeHeroe(deadpool);

//DESESTRUCTURACION 3:

function imprimeHeroe2(nombre, apellido, poder, edad ){
    console.log(nombre, apellido, poder, edad );
}

//imprimeHeroe2(deadpool);

//DESESTRUCTURACION ARREGLO:

const heroes = ['Deadpool','Superman','Batman'];

const [h1,h2,h3] = heroes;
console.log(h1,h2,h3)