const path = require('path')
const leds = require('./leds')()
const express = require('express')
const app = express()
const port = 3000



app.use(express.static('public'))
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.json())

// Turn off leds
app.get('/api/off', (req, res) => {
  leds.off()
  res.json({})
})

// Get the weaher
app.get('/api/weather', (req, res) => res.send('Hello World!'))

// Set leds to ...
app.post('/api/set', (req, res) => {
  // FIXME: validate  
  leds.set(req.body.leds)
  res.json({})
})

// Animate leds
app.post('/api/animate', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
