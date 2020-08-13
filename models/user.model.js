const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
  login: {
      type: String,
      required: 'login can\'t be empty',
      unique: true,
      match: [/^[a-zA-Z ]+[1-9]*.*$/, 'invalid login']
  },
  password: {
      type: String,
      required: 'password can\'t be empty',
      minlength : [8,'Password must be atleast 8 character long']
  },
  role:{
    type : String,
    enum :["admin","client","expert"]
  },
  phone: {
      type: String,
      required: 'phone can\'t be empty',
      match: [/^[0-9]{8}$/, 'invalid phone number']
  },
  mail: {
      type: String,
      required: 'mail can\'t be empty',
      unique: true,
      match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Please fill a valid email address']
  },
  image: {type: String},
  etat: {
      type: String
  },
});

// Custom validation for email
userSchema.path('mail').validate((val) => {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(val);
}, 'Invalid e-mail.');


// Events
userSchema.pre('save', function (next) {
  bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(this.password, salt, (err, hash) => {
          this.password = hash;
          this.saltSecret = salt;
          next();
      });
  });
});

// Methods
userSchema.methods.verifyPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJwt = function () {
  return jwt.sign({ _id: this._id,role:this.role,email:this.mail},
      process.env.JWT_SECRET,
  {
      expiresIn: process.env.JWT_EXP
  });
}


mongoose.model('User', userSchema);
