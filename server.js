const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  ("use strict");
  const nodemailer = require("nodemailer");

  // async..await is not allowed in global scope, must use a wrapper
   function main() {
    let transport = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
           user: '7840cb0e94669e',
           pass: '385b771c8ab280'
        }
    });
    const message = {
        from: 'iileon9777@gmail.com', // Sender address
        to: 'iileon9777@gmail.com',         // List of recipients
        subject: 'Design Your Model S | Tesla', // Subject line
        text: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
    };
    transport.sendMail(message, function(err, info) {
        if (err) {
          console.log(err)
        } else {
          console.log(info);
        }
    });
  }

  main().catch(console.error);

  server.use(bodyParser.json());

  server.get("*", (req, res) => {
    return handle(req, res);
  });
  server.post("/email/", () => main());

  server.listen(3000, err => {
    if (err) throw err;
    console.log("> Read on http://localhost:3000");
  });
});
