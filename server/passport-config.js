const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

function initialize(passport, getUserByLogin, getUserById) {
    const authenticateUser = async (login, password, done) => {
        const user = await getUserByLogin(login);
        if (user == null) {
            return done(null, false, { message: 'Niepoprawny login' });
        } else {
            try {
                if (user[0].status === 'Pending') {
                    return done(null, false, { message: 'Nie potwierdzono konta' });
                }
                if (await bcrypt.compare(password, user[0].password)) {
                    return done(null, user[0]);
                } else {
                    return done(null, false, { message: 'Niepoprawne hasło' });
                }
            } catch (e) {
                return done(e);
            }
        }
    }

    passport.use(new LocalStrategy({ usernameField: 'login' }, authenticateUser));
    passport.serializeUser((user, done) => done(null, user.id_user));
    passport.deserializeUser(async (id, done) => {
        const user = await getUserById(id);
        if (user != null) {
            done(null, user[0]);
        } else {
            done(null, false, { message: 'Nieznany błąd' });
        }
    });
}

module.exports = initialize;