const mongoose = require('mongoose')
mongoose
  .connect("mongodb://localhost:27017/SakshamJaiswal", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false,
  })
  .then(() => {
    console.log("database is connected");
  })
  .catch((err) => {
    console.log('database not connected');
  });
