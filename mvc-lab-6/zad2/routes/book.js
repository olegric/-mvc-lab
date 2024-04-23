const express = require('express');
const bookController = require('../controllers/book');
const router = express.Router();

router.get('/:id', bookController.getBooksList);

module.exports = router;
