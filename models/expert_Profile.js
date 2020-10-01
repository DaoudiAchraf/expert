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
    speciality: { type: [String] },
    certifications: {
        type: [String]
    },
    bio: { type: String },
    dispo: {
        monday: { type: [String] || Boolean },
        tuesday: { type: [String] || Boolean },
        wednesday: { type: [String] || Boolean },
        thursday: { type: [String] || Boolean },
        friday: { type: [String] || Boolean },
        saturday: { type: [String] || Boolean },
        sunday: { type: [String] || Boolean }

    }
});

module.exports = mongoose.model('Expert_Profile', ExpertSchema);