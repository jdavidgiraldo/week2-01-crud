const catchError = require('../utils/catchError')
const Car = require('../models/Car')

const getAll = catchError(async (req, res) => {
  // Operaciones...
  const result = await Car.findAll() //Select * from cars
  return res.json(result)
})

//3er commit
module.exports = {
  getAll,
}
