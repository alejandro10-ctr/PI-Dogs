/* 
const axios = require('axios')
const { Dog, Temperament } = require('../db') */
//const {Sequelize} = require('sequelize');
//const router = require('../routes');
/* const { Router } = require('express');
const router = Router();





    const getDogsApi = async () => {
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

  
module.exports = {
    getAllDogs,
    getDogsApi,
    getDogsDb
}
 */