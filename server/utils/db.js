const mongoose = require('mongoose')
const url = "mongodb://localhost/E-Pharm"
mongoose.connect(url).then(()=>{
    console.log("Connected to mongoose successfullly");
}).catch((err)=>{
    console.log(err.message);
})

module.exports= mongoose