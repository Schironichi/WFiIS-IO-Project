if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override');
const { Pool, Client } = require('pg')

const initializePassport = require('./passport-config');
const nodemailer = require('./nodemailer-config');

initializePassport(
    passport,
    login => users.find(user => user.login === login),
    id => users.find(user => user.id === id)
);

const users = [];

app.set('view-engine', 'ejs');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));

app.use(express.static('public')); 
app.use('/img', express.static('img'));

app.use( function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const pool = new Pool({
    user: 'ltkdngtt',
    host: 'hattie.db.elephantsql.com',
    database: 'ltkdngtt',
    password: 'xTmC3Rtx9MgSDJ3PSqRbnc5Ow1cEVDtg',
    port: 5432,
})

pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
  })

app.get("/baza", (req,res) => {
    pool
    .connect()
    .then(async client => {
        try {
            const resp = await client
                .query('SELECT * FROM  db.Notice n join db.Notice_status ns on n.id_status=ns.id_status');
            console.log(resp.rows);
            res.status(200).send(resp.rows);
            console.log("database data sent");
            client.release();
        } catch (err_1) {
            client.release();
            console.log(err_1.stack);
        }
  })
  
})

app.get('/', checkAuthenticated, (req, res) => {
    res.render('index.ejs', { name: req.user.name });
});

app.get('/login', checkNotAuthenticated, (req, res) => {
    res.render('login.ejs');
});

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));

app.get('/register', checkNotAuthenticated, (req, res) => {
    res.render('register.ejs');
});

app.post('/register', checkNotAuthenticated, async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let token = '';
        for (let i = 0; i < 25; i++) {
            token += characters[Math.floor(Math.random() * characters.length )];
        }
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            status: 'Pending',
            login: req.body.login,
            password: hashedPassword,
            authentication_string: token
        });
        
        nodemailer.sendConfirmationEmail(req.body.name, req.body.email, token)
        
        res.redirect('/login');
    } catch {
        res.redirect('/register');
    }
    console.log(users);
});

app.get('/confirm/:authentication_string', (req, res) => {
    const user = users.find(user => user.authentication_string === req.params.authentication_string);
        if (user == null) {
            res.redirect('/register');
        } else {
            user.status = 'Active';
            res.redirect('/login');
            console.log(users);
        }
});

app.get("/api", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({"users":["userOne", "userTwo", "userTree"] });
});

app.get("/api/getUserData", (req, res) => {
    
    try {
        let fname = "Bilbo";
        let lname = "Baggins";
        let data = {
                firstName: fname,
                lastName: lname
        };
        console.log("userData sended");
        res.status(200).send(data);
    } catch {
        console.log("Sth gone wrong");
        res.end();
    }
});

app.delete('/logout', (req, res) => {
    req.logOut();
    res.redirect('/login');
})

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/login');
    }
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        res.redirect('/');
    } else {
        return next();
    }
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    console.log(`Use http://localhost:${PORT}`);
});