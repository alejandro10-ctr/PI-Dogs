const { Router } = require('express');
const { Dog, Temperament } = require('../db');
const { YOUR_API_KEY } = process.env;
const express = require('express');
const axios = require('axios');
const router = Router();

const urLink = `https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`


const getApiData = async() => {
    
    const apiData = await axios.get(urLink);
    const apiInfo = await apiData.data.map(el => {
    let temperamentArray = [];
    if (el.temperament) {//pregunto que exista el temperamento y lo devuelvo en un arreglo
        temperamentArray = el.temperament.split(", ");
    }
    
    let heightArray = [];
    if (el.height.metric) {
        heightArray = el.height.metric.split(" - ");
    }

    let weightArray = [];
    if (el.weight.metric) {
        weightArray = el.weight.metric.split(" - ");
    }
        return {
            id: el.id,
            name: el.name,
            height: heightArray,
            weight: weightArray,
            temperaments: temperamentArray,
            life_span: el.life_span,
            image: el.image.url,
        }
    })
return apiInfo;
}

//-- Get data from the database posgrest--//
const getFromDb = async () => {
    return await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ['name'], //atributos que quiero traer del modelo Temperament, el id lo trae automatico
            through: {
                attributes: [],//traer mediante los atributos del modelo
            },
        }
    })
};

//combine data from API and database
const getAllDogs = async () => {
    const dataFromApi = await getApiData();
    const dataFromDb = await getFromDb();
    // const allDataMixed = dataFromApi.concat(dataFromDb);
    const allDataMixed = [...dataFromApi, ...dataFromDb];
    return allDataMixed;
}

//--endpoints--//
router.get("/dogs", async(req, res) => {//esta funcion también podra recibir un nombre por medio de query
    // const name = req.query.name;
    const { name } = req.query;
    const allDogs = await getAllDogs();
     if (name) {
        const dog = allDogs.filter(d => d.name.toLowerCase().includes(name.toLowerCase()));//si el perro existe guardame sus parametros aca.
        dog.length ? res.status(200).send(dog) : res.status(404).send("Dog not found"); 
    } else {
        res.status(200).send(allDogs);
    } 
});

router.get("/dogs/:id", async(req, res) => {
    const { id } = req.params;
    const allDogs = await getAllDogs();
    const dog = allDogs.filter(el => el.id == id);
    if (dog.length) {
        res.status(200).json(dog);
    }else{
        res.status(404).send("Dog not found");
    }
});
 
  router.get("/temperament", async (req, res) => {
    const temperamentsApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`);
    const temperaments = temperamentsApi.data.map(t => t.temperament);
    const temps = temperaments.toString().split(",");
    temps.forEach(el => {
        let mood = el.trim()
        Temperament.findOrCreate({
             where: { name: mood }
        })
    })

    const allTemp = await Temperament.findAll();    
    res.send(allTemp);
});
  





/*  router.post("/", async (req, res) => {
    try{
  
      const {
        name,
        height_max,
        height_min,
        weight_max,
        weight_min,
        life_span,
        temperament,
        image,
        
      } = req.body;
    
      let dogCreated = await Dog.create({
        name,
        height_max,
        height_min,
        weight_max,
        weight_min,
        life_span,
        image,
        
      });
    
      let temperamentDb = await Temperament.findAll({
        where: { name: temperament },
      });
      await dogCreated.addTemperaments(temperamentDb); // se agrega el await para esperar que se encuentren los temperaments
      res.send("Dog successfully created");
    }
    catch(error){
      console.log("Error", error)
    }
  });
  
 */
 

   router.post('/', async(req, res) => {
    let {
        name,
        min_height,
        max_height,
        min_weight,
        max_weight,
        life_span,
        temperaments,
        image
       } = req.body

    try {

    const fixedHeight = []
    const minHeight = min_height;
    const maxHeight = max_height;
    heightFixed = fixedHeight.push(minHeight, maxHeight)
    
      
 
    const fixedWeight = []
    const minWeight = min_weight;
    const maxWeight = max_weight;
    weightFixed = fixedWeight.push(minWeight, maxWeight)
    

       let dogCreated = await Dog.create({
        name,
        height: heightFixed.toString(),
        weight: weightFixed.toString(),
        life_span,
        image,
       })

       let temperamentDb = await Temperament.findAll({
        where: {name : temperaments}
       })
       dogCreated.addTemperament(temperamentDb)
       res.json(dogCreated).send('Dog successfully created')
     
    }catch(error){
        console.log(error)
     }
    })
  
 













router.use(express.json());

module.exports = router;





