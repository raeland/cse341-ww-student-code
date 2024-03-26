const router = require("express").Router()
//const dotenv = require('dotenv').config()
const usersRoute = require('./users')
const contactsRoute = require('./contacts')
const swaggerRoute = require('./swagger')

router.use('/', swaggerRoute)

router.get("/", (req, res) => { 
    //#swagger.tags=['Hello World']
   res.send ('Hello World')
})

router.use('/users', usersRoute)
router.use('/contacts', contactsRoute)
//router.use('/professional', require('./professional'))

module.exports = router