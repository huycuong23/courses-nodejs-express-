const express = require('express');
const router = express.Router();

const CourseController = require('../app/controllers/CourseController');

router.get('/new', CourseController.new);
router.get('/edit/:id', CourseController.edit);
router.get('/:slug', CourseController.show);
router.get('/', CourseController.index);
router.post('/store', CourseController.store);
router.put('/:slug', CourseController.update);

module.exports = router;
