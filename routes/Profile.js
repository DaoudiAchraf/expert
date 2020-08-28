const express = require('express');
const router = express.Router();


const profileController = require('../controllers/profile');

router.post('/add',profileController.add_Profile);
router.put('/update/:id',profileController.update_Profile);
router.delete('/delete/:id',profileController.delete_Profile);
router.get('/get/:id',profileController.get_Profile);
router.get('/get',profileController.get_allProfiles);

module.exports = router;
