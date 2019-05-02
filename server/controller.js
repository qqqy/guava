const bcrypt = require('bcryptjs');

module.exports = {
  getUsers (req, res){
    const db = req.app.get('db');
    res.sendStatus(200);
  }
  ,
  register: async (req, res) => {
    const db = req.app.get('db');
    // console.log(req.app)
    const {email, firstname, lastname , username, password } = req.body;
    const {session} = req
    let emailTaken = await db.email_check({email}).catch(err => res.status(500).send("Database Error!" , err))
    emailTaken = +emailTaken[0].countlogin

    if(emailTaken){
      return res.sendStatus(409)
    }

    hash = bcrypt.hashSync(password , 10)

    const user_id = await db.register_user({email , firstname , lastname , username , password: hash}).catch(err => res.status(500).send("Database Error on Insert: " + err))

    session.user = {
      username,
      hash,
      login_id: user_id[0].balance_id
    }

    res.sendStatus(200);
  } ,
  login: async (req, res) => {
    const db = req.app.get('db');
    const {session} = req
    const {loginUsername : username , loginPassword: password} = req.body
    const user = await db.login({username}).catch(err => res.status(500).send("Database Error on Login: " + err))
    const authenticated = bcrypt.compareSync(password , user[0].password)
    if(authenticated){
      session.user = user[0]
      res.status(200).send({authenticated , user_id: user[0].login_id})
    } else {
      res.sendStatus(401)
      throw new Error(401)
    }
  }
  ,
  async getDetails(req, res){
    const db = req.app.get('db');
    const {session} = req;
    try {
      const {login_id : id} = session.user;
      const data = await db.get_user_details({id}).catch(err => console.log(err));
      if(data[0]){
        res.status(200).send(data)
      }
    } catch (err) {
      console.log(err)
      res.sendStatus(500);
      throw new Error(500)
    }
  }
  ,
  logout(req, res){
    req.session.destroy()
    res.sendStatus(201)
  }
}