const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const Odoo = require('odoo-xmlrpc')
app.listen(port, () => console.log(`Listening on port ${port}`))
const odoo = new Odoo({
  url: `http://localhost:8069`,
  db: `tamkeenerp`,
  username: `tamkeenerp`,
  password: 'P@$$tamkeen@#$01admin'
})
app.get('/login', (req, res) => {
  odoo.connect(function(err) {
    if (err) {
      return console.log(err)
    }
    console.log('Connected to Odoo server.')
})})