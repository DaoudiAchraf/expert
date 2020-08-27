const mongoose = require('mongoose');

const ExpertSchema = new mongoose.Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    location:{ type:String},
    status:{type: String},
    Certifications : {
        type: [String]
    },
    bio: { type:String}


}); 

module.exports =  mongoose.model('Expert_Profile', ExpertSchema);