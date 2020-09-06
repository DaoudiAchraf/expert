
const Profile = require('../models/expert_Profile');

module.exports.add_Profile = async (req, res) => {

    console.log('add prof');
    console.log(req.body);
    const pro = await new Profile(req.body).save();
    return res.status(200).json({ profile: pro });
};


module.exports.delete_Profile = (req, res) => {
    Profile.deleteOne({ _id: req.params.id })
        .then(res.json({ msg: 'profile successfully deleted' }));

};


module.exports.update_Profile = (req, res, next) => {

    Profile.update({ _id: req.params.id }, { status: 'none' })
        .then(res.json({ msg: 'profile successfully updated' }));

};


module.exports.get_Profile = (req, res, next) => {

        console.log("getProfile");
        Profile.findOne({user: req.params.id}).populate('user')
        .then(profile => {
            console.log(profile);
            res.json(profile);
        });
    
};


module.exports.get_allProfiles = (req, res, next) => {
    console.log("marrrrrrrrrrrrrrrrrr");

    Profile.find({}).populate('user')
        .then(profiles => {
            res.json(profiles);
        });
    
};
