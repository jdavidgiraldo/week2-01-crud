const {
  getAll,
  create,
  getOne,
  destroy,
  update,
} = require('../controllers/car.controllers')
const express = require('express')

const carRouter = express.Router()

//! RUTAS ESTÁTICAS
carRouter.route('/').get(getAll).post(create)

//!RUTAS DINÁMICAS
carRouter.route('/:id').get(getOne).delete(destroy).put(update)

module.exports = carRouter
