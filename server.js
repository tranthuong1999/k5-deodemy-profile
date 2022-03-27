const express = require('express')
const app = express()
const path = require('path');
app.use('/public', express.static( path.join(__dirname ,'/public')))


app.get('/', (req, res , next ) => {
    var pathFile = path.join(__dirname , 'home.html')
    res.sendFile(pathFile)
  })
  app.get('/home', (req, res , next ) => {
    res.json("home")
  
  })
  app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port `)
  })