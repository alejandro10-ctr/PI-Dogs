/* const axios = require('axios')
const { Dog, Temperament } = require('../db')
const {Sequelize} = require('sequelize');
const {YOUR_API_KEY} = process.env
//const { Op } = require('sequelize')



const getDogs = async function (req, res){
    const name = req.query.name;
    try{if(!name){
       const url = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)
      // console.log(url)
       const api = await url.data.map(el => {
        return {
            id: el.id,
            name: el.name,
            temperament: el.temperament,
            life_span: el.life_span,
            weight: el.weight.metric,
            height: el.height.metric,
            image: el.image.url
               }
            })
           
           return api
    }else{    
     const query = name.toLowerCase()   
     const match = await url.data.map(el =>{
          if(el.name.toLowerCase().includes(query)){
            res.json(el.name)
          }
     })
     console.log(match)
      return match;
    }}catch(error){
        console.log(error)
    }
}
 */



//GET /dogs: 
/* Obtener un listado de las razas de perro
Debe devolver solo los datos necesarios para la ruta principal */

/* 
    const getDogs = async function (req, res){

        if(req.query.name){
            const name = req.query.name;
            const query = name.toLowerCase();
            const info = [];
            axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`).then( res => {
                res.data.forEach(el => {
                   
                    if(el.name.toLowerCase().includes(query)){
                        info.push({
                            id: el.id,
                            name: el.name,
                            temperament: el.temperament,
                            height: el.height.metric,
                            weight: el.weight.metric,
                            image: el.image.url
                        })
                    }
                
               })
                Dog.findAll({include: Temperament,
                     where : { name :{ 
                        [Sequelize.Op.iLike]: `%${name}%`}}}).then(data => {
                            data.forEach(el => {
                                let temperament = ''; //new Set();
                                el.temperaments.forEach(t => {
                                    temperament = temperament.concat(t.name + ', ') //.add(t.name)
                                })
                                temperament = temperament.slice(0, temperament.length-2)
                                info.push({
                                    id: el.id,
                                    name: el.name,
                                    temperament: temperament,
                                    height: el.height,
                                    weight: el.weight,
                                    image: el.image
                                }) */
                       /*      })
                          res.json(info)
                        })
            }).catch(error => res.json(error))
            }  else {
                axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`).then( res => {
                    const info = [];
                    res.data.forEach(el => {
                        
                            info.push({
                                id: el.id + 264,
                                name: el.name,
                                temperament: el.temperament,
                                height: el.height.metric,
                                weight: el.weight.metric,
                                image: el.image.url
                            })
                        
                    })
                    Dog.findAll({ include: Temperament }).then(data => {
                                data.forEach(el => {
                                    let temperament = ''; //new Set();
                                    el.temperaments.forEach(t => {
                                        temperament = temperament.concat(t.name + ', ')  */
                                   /*  let temperament = new Set();
                                    el.temperament.forEach(t => {
                                        temperament = temperament.add(t.name) */
                         /*            })
                                    temperament = temperament.slice(0, temperament.length-2)
                                    info.push({
                                        id: el.id + 264,
                                        name: el.name,
                                        temperament: temperament,
                                        height: el.height,
                                        weight: el.weight,
                                        image: el.image
                                    })
                                })
                                res.json(info)
                            })
                }).catch(error => res.json(error))
                }   
            } */
        
            
            
            
            
            
            /* const getDogsApi = async () => {
                const apiInfo = await axios.get('https://api.thedogapi.com/v1/breeds')
                
                const getApiInfo = await apiInfo.data.map(d => {
                    
                    let temperamentArray = [];
                    if(d.temperament){
            temperamentArray = d.temperament.split(", ")
        }
        
        let heightArray = [];
        if(d.height.metric){
            heightArray = d.height.metric.split(" - ")
        }
        let weightArray = [0];
        if(d.weight.metric){
            weightArray = d.weight.metric.split(" - ")
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

res.json(getAllDogs) */



module.exports = getDogs 