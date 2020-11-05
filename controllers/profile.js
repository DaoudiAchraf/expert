
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

    console.log(req.body);

    Profile.updateOne({ user: req._id }, { $set: req.body })
        .then(res.json(req.body))
        .err(err => console.log(err));

};


module.exports.get_Profile = (req, res, next) => {

    console.log("getProfile");
    Profile.findOne({ user: req.params.id }).populate('user')
        .then(profile => {
            console.log(profile);
            res.json(profile);
        });

};
module.exports.get_allProfiles = async (req, res, next) => {
    const date = req.query.startDate.split(',');
    const day = date[0].toLowerCase();
    const time = date[1];
    // console.log(date)
    // console.log(experts);
    // const date = req.query.startDate.split(',');
    // const day = date[0].toLowerCase();
    // const time = date[1];
    // console.log(date)
    const experts = await Profile.find().populate('user');
    // res.status(200).json(experts);
    const profiles = await experts.filter(e => {
        return e.user.role == 'expert';
    })
    const obj = [];
    console.log("eazezae", req.query.localisation);
    profiles.map(e => {
        if (req.query.startDate != '' && e.location.name.includes(req.query.localisation)) {
            if (e.dispo[day].length > 1) {
                console.log(time, day, e.dispo[day][0] < e.dispo[day][1])
                if (time > e.dispo[day][0] && time < e.dispo[day][1]) {
                    obj.push(e);
                }
            }
        }
        else {
            e.location.name.includes(req.query.localisation) && (obj.push(e));
        }

    })
    // console.log('azeazea', obj);
    return res.status(200).json(obj);
};
