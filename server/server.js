const express = require("express");
const app = express();
require('dotenv').config();
const massive = require("massive");
const session = require("express-session");
const ctrl = require("./controller");

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

massive(string).then(database => {
  app.set('db', database)
  app.listen(port, () => {
    console.log(`${port} is our port in the storm.`)
  })
}
)

// ENDPOINTS //

app.post("/auth/register", ctrl.register)
app.post("/auth/login", ctrl.login)
app.delete("/auth/logout", ctrl.logout)
app.get("/user/details", ctrl.getDetails)