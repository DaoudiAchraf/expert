const mongoose = require('mongoose');

const ExpertSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    // location:{type:String},
    location: {
        name: { type: String },
        longitude: { type: Number },
        latitude: { type: Number },
    },
    status: { type: String },
    certifications: {
        type: [String]
    },
    bio: { type: String }


});

module.exports = mongoose.model('Expert_Profile', ExpertSchema);