const express = require('express')
const app = express()
const port = 3000
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
const cookieParser = require('cookie-parser')

//Use query to get username
app.get('/login', function(req, res) {
    var username = req.query.username
    var opts = {
      expires : 0,
      httpOnly: true
    };
    res.cookie('name', username, opts);
    res.end();
  })

  app.use(cookieParser())

//retrieve cookie and display
app.get('/hello', function(req, res) {
  if (req.cookies.name !== "undefined"){
    res.send('Hello ' + req.cookies.name + "!")
  }
  else{
    res.clearCookie('name', { path: '/login' });
    res.send("No Cookies Set!")
  }
})