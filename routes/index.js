const router = require("express").Router()
const professionalRoutes = require("./professional")
const contactsRoutes = require("./contacts")

//router.get("/", (req, res) => { res.send ('Hello World')})
router.use ("/professional", professionalRoutes)
router.use ("/contacts", contactsRoutes)

module.exports = router;