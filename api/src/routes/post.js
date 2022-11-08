/* //const axios = require('axios')
const { Dog, Temperament } = require('../db')
const {Sequelize} = require('sequelize');
const { Router } = require('express');
const router = Router();
 */




//POST /dogs:
/* Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
Crea una raza de perro en la base de datos relacionada con sus temperamentos */
/* router.post('', async (req, res) => {
    const {
        name,
        temperament,
        height_max,
        height_min,
        weight_max,
        weight_min,
        life_span,
        image
                   } = req.body;

    const fullHeight = [];
    const minHeight = height_min;
    const maxHeight = height_max;
    fullHeight.push(minHeight, maxHeight);
    
    const fullWeight = [];
    const minWeight = weight_min;
    const maxWeight = weight_max;
    fullWeight.push(minWeight, maxWeight);

    const newDog = await Dog.create({
        name,
        height: fullHeight,
        weight: fullWeight,
        life_span,
        image: image ? image : 'dog.png' 
    })
    let temp = await Temperament.findAll({
        where: {name: temperament}
    })

    newDog.addTemperament(temp);

    res.status(200).send('Creacion exitosa!')
    
})

module.exports = router  */