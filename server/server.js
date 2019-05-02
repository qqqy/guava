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
}));

massive(string).then(
  app.listen(port, () => {
    console.log(`${port} is our port in the storm.`)
  })
)