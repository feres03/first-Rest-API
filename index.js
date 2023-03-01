const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = 4000;
const app = express();

// Config
require('./Database/connect')
app.use(cors())
app.use(morgan("combined"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))




// Rest API
app.get("/", (req, res) => {
    res.json("Hello world!")
})
// routes

app.use('/', require('./routes/todoroutes'))

// app listening
app.listen(port, () => {
    console.log('App is running on port 4000')
})