const express = require('express');
const router = express.Router();
const Util = require('../utilities/index')

const contactsController = require('../controllers/contacts');
//const { check, validation } = require('express-validator')

// GET /feed/posts
router.get('/', Util.handleErrors(contactsController.getAllContact));
router.get('/:id', Util.handleErrors(contactsController.getContact));

router.post('/', Util.handleErrors(contactsController.createContact))
router.put('/:id', Util.handleErrors(contactsController.updateContact))
router.delete('/:id', Util.handleErrors(contactsController.deleteContact))
// localhost:8080/professional/
  
// Error handling middleware
//router.use((err, req, res, next) => {
//console.error(err.stack)
//res.status(500).send('Oh, no! Please check again later.')
//})

module.exports = router;