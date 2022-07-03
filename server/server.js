require("./utils/db")
const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 4000
const app = express()

app.use(cors())
app.use(express.json())
app.get('/', (req, res)=>{
    res.send("Welcome to E-Pharm")
})

app.listen(port, ()=>{
    console.log("Now listening on port:", port);
})