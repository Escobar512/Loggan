const mongoose = require("mongoose");

const dbConnect = () => {
  const DB_URI = `mongodb+srv://edgar512:Defias512@logan.drun3cf.mongodb.net/?retryWrites=true&w=majority`

  mongoose.connect(
      DB_URI).then(
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          }, (err, res) => {
            if(!err){
                console.log("*** CONEXION CORRECTA ***")
            }
            else{
                console.log("*** ERROR DE CONEXION ***")
                console.log(err)
            }
      }
      );
};

module.exports = dbConnect;