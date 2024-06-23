const route = require('express').Router()
const authController = require('../controller/auth')

route.get('/login', authController.getLogIn)

route.post('/login', authController.postLogin)

module.exports = route