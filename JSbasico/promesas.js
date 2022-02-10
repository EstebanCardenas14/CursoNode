const empleados = [

    {
        id: 1,
        nombre: 'Fernando'
    },

    {
        id: 2,
        nombre: 'Esteban'
    },

    {
        id: 3,
        nombre: 'Juan'
    }

]

const salarios = [

    {
        id: 1,
        salario: 1500
    },

    {
        id: 2,
        salario: 2000
    },

    {
        id: 3,
        salario: 3000
    }
]

const getEmpleado = (id) => {

    const promesa = new Promise((resolve, reject) => {

        const empleado = empleados.find(e => e.id === id)

        if (empleado) {
            resolve(empleado);
        } else {
            reject(`No existe empleado con id ${id}`)
        }

    })

    return promesa;

}

//getEmpleado(5)
//    .then(empleado => console.log(empleado))
//    .catch(err => console.log(err));

const getSalario = (id) => {

    const promesa = new Promise((resolve, reject) => {

        const salario = salarios.find(s => s.id === id)

        if (salario) {
            resolve(salario);
        } else {
            reject(`El empleado con id ${id} no existe!!`);
        }
    })

    return promesa;
}

//getSalario(6)
//    .then(salario => console.log(salario))
//    .catch(err => console.log(err));


// Ahora veremos promesas en cadena

//FORMA NUMERO 1

let id = 6;
let nombre;

getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id)
    }).then(salario => console.log(`El empleado con nombre ${nombre.nombre} tiene un salario de ${salario.salario}`))
    .catch(err => console.log(err));