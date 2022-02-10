const { response, request } = require('express');


const userGet = (req = request, res = response) => {

    const {nombre, edad = 'No edad', cedula} = req.query;

    res.json({
        ok: true,
        msg: 'get API - controlador',
        nombre,
        edad,
        cedula
    });
}

const userPost = (req = request, res = response) => {

    const {nombre, edad} = req.body;

    res.json({
        ok: true,
        msg: 'post API - controlador',
        nombre,
        edad
    });
}

const userPut = (req = request, res = response) => {

   const { id } = req.params;

    res.json({
        ok: true,
        msg: 'put API - controlador',
        id
    });
}

const userPatch = (req = request, res = response) => {
    res.json({
        ok: true,
        msg: 'patch API - controlador'
    });
}

const userDelete = (req = request, res = response) => {
    res.json({
        ok: true,
        msg: 'delete API - controlador'
    });
}



module.exports = {
    userGet,
    userPost,
    userPut,
    userPatch,
    userDelete,
}