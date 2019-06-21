var express = require('express');
var router = express.Router();
var personController = require('../Controllers/personController');

router.get('/person', personController.person_index);
router.get('/person/id', personController.person_detail);

module.exports = router;