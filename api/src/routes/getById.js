
 //const axios = require('axios')
 //const { Router } = require('express');
 //const { Dog, Temperament } = require('../db')
 //const {Sequelize} = require('sequelize');
//const router = require('../routes');
const { Router } = require('express');
const router = Router();
const getAllDogs = require('../controller/index')

//IMPORTAR GETDOGS




 //] GET /dogs/{idRaza}:
/* Obtener el detalle de una raza de perro en particular
Debe traer solo los datos pedidos en la ruta de detalle de raza de perro
Incluir los temperamentos asociados
 */
/* 
router.get('/:id',  async (req, res) => {

    const { id } = req.params;
try{
    if(!id){
        res.status(404).send('No se encontro un perro con ese id')
    }else{
        let dogs = await getAllDogs();
        const dog = await dogs.filter(d => {
            if(d.id === id){
                return d
            }
        })
        if(dog.length === 0){
            res.status(404).send('No se encontro un perro con ese id')
        }else{
            return res.status(200).json(dog)
        }
    }
   }catch(error){
    console.log(error)
   } 
})

module.exports = router  */