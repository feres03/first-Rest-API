const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

// Config
app.use(morgan("tiny"))
app.use(cors())

// Rest API
app.get("/", (req, res) => {
    res.json("Hello world!")
})


// app listening
app.listen(4000, () => {
    console.log('App is running on port 4000')
})