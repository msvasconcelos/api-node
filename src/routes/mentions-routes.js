const express = require('express');
const router = express.Router();
const mentionsController = require('../controllers/mentions-controller');

router.get('/', mentionsController.listMentions);
router.post('/', mentionsController.createMention);

module.exports = router;