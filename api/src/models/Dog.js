const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
   /*     validate: {
        max: 100,
        min: 0
      }  */

    },
    
    
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
       /* validate: {
        max: 100,
        min: 0
      }  */
    },
   
    life_span: {
      type: DataTypes.STRING,

    },
    image: {
      type: DataTypes.TEXT,
    },
  });
};

/* id: {
  type: DataTypes.INTEGER,
  allowNull: false,
  autoIncrement: true,
  primaryKey: true
},
name: {
  type: DataTypes.STRING,
  allowNull: false,
},
min_height: {
  type: DataTypes.STRING,
  allowNull: false,
   validate: {
    max: 100,
    min: 0
  } 

},
max_height: {
  type: DataTypes.STRING,
  allowNull: false,
   validate: {
    max: 100,
    min: 0
  } 

},
min_weight: {
  type: DataTypes.STRING,
  allowNull: false,
   validate: {
    max: 100,
    min: 0
  } 
},
max_weight: {
  type: DataTypes.STRING,
  allowNull: false,
   validate: {
    max: 100,
    min: 0
  } 
},
life_span: {
  type: DataTypes.STRING,

},
image: {
  type: DataTypes.TEXT,
},
});
};
 */