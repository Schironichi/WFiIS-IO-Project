if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const nodemailer = require("nodemailer");

const user = process.env.MAIL_USER;
const pass = process.env.MAIL_PASS;

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: user,
    pass: pass,
  },
});

module.exports.sendConfirmationEmail = (name, email, confirmationCode) => {
    console.log("Check");
    transport.sendMail({
      from: user,
      to: email,
      subject: "Email weryfikacyjny - ogUAszamy",
      html: `<h1>Potwierdzenie poprzez wiadomość Email</h1>
          <h2>Witaj ${name}!</h2>
          <p>Dziękujemy za rejestrację w serwisie ogUAszamy. Proszę potwierdzić swoje konto poprzez kliknięcie w poniższy link</p>
          <a href=http://localhost:5000/confirm/${confirmationCode}> Potwierdź swoje konto</a>
          </div>`,
    }).catch(err => console.log(err));
  };