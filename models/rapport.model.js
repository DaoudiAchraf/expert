const mongoose = require('mongoose');

const RapportSchema = new mongoose.Schema({
    mission:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'reservation'
    },
    data: {},
});

module.exports = mongoose.model('Rapport', RapportSchema);