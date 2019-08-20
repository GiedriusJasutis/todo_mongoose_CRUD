const bcrypt = require('bcryptjs');
const User = require('./../models/User').User;

exports.getLogin = (req, res, next) => {
  res.render('auth', {
    signUp: false
  });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email }).then(user => {
    if (!user) {
      console.log('User was not found');
      return res.redirect('/');
    }

    bcrypt.compare(password, user.password).then(isMatching => {
      if (isMatching) {
        req.session.isLogged = true;
        req.session.user = user;
        res.redirect('/');
      }
    });
  });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
};

exports.getSignUp = (req, res, next) => {
  res.render('auth', {
    signUp: true
  });
};

exports.postSignUp = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  if (password === confirmPassword) {
    bcrypt
      .hash(password, 12)
      .then(hashedPassword => {
        return new User({
          email: email,
          password: hashedPassword
        });
      })
      .then(user => {
        return user.save();
      })
      .then(result => {
        console.log(`User with email ${email} was saved successfully`);
      })
      .catch(err => {
        console.log(err);
      });
  }

  res.redirect('/');
};
