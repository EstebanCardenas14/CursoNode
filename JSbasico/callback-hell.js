//Se refiere a multiples callback uno dentro de otro lo cual hara que perdamos el inicio o metodo inicial

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

const getEmpleado = (id, callback) => {

    const empleado = empleados.find(e => e.id === id)
    if (empleado) {
        callback(null, empleado);
    } else {
        callback(`No existe el empleado con id = ${id}`);
    }

}

getEmpleado(1, (err, empleado) => {
    if (err) {
        console.log('ERROR !!!!!');
        return console.log(err);
    }

    console.log('Empleado Existe');
    console.log(empleado);

});

const getSalario = (id, callback) => {

    const salario = salarios.find(s => s.id === id)
    if (salarios) {
        callback(null, salario);
    } else {
        callback(`No existe el empleado con id = ${id} por lo que no tiene salario`);
    }

}

getSalario(2, (err, salario) => {

    if (err) {
        console.log('ERROR!!!!!!');
        return console.log(err);
    }

    console.log('Salario Encontrado!');
    console.log(salario);

});

const getTotal = (id, callback) =>{
    const empleado1 = empleados.find(e => e.id === id);
    const salario1 = salarios.find(s => s.id === id);
    if(empleado1 && salario1) {
        callback(null, empleado1, salario1);
    }else {
        callback(`El usuario con id = ${id} no existe`);
    }

}

getTotal(6,(err, empleado2, salario2) => {

    if(err){
        console.log('ERROR!!!!!!');
        return console.log(err);
    }

    console.log('Empleado encontrado');
    console.log(`El empleado con id = ${empleado2.id} tiene por nombre = ${empleado2.nombre} y su salario de = ${salario2.salario}`);

});


