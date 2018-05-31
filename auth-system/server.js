const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');

const User = require('./models/user');
const _ = require('lodash');

// invoke an instance of express application.
const app = express();
app.use(cors());

// set our application port
app.set('port', 9000);

// set morgan to log info about our requests for development use.
app.use(morgan('dev'));

// initialize body-parser to parse incoming parameters requests to req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// initialize cookie-parser to allow us access the cookies stored in the browser.
app.use(cookieParser());

// initialize express-session to allow us track the logged-in user across sessions.
app.use(session({
  key: 'user_sid',
  secret: 'somerandonstuffs',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 600000,
  }
}));


// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie('user_sid');
  }
  next();
});


// middleware function to check for logged-in users
var sessionChecker = (req, res, next) => {
  if (req.session.user && req.cookies.user_sid) {
    res.redirect('/dashboard');
  } else {
    next();
  }
};


// route for Home-Page
app.get('/', sessionChecker, (req, res) => {
  res.redirect('/login');
});


// route for user signup
app.route('/signup')
  .get(sessionChecker, (req, res) => {
    res.sendFile(__dirname + '/public/signup.html');
  })
  .post((req, res) => {
    console.log(`[/signup] Creating User "${req.body.username}" created`);
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      role: _.defaultTo(req.body.role, 'user'),
      active: _.defaultTo(req.body.status, 'active'),
    }).then((userModel) => {
        console.log(`[/signup] User "${req.body.username}" created`);
        const user = userModel.dataValues;
        req.session.user = userModel.dataValues;

        jwt.sign({ user }, 'secretKey', (err, token) => {
          if (err) {
            console.log(err);
            return res.status(403);
          }
          return res.json({ token });
        });
      }).catch(error => {
        console.log(`[/signup] Creating User "${req.body.username}" error: ${error}`);
        res.status(403);
      });
  });


// route for user Login
app.route('/login')
  .get(sessionChecker, (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
  })
  .post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ where: { username, } }).then((user) => {
      if (!user) {
        res.redirect('/login');
        return res.status(400).json({ error: 'no user found' });
      } else if (!user.validPassword(password)) {
        return res.status(400).json({ error: 'invalid login' });
      } else {
        req.session.user = user.dataValues;
        return res.json(user);
      }
    });
  });


// route for user's dashboard
app.get('/dashboard', (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
    res.sendFile(__dirname + '/public/dashboard.html');
  } else {
    res.redirect('/login');
  }
});


// route for user logout
app.get('/logout', (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
    res.clearCookie('user_sid');
    res.redirect('/');
  } else {
    res.redirect('/login');
  }
});

//edit users
app.post('/users/:id/deactivate', (req, res) => {
  User.update(
    { status: 'inactive' },
    {
      where: { id: req.params.id }
    }).then(rowsUpdated => {

    res.json({
      rowsUpdated: rowsUpdated,
    });
  }).catch(error => {
    res.redirect('/signup');
  });
})

//get the users
app.get('/users', (req, res) => {
  User.findAll().then(users => {
    console.log(`[/users'] User "${users.length}" found`);
    res.json(users);
  }).catch(error => {
    res.redirect('/signup');
  });
})



// route for handling 404 requests(unavailable routes)
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
});


// start the express server
app.listen(app.get('port'), () => console.log(`App started on port ${app.get('port')}`));


//Helper methods
function verifyToken(req, res, next) {

}
