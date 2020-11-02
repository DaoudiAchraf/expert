const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
    client : 
    {
        type:mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    
    date : {type:Date},
    
    type : {type:String},

    name:{type:String},

    phone:{type:String},
    
    expert :  
    {
        type:mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },

    status: {
        type:String,
        enum:["accepted", "rejected", "waiting", "report"],
        default:"waiting"
        
    },

    createdAt: {
        type: Date,
        default: new Date(),
    }
 }).index({ createdAt:0}, { expireAfterSeconds: 60 });


module.exports =  mongoose.model('reservation', ReservationSchema);