if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const nodemailer = require("nodemailer");

const user = process.env.MAIL_USER;
const pass = process.env.MAIL_PASS;

let selfSignedConfig = {
	host: 't.pl',
	port: 465,
	secure: true, // użwa TLS
	auth: {
		user: user, pass: pass
	},
	tls: {
		// nie przerywa przy błędnym certyfikacie
		rejectUnauthorized: false
	}
};

const transport = nodemailer.createTransport(selfSignedConfig);

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
