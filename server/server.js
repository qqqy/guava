const express = require("express");
const app = express();
require('dotenv').config();
const massive = require("massive");
const session = require("express-session");

const { SERVER_PORT: port, CONNECTION_STRING: string, SESSION_SECRET: secret } = process.env

// TOP-LEVEL MIDDLEWARES //

app.use(express.json());
app.use(session({
  secret: secret,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24
  }
}));

massive(string).then(
  app.listen(port, (database) => {
    app.set('db' , database)
    console.log(`${port} is our port in the storm.`)
  })
)