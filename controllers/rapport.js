const mongoose = require('mongoose');
const Rapport = mongoose.model('Rapport');
const reservations = require('../models/reservation');


module.exports.add_rapport = async (req, res) => {
    console.log(req.body);
    const rapport = await new Rapport(req.body).save();
    const ress = await reservations.findOneAndUpdate(
        { _id: req.body.mission },
        { status: 'raport' }
    )
    console.log("ress", ress);
    return res.status(200).json({ rapport });
};
