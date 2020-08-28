
const Profile = require('../models/expert_Profile');

module.exports.add_Profile = (req,res)=>{
    new Profile(req.body).save()
    .then(res.json({msg:'profile added successfully'}));
    
};


module.exports.delete_Profile = (req,res)=>{
    Profile.deleteOne({_id:req.params.id})
    .then(res.json({msg:'profile successfully deleted'}));

};


module.exports.update_Profile = (req,res,next)=>{

    Profile.update({_id:req.params.id},{status:'none'})
    .then(res.json({msg:'profile successfully updated'}));
    
};


module.exports.get_Profile = (req,res,next)=>{
    
    Profile.find({_id:req.params.id})
    .then(profile => res.json(profile));
};


module.exports.get_allProfiles = (req,res,next)=>{
    Profile.find({})
    .then(profiles => res.json(profiles));
};