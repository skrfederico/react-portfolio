var express = require('express')
var http = require('http')
var path = require('path')
var nodemailer = require('nodemailer')

var app = express()
var server = http.Server(app)
var port = 500

app.set('port', port)
app.use(express.json())
app.use(express.urlenconded({ extended: true }))
app.use(express.static(path.join(_dirname, 'page/index.html')))

//Routing
app.get('/', function (req, res) {
  response.sendFile(path.join(_dirname, 'page/index.html'))
})

app.post('/send_email', function () {
  const { from, to, subject, message } = req.body

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'skrfederico@gmail.com',
      pass: 'xqbiiiqvzrylzkvd'
    }
  })
  var mailOptions = {
    from: from,
    to: to,
    subject: subject,
    text: message
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
      res.status(400).json({ message: error.message })
    } else {
      console.log('email send' + info.response)
      res.status(200).json({ message: 'sent ok' })
    }
    // response.redirect('/')
  })
})

// initiliaze
// server.listen(port, function(){
//   console.log("Starting server on port: " + port)
// })

// https://www.youtube.com/watch?v=MwGFKr6Zdbo
