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
app.use((req, res, next) => {
  const {name , pass} = req.body
  if(!name && !pass){
    req.body.name = "David"
    req.body.pass = "password"
  }
  if(!req.session.user){
    req.session.user = true
  }
  next()
})

app.use(express.static(`server/static`)) //Just to demo static

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
app.post("/demo/login" , (req, res ) => {
  const {name , pass} = req.body
  if (name === "David" && pass === "password"){
    res.sendStatus(200)
  } else {
    res.sendStatus(401)
  }
})
app.get("/demo/check-session" , (req , res) => {
  if(req.session.user){
    return res.sendStatus(200)
  }
  res.sendStatus(404)
})