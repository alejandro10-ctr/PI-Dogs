/* 
 const axios = require('axios')
 const { Dog, Temperament } = require('../db') */
 
 //const {Sequelize} = require('sequelize');
 //const { Router } = require('express');
 //const { Op } = require("sequelize");
//const router = require('../routes');
//const { Router } = require('express');
//const router = Router();
//const getAllDogs = require('../controller/index')







// GET /dogs?name="..." 
 /* Obtener un listado de las razas de perro que contengan la palabra ingresada como query parameter
Si no existe ninguna raza de perro mostrar un mensaje adecuado */
  
/* router.get('',  async (req, res) => { 
 
    const getDogsByNameApi = async () => {
      const { raza_perro } = req.query;
    //raza_perro = raza_perro.toLowerCase()
   try{ 
      const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${raza_perro}`)
      const infoUrl = await apiUrl.data.filter(d => {
     
          if(el.name.toLowerCase().includes(raza_perro.toLowerCase())){
              let temperamentArray = [];
              if(d.temperament){
                  temperamentArray = d.temperament.split( ", ")
              }
    
            let heightArray = [];
            if(d.height.metric){
                heightArray = d.height.metric.split( " - ")
            }
            let weightArray = [0];
            if(d.weight.metric){
                weightArray = d.weight.metric.split( " - ")
            }   
    
            return {
                id: d.id,
                name: d.name,
                temperament: temperamentArray,
                height: heightArray,
                weight: weightArray,
                life_span: d.life_span,
                image: d.image.url
               
            }
        }
        return infoUrl
    });
  }catch(error){
    console.log(error)
  }
 }
        const getDogsByNameDb = await Dog.findAll({
             where: {
                   name: {[Sequelize.Op.like]: `%${raza_perro}%`}
                },
             include: {
                   model: Temperament,
                   attributes: ['name'],
               through: {
                   attributes: []
                }
    }
});

   const dogsByName = async () =>{
        const adbn = getDogsByNameApi();
        const dbdbn = getDogsByNameDb();
        const dogsByName = await adbn.concat(dbdbn);

        return dogsByName
     
    }

    if(dogsByName.length === 0) res.send(await getAllDogs())
    return res.send(dogsByName)

    
}); */


/* const getDogsByName = async function(req, res) {
    const {name} = req.query
    try{
        const api = await 
        if(name){
            if(name.toLowerCase()){}
        }
    }
} */



//module.exports = router 