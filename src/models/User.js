//!un modelo llamado User -> una tabla llamada users

//? modelo: User ---orm:sequelize-- -> tabla: users

const { DataTypes } = require('sequelize')
const sequelize = require('../utils/connection')

// En Mayúsculas y singular      // en minúsculas y singular
const User = sequelize.define('user', {
  //!users
  // Definimos las columnas aquí
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, //! significa que no puede haber dos email iguales
  },

  birthday: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
})

module.exports = User
