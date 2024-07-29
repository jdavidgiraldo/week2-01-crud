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

const getOne = catchError(async (req, res) => {
  const { id } = req.params
  const result = await Car.findByPk(id)
  return res.json(result)
})

const destroy = catchError(async (req, res) => {
  const { id } = req.params
  const result = await Car.destroy({ where: { id } })
  if (!result) return res.status(404).json('user not found')
  return res.status(204)
})

const update = catchError(async (req, res) => {
  const { id } = req.params
  const car = await Car.update(req.body, { where: { id }, returning: true })

  if (car[0] === 0) return res.sendStatus(404)
  return res.status(200).json(car[1][0])
})

//3er commit
module.exports = {
  getAll,
  create,
  getOne,
  destroy,
  update, 
}
