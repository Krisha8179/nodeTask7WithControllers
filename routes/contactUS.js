
const express = require('express');
const router = express.Router();

const contactUsController = require('../controllers/contactUs')

router.get('/contactUs',contactUsController.getContactUs);

router.post('/contactUs',contactUsController.postContactUs);
module.exports = router;