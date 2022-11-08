// const axios = require('axios')
 //const { Router } = require('express');
 //const { Dog, Temperament } = require('../db')
 //const {Sequelize} = require('sequelize');
//const router = require('../routes');


// const router = Router();



// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
//GET /dogs: 
/* Obtener un listado de las razas de perro
Debe devolver solo los datos necesarios para la ruta principal */
/* const getDogs =  async(req, res) =>{

    const getDogsApi = async () => {
      const apiInfo = await axios.get('https://api.thedogapi.com/v1/breeds')

        const getApiInfo = await apiInfo.data.map(d => {

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
    })
      return getApiInfo
 }


 const getDogsDb = async () => {
    return await Dog.findAll({
        include : {
            model: Temperament,
            attributes : ['name'],
            through: {
                attributes : []
            }
        }
    })
 }


 var getAllDogs = async () => {
    const apiD = await getDogsApi();
    const dbD = await getDogsDb();

    const allDogs = await apiD.concat(dbD)

    return allDogs;
 }

 return res.json(getAllDogs)
};


 */
 // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 // GET /dogs?name="..." 
 /* Obtener un listado de las razas de perro que contengan la palabra ingresada como query parameter
Si no existe ninguna raza de perro mostrar un mensaje adecuado */
  
 /* const getDogsByName = async (req, res) => { 
 
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

    if(dogsByName.length === 0) res.send(await getDogs())
    return res.send(dogsByName)

    
}; */

 // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 //] GET /dogs/{idRaza}:
/* Obtener el detalle de una raza de perro en particular
Debe traer solo los datos pedidos en la ruta de detalle de raza de perro
Incluir los temperamentos asociados
 */

/* const getDogById = async (req, res) => {

    const { id } = req.params;
try{
    if(!id){
        res.status(404).send('No se encontro un perro con ese id')
    }else{
        let dogs = await getDogs();
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
} */



// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//POST /dogs:
/* Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
Crea una raza de perro en la base de datos relacionada con sus temperamentos */
/* const createDog = async (req, res) => {
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
        image: image ? image : 'dog.png' // corregir esa imagen
    })
    let temp = await Temperament.findAll({
        where: {name: temperament}
    })

    newDog.addTemperament(temp);

    res.status(200).send('Creacion exitosa!')
    
}





 module.exports = {
    getDogs,
    getDogsByName,
    getDogById,
    createDog

 } */