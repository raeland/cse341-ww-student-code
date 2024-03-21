const router = require("express").Router()
const professionalRoutes = require("./professional")
const contactsRoutes = require("./contacts")

router.use("/professional", professionalRoutes)
router.use("/contacts", contactsRoutes)

router.use('/', require('./swagger'))

router.get("/", (req, res) => { 
    //#swagger.tags=['Hello World']
    res.send ('Hello World')
})

router.use("/users", require('./users'))

module.exports = router