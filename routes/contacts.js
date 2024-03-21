const express = require('express');
const contactsController = require('../controllers/contacts');
//const { check, validation } = require('express-validator')
const router = express.Router();

// GET /feed/posts
router.get('/', contactsController.getAll);
router.get('/:id', contactsController.getContact);
// localhost:8080/professional/
  
// Error handling middleware
router.use((err, req, res, next) => {
console.error(err.stack)
res.status(500).send('Oh, no! Please check again later.')
})

module.exports = router;