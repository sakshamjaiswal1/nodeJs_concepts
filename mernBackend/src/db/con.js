const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/SakEmployee", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
//   useCreateIndex: true,
}).then(()=>{
    console.log(`connection Successful`)
}).catch((e)=>{
    console.log(e)
})
