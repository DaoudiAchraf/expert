
const reservations = require('../models/reservation');

module.exports.reserve = (req,res)=>{
    console.log('reServe');
 
    const newReservation= {
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

    console.log('myreservations');
    // reservations.find({client:req._id})
    // .then(reservation => res.json(profile));

}

module.exports.get_myAppointments = (req,res)=>{
    
    console.log('appointments');
    console.log(req._id);

    reservations.find({expert:req._id})
    .then(appointments=>{
        console.log("appointments",appointments);
        res.json(appointments);
    });

    
}

module.exports.set_ReservationStatus = (req,res)=>{
    console.log('expert',req._id,req.body,'id:',req.params.id);
    
    reservations.updateOne(
        {expert:req._id,_id:req.params.id},
        {status:req.body.status}

        ).then(res=>res.json('successfully validated'))
        .catch(err=>console.log(err));
}


