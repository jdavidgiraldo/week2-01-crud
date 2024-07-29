const { getAll, create, getOne } = require('../controllers/user.controllers')
const express = require('express')

const userRouter = express.Router()

userRouter.route('/').get(getAll).post(create) //-> users

userRouter
  .route('/:id') //! -> /users/:id
  .get(getOne)

module.exports = userRouter
