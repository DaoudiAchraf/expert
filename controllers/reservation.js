



const reservation = require('../models/reservation');
const reservations = require('../models/reservation');

module.exports.reserve = (req,res)=>{
    new reservations(req.body).save()
    .then(res.json({msg:'profile added successfully'}));
}

module.exports.update_reservation = (req,res)=>{
        Profile.update({_id:req.params.id},{status:'none'})
        .then(res.json({msg:'profile successfully updated'}));

}

module.exports.delete_reservation = (req,res)=>{
    if (req.user.id)
        Profile.deleteOne({_id:req.params.id})
        .then(res.json({msg:'profile successfully deleted'}));

}

module.exports.get_myReservations = (req,res)=>{
    Profile.find({client:req.params.id})
    .then(reservation => res.json(profile));

}

module.exports.get_myAppointments = (req,res)=>{
    Profile.find({expert:req.params.id})
    .then(reservation => res.json(profile))

}