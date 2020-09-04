const mongoose = require('mongoose');

const ExpertSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    location: {
        name: { type: String },
        longitude: { type: Number },
        latitude: { type: Number },
    },
    speciality: { type: String },
    certifications: {
        type: [String]
    },
    bio: { type: String }


});

module.exports = mongoose.model('Expert_Profile', ExpertSchema);