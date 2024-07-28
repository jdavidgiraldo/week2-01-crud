const catchError = require('../utils/catchError')
const Car = require('../models/Car')

const getAll = catchError(async (req, res) => {
  // Operaciones...
  const result = await Car.findAll() //Select * from cars
  return res.json(result)
})

const create = catchError(async (req, res) => {
  const result = await Car.create(req.body)
  return res.status(201).json(result)
})

//3er commit
module.exports = {
  getAll,
  create
}
