const catchError = require('../utils/catchError')
const User = require('../models/User')

const getAll = catchError(async (req, res) => {
  // Operaciones...
  const result = await User.findAll() //Select * from users
  return res.json(result)
})

module.exports = {
  getAll,
}
