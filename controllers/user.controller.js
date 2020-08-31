const mongoose = require('mongoose');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const _ = require('lodash');
var ObjectId = require('mongoose').Types.ObjectId;


const User = mongoose.model('User');

module.exports.register = (req, role, res, next) => {
  const url = req.protocol + "://" + req.get('host');
  console.log(req.body);
  var user = new User();
  user.login = req.body.login;
  user.password = req.body.password;
  user.phone = req.body.phone;
  user.mail = req.body.mail;
  user.avatar = gravatar.url(req.body.mail, {
    s: '200',
    r: 'pg',
    d: 'mm'
  });
  user.role = role;
  role === "expert" ? user.etat = 'en attend' : user.etat = 'apprauve'
  // user.adress = req.body.adress;
  // if (req.file) {
  //   user.image = url + '/images/' + req.file.filename;
  // } else user.image = url + '/images/defaultImage.png';
  user.save((err, doc) => {
    if (!err) {
      if (role === "client") {
        passport.authenticate('local', (er, user, info) => {
          console.log(user, info);
          // error from passport middleware
          if (er) return res.status(400).json(er);
          // registered user
          else if (user) {
            // if(user.role == "client" && user.etat == "en attente"){
            //   return res.status(400).json({"message":"you need to wait"});
            // }else if(user.role == "client") return res.status(400).json({"message":"wrong platform"});
            console.log("sucess")
            return res.status(200).json({
              "access_token": user.generateJwt(),
              "user": user
            });
          }
          // unknown user or wrong password
          else return res.status(500).json(info);
        })(req, res);
      } else {
        return res.status(200).json({
          'user': user
        })
      }
    }

    // res.send(doc);
    else {
      if (err.code == 11000)
        res.status(422).send(['Duplicate email adrress or login.']);
      else
        return next(err);
    }

  });
}
module.exports.resetpassword = async (req, res, next) => {
  let user = await User.findById(req.body.id);
  if (!bcrypt.compareSync(req.body.password, user.password)) return res.status(400).json({ 'message': 'mot de passe incorrect' })
  user.password = req.body.newpassword;
  user.save()
    .then(user => {
      res.status(200).json(user);
    }
    )
    .catch(err => {
      res.send(err);
    })
}
module.exports.authenticate = (req, res, next) => {
  // call for passport authentication
  passport.authenticate('local', (err, user, info) => {
    console.log(user, info);
    // error from passport middleware
    if (err) return res.status(400).json(err);
    // registered user
    else if (user) {
      // if(user.role == "client" && user.etat == "en attente"){
      //   return res.status(400).json({"message":"you need to wait"});
      // }else if(user.role == "client") return res.status(400).json({"message":"wrong platform"});
      console.log("sucess")
      return res.status(200).json({
        "access_token": user.generateJwt(),
        "user": user
      });
    }
    // unknown user or wrong password
    else return res.status(500).json(info);
  })(req, res);
}

module.exports.userProfile = (req, res, next) => {
  console.log(req._id);
  User.findOne({ _id: req._id },
    (err, user) => {
      if (!user)
        return res.status(404).json({ status: false, message: 'User record not found.' });
      else
        return res.status(200).json({ status: true, user: _.pick(user, ['_id', 'login', 'etat', 'phone', 'mail', 'role', 'image']) });
    }
  );
}


//update users 
module.exports.update = async (req, res) => {
  const url = req.protocol + "://" + req.get('host');
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);
  console.log(req.body);
  if (req.file) {
    req.body.image = url + '/images/' + req.file.filename;
  }
  console.log(req.body.image);
  let user = await User.findById(req.params.id);
  console.log(user);
  if (req.body.password) {
    if (user.password === req.body.password) {
      User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true, runValidators: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { res.status(400).json({ "message": "erreur updating" }); }
      });
    } else {
      User.findByIdAndUpdate(req.params.id, { $set: req.body, password: bcrypt.hashSync(req.body.password, 10) }, { new: true, runValidators: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { res.status(400).json({ "message": "erreur updating" }); }
      });
    }

  } else {
    user.login = req.body.login;
    user.password = req.body.password;
    user.phone = req.body.phone;
    user.mail = req.body.mail;
    user.image = req.body.image;
    User.findByIdAndUpdate(req.params.id, { $set: user }, { new: true }, (err, doc) => {
      if (!err) { res.send(doc); }
      else { res.status(400).json({ "message": err }); }
    });
  }
}

module.exports.updateProfile = (req, res) => {
  if (!ObjectId.isValid(req._id))
    return res.status(400).send(`No record with given id : ${req._id}`);
  User.findByIdAndUpdate(req._id, { $set: req.body }, { new: true }, (err, doc) => {
    if (!err) { res.send(doc); }
    else { console.log('Error in User Update :' + JSON.stringify(err, undefined, 2)); }
  });
}

//delete users
module.exports.delete = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);
  let user = await User.findById(req.params.id);

}



