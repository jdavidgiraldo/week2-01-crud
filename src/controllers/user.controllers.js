const catchError = require('../utils/catchError')
const User = require('../models/User')

const getAll = catchError(async (req, res) => {
  // Operaciones...
  const result = await User.findAll() //Select * from users
  return res.json(result)
})

const create = catchError(async (req, res) => {
  const result = await User.create(req.body)
  return res.status(201).json(result)
})

const getOne = catchError(async (req, res) => {
  //const id = req.params.id -> desestructuración sig.linea
  const { id } = req.params
  const result = await User.findByPk(id)
  return res.json(result)
})

module.exports = {
  getAll,
  create,
  getOne,
}
