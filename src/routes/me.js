const express = require('express');
const router = express.Router();

const MeController = require('../app/controllers/MeController');

router.get('/stored/course', MeController.storedCourse);
router.get('/stored/news', MeController.storedNews);

module.exports = router;
