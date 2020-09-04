



const reservation = require('../models/reservation');
const reservations = require('../models/reservation');


module.exports.reserve = (req,res)=>{
    console.log('reServe');
 
    const newReservation= 
    {
        ...req.body,
        client:req._id
    }
 
    new reservations(newReservation).save()
    .then(res.json({msg:'reservation added successfully'}));
}

module.exports.update_reservation = (req,res)=>{
        Profile.update({_id:req.params.id},{status:'none'})
        .then(res.json({msg:'profile successfully updated'}));

}



module.exports.get_myReservations = (req,res)=>{
    reservations.find({client:req._id})
    .then(reservation => res.json(profile));

}

module.exports.get_myAppointments = (req,res)=>{
    reservations.find({expert:req._id})
    .then(reservation => res.json(profile))

}

