// Es una funcion que se ejecutara despues en cierto punto del tiempo

//setTimeout(() => {
//    console.log('Hola Mundo');
//}, 1000);

const getUsuarioByID = (id, callback) => {

    const usuario = {
        id,
        nombre: 'Esteban'
    }

    setTimeout(() => {
        callback(usuario)
    }, 1500)

}

getUsuarioByID( 10, ( user ) => {
    console.log( user);
});

