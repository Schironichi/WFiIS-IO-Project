if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express');
const bodyParser = require('body-parser');
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
    login => executeQuery(
        `SELECT u.id_user, u.status, v.password FROM db.app_user u 
        JOIN db.verification v on v.id_user = u.id_user
        WHERE v.login = $1`,
        [
            login
        ]
    ),
    id => executeQuery(
        `SELECT name, surname, email FROM db.app_user u 
        WHERE u.id_user = $1`,
        [
            id
        ]
    )
);

app.set('view-engine', 'ejs');

app.use(bodyParser.json()); // for changeUserData function
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
    multipleStatements: true
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
            client.release();
        } catch (err_1) {
            client.release();
            console.log(err_1.stack);
        }
  })
  
})

app.get("/bazaOgloszenUsera",checkNotAuthenticated, (req,res) => {
    pool
    .connect()
    .then(async client => {
        try {
            const id =req.user
            console.log("to id usera",id)
            const resp = await client
                .query('SELECT * FROM  db.Notice n join db.Notice_status ns on n.id_status=ns.id_status WHERE n.id_user=$1',[id]);
            console.log(resp.rows);
            res.status(200).send(resp.rows);
            client.release();
        } catch (err_1) {
            client.release();
            console.log(err_1.stack);
        }
  })
  
})

app.get("/details/:id", (req,res) => {
    pool
    .connect()
    .then(async client => {
        try {
            const id = req.params.id
                console.log("id to uptade", id);
            const resp = await client
                .query('SELECT * FROM  db.Notice n join db.Notice_status ns on n.id_status=ns.id_status join db.Notice_details nd on n.id_notice=nd.id_notice WHERE n.id_notice=$1',[id]);
            console.log(resp.rows);
            res.status(200).send(resp.rows);
            console.log("database notice detials");
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

function executeQuery(query, values, callback) {
    return new Promise(function (fulfill, reject) {
        pool
        .connect()
        .then(async client => {
            try {
                const resp = await client
                    .query(query, values);
                console.log('-----\tIN\t-----');
                let out = null
                if (resp.rows.length > 0) {
                    out = resp.rows
                } else {
                    console.log('No response data');
                }
                console.log("Successful db operation");
                console.log(out);
                console.log('-----\tOUT\t-----');
                client.release();
                fulfill(out);
                reject(null);
            } catch (err_1) {
                client.release();
                console.log('-----\tERROR!!!\t-----');
                console.log(err_1.message);
                console.log('-----\tERROR!?!\t-----');
                fulfill(null);
                reject(null);
            }
        });
    });
};

app.get("/changeToReservation/:id", (req,res) => {  
        pool
        .connect()
        .then(async client => {
            try {
                const id = req.params.id
                console.log("id to uptade", id);
                const resp = await client
                    .query('UPDATE db.Notice SET id_status=\'RES\' WHERE id_notice=$1 ; ', [id]);
                console.log(resp.rows);
                res.status(200).send(resp.rows);
                console.log("database updated", id);
                client.release();
            } catch (err_1) {
                client.release();
                console.log(err_1.stack);
            }
      })
      
    })



    app.get("/updateNoticeHistory/:id", (req,res) => {  
        pool
        .connect()
        .then(async client => {
            try {
                const id = req.params.id
                console.log("id to uptade", id);
                const resp = await client
                    .query('INSERT INTO db.Activity (id_notice, id_history, type, date, activity_description) VALUES ($1, 1, \'wpis\', GETDATE(), \'Rezerwacja ogloszenia\' );; ', [id]);
                console.log(resp.rows);
                res.status(200).send(resp.rows);
                console.log("database updated", id);
                client.release();
            } catch (err_1) {
                client.release();
                console.log(err_1.stack);
            }
      })
      
    })

app.get('/register', checkNotAuthenticated, (req, res) => {
    res.render('register.ejs');
});

app.post('/register', checkNotAuthenticated, async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let token = '';
        token += req.body.login;
        for (let i = 0; i < 25; i++) {
            token += characters[Math.floor(Math.random() * characters.length)];
        }
        executeQuery(
            `INSERT INTO db.app_user (name, surname, email, status) VALUES ($1, $2, $3, 'Pending') returning id_user`,
            [
                req.body.name,
                req.body.surname,
                req.body.email
            ]
        ).then(function(out) {
            if (out != null) {
                console.log(out[0].id_user);
                executeQuery(
                    `INSERT INTO db.authentication VALUES ($1, $2)`,
                    [
                        out[0].id_user,
                        token
                    ]
                );
                executeQuery(
                    `INSERT INTO db.verification VALUES ($1, $2, $3)`,
                    [
                        out[0].id_user,
                        req.body.login,
                        hashedPassword
                    ]
                );
                nodemailer.sendConfirmationEmail(req.body.name, req.body.email, token);
                res.redirect('/login');
            } else {
                res.redirect('/register');
            }
        });
    } catch {
        res.redirect('/register');
    }
});

app.get('/confirm/:authentication_string', (req, res) => {
    executeQuery(
        'SELECT id_user FROM db.authentication where authentication_string = $1',
        [
            req.params.authentication_string
        ]
    ).then(function(out) {
        if (out != null) {
            executeQuery(
                `UPDATE db.app_user SET status = 'Active' WHERE id_user = $1 RETURNING id_user`,
                [
                    out[0].id_user
                ]
            ).then(function(id) {
                if (id != null) {
                    executeQuery(
                        `DELETE FROM db.authentication WHERE id_user = $1 RETURNING id_user`,
                        [
                            id[0].id_user
                        ]
                    );
                    res.redirect('/login');
                } else {
                    console.log('No user in DB');
                    res.redirect('/register');
                }
            });
        } else {
            console.log('No auth_string in DB');
            res.redirect('/register');
        }
    });
});

app.get("/api", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({"users":["userOne", "userTwo", "userTree"] });
});

app.post("/api/userPasswordChange", async (req, res) => {
    
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let token = '';
    token += req.body.login;
    for (let i = 0; i < 25; i++) {
        token += characters[Math.floor(Math.random() * characters.length)];
    }
    try {
        executeQuery(
            `UPDATE db.authentication SET authentication_string=$1 WHERE id_user=${req.body.id}`,
            [ token ]
        );
        executeQuery(
            `UPDATE db.verification SET password=$1 WHERE id_user=${req.body.id}`,
            [ hashedPassword ]
        );
        res.status(200).send( {message: 'success'} );
    }
    catch( e ) {
        res.status(200).send( {message: 'failure', error: e} );
    }
});

app.post("/api/changeUserData", (req, res) => {

    console.log( `Data to change: ${ JSON.stringify(req.body) }`);
    let data = req.body;
    let user_id = req.body.id;
    let commit = "";
    delete data['id'];

    //user data change
    if(Object.keys(data).length !== 0 ) {
        console.log( '\n-------------------------------')
        for( let key in data) {
            if( key != 'login' )
                commit = `UPDATE db.app_user SET ${key} = '${req.body[key]}' WHERE id_user = ${user_id}`;
            else
                commit = `UPDATE db.verification SET ${key} = '${req.body[key]}' WHERE id_user = ${user_id}`;
            executeQuery(commit, []);
            console.log( commit );
        }

        //user history insert
        let log_commit = `INSERT INTO db.user_history(id_user, date, type) VALUES (${user_id}, NOW(), 'user personal data changed')`;
        executeQuery( log_commit, [] );
        console.log( log_commit );
        console.log( '-------------------------------\n')
        res.status(200).send( {message: "great success"} );
    }
    else {
        console.log("no data to change sended");
    }
});

app.get("/api/getUserData", checkNotAuthenticated, (req, res) => pool.connect().then( async client => {

    let data;

    if ( /*req.user*/ true ) {
        
        const user_id = 16;//req.user;
        db_user_data = await client.query(
        `SELECT login, name, surname, email FROM
            db.app_user AS au JOIN
            db.verification AS ve ON au.id_user = ve.id_user
                WHERE au.id_user = $1 ;`,
        [user_id]);

        db_user_data = db_user_data.rows[0];

        data = {
            id: user_id,
            login: db_user_data.login,
            firstName: db_user_data.name,
            lastName: db_user_data.surname,
            email: db_user_data.email
        }
        console.log( `data from db: ${JSON.stringify(db_user_data)}`);
        res.status(200).send(data);
    } else {
        console.log("Cannot get user data. not logged");
        res.status(200).send( {logged: false} ); 
    }
}));

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