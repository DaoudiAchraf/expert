const express = require('express');
const router = express.Router();


const reservationsController = require('../controllers/reservation');

router.post('/reserve',reservationsController.add_Profile);
router.put('/update/',reservationsController.update_Profile);
router.delete('/delete',reservationsController.delete_Profile);
router.get('/',reservationsController.get_Profile);
router.get('/all',reservationsController.get_allProfiles);

module.exports = router;
