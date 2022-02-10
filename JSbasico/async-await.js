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

        const empleado = empleados.find(e => e.id === id)?.nombre

            (empleado)
            ? resolve(empleado)
            : reject(`No existe el empleado con id ${id}`);

    })

    return promesa;

}

const getSalario = (id) => {

    const promesa = new Promise((resolve, reject) => {

        const salario = salarios.find(s => s.id === id)?.salario

            (salario)
            ? resolve(salario)
            : reject(`El empleado con id ${id} no existe!!`);

    })

    return promesa;
}

const getInfoUsuario = async (id) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return (`El salario del empleado: ${empleado} es de ${salario}`);

    } catch (error) {

        return (error);
    }
}

const id = 3;

getInfoUsuario(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));

    