const express = require('express');
const multer = require('multer');
const router = express.Router();


const ctrlUser = require('../controllers/user.controller');

const jwtHelper = require('../config/jwtHelper');
//les routers de services
const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE_MAP[file.mimetype];
        let error = new Error('Invalid mime type');
        if (isValid) {
            error = null;
        }
        cb(error, "./images");
    },
    filename: (req, file, cb) => {
        console.log(file.originalname)
        console.log(file.mimetype)
        const name = file.originalname.toLowerCase().split(' ').join('-');
        console.log(name)
        const ext = MIME_TYPE_MAP[file.mimetype];
        cb(null, name + '-' + Date.now() + '.' + ext);
    }

});




//register client
router.post('/register-client', multer({ storage: storage }).single("image"), (req, res, next) => {
    ctrlUser.register(req, 'client', res, next);
});
//register admin
router.post('/register-admin', multer({ storage: storage }).single("image"), (req, res, next) => {
    ctrlUser.register(req, 'admin', res, next);
});
//register expert
router.post('/register-expert', multer({ storage: storage }).single("image"), (req, res, next) => {
    ctrlUser.register(req, 'expert', res, next);
});
router.post('/authenticate', ctrlUser.authenticate);
router.get('/user', jwtHelper.verifyJwtToken, ctrlUser.userProfile);
// router.put('/update/:id',jwtHelper.verifyJwtToken,jwtHelper.cheackRole(['admin']),
// multer({storage:storage}).single("image"),ctrlUser.update);
// router.put('/updateProfile',jwtHelper.verifyJwtToken,jwtHelper.cheackRole(['superadmin','admin','fournisseur','client']),
// multer({storage:storage}).single("image"),ctrlUser.updateProfile);
// router.delete('/delete/:id',jwtHelper.verifyJwtToken,jwtHelper.cheackRole(['superadmin','admin','fournisseur']),ctrlUser.delete);
// router.get('/list',jwtHelper.verifyJwtToken,jwtHelper.cheackRole(['superadmin','admin','fournisseur']),ctrlUser.list);
// router.get('/listfourniatt',jwtHelper.verifyJwtToken,jwtHelper.cheackRole(['superadmin','admin','fournisseur']),ctrlUser.listFourniAtt);
// router.get('/listadmin',jwtHelper.verifyJwtToken,jwtHelper.cheackRole(['superadmin','admin','fournisseur']),ctrlUser.listadmin);
// router.get('/listclient',jwtHelper.verifyJwtToken,jwtHelper.cheackRole(['superadmin','admin']),ctrlUser.listclient);
// // router.get('/list1/:id',ctrlUser.list1);
// router.get('/userProfile',jwtHelper.verifyJwtToken,jwtHelper.verifyJwtToken,jwtHelper.cheackRole(['superadmin','admin','fournisseur','client']), ctrlUser.userProfile);
// // router.get('/listAdmins/:society',jwtHelper.verifyJwtToken,jwtHelper.cheackRole(['superadmin','admin','fournisseur','client']),ctrlUser.listAdmins);
// router.post('/resetpass',jwtHelper.verifyJwtToken,ctrlUser.resetpassword);
module.exports = router;
