const express = require('express');
const router = express.Router();

const lessonController = require('../controller/lesson')


router.get('/', lessonController.getIndex)

module.exports = router